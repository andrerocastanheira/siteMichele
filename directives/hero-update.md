# Directive: Atualizar Hero da Homepage

## Objetivo
Substituir ou ajustar o hero da homepage (`/frontend/app/page.tsx`) com nova imagem e/ou
tratamento visual, mantendo a identidade WOMAN e o comportamento correto em desktop e mobile.

---

## Inputs obrigatórios

| Campo | Descrição | Exemplo |
|---|---|---|
| `imagem` | Caminho relativo a `/public/images/` | `hero-mulher-pelvis-linho.png` |
| `foco_desktop` | Lado da imagem com o sujeito principal | `right` / `left` / `center` |
| `foco_mobile_y` | Posição vertical do crop em mobile (0%=topo, 100%=fundo) | `52%` |
| `altura_mobile` | Altura da faixa de imagem em mobile | `48vh`, min `260px`, max `400px` |
| `filtro_css` | Filtro de cor a aplicar na tag `<Image>` | `sepia(18%) saturate(78%) brightness(1.04)` |
| `overlay_desktop` | Gradiente de legibilidade do texto (lado do texto → transparente) | ver secção Overlay |
| `conteudo` | Lista do que aparece na área de texto | eyebrow, h1, subtítulo, chips, CTAs |

---

## Overlay — valores de referência

O overlay é aplicado sobre a imagem de fundo para garantir legibilidade do texto.
Nunca usar preto/escuro como base — usar sempre as variáveis de bege da paleta WOMAN.

```
/* Texto à esquerda, imagem à direita */
linear-gradient(to right,
  rgba(250,247,244,0.92) 0%,
  rgba(250,247,244,0.70) 38%,
  rgba(250,247,244,0.28) 62%,
  transparent 82%
)

/* Texto à direita, imagem à esquerda */
linear-gradient(to left, ...)  /* inverter os mesmos valores */

/* Overlay escuro (caso excepcional, hero com imagem muito clara sem contraste) */
rgba(44, 26, 14, 0.55)  /* --color-overlay — usar com parcimónia */
```

---

## Filtro de cor — warm monochromatic

Objetivo: a imagem integra-se na paleta bege/terracota sem parecer filtrada artificialmente.
Ponto de partida testado e aprovado:

```css
filter: sepia(18%) saturate(78%) brightness(1.04)
```

Ajustes:
- Mais quente/integrado → aumentar `sepia` (até ~30%)
- Menos saturação → baixar `saturate` (até ~65%)
- Imagem escura → aumentar `brightness` (até ~1.10)

---

## Estrutura do componente

### Desktop (≥ md)
- Secção: `md:h-screen`, `background: var(--color-bg)`
- Imagem: `fill`, `object-cover`, `object-{foco_desktop}`, com filtro CSS
- Overlay: `absolute inset-0`, gradiente da esquerda ou direita conforme `foco_desktop`
- Conteúdo: `md:absolute md:inset-0 md:flex md:flex-col md:justify-center`, `max-w-7xl px-6`
- Scroll indicator: `hidden md:flex absolute bottom-8 left-1/2`

### Mobile (< md)
- Faixa de imagem: `md:hidden`, altura `{altura_mobile}`, `overflow-hidden`
- Imagem: `fill`, `object-cover`, `objectPosition: right {foco_mobile_y}`
- Fade inferior: gradiente de `transparent → var(--color-bg)` nos últimos 18% da altura
- Bloco de texto: flui naturalmente abaixo da faixa, `background: var(--color-bg)`, `pt-2 pb-12`

---

## Conteúdo da área de texto

Ordem padrão (todos opcionais exceto h1 e CTA principal):

1. **Eyebrow** — `0.8rem`, italic, `--color-gold`, `letterSpacing: 0.18em`
2. **H1** — Cormorant Garamond, `clamp(30px, 4.2vw, 58px)`, `--color-dark`, weight 300
3. **Subtítulo** — DM Sans, `text-base`, `--color-muted`, `lineHeight: 1.75`
4. **Chips de serviços** — pills com border `--color-gold` 45% opac., bg `--color-surface` 80%, texto `--color-primary`
5. **CTA principal** — `background: var(--color-gold)`, texto branco
6. **CTA secundário** — border `--color-primary`, texto `--color-primary`

Para remover um elemento, simplesmente não o incluir — não deixar markup vazio.

---

## Ficheiros a editar

| Ficheiro | O quê |
|---|---|
| `frontend/app/page.tsx` | Secção hero (Section 1, linhas ~25–120) |
| `frontend/components/Navbar.tsx` | Só se mudar o fundo do hero entre claro ↔ escuro |

### Navbar — regra de ouro
- **Hero claro** (overlay bege, texto escuro): navbar usa `--color-dark` em todos os estados — **nunca branco**
- **Hero escuro** (overlay dark, texto branco): navbar usa `white` no estado transparente, `--color-dark` após scroll

---

## Checklist antes de fazer commit

- [ ] `npm run build` sem erros a partir de `/frontend/`
- [ ] Desktop: texto legível sobre a imagem sem overlay demasiado pesado
- [ ] Mobile: barriga + mãos visíveis no crop; texto não sobrepõe a figura
- [ ] Navbar: links visíveis antes e após scroll
- [ ] Nova imagem adicionada a `frontend/public/images/` e incluída no commit

---

## Edge Cases

- **Imagem muito clara** (ex: fundo branco): aumentar `sepia` e reduzir `brightness` para ter contraste com o fundo do site
- **Sujeito centrado na imagem** (sem "lado limpo"): usar `foco_desktop: center` e overlay em ambos os lados ou overlay suave uniforme
- **Imagem landscape estreita** (altura < 800px): em mobile usar `object-position: center top` para não cortar o sujeito pelo topo
- **Texto muito longo no H1**: reduzir `max-w` de `2xl` para `xl` e verificar o clamp mínimo em ecrãs de 320px

---

## Notas

- Atualizado 2026-03-31: diretiva criada com base na implementação do hero `hero-mulher-pelvis-linho.png`.
  Lições: especificar sempre `foco_mobile_y` e `altura_mobile` desde o início evita iterações de ajuste de crop.
  O overlay bege em vez de escuro requer atualização da navbar (texto branco → escuro).
