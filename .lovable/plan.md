

# Qubix HiFi — Premium AI-First Luxury AV Website

## Phase 1: Foundation & Design System

### Dark luxury design system
- Dark cinematic palette (near-black backgrounds, gold/warm accents)
- Large serif + sans-serif typography pairing
- Smooth page transitions and scroll animations using Framer Motion
- Custom CSS variables for gold highlights, glass effects, gradients

### Layout components
- Cinematic full-width hero sections
- Elegant navigation with minimal UI (transparent header, burger menu on mobile)
- Footer with luxury brand feel

---

## Phase 2: Database & Data Layer (Lovable Cloud)

### Database tables
- **brands** — name, slug, philosophy, why_qubix_uses, category_fit, logo_url, featured
- **products** — name, slug, brand_id, category, short_description, features, specs (JSON), use_cases, image_url
- **product_relationships** — product_id, related_product_id (for "works best with")
- **projects** — name, slug, description, images, location, systems_used
- **categories** — name, slug, icon, parent_category
- **leads** — name, phone, email, budget_range, project_type, ai_journey_data (JSON), source

### Seed data
- 5 brands: PMC, Crestron, Wharfedale, Meyer Sound, Sonance
- ~20 products across speakers, amplifiers, projectors, processors, control systems, lighting, networking, security
- 4 projects with cinematic storytelling descriptions

---

## Phase 3: Experience-First Pages

### Homepage
1. **Hero** — Full-screen cinematic with "Technology, designed to disappear." + [Design My Home] CTA
2. **Experience Categories** — Cinema / Music / Living / Outdoor / Social / Invisible Tech as visual cards with hover effects
3. **AI Entry** — "Your home. Imagined in minutes." with animated entrance
4. **Flagship Brands** — PMC, Crestron, Wharfedale, Meyer Sound — editorial, not logo soup
5. **Curated Ecosystem** — Smaller tiles for additional brands
6. **Projects** — Cinematic horizontal scroll storytelling
7. **System Philosophy** preview
8. **Final CTA** — "Let's design your home."

### Spaces Page
- Visual grid: Home Theatre, Living Room, Bedroom, Outdoor, Lounge/Karaoke, Study
- Each links to curated product/system recommendations

### Systems Page
- Grouped: Entertainment / Ambience / Infrastructure / Protection / Control
- Each with editorial description + linked products

### System Philosophy Page
- Sound / Bass / Control / Design / Integration sections
- Closing: "You don't see the system. You feel it."

### Projects Page
- Cinematic gallery with rich storytelling per project
- Systems used, brand highlights

### Experience Center Page
- Location, booking CTA, what to expect
- Photo gallery

### Contact / Start Journey Page
- Lead capture form (name, phone, email, budget range, project type)
- Saves to leads table + triggers Zoho SalesIQ data pass

---

## Phase 4: AI Experience Builder

### "Design Your Home" — Conversational Flow
- Powered by Lovable AI (edge function calling AI gateway)
- Step-by-step inputs: home type → size → lifestyle → budget → priorities
- AI generates personalized output: suggested rooms, experience zones, budget tier, system overview
- Results stored in leads table
- Beautiful card-based UI for the conversation, not a plain chatbox
- CTA at end: "Talk to an Expert" (triggers Zoho + saves journey data)

---

## Phase 5: SEO Discovery Layer

### Brands Section
- Individual brand pages from DB: philosophy, why Qubix uses them, featured products, project references
- Editorial luxury tone

### Products Section
- Searchable, filterable product catalog
- Filters: category, brand, use case
- Product detail pages: luxury description → key features → collapsible specs → use cases → cross-links → inquiry CTA (never "Buy Now")

### Global Search
- Search across products + brands with instant results overlay

---

## Phase 6: Zoho SalesIQ Integration

- Embed widget script site-wide
- Trigger rules: time on site >30s, scroll >50%, AI journey completion
- Pass lead data (name, phone, email, budget, project type, AI responses) to Zoho
- Tag: "Website Lead – HiFi"

---

## Phase 7: Polish & Performance

- Mobile-first responsive design across all pages
- Lazy loading images, optimized animations
- SEO meta tags, Open Graph, structured data
- Page transition animations
- Loading states with luxury skeleton screens

---

## Key UX Principles Throughout
- Experience leads, products support
- No pricing, no "buy now", no dealer feel
- Every CTA drives toward consultation
- Luxury editorial voice in all copy
- AI guides the journey, humans close it

