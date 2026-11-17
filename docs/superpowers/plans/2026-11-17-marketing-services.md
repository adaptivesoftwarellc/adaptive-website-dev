# Marketing Services Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Marketing" section (Websites, Ads Management, SEO) plus supporting nav, hero, form, and metadata changes.

**Architecture:** Static site — `index.html` + `styles.css` + `script.js`, no build step. Reuse existing `.band`, `.wrap.reveal`, `.label`, `.section-head`, `.work`, `.work-item`, `.btn` classes so no new CSS is needed except for the form `<select>`.

**Tech Stack:** HTML/CSS/vanilla JS, Web3Forms, served by GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-11-17-marketing-services-design.md`

## Global Constraints

- Branch: `feature/marketing-services`. Do not merge to `dev`/`main` without owner OK.
- Section order: hero → problem → fit → services → **marketing** → process → about → contact.
- Copy is draft; keep it plain and short, matching existing tone (no hype words).
- No pricing.

## Review Focus

- 390px phone width: new section and select must not overflow horizontally.
- Mobile menu: new "Marketing" link must close the menu on tap like the others (script.js handler).
- Form still submits with the select left at its default (field is optional).
- JSON-LD must still parse as valid JSON after editing.
- Scroll-reveal: new `.reveal` wrapper must become visible (observer picks up all `.reveal`).

---

### Task 1: Marketing section + nav + hero

**Files:** Modify `index.html` (nav ~236/248, hero label/lede ~262-268, insert after `#services` closing `</section>` ~456)

- [ ] Insert `<section class="band" id="marketing">` using the `.work` list markup from `#services`; label "New service", h2 "Get found. Get customers.", lede paragraph, three `work-item`s (Websites / Ads Management / SEO, copy per spec), then `<a class="btn" href="#contact">Talk to us about marketing</a>`.
- [ ] Add `<a href="#marketing">Marketing</a>` after Solutions in both desktop and mobile nav.
- [ ] Hero label → `Custom software · Websites · Ads &amp; SEO`; append one lede sentence about building sites and running ads/SEO.
- [ ] Verify: `curl -s localhost:8000 | grep -c 'href="#marketing"'` → `2`; view at 1440px and 390px, mobile menu link closes menu and scrolls.
- [ ] Commit.

### Task 2: Contact form interest dropdown

**Files:** Modify `index.html` contact form (after company field), `styles.css` (select styled like inputs)

- [ ] Add labelled optional `<select name="interest">` with options: "Custom software", "Website", "Ads & SEO", "Not sure yet" (first option selected by default is "Not sure yet").
- [ ] Make `select` share the existing input/textarea rule in `styles.css`.
- [ ] Verify at 390px no overflow; field appears in form markup.
- [ ] Commit.

### Task 3: SEO metadata

**Files:** Modify `index.html` head (meta description ~17, og ~21, twitter ~32, JSON-LD ~46-70)

- [ ] Update descriptions to mention custom software, websites, ad management, and SEO.
- [ ] Add `"knowsAbout"` array to JSON-LD: Custom software, Workflow consolidation, Website design, Google Ads management, Search engine optimization.
- [ ] Verify JSON-LD parses: extract the `<script type="application/ld+json">` block and run through `python3 -m json.tool`.
- [ ] Commit.
