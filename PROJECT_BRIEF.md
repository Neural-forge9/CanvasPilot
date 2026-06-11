# AI Website Canvas

AI Website Canvas is a learning-focused portfolio project: an AI-powered landing page generator that turns a natural-language product idea into structured, editable website sections.

The project should be built like a real AI product, but in controlled chunks so the implementation teaches frontend architecture, React/Next.js, TypeScript, backend API routes, LLM integration, structured output, schema validation, version history, deployment, and interview-ready engineering explanations.

## Product Positioning

Target role positioning:

> I build AI-powered software products and apply for roles using the proof of what I build.

Relevant roles:

- AI Product Engineer
- Full-stack AI Engineer
- Software Engineer, AI Products
- Applied AI Engineer
- GenAI Full-stack Developer
- Frontend Engineer at AI product startups

## Product Summary

The user enters a rough product or business idea, such as:

> Build a landing page for an AI fitness coach for busy professionals.

The app generates a structured landing page with sections such as:

- Hero
- Features
- Pricing
- FAQ
- CTA

The user can preview the page, select a section, and edit only that selected section with a natural-language instruction.

Example:

> Make the hero section sound more premium.

Only the Hero section should update. The rest of the page should remain unchanged.

## MVP User

Primary MVP user:

> A startup founder or indie hacker validating a product idea.

## Problem

Creating a first landing page from a rough idea is slow because the user has to write copy, choose sections, refine tone, structure the page, and turn the result into something usable.

## Solution

AI Website Canvas converts user intent into structured application state, then renders that state as UI that can be selected, edited, validated, versioned, and exported.

Core principle:

```text
Natural-language user intent
  -> Structured AI task
  -> LLM response as JSON
  -> Runtime validation
  -> Application state
  -> React UI renderer
  -> Controlled user edits
  -> Versioned state
```

Avoid building a chatbot wrapper.

Weak version:

```text
Prompt -> AI text -> show text
```

Strong version:

```text
Prompt -> AI structured JSON -> validate -> render UI -> select section -> edit section -> preserve state
```

## Core Flow

```text
User opens app
  -> User enters product/business idea
  -> User optionally selects tone and target audience
  -> User clicks Generate
  -> Backend calls LLM
  -> LLM returns structured landing page JSON
  -> Backend validates output
  -> Frontend renders page visually
  -> User clicks a section
  -> Section becomes selected
  -> Right panel shows selected section details
  -> User enters edit instruction
  -> Backend sends selected section + page context to LLM
  -> LLM returns updated section JSON
  -> Frontend replaces only that section
  -> App stores version history
  -> User can restore previous version or export result
```

## MVP Scope

Must include:

- Prompt input
- Tone selector
- Landing page preview rendered from structured JSON
- Section selection
- Section-level editing
- AI page generation
- AI section regeneration
- Schema validation
- Basic version history
- Export as JSON or HTML
- Live deployment

Do not include initially:

- Authentication
- Payments
- Team collaboration
- Custom domains
- Drag-and-drop builder
- Multi-page websites
- Image generation
- Full website hosting
- Advanced CMS features
- Multi-user editing
