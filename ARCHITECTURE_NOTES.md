# Architecture Notes: Chunk 1

This chunk teaches the first core idea of the app:

```text
Structured data -> React components -> visible UI
```

For now, the landing page data is hardcoded. Later, the same kind of data can come from an AI API.

## File Roles

### `src/types/landing-page.ts`

Defines the TypeScript shapes for the landing page data.

Think of this file as the contract:

```text
What should a landing page object look like?
What kinds of sections are allowed?
What fields does each section need?
```

### `src/lib/sample-page.ts`

Contains one hardcoded example landing page.

Think of this file as the fake AI response for now. It gives the app real structured data to render before we connect an LLM.

### `src/app/page.tsx`

This is the homepage route.

It creates the main three-panel screen and passes `sampleLandingPage` into the preview component.

Think of this file as the screen composer.

### `src/components/landing-page-preview.tsx`

Receives a landing page object and renders its sections.

It loops over:

```ts
page.sections
```

Then it decides which section component to show based on:

```ts
section.type
```

### Section Components

The section components are inside `landing-page-preview.tsx` for now:

- `HeroPreview`
- `FeaturesPreview`
- `PricingPreview`
- `FaqPreview`
- `CtaPreview`

Each one knows how to render one section type.

Later, we may move them into separate files if the component grows.

### `src/app/layout.tsx`

Wraps the whole app.

It defines the root HTML structure and imports global CSS.

Think of it as the app frame that surrounds every page.

## Data Flow

```text
sampleLandingPage
  -> page.tsx
  -> LandingPagePreview
  -> section components
  -> visible landing page UI
```

In plain English:

1. `sample-page.ts` creates the landing page data.
2. `page.tsx` imports that data.
3. `page.tsx` passes it to `LandingPagePreview`.
4. `LandingPagePreview` loops through the sections.
5. Each section is rendered by the matching section component.

## Why This Matters

This is the foundation of the AI product.

Later, the data source changes:

```text
sample-page.ts
```

becomes:

```text
LLM-generated JSON from an API route
```

But the rendering idea stays the same:

```text
structured landing page data -> React UI
```
