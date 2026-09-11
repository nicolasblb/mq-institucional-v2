# Maiq Design System

**Maiq** ("Mike") é o hub de fusões e aquisições para médias empresas brasileiras: uma startup de base tecnológica que
combina **método** (metodologia proprietária QUARPX®), **tecnologia** (assistentes e agentes de IA — M&AI) e
**conhecimento multidisciplinar** para sistematizar a expansão inorgânica de um negócio. O nome é acrônimo:
**M**ergers, **A**cquisitions, **I**ntegrations (primário) + **AI**, **IQ** e **Quest** (pilares de entrega).

Proposta de valor: *"Transformamos a capacidade de crescimento das médias empresas."*
Descritor: *"O hub de fusões e aquisições para médias empresas."*
Posicionamento: não é boutique de M&A, não é assessoria, não é consultoria — é **plataforma de expansão inorgânica** e
**copiloto do crescimento**.

## Sources this system was built from

| Source | What came from it |
| --- | --- |
| `uploads/2026'08_Maiq Guia da Marca_escuro.pdf` (28 pp., Brand Book, Agosto/2026) | Identity, business model, verbal language (tone-of-voice axes, messaging, manifesto), typography (Grandview), colour palette (light + dark), logo files, visual-language dimensions |
| GitHub: **https://github.com/nicolasblb/maiq** (branch `main`) | Live product IA: marketing sections, authenticated app (M&AI chat, Chats, QUARPX), copy, plan pricing, QUARPX dimension names, service marks, Lucide icon usage |

The repository is a Vite + React + TypeScript + Tailwind + shadcn/ui app (Lovable-generated) backed by Supabase.
**Explore it further** — `https://github.com/nicolasblb/maiq` — when you need exact product behaviour, data shapes
(`src/data/quarpX_questions.json`) or screens not recreated here (Agenda, Admin, UserManagement).

> ⚠️ **The repo is the OLD identity.** `src/index.css` defines a navy-blue system (`#2B4C7E`, `#567EBB`) with
> blue→purple gradients. The 2026 brand book explicitly rejects that: *"se afasta do azul marinho próprio do mercado
> financeiro"*. **This design system implements the new identity.** Use the repo for structure and copy, never for colour.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import`s only. Link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `semantic.css`, `base.css` |
| `assets/` | Logos (4 wordmark colourways), 2 app tiles, 4 service marks. `assets/legacy/` holds the previous blue-era files. |
| `guidelines/` | 19 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/` | 29 React primitives in 6 groups — see below |
| `ui_kits/site/` | Marketing site recreation (4 screens, interactive) |
| `ui_kits/plataforma/` | Authenticated app recreation (5 screens, interactive) |
| `templates/pagina-institucional/` | Starting template for a new institutional page |
| `SKILL.md` | Agent Skills manifest (works in Claude Code) |
| `github.md` | Source-repo association and sync log |

## Components

**core/** — `Button`, `IconButton`, `Badge`, `Card`, `Logo`, `Overline`
**forms/** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioOption`, `Switch`
**feedback/** — `Dialog`, `Tooltip`, `Toast`, `ProgressRing`
**navigation/** — `TopBar`, `SidebarNav`, `Tabs`
**marketing/** — `SectionHeading`, `StatBlock`, `PlanCard`, `InsightCard`, `ServiceItem`
**data/** — `DimensionBar`, `DealStageTrack`, `ChatBubble`, `ChatComposer`

### Intentional additions
The brand book defines no component inventory, and the repo's inventory is stock shadcn/ui (not a Maiq-authored
library). The set above was therefore authored from the brand's real needs. Four items are Maiq-specific rather than
generic primitives, and exist because the product's core stories need them:
- `ProgressRing` + `DimensionBar` — the QUARPX® readiness score and its per-dimension breakdown.
- `DealStageTrack` — the "M&A como disciplina contínua" journey (tese → prontidão → transação → integração).
- `ChatBubble` + `ChatComposer` — the M&AI assistant.
Stock shadcn parts present in the repo but **not** rebuilt here (no brand-specific treatment, no product usage worth
recreating): Accordion, Carousel, Command, HoverCard, Menubar, Pagination, Resizable, Sheet, Slider, Sonner, Table,
Toggle-Group. Add them only when a real screen needs them.

---

## CONTENT FUNDAMENTALS

**Language.** Brazilian Portuguese. English only for established market terms — *M&A, buy side, sell side, deal,
earn-out, valuation, closing, due diligence, playbook, known unknowns, unknown unknowns*. Never translate them
awkwardly; never italicise them as if foreign.

**Person.** First-person plural, masculine singular for the brand: **"o Maiq"**, *"somos o Maiq"*, *"coordenamos"*,
*"transformamos"*. Plural signals community and ecosystem; masculine because Maiq is *o hub*, *o negócio*, *o
coordenador*. Address the reader directly as **você** (implicitly — *"O empresário se dedica ao que conhece"*), never
*"o senhor"*, never *"nossos amigos empresários"*.

**Casing.** Standard sentence/title case per Portuguese rules. **No ALL-CAPS headlines** — the one exception is the
12px overline/eyebrow and the literal product names `QUARPX®` and `M&AI`. Brand book: *"Capitalização padrão (Title
Case). Traz legibilidade e evita ruído visual."*

**No emoji. Ever.** Not in UI, not in marketing, not in email. Not in this design system's own outputs.

**Tone (the eight axes from the brand book, primary / secondary):**
| Axis | Maiq | In practice |
| --- | --- | --- |
| Formalidade | Profissional / Formal | Clear, correct, direct. No institutional boilerplate, no irreverence. |
| Proximidade | Próxima / Direta | Empathy with the reader's real situations; not emotional. |
| Assertividade | Convicta / Categórica | Deliberate confrontation with market beliefs — without arrogance. |
| Tecnicidade | Técnica simplificada / Especializada | Demonstrate command, then translate. Demystify. |
| Complexidade | Estruturada / Densa | Analytical rigour, organised; assumes no prior knowledge. |
| Concisão | Explicativa / Equilibrada | Context and examples before conclusions. |
| Emotividade | Racional / Equilibrada | Evidence and data first, human context second. |
| Distintividade | Marcante / Provocativa | Own theses, own expressions, intellectual leadership. |

**Sentence shapes that are on-brand:**
- Thesis as a flat statement: *"A empresa que só cresce de forma orgânica pode estar limitando o próprio futuro."*
- Two-beat headline, second beat as a verdict: *"Crescimento inorgânico. Feito certo."*
- Number then consequence: *"Mais de 90% dos M&As falham. A causa raiz está no baixo nível de prontidão das empresas."*
- Negation of the category, then the claim: *"Boutique de M&A? Não. Somos uma plataforma de expansão inorgânica."*
- Reframe: *"Um M&A não termina na assinatura de um contrato. É a partir dele que começa o trabalho decisivo."*

**Off-brand:** exclamation marks, hype adjectives ("revolucionário", "disruptivo", "incrível"), vague promises without
a mechanism, rhetorical questions used as filler, motivational closers, "nós acreditamos que" as padding.

**Numbers.** Brazilian formatting: `R$ 3.490`, `R$ 286,9 milhões`, `~93%`, `02 (dois) meses`. Ordinal-style
enumerations are zero-padded: `01`, `02`, `03` — used for dimensions, causes and journey stages. Always render
numerals with tabular figures (`.maiq-numeric`).

**Microcopy examples (real, from the product):**
- CTA: *"Fale com um especialista →"*, *"Quero conhecer os planos"*, *"Como funciona"*
- Dialog: *"Informe alguns dados para seguirmos com seu agendamento!"*
- Empty/confirm: *"Conversa salva"* / *"Sua conversa foi salva com sucesso."*
- Error: *"Campos obrigatórios — por favor, preencha todos os campos obrigatórios corretamente."*

---

## VISUAL FOUNDATIONS

**Style.** *Minimalista Editorial*: clean base combined with graphics, data and **asymmetric compositions**.
Sophistication without luxury codes — refinement comes from space, typography and precision, never ornament.
Geometry is predominantly geometric: lines, modules and forms that communicate *system* and *intelligence*.

**Two palettes, by time of day.** The brand book ships a **Paleta Escura (18h–6h)** and a **Paleta Clara (6h–18h)**
from the same five colours. Dark is the default scope in `tokens/semantic.css`; light is `[data-theme="claro"]`.

| Colour | Hex | Role |
| --- | --- | --- |
| Verde Profundo | `#143737` | Dark-palette page base; light-palette text and primary fill |
| Areia Nobre | `#E9E0D1` | Dark-palette text and primary fill; light-palette page base |
| Verde Botânico | `#33605A` | Accent fill, user chat bubble, selected states |
| Menta Suave | `#91A398` | Active indicators, focus ring, meters, secondary text |
| Madeira de Lei | `#68462B` | Rare warm accent — a data highlight, a single mark. Never a large field. |

The direction is a **deliberate confrontation** with the navy blue of the financial market, balanced by natural
colours — but the green and brown are darker than nature, reading as sophistication rather than sustainability.
There is **no red, no blue, no purple in the brand.** Alert hues (`--state-positive/attention/critical`) are derived
in the same warm register and flagged as derived — replace them if the brand ever defines its own.

**Type.** Single family: **Grandview** — contemporary, functional, moderate personality; communicates competence and
modernity, clarity and professionalism without solemnity. One typeface does display, body and data.
Weights used: 300–700, mostly 400/500/600. Display sizes carry negative tracking (−0.022em at 72px) and tighten
line-height to 1.02; body runs 1.6 with a 62ch measure. Overlines are the only uppercase, at 12px / +0.14em.
Numerals are always tabular.
**⚠️ Grandview is a commercial typeface (URW) and no font file was supplied.** `--font-core` names it first and then
falls back to the system grotesque, so every screen here currently renders in Helvetica/Arial rather than the real
brand face. **Please upload the licensed Grandview webfonts** — drop the `.woff2` into `assets/fonts/` and add the
`@font-face` rule sketched at the top of `tokens/fonts.css`. (If a hosted approximation is ever wanted instead,
Barlow is the closest Google Fonts match; the import line is kept commented in that file.)

**Backgrounds.** Flat brand colour fields, not gradients. The single permitted gradient is a wide, very low-contrast
**radial glow** of Verde Botânico behind a hero (see `HomeScreen`) — a light source, not decoration. Sections
alternate `--bg-page` and `--bg-page-deep`; a full-bleed **Areia Nobre** band is the one high-contrast interruption
and marks the closing CTA. No repeating patterns, no textures, no noise overlays, no blue→purple gradients ever.

**Imagery.** The chromatic direction references two worlds: the **financial ecosystem** (urban environment, buildings,
offices — polished, sophisticated) and the **real economy / natural ecosystem** (environment, factories, forests).
Treatment: cool-leaning, desaturated, deep shadows, no warm filters, no lens flare, no grain. **No photography was
supplied** — image areas in the UI kits render as labelled placeholders. Illustration is not part of the identity;
do not draw substitute SVG illustrations.

**Layout.** `--container-max` 1200px, page gutters 24/48px, section rhythm 96px (128px for hero-adjacent bands).
Grids are asymmetric by preference — `1.15fr 1fr`, `1fr 1.25fr` — with headings capped at ~22ch so the ragged right
edge does the composition work. Fixed elements: the site TopBar is sticky and veiled once scrolled; the app rail and
header are fixed, the content column scrolls.

**Borders & hairlines.** Depth comes from a **1px hairline**, not from shadow: `--border-hair` (sand at 14%),
`--border-mid` (24%), `--border-strong-c` (42%). Dotted 1px separators appear inside plan cards. 2px is reserved for
active-state markers (rail edge, tab underline).

**Corner radii.** 3 / 6 / 10 / 16 / 24 / pill. **Cards are 16px. Inputs and badges are 6px. Only buttons and chips
are pills.** Meters and progress bars are squared with butt caps — data should read as a module, not a capsule.
The app tile uses a ~24% squircle mask.

**Shadows.** On the dark palette shadow is nearly invisible by design: `--shadow-1` a 1px ambient line,
`--shadow-2` a soft −10px pool at 60% for hovered cards, `--shadow-3` only for modals. On the light palette the same
tokens are re-declared softer and cooler. There is **no inner shadow system**; inset surfaces are a darker fill
(`--surface-inset`) plus a hairline.

**Transparency & blur.** Used in exactly three places: the veiled sticky header (`--blur-veil`, 18px), the modal scrim
(deep green at 72% + 6px blur), and hairline/wash alphas. Never blur a content surface, never frost a card.
Protection over imagery uses `--scrim-top` / `--scrim-bottom` linear scrims, not capsules behind text.

**Cards.** `--surface-card` fill, 1px hairline, 16px radius, `--shadow-1`. Interactive cards lift **−2px**, lighten
the fill and go to `--border-mid` + `--shadow-2` over 320ms. **Never a coloured left border.** Recommended plan cards
are marked by a full Menta Suave hairline plus a "Recomendado" overline — not a coloured bar.

**Motion.** *"Preciso e fluido"* — short, functional, smooth; no playful or excessive effects.
Durations 120 / 200 / 320 / 560ms; easing `cubic-bezier(.2,0,0,1)` for UI, `cubic-bezier(.16,1,.3,1)` for surfaces.
Fades and small translates only (≤ 20px, ≤ 2px on hover-lift). **No bounce, no overshoot, no spring, no scale-in on
page load.** Score rings and meters animate their fill over 560ms; everything else is 200ms.

**Hover states.** Primary button lightens the fill (`--action-primary-bg-hover`). Secondary/ghost gain an 8% sand
wash and their text goes to `--text-primary`. Cards lift 2px. Icon buttons gain the same wash and full-strength icon
colour. Nav items brighten text; the active marker never moves. Service marks scale 1.06.
**Press states.** Buttons translate **+1px down** — they do not shrink, darken dramatically, or flash.
**Focus.** `--glow-focus`: a 3px Menta Suave ring at 32%, plus the border switching to `--border-focus`.
**Disabled.** Opacity 0.42 and `not-allowed`; never a grey re-colour.

---

## ICONOGRAPHY

**System: Lucide** (`lucide@0.462.0`), which is what the product actually uses (`import { Mail, Bot, MessageSquare,
FileText, User, LogOut, Settings, Users, Send, Search, ArrowRight, MoveRight } from "lucide-react"`). No icon font, no
sprite sheet, no bespoke icon set exists in the sources.

- **Style:** stroke-only, 1.75 stroke-width (Lucide's default 2 is slightly heavy against Barlow at 14px), 24px grid,
  rendered at 16px (inline/caption), 18px (buttons, nav) or 20px (headers). Colour is always `currentColor`.
- **How to load:** CDN UMD — `<script src="https://unpkg.com/lucide@0.462.0/dist/umd/lucide.js"></script>` — then the
  small `Icon` wrapper in `ui_kits/*/shared.jsx`. In a React app, use `lucide-react` as the repo does.
  This is the product's own icon set, not a substitution.
- **Brand service marks** (`assets/icon-venda.png`, `icon-fusao.png`, `icon-aquisicao.png`, `icon-captacao.png`) are
  **not** Lucide: they are the brand's own overlapping-ring/arrow marks, rendered as PNG. Use them at 64–80px for the
  four service categories, never inline in text. They were recoloured from the old navy to Verde Botânico → Menta
  Suave; originals preserved as `assets/legacy/icon-*-azul.png`.
- **No emoji as icons. No Unicode glyphs as icons** — with two typographic exceptions the brand does use in copy: the
  arrow **→** inside CTA labels (*"Fale com um especialista →"*) and the em dash **—** as the plan-feature bullet.
- **Do not draw new SVG icons.** If Lucide has no match, ask for the asset.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>const { Button, Card, SectionHeading } = window.MaiqDesignSystem_f4bd26;</script>
```

Everything is driven by CSS custom properties — never hard-code a hex. To switch to the day palette, set
`data-theme="claro"` on `<html>` or on any wrapper element.
