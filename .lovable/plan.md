

# Experience Center — Dedicated Page Rebuild

## Overview
Replace the current placeholder Experience Center page with a rich, vertically scrolling showcase of all demo zones. The page blends seamlessly with the site's dark luxury aesthetic while giving each zone its own identity.

## Page Structure

### 1. Hero Section
- Full-screen cinematic hero: "Hear it. Feel it. Believe it."
- Subline: "10 zones. One destination. The most immersive residential technology experience in India."
- CTA: "Explore Zones" (scrolls to zone nav) + "Book a Private Session"

### 2. Sticky Zone Navigator
- Horizontal scrollable pill bar that sticks below the navbar on scroll
- Lists all zone names as clickable anchors
- Active zone highlights as user scrolls (IntersectionObserver)
- Visual divider between Residential zones (first 7) and Enterprise zones (last 4)
- Mobile: horizontally scrollable, compact

### 3. Zone Sections (Vertical Scroll — 14 zones)

Each zone is a full-width section with consistent structure:
- **Colored accent line** at top (using category color system)
- **Zone number** (01–14) in muted display text
- **Zone name** (serif heading) + **"Powered by [Brand]"** subtle tag
- **Editorial description** — experience-first storytelling copy
- **Expandable "See the System" panel** — reveals full equipment list, room size, and technical details
- Framer Motion whileInView stagger animations

#### Residential Tier Zones:

| # | Zone Name | Color | Powered By | Key Detail |
|---|-----------|-------|------------|------------|
| 01 | Personal Stereo & DJ Studio | music (pink) | PMC, Lyngdorf, Pioneer | From 80sqft. Stereo + wireless DJ mixing |
| 02 | Audiophile Living Room | cinema (indigo) | PMC CI90, McIntosh MHT300, TCL | No projector, no frills. Movies + music |
| 03 | Family Home Theatre | cinema (indigo) | Artcoustic / Wharfedale M, Arcam, BenQ/SIM2 | 18x13, two system options |
| 04 | Casual Surround Setup | social (amber) | Wharfedale Aura, Arcam | Tower + center + surround living room |
| 05 | Value Atmos System | social (amber) | Wharfedale Diamond Inwall | Best value 5.1.2 Atmos |
| 06 | Heritage Stereo Collection | music (pink) | Wharfedale Linton/Elysian, Luxman, Audiolab, B&W Formation Duo | Multiple stereo setups |
| 07 | Casual & Architectural Audio | outdoor (cyan) | Cornered Audio, B&W AM1, Lithe, BEC, Sonos, Rotel | Ceiling, in-wall, casual |
| 08 | Soundbar & Active Systems | performance (orange) | B&W Panorama, Sonos Arc Ultra, Devialet Phantom 7.7 Dante | Soundbars to ultimate active |

#### Enterprise Tier Zones (subtle "Enterprise" badge):

| # | Zone Name | Color | Powered By | Key Detail |
|---|-----------|-------|------------|------------|
| 09 | Digital TV Studio | connectivity (blue) | Multi-camera, live production | Podcasts, e-sports, streaming |
| 10 | Ultimate HiFi Reference | music (pink) | PMC Prophecy i9, Classé Delta Pre + Monoblocks | Living-room-feel reference |
| 11 | Command & Control Center | security (slate) | QuantIQ, MissionDesk, Cisco | NOC, SOC, AI surveillance, edge analytics |
| 12 | The Immersive Room | cinema (indigo) | Meyer Sound, Trinnov, Lumagen, SIM2 | 40 speakers, 8 subs, 30x20ft, active acoustics |

### 4. Hidden in Plain Sight — Ambient Tech Section
A horizontal scrolling showcase strip after the zones:
- **Invisible Speakers** — plaster and paint over them
- **Rolling LED Screen** — rolls up like a curtain
- **Mirror TV** — display hidden behind a mirror
- **Projection Mapping** — surfaces become screens
- **McIntosh RS150/RS250** — HiFi all-in-one speakers
- **Crestron Control Gallery** — touch panels, voice
- **Collaboration Tech** — Neat, Cisco, Logitech, Wyrestorm, Shure, Biamp
- **Interactive Digital Signage**

Each as a compact card with icon, name, one-line description.

### 5. Visit / Book Section
- Reuse existing visit details (location, hours, contact)
- Prominent "Book a Private Session" CTA
- "Every visit is curated. Bring your architect, your family."

## Technical Approach

### Files to create/edit:
1. **`src/pages/ExperienceCenter.tsx`** — Complete rewrite with all sections
2. **`src/components/experience/ZoneCard.tsx`** — Reusable zone card component with expand/collapse
3. **`src/components/experience/ZoneNav.tsx`** — Sticky zone navigator with scroll-spy
4. **`src/components/experience/AmbientTech.tsx`** — Hidden tech horizontal strip

### Implementation details:
- IntersectionObserver hook for scroll-spy active zone tracking
- Each zone gets an `id` attribute for anchor navigation
- AnimatePresence for expand/collapse on "See the System"
- Zone data stored as a typed array constant (not in DB yet)
- Enterprise zones get a subtle badge + slightly elevated border styling
- Responsive: single column on mobile, zone nav becomes horizontal scroll
- No heavy animations — learned from the performance fix

