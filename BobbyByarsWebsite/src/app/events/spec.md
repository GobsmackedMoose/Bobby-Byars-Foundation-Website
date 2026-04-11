# News & Events Page — Ionic Angular Spec

## Overview
A clean, responsive News & Events page for a nonprofit website. Built using **Ionic Angular** with **HTML and CSS only** — no TypeScript logic. Cards are uniform in size and display the latest foundation news.

---

## Color Scheme
Sourced directly from the existing site's CSS variables. Use these tokens throughout — do not hardcode hex values.

```css
:root {
  --program-accent: #2d7d46;        /* Primary green — buttons, links, badges */
  --program-accent-light: #e8f5ec;  /* Light green — card hover bg, badge bg */
  --program-text: #1a1a1a;          /* Main body text */
  --program-text-muted: #555555;    /* Secondary text — date, captions */
  --program-bg: #ffffff;            /* Page and card background */
  --section-padding: 32px 0;        /* Section vertical rhythm */
}
```

Additional derived values (define in the component CSS):
```css
--card-border: #d4e8d9;
--card-shadow: rgba(45, 125, 70, 0.08);
```

---

## Layout

### Page Structure
```html
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>News & Events</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <div class="news-header"> ... </div>
    <div class="news-grid"> ... </div>
  </ion-content>
</ion-page>
```

### Grid Behavior
| Breakpoint   | Cards per Row |
|--------------|---------------|
| Mobile       | 1             |
| Tablet       | 2             |
| Desktop      | 3             |

```css
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .news-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .news-grid {
    grid-template-columns: 1fr;
    padding: 16px;
  }
}
```

---

## Card Anatomy

Each card shows: **Featured Image · Title · Date · Read More button**

```
┌────────────────────────┐
│   [Featured Image]     │  ← 200px tall, object-fit: cover
├────────────────────────│
│ Card Title Here        │  ← bold, var(--program-text), 2-line clamp
│                        │
│ March 5, 2025          │  ← var(--program-text-muted), small
│                        │
│ [ Read More → ]        │  ← full-width button, var(--program-accent) bg
└────────────────────────┘
```

### Card Sizing Rules
- All cards identical height — `display: flex; flex-direction: column` on `.news-card`
- Title: `flex: 1` to push date + button to the bottom
- Title: `-webkit-line-clamp: 2`
- Card: `border-radius: 12px`, `overflow: hidden`, `border: 1px solid var(--card-border)`
- Hover: `transform: translateY(-4px)`, deeper shadow, `transition: all 0.2s ease`

---

## Card HTML Structure
```html
<div class="news-card">
  <div class="card-image">
    <img src="https://placehold.co/600x400/e8f5ec/2d7d46" alt="Volunteers planting trees at the community garden" />
  </div>
  <div class="card-body">
    <h3 class="card-title">Foundation Launches New Community Grant Program</h3>
    <div class="card-footer">
      <span class="card-date">March 5, 2025</span>
      <a class="card-btn" href="#">Read More →</a>
    </div>
  </div>
</div>
```

### Key CSS for Card
```css
.news-card {
  display: flex;
  flex-direction: column;
  background: var(--program-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--card-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px var(--card-shadow);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--program-text);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 12px;
}

.card-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
}

.card-date {
  font-size: 0.85rem;
  color: var(--program-text-muted);
}

.card-btn {
  display: block;
  text-align: center;
  background: var(--program-accent);
  color: #ffffff;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s ease;
}

.card-btn:hover {
  background: #235f36;
}
```

---

## Page Header
```html
<div class="news-header">
  <h1>News & Events</h1>
  <p>Stay up to date with the latest from our foundation.</p>
</div>
```

```css
.news-header {
  text-align: center;
  padding: 48px 32px 24px;
  border-bottom: 3px solid var(--program-accent-light);
}

.news-header h1 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--program-accent);
  margin-bottom: 8px;
}

.news-header p {
  color: var(--program-text-muted);
  font-size: 1rem;
}
```

---

## Sample Content (6 hardcoded cards)

| # | Title | Date |
|---|-------|------|
| 1 | Foundation Launches New Community Grant Program | March 5, 2025 |
| 2 | Annual Gala Raises Record $250,000 for Local Families | February 18, 2025 |
| 3 | Volunteers Plant 500 Trees Across the Metro Area | January 30, 2025 |
| 4 | Board Announces 2025 Strategic Plan | January 10, 2025 |
| 5 | Holiday Toy Drive Serves Over 1,200 Children | December 20, 2024 |
| 6 | Foundation Partners with City Schools for Literacy Program | December 5, 2024 |

Use placeholder images: `https://placehold.co/600x400/e8f5ec/2d7d46`

---

## Ionic-Specific Notes
- Wrap in `<ion-page>` / `<ion-content>`
- Use `<ion-header>` + `<ion-toolbar>` + `<ion-title>` for the top bar
- **Do NOT use `<ion-card>`** — use plain `<div class="news-card">` for full CSS control
- **No TypeScript** — all 6 cards are static hardcoded HTML
- All styles in `news-events.page.css` (component-scoped)
- Do not use `ion-grid` or `ion-col` — use CSS Grid

---

## Accessibility
- Descriptive `alt` text on every image
- Semantic `<h3>` for card titles, `<h1>` for page title
- `<a>` for Read More (not `<button>`) since it navigates
- All colors meet WCAG AA contrast ratio

---

## Deliverables
- `news-events.page.html`
- `news-events.page.css`
