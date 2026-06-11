# Learning Roadmap

This roadmap keeps the project focused on learning through implementation. Each phase should produce working software and one interview-ready explanation of the technical decision made.

## Phase 0: Project Setup

Goal: create the app foundation without involving AI yet.

Build:

- Next.js app with TypeScript
- Basic app shell with three zones:
  - prompt/control panel
  - landing page preview
  - selected section editor
- Initial hardcoded landing page JSON
- Renderer that displays the page from structured state

Learn:

- React component composition
- TypeScript object modeling
- State ownership
- Controlled inputs
- Separating data shape from UI rendering

Interview explanation:

> I modeled the AI output as application state first, then built a renderer around that schema. This prevents the app from becoming a text-generation wrapper.

## Phase 1: Data Model And Renderer

Goal: make the page schema explicit and render every section from typed data.

Build:

- `LandingPage` TypeScript type
- Section union types:
  - `hero`
  - `features`
  - `pricing`
  - `faq`
  - `cta`
- A section renderer with one component per section type
- Click-to-select section behavior
- Right panel showing selected section data

Learn:

- TypeScript discriminated unions
- Props and component boundaries
- Stable IDs for editable entities
- Rendering dynamic UI from structured data

Interview explanation:

> I used discriminated unions so each landing page section has a clear contract while still allowing the renderer to support different section shapes.

## Phase 2: Local Editing Without AI

Goal: prove section-level updates work before adding LLM complexity.

Build:

- Manual edit controls for selected section fields
- Update only the selected section
- Preserve all other sections unchanged
- Basic version history with restore

Learn:

- Immutable state updates
- Local reducer patterns
- Version snapshots
- Why AI editing should update state, not raw HTML

Interview explanation:

> Before connecting the LLM, I built deterministic local editing so I could prove that section replacement and history worked independently from AI reliability.

## Phase 3: Schema Validation

Goal: validate generated and edited page data at runtime.

Build:

- Zod schemas matching the TypeScript types
- Validation for full landing pages
- Validation for individual section updates
- Friendly error state when validation fails

Learn:

- Runtime validation vs TypeScript compile-time types
- Trust boundaries between backend and frontend
- Defensive handling of AI output

Interview explanation:

> TypeScript protects my own code, but Zod validates data crossing the AI/API boundary at runtime.

## Phase 4: Backend API Routes

Goal: move generation into backend routes before calling a real model.

Build:

- `POST /api/generate-page`
- `POST /api/edit-section`
- Mock backend responses that return valid structured JSON
- Frontend loading/error states

Learn:

- Next.js route handlers
- Request/response contracts
- Client/server boundaries
- API error handling

Interview explanation:

> I added API routes before real LLM calls so the frontend could depend on stable contracts while the backend implementation changed behind them.

## Phase 5: LLM Integration

Goal: replace mocks with real structured model output.

Build:

- OpenAI API integration
- Prompt for full-page generation
- Prompt for single-section regeneration
- Strict JSON/schema output
- Server-side validation before returning data to the client

Learn:

- Prompt design for structured output
- AI reliability patterns
- Environment variables and secret handling
- Keeping model output inside product constraints

Interview explanation:

> The LLM does not directly control the UI. It proposes structured data, and the app validates that data before using it.

## Phase 6: Export And Polish

Goal: make the project portfolio-ready.

Build:

- Export page as JSON
- Export page as static HTML
- Empty, loading, error, and success states
- Responsive layout
- Basic deployment

Learn:

- Product finishing
- Deployment workflow
- Frontend quality checks
- How to demo the project clearly

Interview explanation:

> The final product demonstrates the full AI product loop: intent, structured generation, validation, rendering, editing, history, and export.

## Current Next Step

Start with Phase 0.

Do not connect AI yet. Build the interface around hardcoded structured page data first. This makes the core product architecture visible before adding model uncertainty.

Recommended first milestone:

```text
Create a Next.js + TypeScript app.
Render a hardcoded landing page from JSON.
Click a section to select it.
Show the selected section in a side panel.
```
