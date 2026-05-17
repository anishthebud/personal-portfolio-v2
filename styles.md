# Style Tokens

## Home Screen (Figma node `4002-81`)

### Colors

| Variable | Value | Usage |
|---|---|---|
| `--portfolio-purple` | `#a48fd4` | Sidebar nav link text (About Me, Projects, Experience, Skills, Credits) |
| `--portfolio-purple-hero` | `rgba(164, 143, 212, 0.8)` | Hero name "Anish Budida" |
| `--portfolio-subtitle` | `#e2dcef` | Hero subtitle "Full-Stack & Machine Learning Developer" |

### Typography

| Variable | Value | Usage |
|---|---|---|
| `--font-display-portfolio` | `'Alegreya Sans SC', Georgia, serif` | All display text on the Home Screen |
| `--font-size-hero-name` | `6rem` (96px) | Hero name — `font-weight: 900` (Black) |
| `--font-size-nav-link` | `4rem` (64px) | Sidebar nav items — `font-weight: 500` (Medium) |
| `--font-size-subtitle` | `2rem` (32px) | Hero subtitle — `font-weight: 400` (Regular) |

### Icons

| Variable | Value | Usage |
|---|---|---|
| `--icon-size-social` | `3rem` (48px) | Github and LinkedIn social icons |

### Font Import

`Alegreya Sans SC` (weights 400, 500, 900) has been added to the Google Fonts import in `src/styles.css`.

### Already-Existing Tokens (not duplicated)

None of the above tokens were present in `src/styles.css` prior to this extraction. The existing file uses a separate teal/green palette (`--sea-ink`, `--lagoon`, `--palm`, etc.) and `Manrope`/`Fraunces` fonts for the rest of the site.

---

## Sidebar Nav Link Interaction States (Figma nodes `2026-36`, `2070-81`)

These tokens describe the hover and selected/active visual treatments applied to the sidebar nav items (About Me, Projects, Experience, Skills, Credits). The Figma component set exposes three variants: Default, Hovered, and Selected.

### Hover State Tokens

| Variable | Value | Usage |
|---|---|---|
| `--nav-link-hover-color` | `#4E00FFBF` | Text color on hover — #4E00FF at 75% opacity |
| `--nav-link-hover-decoration` | `underline` | Underline appears on hover |
| `--nav-link-hover-decoration-style` | `solid` | Solid line style for hover underline |
| `--nav-link-hover-decoration-position` | `from-font` | Underline position defers to font metrics |
| `--nav-link-hover-font-weight` | `500` | Font weight stays Medium on hover |

### Selected / Active State Tokens

| Variable | Value | Usage |
|---|---|---|
| `--nav-link-active-color` | `#a48fd4` | Text color when active — unchanged from default |
| `--nav-link-active-decoration` | `underline` | Underline persists in active state |
| `--nav-link-active-decoration-style` | `solid` | Solid line style for active underline |
| `--nav-link-active-decoration-position` | `from-font` | Underline position defers to font metrics |
| `--nav-link-active-font-weight` | `800` | Font weight increases to ExtraBold when active |

### State Comparison

| Property | Default | Hovered | Selected / Active |
|---|---|---|---|
| Color | `#a48fd4` | `#a48fd4` (no change) | `#a48fd4` (no change) |
| Font weight | 500 (Medium) | 500 (Medium) | 800 (ExtraBold) |
| Text decoration | none | `underline solid` | `underline solid` |
| Underline position | — | `from-font` | `from-font` |
| Font family | `Alegreya Sans SC` | `Alegreya Sans SC` | `Alegreya Sans SC` |

### Already-Existing Tokens (not duplicated)

The default-state color (`--portfolio-purple: #a48fd4`), font family (`--font-display-portfolio`), and font size (`--font-size-nav-link: 4rem`) were already in `src/styles.css` and are referenced here for context only — no duplicates were written.

---

## About Me Card Surface (Figma node `2044-84`)

Node `2044-84` is `Rectangle 2` — the main card panel of the About Me section. It is a rounded, translucent purple rectangle with a drop shadow.

### New Tokens Added

| Variable | Light value | Dark value | Usage |
|---|---|---|---|
| `--about-card-bg` | `var(--credits-surface)` → `rgba(60, 28, 133, 0.8)` | `var(--credits-surface)` → `rgba(60, 28, 133, 0.92)` | Fill color of the About Me card panel |
| `--about-card-radius` | `40px` | `40px` | Corner radius of the card |
| `--about-card-shadow` | `5px 5px 10px 0px rgba(0, 0, 0, 0.5)` | `5px 5px 10px 0px rgba(0, 0, 0, 0.7)` | Drop shadow on the card (deeper in dark mode) |

### Already-Existing Tokens (not duplicated)

| Token | Value | Reason reused |
|---|---|---|
| `--credits-surface` | `rgba(60, 28, 133, 0.8)` | Exact fill match; `--about-card-bg` is an alias pointing to it |
| `.section-card` box-shadow | `5px 5px 10px 0 rgba(0, 0, 0, 0.5)` | Same shadow value already in the utility class, now also exposed as `--about-card-shadow` variable |

---

## Project Cards (Figma node `2044-120`)

Node `2044-120` is the project card grid — a 2-column, 3-row layout of 6 project cards (Content Creation Manager, Steam Game Recommender, Look At Me, Traffic Accident Analyzer, Braille Buddy, Confido). Each card is a fixed-size rounded purple rectangle containing a thumbnail image and a title label below it.

### New Tokens Added

| Variable | Value | Usage |
|---|---|---|
| `--project-card-bg` | `var(--credits-surface)` → `rgba(60, 28, 133, 0.8)` | Fill color of each project card — aliases the shared credits/about surface color |
| `--project-card-radius` | `10px` | Corner radius on individual project cards (smaller than `--about-card-radius: 40px`) |
| `--project-card-shadow` | `5px 5px 10px 0px rgba(0, 0, 0, 0.5)` | Drop shadow applied to select cards in the grid |
| `--project-card-width` | `300px` | Fixed width of each project card |
| `--project-card-height` | `200px` | Fixed height of each project card |
| `--project-card-image-width` | `257px` | Width of the thumbnail image area inside each card |
| `--project-card-image-height` | `153px` | Height of the thumbnail image area inside each card |
| `--project-card-label-color` | `#ffffff` | White text color for project card titles |
| `--font-size-project-card-label` | `1.5rem` (24px) | Font size of the project title label — `font-weight: 500` (Medium), `font-family: Alegreya Sans SC` |

### Already-Existing Tokens (not duplicated)

| Token | Value | Reason reused |
|---|---|---|
| `--credits-surface` | `rgba(60, 28, 133, 0.8)` | Exact fill match; `--project-card-bg` aliases it |
| `--font-display-portfolio` | `'Alegreya Sans SC', Georgia, serif` | Same font family used for card labels |
| `--about-card-shadow` | `5px 5px 10px 0px rgba(0, 0, 0, 0.5)` | Same shadow value; `--project-card-shadow` carries it independently for the project card context |

### Typography Detail

Card labels use `font-family: Alegreya Sans SC`, `font-weight: 500` (Medium), `font-size: 24px` (`--font-size-project-card-label`), `color: #ffffff` (`--project-card-label-color`), `font-style: normal`, `line-height: normal`.

---

## Project Detail / Expanded Card (Figma node `2044-185`)

Node `2044-185` is the expanded detail view that appears when a project card is opened. It is a large square panel (674 x 674px) with the same deep purple fill as the project cards, containing: a full-width banner image at the top, a bold role/title heading, a body description paragraph, and a horizontal row of skill badge chips at the bottom.

### New Tokens Added

| Variable | Value | Usage |
|---|---|---|
| `--detail-card-radius` | `30px` | Corner radius on the expanded detail panel — distinct from `40px` (about card) and `10px` (project card) |
| `--detail-card-size` | `674px` | Fixed square dimension (width and height) of the detail panel |
| `--detail-card-banner-width` | `624px` | Width of the banner image inside the detail card |
| `--detail-card-banner-height` | `215px` | Height of the banner image inside the detail card |
| `--font-size-detail-body` | `1.125rem` (18px) | Body description text — `font-weight: 400` (Regular), `font-family: Alegreya Sans SC` |
| `--font-size-skill-badge` | `1.25rem` (20px) | Skill badge label text — `font-weight: 700` (Bold), `font-family: Alegreya Sans SC` |
| `--skill-badge-height` | `30px` | Fixed height of each skill badge chip |
| `--skill-badge-width` | `103px` | Fixed width of each skill badge chip |

### Already-Existing Tokens (not duplicated)

| Token | Value | Reason reused |
|---|---|---|
| `--credits-surface` | `rgba(60, 28, 133, 0.8)` | Exact fill match — same background as the project and about cards |
| `--about-card-shadow` | `5px 5px 10px 0px rgba(0, 0, 0, 0.5)` | Same drop shadow on the panel |
| `--project-card-label-color` | `#ffffff` | Title text is the same white |
| `--portfolio-subtitle` | `#e2dcef` | Skill badge label color is the same light lavender |
| `--font-size-subtitle` | `2rem` (32px) | Detail card title is also 32px — no new token needed |
| `--font-display-portfolio` | `'Alegreya Sans SC', Georgia, serif` | All text in this view uses Alegreya Sans SC |

### Typography Detail

| Element | Font | Weight | Size | Color |
|---|---|---|---|---|
| Title / role heading | Alegreya Sans SC | 700 (Bold) | `--font-size-subtitle` (32px) | `#ffffff` |
| Body description | Alegreya Sans SC | 400 (Regular) | `--font-size-detail-body` (18px) | `#ffffff` |
| Skill badge label | Alegreya Sans SC | 700 (Bold) | `--font-size-skill-badge` (20px) | `--portfolio-subtitle` (#e2dcef) |

### Layout Structure

```
┌──────────────────────────────────┐  ← 674 x 674px panel
│  ┌────────────────────────────┐  │  ← banner image (624 x 215px)
│  │         [image]            │  │
│  └────────────────────────────┘  │
│  Content Creation Manager        │  ← 32px Bold title
│  Lorem ipsum…                    │  ← 18px Regular body, ~5 lines
│                                  │
│  [Skill #1] [Skill #2] [Skill #3]│  ← 103 x 30px badge chips
└──────────────────────────────────┘
```

---

## Skill Area Cards (Figma node `4042-118`)

Node `4042-118` is the three-column skill area layout containing tall portrait cards for **Full-Stack Development**, **Machine Learning**, and **Product Management**. Each card is a fixed-size rounded purple rectangle with a full-height city photograph (Shanghai skyline) filling the top portion and a centered label below it.

### New Tokens Added

| Variable | Value | Usage |
|---|---|---|
| `--skill-area-card-width` | `250px` | Fixed width of each tall portrait skill card |
| `--skill-area-card-height` | `714px` | Fixed height of each tall portrait skill card |
| `--skill-area-card-image-width` | `194px` | City photo (Shanghai) width inside each card |
| `--skill-area-card-image-height` | `583px` | City photo height inside each card |

### Already-Existing Tokens (not duplicated)

| Token | Value | Reason reused |
|---|---|---|
| `--credits-surface` / `--about-card-bg` | `rgba(60, 28, 133, 0.8)` | Exact fill match — same deep purple translucent background |
| `--project-card-radius` | `10px` | Exact corner radius match |
| `--about-card-shadow` | `5px 5px 10px 0px rgba(0, 0, 0, 0.5)` | Exact drop shadow match |
| `--portfolio-subtitle` | `#e2dcef` | Label text color (light lavender) |
| `--font-size-subtitle` | `2rem` (32px) | Label font size — same 32px used here |
| `--font-display-portfolio` | `'Alegreya Sans SC', Georgia, serif` | Label font family |

### Typography Detail

Label text (e.g., "Full-Stack Development") uses `font-family: Alegreya Sans SC`, `font-weight: 400` (Regular), `font-size: 32px` (`--font-size-subtitle`), `color: #e2dcef` (`--portfolio-subtitle`), `font-style: normal`, `text-align: center`, `line-height: normal`.

### Layout Structure

```
┌──────────────────┐  ← 250 x 714px card  (--skill-area-card-width / height)
│                  │     fill: rgba(60,28,133,0.8)  (--credits-surface)
│   ┌──────────┐   │     radius: 10px  (--project-card-radius)
│   │          │   │     shadow: 5px 5px 10px 0 rgba(0,0,0,0.5)
│   │  [photo] │   │  ← 194 x 583px city image  (--skill-area-card-image-*)
│   │          │   │     positioned 28px from left edge, 29px from top
│   └──────────┘   │
│  Full-Stack       │  ← 32px Regular Alegreya Sans SC, #e2dcef, centered
│  Development      │     (multi-line allowed; image ends ~628px from top)
└──────────────────┘

Three cards sit side-by-side, spaced 274px apart (left edges at 737px, 1011px, 1285px on the original canvas).
```
