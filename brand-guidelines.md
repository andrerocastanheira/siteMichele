# Directive: WOMAN – Website Protótipo de Alta Fidelidade

## Objetivo
Construir um site institucional premium para a WOMAN – Instituto de Saúde Integrativa,
da Dra. Michele Carvalho Colchete, especialista em Fisioterapia Pélvica.
Site de alto nível, estilo SPA médico feminino de luxo — não clínica hospitalar.

## Stack técnica
```
Next.js 14 (App Router)
TypeScript
Tailwind CSS
Framer Motion (todas as animações)
React Hook Form + Zod (formulários)
Lucide React (ícones)
```

## Configuração Tailwind
Estender o tema com as cores da marca em `tailwind.config.ts`:
```js
colors: {
  primary:   '#8B5E3C',
  gold:      '#B8913A',
  'gold-light': '#D4AF6A',
  bg:        '#FAF7F4',
  surface:   '#F2EBE3',
  dark:      '#2C1A0E',
  muted:     '#8C7B6B',
  border:    '#DDD0C4',
}
```

## Fontes (layout.tsx)
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@400;500;600;700&display=swap
```
- Headings: `font-['Cormorant_Garamond']`
- Body: `font-['DM_Sans']`

---

## Estrutura de páginas

### `/` — Homepage
### `/sobre` — Sobre a Dra. Michele
### `/servicos` — Serviços detalhados
### `/para-si` — Para quem é (condições tratadas)
### `/agendamento` — Marcação de consulta
### `/contactos` — Localização e contactos

---

## Componentes globais

### `TopBar`
- Altura 32px, fundo `#2C1A0E`, texto branco 11px
- 3 mensagens em marquee loop contínuo:
  - "✦ Consultas presenciais em [cidade]"
  - "✦ Fisioterapia Pélvica especializada para a mulher"
  - "✦ Marque a sua consulta online — rápido e sem esperas"

### `Navbar`
- Logo WOMAN centrado ou à esquerda (usar SVG ou text se não houver PNG)
- Links: Início | Sobre | Serviços | Para Si | Contactos
- Botão CTA à direita: "Marcar Consulta" (fundo `--color-primary`, texto branco)
- **Scroll behavior:**
  - Sobre hero: completamente transparente, tudo branco/dourado
  - Após 80px: fundo `#FAF7F4` sólido, sombra suave, elementos escuros
  - Transição suave 0.3s
- Mobile: hamburger com drawer lateral suave

### `Footer`
- Fundo `#2C1A0E`
- 3 colunas: Logo + tagline | Links rápidos | Contactos
- Linha decorativa dourada no topo (1px, gradiente gold)
- Botão WhatsApp verde `#25D366`
- Copyright cinzento suave

---

## Página: Homepage (`/`)

### Secção 1 — Hero Fullscreen
- Imagem: `/public/images/sala-tratamento-premium.jpg`
- Overlay: `rgba(44, 26, 14, 0.50)`
- Conteúdo centrado ou alinhado à esquerda:
  - Tag linha: "FISIOTERAPIA PÉLVICA · SAÚDE FEMININA INTEGRATIVA" (Cormorant Garamond itálico, tracking wide, cor dourada)
  - Título: "A sua saúde pélvica merece atenção especializada" — Cormorant Garamond 72px desktop, branco
  - Subtítulo DM Sans: "Cuidados especializados para a mulher em cada fase da sua vida." — branco 75% opacidade
  - 2 CTAs: "Marcar Consulta" (filled branco/terracota) + "Conhecer os Serviços" (outline branco)
- Linha de credibilidade no fundo do hero:
  - "Especialista Certificada" | "Atendimento Personalizado" | "Abordagem Integrativa"
  - Separadores dourados, Cormorant Garamond

### Secção 2 — Apresentação rápida
- Layout split: texto à esquerda, foto à direita
- Foto: `/public/images/doutora-coluna.jpg`
- Texto:
  - Label gold: "Sobre a Dra. Michele"
  - Título: "Uma especialista que a compreende"
  - Parágrafo: apresentação breve, empoderador
  - Link: "Conhecer a minha história →"
- Fundo: `--color-bg`

### Secção 3 — Para Quem É
- Fundo: `--color-surface`
- Título centrado: "Para si, em cada fase da vida"
- 4 cards em grid 2x2 (desktop) ou 1 coluna (mobile):
  1. **Gravidez** — imagem `gravida-clinica.jpg` + ícone + descrição
  2. **Pós-Parto** — ícone + descrição
  3. **Menopausa** — ícone + descrição  
  4. **Pavimento Pélvico** — ícone + descrição
- Cards: border-radius 20px, imagem no topo ou ícone dourado, título Cormorant, hover com sombra suave

### Secção 4 — Serviços (preview)
- Fundo: `--color-bg`
- Título: "Os nossos serviços"
- 3 cards horizontais:
  1. Avaliação e Tratamento Pélvico
  2. Preparação para o Parto
  3. Recuperação Pós-Parto
- Cada card: ícone Lucide, título, 2 linhas descrição, link "Saber mais →"
- CTA: "Ver todos os serviços →"

### Secção 5 — Diferenciais / Pilares
- Fundo: `#2C1A0E` (escuro)
- 3 colunas com ícone + título + texto:
  1. "Especialização Certificada"
  2. "Abordagem Integrativa"
  3. "Cuidado Personalizado"
- Texto branco, ícones dourados

### Secção 6 — Testemunhos
- Fundo: `--color-surface`
- Título: "O que dizem as nossas pacientes"
- 3 cards de testemunho:
  - Aspas grandes em dourado
  - Texto do testemunho em Cormorant Garamond itálico
  - Nome + condição tratada (ex: "Ana P. — Recuperação Pós-Parto")
- (Dados placeholder — realistas mas fictícios)

### Secção 7 — CTA Final
- Imagem de fundo: `/public/images/textura-linho.jpg` + overlay terracota 70%
- Título grande: "Dê o primeiro passo para o seu bem-estar"
- Subtítulo + 2 botões: "Agendar Consulta" + "Falar por WhatsApp"

---

## Página: Sobre (`/sobre`)

### Hero
- Split layout: foto `/public/images/michele-blazer-rosa.jpg` à direita
- Esquerda: título, credenciais, frase de missão pessoal
- Fundo `--color-bg`

### Bio detalhada
- Formação, especialização, filosofia de trabalho
- Imagem secundária: `michele-modelo-pelvico.jpg`

### Números
- Fundo `--color-primary`
- 3 métricas: Anos de experiência | Pacientes acompanhadas | Formações especializadas
- Números grandes Cormorant Garamond, brancos

---

## Página: Serviços (`/servicos`)

### Hero
- Imagem: `sala-tratamento-equipamento.jpg`
- Overlay escuro, título "Os Nossos Serviços"

### Lista de serviços
- Grid 2 colunas, cada serviço com:
  - Ícone Lucide (dourado)
  - Título (Cormorant)
  - Descrição detalhada
  - "Saber mais" com accordeon ou expand

**Serviços incluir:**
- Avaliação do Pavimento Pélvico
- Fisioterapia na Gravidez
- Recuperação Pós-Parto
- Tratamento de Incontinência Urinária
- Disfunção Sexual Feminina
- Preparação para o Parto
- Endometriose e Dor Pélvica Crónica
- Menopausa e Perímenopausa

---

## Página: Para Si (`/para-si`)

### 4 secções em scroll:
Cada uma com imagem, título, sintomas/indicações, CTA marcação.

1. **Na Gravidez** — imagem `gravida-clinica.jpg`
2. **No Pós-Parto** — imagem placeholder beige
3. **Na Menopausa** — imagem placeholder beige
4. **Dor e Disfunção Pélvica** — imagem placeholder beige

---

## Página: Agendamento (`/agendamento`)

### Hero simples
- Fundo `--color-surface`, título elegante
- Subtítulo: "Reserva a sua consulta de forma simples e rápida"

### Formulário central (max-width 640px, centrado)
Campos:
- Nome completo | Telemóvel
- Email | Data preferida (date picker)
- Motivo da consulta (select): Gravidez | Pós-Parto | Menopausa | Pavimento Pélvico | Outro
- Hora preferida (select: 09:00–18:00)
- Como nos conheceu (select)
- Mensagem / observações (textarea)

Botão: "Enviar Pedido de Marcação" (fundo `--color-primary`, 52px altura, largura total)
POST para `/api/agendamento` (webhook placeholder)
Loading + toast de sucesso: "✓ Pedido recebido! Entraremos em contacto em breve."

### Validação
- React Hook Form + Zod
- Erros inline por campo
- Loading state no botão

---

## Página: Contactos (`/contactos`)

### Layout 2 colunas
**Esquerda:**
- Cada item: ícone Lucide dourado + label + valor
- Telefone, Email, Morada, Horário
- Botão WhatsApp verde grande
- Botão "Ligar agora" outline

**Direita:**
- iframe Google Maps (placeholder com cidade)
- border-radius 16px, sombra suave

---

## Animações (Framer Motion)

### Regras globais
- Entrada de secção: `opacity: 0→1` + `y: 30→0`, duração 0.6s
- Cards em stagger: delay 0.1s entre cada
- Trigger: `whileInView` com `once: true`, margin `"-80px"`
- Easing: `[0.25, 0.1, 0.25, 1]`

### Específicas
- Hero: stagger entrada — tag → título → subtítulo → botões → credenciais
- Contadores (números): 0→valor, 2s, ease-out, trigger viewport
- Cards: hover `translateY(-4px)` + box-shadow suave, spring `stiffness: 300`
- Botões: `whileHover: scale(1.02)`, `whileTap: scale(0.98)`
- Navbar: transição cor com spring suave

---

## Qualidade e Standards

### Performance
- `next/image` para todas as imagens com sizes corretos
- `priority` apenas nas imagens above-the-fold (hero)
- Fontes com `display=swap`

### Acessibilidade
- Todos os inputs com `label` e `htmlFor`
- `aria-label` em botões icon-only
- Contraste mínimo AA (texto sobre backgrounds bege)

### Responsivo
- Mobile-first
- Breakpoints: sm(640) md(768) lg(1024) xl(1280)
- Grids: 1 coluna mobile → 2 tablet → 3/4 desktop
- Navbar hamburger abaixo de 768px

### Código
- TypeScript strict, sem `any`
- Componentes em `/components/`
- Dados mockados em `/lib/data.ts`
- `npm run build` deve passar sem erros

---

## Dados mockados (`/lib/data.ts`)

Incluir:
- Lista de serviços (nome, ícone, descrição curta, descrição longa)
- Lista "para quem é" (título, subtítulo, sintomas, imagem)
- Testemunhos (3–4, texto, nome, condição)
- Credenciais da Dra. Michele (formações, anos exp, etc.)
- Info de contacto (telefone, email, morada, horário, whatsapp)

---

## Ordem de construção recomendada

1. Setup Next.js 14 + instalar dependências
2. Configurar Tailwind com cores da marca + Google Fonts
3. `/lib/data.ts` — todos os dados mockados
4. Componentes globais: `TopBar`, `Navbar`, `Footer`
5. Homepage completa (secção a secção)
6. Página `/sobre`
7. Página `/servicos`
8. Página `/para-si`
9. Página `/agendamento` com formulário validado
10. Página `/contactos`
11. Revisão animações + responsivo mobile
12. `npm run build` — zero erros