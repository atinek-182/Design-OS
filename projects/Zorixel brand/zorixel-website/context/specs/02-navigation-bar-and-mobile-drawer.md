# SPEC-02: Floating Glass Navigation Bar & Mobile Drawer

## 1. Feature Goal & Intent
Build the responsive sticky glassmorphism Navbar featuring the `Nuqun` SVG logo mark, navigation routes (Home, Components, Resources, Store, About, Insights), Clerk Auth button, and full-screen mobile menu drawer.

## 2. Technical Stack & Dependencies
- **Component:** `src/components/navigation/Navbar.tsx` & `MobileDrawer.tsx`
- **Styling:** Floating glass backdrop blur (`backdrop-filter: blur(12px)`), OKLCH glass borders
- **Auth Trigger:** Clerk `<SignInButton>` / `<UserButton>`

## 3. Viewport Choreography & Verification
- Desktop (1920x1080) & Laptop (1440x900): Full horizontal nav links + Auth button.
- Mobile Portrait (390x844): Animated hamburger toggle -> slide-over full-screen nav drawer.
- Playwright 5-viewport screenshot sweep.
