# Royal Palace Banquets & Marquee, Lahore — Bilingual & Expanded Experience

An enhanced, high-performance wedding and multi-event venue web application featuring full English and Urdu (Jameel Noori / Noto Nastaliq) bilingual support, regal Cinzel + Lora typography, interactive 360-degree virtual tour panorama viewer, count-up animations starting from zero, zero-start guest pricing, and dedicated corporate, family, and educational event modules.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Confirmed Choices from Phase 1 Clarifications:**
> - **Primary Typography Pairing**: **Cinzel** (Headings, regal & historic) with **Lora** (Body, refined & elegant) for English; **Jameel Noori / Noto Nastaliq Urdu** for the authentic Urdu version.
> - **360-Degree Virtual Tour Experience**: Interactive 360 panorama room viewer with click-and-drag navigation, zoom controls, and seamless switching between ballroom, glass marquee, and Mughal lawn.
> - **Default Display Language**: English with an instant, persistent one-click Urdu switcher in the navbar (`English | اردو`) supporting full bidirectional RTL layout.
> - **Zero-Based Counting & Animations**: All statistical counters animate from 0, and booking inquiry calculators begin from 0 guests up to 1,500+.

---

## 1. Overview & Core Concept

### What It Delivers
The enhanced Royal Palace Banquets & Marquee application expands beyond traditional wedding ceremonies into a complete, multi-purpose banquet and event destination in Lahore, catering to:
1. **Pakistani & Overseas Wedding Celebrations**: Barat, Walima, Mehndi, and Nikah.
2. **Family & Social Events**: Themed Birthday Parties, Romantic Anniversaries, Ring Engagements, Aqeeqa / Baby Showers, and Segregated Milad / Dars.
3. **Corporate & Business Conventions**: Conferences, Seminars with SMD screens, Annual Dinners, Award Ceremonies, and Product Launches.
4. **Educational Celebrations**: Welcome / Farewell Student Galas and Convocations.
5. **Special Non-Wedding Packages**: Affordable Hi-Tea Menus, Half-Hall Partition Bookings (50–100 guests), and Hourly Corporate Room Rentals.

---

## 2. User Experience & Visual Design

### Dual Language System (English & اردو)
- **Urdu Mode**:
  - Full Right-to-Left (`dir="rtl"`) layout orientation.
  - Native Nastaliq typography utilizing `Noto Nastaliq Urdu` / `Jameel Noori Nastaliq` with balanced line-heights and authentic Pakistani vocabulary (*بارات*, *ولیمہ*, *مہندی*, *نکاح*, *سالگرہ*, *محفلِ میلاد*, *کارپوریٹ کانفرنسز*).
  - Navigation, packages, inquiry form, WhatsApp prefill, and venue specifications dynamically translate without page reload.
- **English Mode**:
  - Left-to-Right (`dir="ltr"`) layout.
  - Heading font: `Cinzel` serif for palatial majesty.
  - Body font: `Lora` serif for editorial readability.

### Luxury Animations & Interaction System
- **Hero Banner Transition**: Smooth cross-fade and zoom between ballroom, glass marquee, and lawn nightscapes.
- **Count-Up Numbers (0 to Target)**:
  - 0 $\to$ 1,800+ Events Hosted
  - 0 $\to$ 450,000+ Guests Served
  - 0 $\to$ 100% Dual CAT Generator Power
  - 0 $\to$ 450+ Valet Parking Capacity
- **Interactive 360-Degree Panorama Room Viewer**:
  - Mouse/touch drag to rotate 360 degrees around The Grand Kohinoor Ballroom and The Imperial Glass Marquee.
  - Interactive hotspots indicating crystal chandeliers, bridal stage, and sound booth.
- **Hover Micro-Interactions**:
  - *Image Zoom*: Cards gently scale imagery on hover (`group-hover:scale-105 duration-500`).
  - *Card Lift*: Interactive service and package cards lift with subtle golden shadows (`hover:-translate-y-2 hover:shadow-2xl`).
  - *Gold Glow Buttons*: CTAs pulse with soft gold border luminescence upon hover.
  - *Overlay Reveal*: Contextual event labels smoothly reveal over media on mouseover.

---

## 3. Key Product Decisions & Trade-Offs

### Decision 1: Bilingual Translation Engine
- **Chosen Approach**: Built-in, high-speed dictionary translation engine (`src/lib/translations.ts`) that manages comprehensive Urdu and English strings with `useLanguage` React context.
- **Why**: Zero external API dependencies, instantaneous sub-millisecond language switching, and perfect Urdu grammatical nuances without clumsy machine-translation errors.

### Decision 2: 360-Degree Panorama Viewer Implementation
- **Chosen Approach**: Canvas-based interactive spherical panorama renderer with touch/drag inertia, field-of-view zoom, and multi-hall presets.
- **Why**: Provides an authentic 360 walkthrough experience inside the browser without requiring external heavy WebGL libraries or broken third-party iframe embed links.

### Decision 3: Zero-Start Guest Count
- **Chosen Approach**: Guest count inputs and sliders start at 0, dynamically calculating cost from Rs. 0 up to full banquet totals, clearly indicating minimum booking thresholds when applicable.

---

## 4. Technical Architecture & Component Structure

```
┌────────────────────────────────────────────────────────────────────────┐
│                        LANGUAGE CONTEXT PROVIDER                       │
│                   (English ◄─────────► اردو [RTL])                     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        PUBLIC CLIENT VIEWS                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌───────────────┐  │
│  │ Hero Banner  │ │ 360 Virtual  │ │ Multi-Event  │ │ Non-Wedding   │  │
│  │ (Cinzel/Lora)│ │ Tour Viewer  │ │ Services Hub │ │ Hi-Tea Pkgs   │  │
│  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └───────┬───────┘  │
│         │                │                │                 │          │
│         └────────────────┼────────────────┼─────────────────┘          │
│                          ▼                                             │
│            ┌─────────────────────────────┐                             │
│            │ Multi-Step Inquiry Modal    │                             │
│            │ (Starts at 0 Guests + RTL)  │                             │
│            └─────────────┬───────────────┘                             │
└──────────────────────────┼─────────────────────────────────────────────┘
                           ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   PERSISTENT STORAGE & STORAGE LAYER                   │
│   - Inquiries (Wedding, Social, Corporate, Educational)                │
│   - WhatsApp Bilingual Deep Links                                      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Verification Checklist

- [ ] Language toggle instantly switches entire page content between English and Urdu with correct RTL text alignment.
- [ ] Urdu displays in elegant Nastaliq font; English renders in Cinzel + Lora.
- [ ] Statistical counters start from 0 and animate smoothly up to target values.
- [ ] 360-degree virtual tour allows clicking and dragging to pan around halls.
- [ ] All new event categories (Birthdays, Anniversaries, Aqeeqa, Milad, Conferences, Annual Dinners, Farewell Parties, Hi-Tea, Half-Hall, Hourly) are clearly detailed with custom inclusions.
- [ ] Hover effects (image zoom, card lift, gold glow, overlay text) are active on all cards.
- [ ] Build compiles with 0 errors and zero lint warnings.
