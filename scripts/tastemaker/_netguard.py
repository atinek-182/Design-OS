"""Network egress guard, shared by every fetching script in Antigravity Design OS.

Security invariants:
1. Scheme allowlist: HTTPS only. Refuse file://, ftp://, gopher://, data:, etc.
2. Anti-SSRF Protection: Resolve hostname and block private, loopback, link-local,
   and cloud metadata IP ranges (RFC 1918, RFC 3927, RFC 4193, 169.254.169.254, 127.0.0.0/8, ::1).
3. Banned Domains: Block explicit phishing / untrusted domains (e.g. logoyoyo.com).
4. Verified Hosts & Public CDNs: Allow trusted API hosts and public internet image CDNs
   for high-res CC0 downloads.
5. Guarded Redirects: Re-verify scheme and SSRF constraints on every HTTP 30x redirect.
"""

from __future__ import annotations

import ipaddress
import socket
import sys
import urllib.error
import urllib.parse
import urllib.request

# Ensure UTF-8 console output on Windows
if sys.platform == "win32" and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# Documented API hosts allowed for programmatic network egress
ALLOWED_HOSTS = {
    "api.iconify.design": "icons (Iconify public API, keyless, attribution-free)",
    "api.openverse.org": "photography search (Openverse, keyless, CC0/PDM filtered)",
    "pixabay.com": "optional higher-curation photography (needs PIXABAY_API_KEY)",
    "cdn.jsdelivr.net": "pinned JS library delivery (Motion)",
    "cdnjs.cloudflare.com": "pinned JS library delivery (GSAP + ScrollTrigger)",
}

# Permanently banned domains
BANNED_DOMAINS = {
    "logoyoyo.com",
    "evil.example",
    "evil-pixabay.com",
}

USER_AGENT = "AntigravityDesignOS/1.0 (+https://github.com/antigravity-ide/design-os)"


class BlockedURLError(ValueError):
    """Raised when a URL fails the scheme, SSRF, or host validation."""


def _is_private_or_local_ip(ip_str: str) -> bool:
    """Check if an IP address belongs to private, loopback, multicast, or reserved ranges."""
    try:
        ip = ipaddress.ip_address(ip_str)
        return (
            ip.is_private
            or ip.is_loopback
            or ip.is_link_local
            or ip.is_multicast
            or ip.is_reserved
            or ip.is_unspecified
        )
    except ValueError:
        return True


def _host_is_banned(host: str) -> bool:
    """Check if host is in banned list or ends with a banned domain."""
    host = (host or "").lower().split(":")[0]
    for banned in BANNED_DOMAINS:
        if host == banned or host.endswith("." + banned):
            return True
    return False


def _host_allowed(host: str) -> bool:
    """Check if host is in allowed hosts or is a verified public CDN."""
    host = (host or "").lower().split(":")[0]
    if host in ALLOWED_HOSTS:
        return True
    if any(host.endswith("." + allowed) for allowed in ALLOWED_HOSTS):
        return True
    return False


def assert_url_allowed(url: str, allow_external_cdns: bool = False) -> str:
    """Verify that a URL is HTTPS and does not resolve to a private or internal network address."""
    parts = urllib.parse.urlparse(url)
    
    if parts.scheme != "https":
        raise BlockedURLError(
            f"Refusing non-HTTPS URL (scheme '{parts.scheme}'): {url[:120]}"
        )
    
    hostname = (parts.hostname or "").lower()
    if not hostname:
        raise BlockedURLError(f"Missing hostname in URL: {url[:120]}")
    
    # Check banned domains
    if _host_is_banned(hostname):
        raise BlockedURLError(f"Banned domain blocked: {hostname}")
    
    # Check known hosts vs external CDNs
    if not allow_external_cdns and not _host_allowed(hostname):
        raise BlockedURLError(
            f"Refusing URL outside the allowlist (host '{hostname}'): {url[:120]}\n"
            f"Allowed hosts: {', '.join(sorted(ALLOWED_HOSTS))}"
        )
    
    # Check loopback hostnames
    if hostname in ("localhost", "127.0.0.1", "::1", "0.0.0.0", "instance-data"):
        raise BlockedURLError(f"SSRF blocked: Refusing loopback/localhost host '{hostname}'")
    
    # Resolve IP address to prevent DNS rebinding and SSRF into cloud metadata or internal intranets
    try:
        addr_info = socket.getaddrinfo(hostname, None, socket.AF_UNSPEC, socket.SOCK_STREAM)
        for _, _, _, _, sockaddr in addr_info:
            ip_str = sockaddr[0]
            if _is_private_or_local_ip(ip_str):
                raise BlockedURLError(
                    f"SSRF blocked: Host '{hostname}' resolved to private/internal IP '{ip_str}'"
                )
    except socket.gaierror as e:
        raise BlockedURLError(f"Failed to resolve host '{hostname}': {e}")
    
    return url


class _GuardedRedirectHandler(urllib.request.HTTPRedirectHandler):
    """Re-run the security verification on every redirect target."""

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        assert_url_allowed(newurl, allow_external_cdns=True)
        return super().redirect_request(req, fp, code, msg, headers, newurl)


_opener = urllib.request.build_opener(_GuardedRedirectHandler())


def urlopen_checked(url: str, timeout: int = 30, allow_external_cdns: bool = True):
    """urlopen with strict HTTPS enforcement, SSRF protection, and guarded redirects."""
    assert_url_allowed(url, allow_external_cdns=allow_external_cdns)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    return _opener.open(req, timeout=timeout)
