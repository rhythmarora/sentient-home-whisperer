

# Website Restructure: Add B2B Audience Sections

## Overview
Add two new dedicated pages -- `/builders` (Builders & Developers) and `/architects` (Architects & Designers) -- alongside a restructured navbar with dropdown navigation. The homepage remains homeowner-focused. The "Experience" link returns as a scroll anchor to `/#experience`.

## Navigation Restructure

**New Navbar with dropdown:**
```text
Logo | Experience | For Homeowners ▾ | For Professionals ▾ | Experience Center | [Book Consultation]

For Homeowners dropdown:
  - Design Your Home
  - Spaces
  - Systems

For Professionals dropdown:
  - Builders & Developers
  - Architects & Designers
```

- Restore "Experience" as `/#experience` (scrolls to ExperienceCategories section)
- Group existing homeowner pages under "For Homeowners" dropdown
- New B2B pages under "For Professionals" dropdown
- "Experience Center" and "Book Consultation" stay as top-level links

## New Pages

### `/builders` -- Builders & Developers
Sections:
1. **Hero** -- "Technology that sells homes." Dark luxury aesthetic, enterprise tone
2. **Scale Capability** -- Pre-wiring consultation, model flat integration, multi-tower rollout, enterprise networking (Ruckus)
3. **Buyer Value Prop** -- "Technology-ready homes sell faster." Differentiation stats, amenity positioning
4. **Brand Portfolio** -- Showcase Crestron, Lutron, Meyer Sound, etc. as premium amenities
5. **Process** -- How Qubix works with developers (consultation, design, deployment, handover)
6. **Project References** -- Link to existing projects page
7. **CTA** -- "Partner with Qubix" consultation form (name, company, project details)

### `/architects` -- Architects & Designers
Sections:
1. **Hero** -- "We make your designs come alive." Collaborative tone
2. **Design Partnership** -- How Qubix integrates into architectural workflows (early-stage consultation, schematic inputs, reflected ceiling plans)
3. **Invisible Integration** -- Technology that disappears into design intent (concealed speakers, flush controls, architectural lighting)
4. **Systems Catalog** -- Quick reference to Spaces and Systems pages
5. **Brand Partners** -- Focus on design-forward brands (Lutron, Crestron, Sonance, KEF)
6. **CTA** -- "Collaborate with Qubix" form

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/Builders.tsx` | Create -- full B2B landing page |
| `src/pages/Architects.tsx` | Create -- full B2B landing page |
| `src/components/layout/Navbar.tsx` | Rewrite -- add dropdown menus, restore Experience link |
| `src/components/layout/Footer.tsx` | Update -- add B2B links section |
| `src/App.tsx` | Add `/builders` and `/architects` routes |

## Design Approach
- Same dark luxury design system, same fonts and color tokens
- B2B pages use slightly more structured/corporate layout (stats, process steps) while maintaining the Qubix aesthetic
- Each B2B page gets its own consultation CTA form that pushes leads to Zoho with appropriate source tags
- No database changes needed -- B2B forms reuse the existing Zoho lead push pattern

