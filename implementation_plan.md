# AFIS - IT Hardware & POS Solutions Website

A React.js landing website for an IT hardware, POS solutions, and software company. Frontend only — Laravel backend will come in a future session.

## Proposed Changes

### Project Initialization

#### [NEW] Vite + React Project

- Initialize with `npx -y create-vite@latest ./ -- --template react`
- Install dependencies: `react-router-dom`, `react-icons`
- Uses **vanilla CSS** (no Tailwind) with design tokens matching the spec

---

### Design System

#### [NEW] [index.css](file:///c:/Users/IT/Desktop/Yahya/AFIS/src/index.css)

Global CSS with:
- CSS custom properties for colors (`--primary: #0066FF`, `--dark-blue: #003B8B`, etc.)
- Typography scale matching spec (4xl/5xl/6xl headings, etc.)
- Container utility (`max-width: 1280px`, responsive padding)
- Section spacing (`py-16 / py-24`)
- Card styles, shadow, border-radius tokens
- Grid utilities for products (2→3→5 cols), categories (2→3→6 cols), services (1→2→4 cols)
- Button styles (primary blue, outline)
- Animation keyframes (fadeUp, marquee, countUp)
- Responsive breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

---

### Shared Components

#### [NEW] [TopHeader.jsx](file:///c:/Users/IT/Desktop/Yahya/AFIS/src/components/TopHeader.jsx)
- 40px bar with phone, email, WhatsApp, working hours, social icons

#### [NEW] [Navbar.jsx](file:///c:/Users/IT/Desktop/Yahya/AFIS/src/components/Navbar.jsx)
- Sticky navbar with logo, menu links (dropdown for Products), CTA "Get a Quote" button
- Mobile hamburger menu with slide-in drawer

#### [NEW] [Footer.jsx](file:///c:/Users/IT/Desktop/Yahya/AFIS/src/components/Footer.jsx)
- 4-column grid: Logo+description, Products links, Services links, Contact info
- Bottom bar: copyright, Privacy Policy, Terms

#### [NEW] [Layout.jsx](file:///c:/Users/IT/Desktop/Yahya/AFIS/src/components/Layout.jsx)
- Wraps TopHeader + Navbar + `<Outlet />` + Footer

---

### Homepage Sections (all in `src/components/home/`)

| # | Component | Key Features |
|---|-----------|-------------|
| 1 | `HeroSection.jsx` | Two-column layout, headline, CTA buttons, POS mockup image, feature badges |
| 2 | `CategoryGrid.jsx` | 6-col grid, icon cards for POS, Printers, Scanners, etc. |
| 3 | `FeaturedProducts.jsx` | 5-col product cards with image, name, price, star rating, CTA |
| 4 | `BrandsMarquee.jsx` | Auto-scrolling brand logos (Epson, Zebra, Honeywell, etc.) |
| 5 | `HappyClients.jsx` | Auto-scrolling client logos |
| 6 | `WhyChooseUs.jsx` | Blue gradient bg, feature list, animated statistics counters |
| 7 | `TotemPOS.jsx` | Software showcase: screenshot + feature list + CTA buttons |
| 8 | `IndustriesWeServe.jsx` | 8 industry icon cards |
| 9 | `ServicesSection.jsx` | 4-col service cards |
| 10 | `Testimonials.jsx` | Customer review slider (3 desktop, 1 mobile) |
| 11 | `InquiryForm.jsx` | Lead gen form: name, company, phone, email, product, message |
| 12 | `GoogleMap.jsx` | Embedded Google Maps iframe |

---

### Pages (all in `src/pages/`)

| Page | Route | Description |
|------|-------|-------------|
| `Home.jsx` | `/` | Assembles all homepage sections |
| `Products.jsx` | `/products` | Category filter sidebar + product grid |
| `ProductDetail.jsx` | `/products/:id` | Image gallery, specs tabs, related products, quote form |
| `Software.jsx` | `/software` | Overview, features, screenshots, demo request |
| `Services.jsx` | `/services` | Service cards with descriptions and inquiry |
| `Brands.jsx` | `/brands` | Brand logos grid with descriptions |
| `About.jsx` | `/about` | Company story, mission, vision, team |
| `Blog.jsx` | `/blog` | Blog listing with category filter |
| `Contact.jsx` | `/contact` | Map, contact info, contact form |
| `RequestQuote.jsx` | `/request-quote` | Quote request form |

---

### Routing

#### [NEW] [App.jsx](file:///c:/Users/IT/Desktop/Yahya/AFIS/src/App.jsx)

React Router v6 with:
```jsx
<Routes>
  <Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="products" element={<Products />} />
    <Route path="products/:id" element={<ProductDetail />} />
    <Route path="software" element={<Software />} />
    <Route path="services" element={<Services />} />
    <Route path="brands" element={<Brands />} />
    <Route path="about" element={<About />} />
    <Route path="blog" element={<Blog />} />
    <Route path="contact" element={<Contact />} />
    <Route path="request-quote" element={<RequestQuote />} />
  </Route>
</Routes>
```

---

### Assets

- Will use `react-icons` for all icons (Fi, Hi, Bs icon sets)
- Will use `generate_image` tool to create: hero POS mockup, product images, brand logos
- Placeholder data in JSON files for products, services, testimonials, etc.

---

## Verification Plan

### Browser Testing
1. Run `npm run dev` to start dev server
2. Use browser subagent to:
   - Navigate to homepage, verify all 12 sections render
   - Click each nav link, verify routing works
   - Test mobile responsiveness (resize browser)
   - Verify animations and hover effects
   - Check all inner pages load correctly

### Manual Verification
- User can visually inspect the site at `http://localhost:5173`
- Compare against the reference design image provided
