# Página Institucional Maiq

Página institucional (one-pager) da **Maiq** — o hub de fusões e aquisições para médias empresas.
Construída como **Design Component** (`.dc.html`): um único arquivo HTML autocontido que abre direto
no navegador, sem build step, sem npm, sem bundler.

- Idioma: português (pt-BR)
- Identidade visual: **Maiq Design System** (paleta Verde Profundo / Areia Nobre, tipografia Grandview)
- Estrutura da página: hero animado → tese com dados → plataforma/ferramentas → **O Ciclo** (diagrama
  de fluxo do processo de M&A) → jornada → CTA em Areia Nobre → footer
- Dois temas: noturno (padrão) e diurno, alternados por variáveis CSS `--p-*` no escopo `[data-maiq-scope]`

## Como rodar

Não há instalação. Sirva a pasta por HTTP (os `.jsx` e o bundle do design system são carregados por
`fetch`, então `file://` não funciona):

```bash
npx serve .          # ou: python3 -m http.server
# abrir http://localhost:3000/PaginaInstitucional.dc.html
```

## Arquitetura em uma frase

`PaginaInstitucional.dc.html` contém **template** (markup com inline styles), **classe de lógica**
(`class Component extends DCLogic`) e **props**. `support.js` é o runtime que interpreta isso.
Estilo é sempre inline; CSS em `<helmet>` só para `@font-face`, `@keyframes` e resets.

## Mapa de arquivos

### Raiz — a página e seu runtime

| Arquivo | Papel |
| --- | --- |
| `PaginaInstitucional.dc.html` | **O entregável.** Toda a página: markup, animações de scroll, revelação de seções, troca de tema dia/noite, o diagrama "O Ciclo" (SVG com círculos percorrendo trechos e alternando em losangos), logo que "voa" do hero para o header. É o único arquivo que precisa ser editado para mudar a página. |
| `support.js` | Runtime dos Design Components: parseia o template, resolve os holes `{{ }}`, monta `<sc-for>` / `<sc-if>` / `<x-import>`, liga a classe de lógica ao React. **Não editar** — é infraestrutura gerada. |
| `ds-base.js` | Carrega o bundle do design system (`_ds/.../_ds_bundle.js`) e expõe `window.MaiqDesignSystem_f4bd26`. Usado pelas explorações; a página principal referencia os stylesheets/bundle direto no `<helmet>`. Se mover a pasta `_ds`, ajuste a linha `base` aqui. |

### Animação da plataforma (seção "M&AI / VDR")

Carregados juntos via `<x-import component-from-global-scope="VdrEmbed" from="./animations-v3.jsx ./tweaks-panel.jsx ./vdr-scene.jsx ./vdr-embed.jsx">`.
A ordem importa: cada um depende dos anteriores.

| Arquivo | Papel |
| --- | --- |
| `animations-v3.jsx` | Engine de animação por timeline: um relógio de autoria único, lista de cenas declarada em `window.OM_SCENES`, interpolação contínua entre cenas. Base para as demais. |
| `vdr-scene.jsx` | A cena em si: os documentos que entram pelas bordas, duplicatas fantasma, consolidação no centro — a metáfora visual do data room. |
| `vdr-embed.jsx` | Wrapper que embute a cena dentro da página (dimensiona, sincroniza com o scroll, respeita o tema). É o componente montado pelo template. |
| `tweaks-panel.jsx` | Painel de controles usado durante o desenvolvimento da animação (trims, velocidade). Dependência da engine; não aparece na página publicada. |

### Design system (não editar à mão)

| Caminho | Papel |
| --- | --- |
| `_ds/maiq-design-system-.../_ds_bundle.js` | Componentes React do design system (`Button`, `Card`, `SectionHeading`, `StatBlock`, etc.) sob o namespace global `MaiqDesignSystem_f4bd26`. |
| `_ds/.../styles.css` | Entry point de CSS — só `@import`s. |
| `_ds/.../tokens/*.css` | Tokens: `fonts`, `colors`, `typography`, `spacing`, `radius`, `elevation`, `motion`, `semantic`, `base`. Toda cor/medida da página deve vir de `var(--*)` daqui. |
| `_ds/.../_ds_manifest.json`, `readme.md`, `_adherence.oxlintrc.json` | Manifesto, guia da marca e regras de lint de aderência ao design system. |
| `assets/logo-maiq-*.png` | Wordmark Maiq em três colourways: branco (tema noturno), Madeira de Lei (tema diurno), Verde Botânico. |
| `assets/tool-*.webp` | Logos das ferramentas exibidas na seção de plataforma (OpenAI, Claude, Gemini, Perplexity, NotebookLM, n8n). |

## Convenções ao editar

- **Estilo é inline.** Sem classes CSS, sem stylesheet próprio. As únicas regras em `<helmet>` são
  `@keyframes`, resets e supressão de scrollbar.
- **Nada de expressão nos holes.** `{{ a.b }}` só aceita caminho pontilhado; qualquer cálculo
  (ternário, `.map`, comparação) vive em `renderVals()` na classe de lógica e é exposto por nome.
- **Nunca hard-code hex** quando existir token: use `var(--p-*)` (escopo da página) ou `var(--*)` (design system).
- **Sem emoji, sem ALL-CAPS** (exceto overlines de 12px e os nomes `QUARPX®` / `M&AI`).
- Motion: 120/200/320/560ms, `cubic-bezier(.2,0,0,1)` para UI e `cubic-bezier(.16,1,.3,1)` para superfícies.
  Sem bounce, sem overshoot.

## Estado atual

A seção **O Ciclo** foi o último foco: velocidade dos círculos reduzida, halo luminoso refeito com
gradientes radiais suaves, três círculos no fluxo principal e um no ciclo de PMI, losangos com regra
"uma chegada = uma saída" (alternância no nível do trecho), "Full Exit" reposicionado à esquerda de
"Signing & Closing", e correções de jitter de texto no SVG (`text-rendering="geometricPrecision"`,
remoção de `mix-blend-mode`).
