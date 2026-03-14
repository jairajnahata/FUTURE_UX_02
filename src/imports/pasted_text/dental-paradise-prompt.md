Here's the complete, ready-to-copy prompt:

---

## 🦷 Complete Figma AI Prompt — The Dental Paradise

---

> Design a complete mobile app UI for **"The Dental Paradise"** — a professional dental clinic appointment booking app. Design all screens for **iPhone 14 frame size (390×844px)**. Apply Auto Layout throughout. Use components and variants for all reusable elements.
>
> ---
>
> ## 🎨 DESIGN SYSTEM
>
> **Color Palette:**
> | Role | Name | Hex |
> |---|---|---|
> | Primary Brand | Sky Blue | `#4A9FD4` |
> | App Background | Pearl White | `#F8FBFF` |
> | Headings / Text | Deep Navy | `#1B3A5C` |
> | Card / Input Fill | Soft Aqua | `#E3F4FB` |
> | CTA / Action Button | Warm Amber | `#F5A623` |
> | Success / Health | Mint Green | `#5CC8A8` |
> | Secondary Fill | Soft Lavender | `#EEF0FB` |
> | Body Text | Slate Gray | `#7A94A8` |
> | Unavailable / Disabled | Light Gray | `#E0E0E0` |
> | Error | Soft Red | `#F07070` |
>
> **Typography:**
> - Headings / Display: *Lora* or *Libre Baskerville* (serif — conveys medical expertise and trust)
> - Body / UI Labels / Buttons: *DM Sans* or *Plus Jakarta Sans* (clean, modern, highly legible)
> - Font Sizes: H1 = 26px Bold, H2 = 20px SemiBold, H3 = 16px SemiBold, Body = 14px Regular, Caption = 12px Regular, Button = 15px SemiBold
>
> **Component Rules:**
> - All CTA buttons: pill shape, border-radius 50px, height 52px, full width
> - All cards: border-radius 16px, white background, box-shadow 0px 4px 20px rgba(27, 58, 92, 0.08)
> - Input fields: border-radius 12px, soft aqua fill `#E3F4FB`, sky blue border on focus
> - Icons: Rounded line-style (Feather or Phosphor style), 24px standard size
> - Spacing: 8pt base grid, 20px horizontal padding on all screens
> - Bottom Nav Bar: 64px height, white background, top border 1px `#E3F4FB`, 4 icons — Home, Appointments, Doctors, Profile. Active icon: sky blue `#4A9FD4` filled. Inactive: slate gray `#7A94A8` outline.
> - Status Bar: Default iOS light status bar at top of every screen
>
> ---
>
> ## 📱 SCREEN 1 — Onboarding / Splash Screen
>
> **Layout:** Centered vertical layout on pearl white `#F8FBFF` background with a very soft radial gradient bloom of soft aqua `#E3F4FB` radiating from the center.
>
> **Top area (centered, upper 40% of screen):**
> - A circular badge (80×80px) filled with sky blue `#4A9FD4` with a white minimalist tooth icon centered inside it. Below the badge, add a soft sky blue drop shadow for depth.
> - App name: **"The Dental Paradise"** in Lora Bold, 26px, deep navy `#1B3A5C`, centered, with 12px spacing below the logo badge.
> - Tagline: *"Your Smile, Our Priority"* in DM Sans Regular, 14px, slate gray `#7A94A8`, centered, 8px below the app name.
>
> **Middle area (illustration zone):**
> - A soft, minimal flat illustration of a happy cartoon tooth character with a smile, holding a toothbrush. Style: rounded, friendly, clean lines, sky blue and mint green colors only. Place on a soft lavender `#EEF0FB` oval background shape behind the illustration.
>
> **Bottom area (pinned to bottom, 40px padding from safe area):**
> - **"Get Started"** full-width pill button, warm amber `#F5A623` background, white DM Sans SemiBold 15px text, 52px height.
> - 16px gap below button: **"Already have an account? Login"** in DM Sans 13px, slate gray, with "Login" word in sky blue `#4A9FD4` and underlined.
> - 24px above the button: three horizontal dot indicators (onboarding pagination) — active dot in sky blue `#4A9FD4` (24px wide, 8px tall, pill), inactive dots in light gray `#E0E0E0` (8×8px circle).
>
> ---
>
> ## 📱 SCREEN 2 — Login Screen
>
> **Background:** Pearl white `#F8FBFF`.
>
> **Top section (top 25% of screen):**
> - Sky blue circular logo badge (48×48px) with white tooth icon, centered, 56px from top of content area.
> - App name **"The Dental Paradise"** in Lora SemiBold, 16px, deep navy, centered, 8px below badge.
>
> **Form section:**
> - Heading: **"Welcome Back 👋"** in Lora Bold, 26px, deep navy `#1B3A5C`, left-aligned, 32px below logo.
> - Subtext: *"Book your dental appointment in minutes."* in DM Sans Regular, 14px, slate gray `#7A94A8`, left-aligned, 6px below heading.
> - 24px gap, then:
> - **Email Address** label in DM Sans SemiBold 13px deep navy above field. Input field: 56px height, soft aqua fill `#E3F4FB`, border-radius 12px, 1px border `#E0E0E0`, sky blue `#4A9FD4` 2px border on focus state. Inside field: small mail icon left side in slate gray, placeholder text *"Enter your email"* in slate gray italic.
> - 16px gap, then:
> - **Password** label same style. Input field same style with lock icon left side and eye toggle icon on right side in slate gray. Placeholder *"Enter your password"*.
> - 12px gap, then: **"Forgot Password?"** right-aligned, DM Sans 13px, warm amber `#F5A623`.
> - 24px gap, then: **"Login"** full-width pill button, sky blue `#4A9FD4` background, white text, 52px height.
> - 24px gap, then: horizontal divider line — left line, centered text *"or continue with"* in slate gray 12px DM Sans, right line. Lines in `#E0E0E0`.
> - 16px gap, then: two side-by-side buttons (equal width, 12px gap between): Google button (white background, 1px `#E0E0E0` border, 12px radius, Google "G" color icon + "Google" text in deep navy DM Sans 14px) and Apple button (same style, black apple icon + "Apple" text).
> - 24px gap, then: centered text *"Don't have an account?"* slate gray + **"Sign Up"** in sky blue, DM Sans 14px.
>
> ---
>
> ## 📱 SCREEN 3 — Home Dashboard Screen
>
> **Background:** Pearl white `#F8FBFF`.
>
> **Top Bar (not a nav bar — this is the greeting header):**
> - Left: *"Good Morning 😊"* in DM Sans Regular 13px slate gray. Below it: **"Rahul Sharma"** in Lora Bold 22px deep navy.
> - Right: circular avatar (40×40px) with a soft blue gradient background and white initials "RS" in DM Sans SemiBold 15px. Add a small red notification dot (8px) on top-right of avatar.
>
> **Appointment Banner Card (full width, 16px horizontal margin):**
> - Sky blue gradient background (`#4A9FD4` to `#2D7DB5`), border-radius 20px, padding 20px.
> - Top-left label: *"Upcoming Appointment"* in DM Sans 12px white with 60% opacity.
> - Below: **"Dr. Priya Sharma"** in DM Sans Bold 18px white.
> - Below: *"Orthodontist · March 20, 10:30 AM"* in DM Sans 13px white 80% opacity. Small calendar icon before the text.
> - Bottom-right: small pill button **"View Details"** — white background, sky blue text, DM Sans SemiBold 12px, border-radius 20px, padding 8px 16px.
> - Left side decoration: large faint white tooth outline shape as a watermark behind the text content.
>
> **Search Bar (below banner, 16px margin):**
> - Full-width search field, soft aqua fill `#E3F4FB`, border-radius 30px, 48px height. Left: search icon in slate gray. Placeholder: *"Search services, doctors..."* slate gray italic DM Sans 14px.
>
> **Our Services Section:**
> - Section heading **"Our Services"** in Lora SemiBold 18px deep navy, left-aligned. Right: **"See All"** in sky blue DM Sans 13px.
> - Horizontal scroll row of 6 service icon cards. Each card: white background, border-radius 16px, soft shadow, 72×88px. Inside: sky blue icon (24px) centered at top, label below in DM Sans 12px deep navy. Services: 🦷 Cleaning, ✨ Whitening, 🔩 Braces, 🔬 Root Canal, 🦴 Implants, 📷 X-Ray.
>
> **Our Dentists Section:**
> - Section heading **"Our Dentists"** in Lora SemiBold 18px deep navy. Right: **"See All"** in sky blue.
> - Horizontal scroll row of 3 doctor cards. Each card: white background, border-radius 16px, soft shadow, width ~150px, padding 16px. Content top to bottom: circular doctor photo 56×56px (placeholder: soft gradient avatar), doctor name in DM Sans SemiBold 14px deep navy, specialty in DM Sans 12px slate gray, row with ⭐ amber star + rating "4.8" in DM Sans 12px deep navy, mint green badge *"Available"* (DM Sans 11px, mint fill `#D4F5EC`, mint text `#2A9D7A`, border-radius 20px).
>
> **Bottom Navigation Bar** (as per global component rules, 4 icons: Home active, Appointments, Doctors, Profile).
>
> ---
>
> ## 📱 SCREEN 4 — Specialist Selection Screen
>
> **Background:** Pearl white `#F8FBFF`.
>
> **Top Navigation:**
> - Left: back arrow icon in deep navy. Center: **"Choose a Dentist"** in Lora SemiBold 18px deep navy. Right: filter/sort icon in slate gray.
> - Below: *"Select a specialist for your visit"* in DM Sans 13px slate gray, left-aligned, 20px horizontal padding.
>
> **Filter Chips Row (horizontal scroll, 20px left padding start):**
> - Chips: All · General · Orthodontist · Cosmetic · Endodontist · Pediatric.
> - Active chip (e.g., "All"): sky blue `#4A9FD4` background, white DM Sans SemiBold 13px text, border-radius 20px, padding 8px 18px.
> - Inactive chips: soft aqua `#E3F4FB` background, deep navy DM Sans 13px text, same size.
>
> **Dentist Cards List (vertical scroll, 20px horizontal margin, 12px gap between cards):**
>
> Show 3 detailed dentist cards. Each card: white background, border-radius 16px, soft shadow, padding 16px, horizontal layout.
>
> **Card structure (left to right):**
> - Circular doctor photo placeholder (56×56px) — use soft gradient avatar (e.g., blue-to-purple gradient with white initial letter).
> - 12px gap, then vertical text stack:
>   - Doctor name: DM Sans Bold 15px deep navy.
>   - Specialty: DM Sans 13px slate gray.
>   - Row: ⭐ amber `#F5A623` star icon + rating text "4.8" in DM Sans 13px deep navy + separator dot + "120 reviews" in slate gray 12px.
>   - Mint green availability badge: *"Available Today"* — `#D4F5EC` background, `#2A9D7A` text, DM Sans 11px SemiBold, border-radius 20px, padding 4px 10px.
> - Far right: **"Book"** pill button — sky blue `#4A9FD4` background, white DM Sans SemiBold 13px, border-radius 20px, padding 8px 16px, vertically centered in card.
>
> **Three doctors to show:**
> 1. Dr. Priya Sharma · Orthodontist · ⭐ 4.9 · 214 reviews · Available Today
> 2. Dr. Arjun Mehta · Cosmetic Dentist · ⭐ 4.7 · 98 reviews · Available Tomorrow
> 3. Dr. Sneha Rao · Endodontist · ⭐ 4.8 · 156 reviews · Available Today
>
> **Bottom Navigation Bar** (Appointments tab active).
>
> ---
>
> ## 📱 SCREEN 5 — Date & Time Slot Booking Screen
>
> **Background:** Pearl white `#F8FBFF`.
>
> **Top Navigation:**
> - Left: back arrow in deep navy. Center: **"Pick a Date & Time"** in Lora SemiBold 18px deep navy.
>
> **Doctor Summary Mini-Card (below header, 20px horizontal margin):**
> - White card, border-radius 12px, soft shadow, padding 12px 16px, horizontal layout.
> - Left: circular avatar 44×44px with gradient placeholder.
> - 12px gap: **"Dr. Priya Sharma"** DM Sans Bold 15px deep navy. Below: *"Orthodontist · The Dental Paradise"* DM Sans 12px slate gray.
> - Right: sky blue stethoscope or tooth icon 24px.
>
> **Month Header:**
> - **"March 2026"** in Lora SemiBold 18px deep navy, left-aligned. Left/right chevron arrows on either side in slate gray.
>
> **Weekly Calendar Strip (horizontal scroll):**
> - Show 7 day columns (Mon 16 → Sun 22). Each column: day abbreviation on top in DM Sans 12px slate gray, date number below in DM Sans SemiBold 16px.
> - Selected date (Wed 18): sky blue `#4A9FD4` filled pill background (36×56px), white text for both day and date.
> - Today (Sat 14): deep navy bold date text, warm amber `#F5A623` dot indicator below the date number.
> - Other dates: plain, deep navy date text.
>
> **Time Slots Section:**
> - Label **"Available Time Slots"** in Lora SemiBold 16px deep navy, left-aligned.
> - 3-column grid of time slot chips, 8px gap between chips, each chip border-radius 10px, height 44px.
>   - Available: white background, 1.5px sky blue `#4A9FD4` border, deep navy DM Sans SemiBold 13px text.
>   - Selected (10:00 AM): solid sky blue `#4A9FD4` background, white DM Sans SemiBold 13px text.
>   - Unavailable (9:30 AM, 11:00 AM): light gray `#E0E0E0` background, gray text, strikethrough.
> - Slots to display: 9:00 AM, 9:30 AM *(unavailable)*, 10:00 AM *(selected)*, 10:30 AM, 11:00 AM *(unavailable)*, 11:30 AM, 2:00 PM, 2:30 PM, 3:00 PM, 3:30 PM.
>
> **Visit Duration Note:**
> - Below grid: small info row — 🕐 clock icon in slate gray + *"Estimated visit duration: 45 minutes"* in DM Sans 12px slate gray.
>
> **Bottom CTA (pinned above safe area, 20px horizontal padding):**
> - **"Confirm Appointment"** full-width pill button, warm amber `#F5A623` background, white DM Sans Bold 15px text, 52px height, soft amber glow shadow (0px 8px 24px rgba(245, 166, 35, 0.35)).
>
> ---
>
> ## 📱 SCREEN 6 — Appointment Confirmation Screen
>
> **Background:** Very soft gradient from soft aqua `#E3F4FB` at top to pearl white `#F8FBFF` at bottom.
>
> **Top Decorative Element:**
> - Large mint green circle (120×120px) centered, 56px from top of content area. Inside: white checkmark icon (✓) in bold stroke, 48px. Add a soft multi-ring ripple effect around the circle — three concentric rings in mint green with decreasing opacity (40%, 20%, 10%) to simulate a success pulse animation.
>
> **Heading Block (centered):**
> - **"Appointment Confirmed!"** in Lora Bold 26px deep navy, centered, 20px below the circle.
> - 🎉 emoji inline or below heading.
> - *"We've sent the booking details to your email."* in DM Sans Regular 14px slate gray, centered, 8px below heading.
>
> **Booking Summary Card (20px horizontal margin):**
> - White background, border-radius 20px, soft shadow, padding 20px.
> - Card title: **"Booking Summary"** in DM Sans SemiBold 13px slate gray, uppercase, letter-spacing 1px.
> - Horizontal divider line `#E3F4FB` below title.
> - Four rows, each row: left icon (sky blue, 20px) + label in DM Sans 13px slate gray + right value in DM Sans SemiBold 14px deep navy.
>   - 👤 Doctor: *Dr. Priya Sharma*
>   - 🦷 Service: *Orthodontic Consultation*
>   - 📅 Date & Time: *March 18, 2026 · 10:00 AM*
>   - 📍 Location: *The Dental Paradise, Banjara Hills, Hyderabad*
> - 16px gap between each row.
> - Bottom of card: a mint green `#D4F5EC` banner strip (border-radius 10px, padding 10px 14px) with text: *"Please arrive 10 minutes early and bring a valid ID."* in DM Sans 12px `#2A9D7A`.
>
> **Action Buttons (20px horizontal margin, stacked, 12px gap):**
> - **"Add to Calendar"** — full-width pill button, white background, sky blue `#4A9FD4` border 1.5px, sky blue text DM Sans SemiBold 15px, 52px height. Left icon: calendar icon in sky blue.
> - **"Back to Home"** — full-width pill button, sky blue `#4A9FD4` background, white text DM Sans SemiBold 15px, 52px height.
>
> ---
>
> ## ✅ FINAL INSTRUCTIONS FOR FIGMA AI
>
> - Apply **Auto Layout** (vertical, 8pt grid) to every screen and component.
> - Use **Figma Components and Variants** for: buttons (default/hover/disabled), input fields (empty/filled/error/focused), doctor cards, service icon cards, time slot chips (available/selected/unavailable), bottom navigation bar.
> - Ensure all screens share the same **component library** for consistency.
> - Use **proper iOS safe areas** — 44px top (status bar area) and 34px bottom (home indicator area) on all screens.
> - All screens must feel **cohesive, calm, and professional** — the design language should communicate cleanliness, health, and trustworthiness appropriate for a dental healthcare business.
> - Avoid dark backgrounds, heavy gradients, or neon colors anywhere in the design.

---

That's the full prompt — just copy everything inside the box and paste it directly into Figma AI. For best results, you can also feed it **one screen at a time** if Figma AI has a token/length limit. 🦷✨