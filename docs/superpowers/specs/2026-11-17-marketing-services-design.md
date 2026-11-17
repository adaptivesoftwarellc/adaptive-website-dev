# Marketing services section — design

**Intent:** Advertise a new service line (websites, ad management, SEO) alongside the
existing custom-software offering, without disturbing the software story.

**Approaches considered**
- A. Add cards to the existing Solutions list — smallest, but website buyers must read
  the "disconnected systems" pitch first.
- **B. Own section after Solutions (chosen)** — clear path for each buyer, keeps the
  reviewed copy intact, can grow into C later.
- C. Two-path hero rework — clearest, but rewrites the just-finalized top of page.

**Changes**
1. New `#marketing` section after `#services`, reusing `.work` / `.work-item` markup.
   Label "New service", heading "Get found. Get customers.", short lede, three items
   (Websites, Ads Management, SEO), CTA button to `#contact`.
2. Nav: "Marketing" link between Solutions and Our Process (desktop + mobile menu).
3. Hero: label "Custom software · Websites · Ads & SEO"; one added lede sentence. H1 unchanged.
4. Contact form: optional "What can we help with?" `<select name="interest">`
   (Custom software / Website / Ads & SEO / Not sure). *Claude's call.*
5. Meta description, OG/Twitter descriptions, JSON-LD description + services updated.

**Non-goals:** no changes to problem, fit, process, about sections or visual style; no pricing.

**Left to the builder:** exact copy wording (draft, owner will edit), select styling to
match existing inputs.

---

## Revision (same day): split into three pages

Owner feedback: the single page was "too much at a time". Competitor research
(Firefly, Comit use per-service pages) supported splitting.

**Approaches:** A. tighten the one page; **B. short home + /software/ + /marketing/ (chosen)**;
C. tabs on one page (hides content from search).

- `/` — hero (no diagram) "Software and marketing for growing businesses.", two path
  cards linking to the service pages, About, the single contact form.
- `/software/` — existing software story moved verbatim: hero + diagram, problem, fit,
  solutions, process, CTA band.
- `/marketing/` — hero "Get found. Get customers.", Websites/Ads/SEO, 4-step "how it
  works", CTA band. "New service" label dropped.
- Nav on all pages: Software · Marketing · About · Contact.
- Subpage CTAs link to `/?interest=<option>#contact`; script.js preselects the dropdown.
- Phone (504) 810-3955 (owner-supplied) in contact sections, mobile menu, footer, JSON-LD.
- Per-page title/description/canonical/OG; sitemap lists all three; gtag on all pages.
