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
