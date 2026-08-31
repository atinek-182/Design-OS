---
title: Detroit Paris — HLS.js 4K Video Streaming & Card Hover Parallax
domain: reference
summary: HLS.js 1.6.11 adaptive video stream integration, data-video-on-hover triggers, and cursor parallax motion physics.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Luxury-Dark-Stage.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Detroit Paris — HLS.js 4K Video Streaming & Card Hover Parallax
- HLS.js Adaptive 4K Streaming Video Player Setup
- Dynamic Hover Video Trigger & Parallax Physics
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/07-detroit-paris-hls-video-stream-and-parallax.md
- When reading context for Detroit Paris HLS Video Parallax
tags:
- reference
- awwwards
- detroit-paris
- hls-js
- video-streaming
- parallax
updated: '2026-08-08'
---

# Detroit Paris — HLS.js 4K Video Streaming & Card Hover Parallax

Detroit Paris incorporates **HLS.js 1.6.11** for adaptive 4K video stream playback, starting video streams on card hover (`data-video-on-hover`) while Lenis manages smooth inertia scroll.

---

## HLS.js Adaptive 4K Streaming Video Player Setup

```javascript
// Detroit Paris Adaptive HLS.js Video Stream Player
import Hls from 'hls.js';

function initHlsVideo(videoElement, streamUrl) {
  if (Hls.isSupported()) {
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 90
    });
    hls.loadSource(streamUrl);
    hls.attachMedia(videoElement);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoElement.muted = true;
    });
  } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
    videoElement.src = streamUrl;
  }
}

// Hover Video Playback Trigger
document.querySelectorAll('[data-video-on-hover]').forEach((card) => {
  const video = card.querySelector('video');
  const src = card.dataset.videoSrc;
  
  card.addEventListener('mouseenter', () => {
    if (src && !video.src) {
      initHlsVideo(video, src);
    }
    video.play();
  });
  
  card.addEventListener('mouseleave', () => {
    video.pause();
  });
});
```

---

## Dynamic Hover Video Trigger & Parallax Physics

- **Parallax Formula**: `var(--parallax-x)` CSS translation updates dynamically relative to cursor movement across masonry cards.
- **Scrollbar Suppression**: Hidden scrollbar layout (`body::-webkit-scrollbar { display: none; }`) maintains a pristine luxury video presentation.
