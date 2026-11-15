# 🗺️ Aahar AI Roadmap

This document records possible maintenance improvements. It is not a release schedule or a claim that these items are implemented. Track active work in issues and update this file as priorities change.

## Table of Contents
- [Planning Principles](#planning-principles)
- [Security](#security)
- [AI Quality](#ai-quality)
- [Food and Nutrition](#food-and-nutrition)
- [Meal Discovery](#meal-discovery)
- [Favourites](#favourites)
- [Accessibility](#accessibility)
- [Testing](#testing)
- [Developer Experience](#developer-experience)
- [Prioritization](#prioritization)
- [Definition of Done](#definition-of-done)

## Planning Principles

Prioritize real visitor and maintainer problems. Security exposure and broken core flows rank above cosmetic refinements. Avoid adding dependencies or backend complexity without a clear reason.

## Security

- Rotate the exposed AI credential.
- Remove it from active source and review history/builds.
- Move privileged AI requests to a server-side endpoint.
- Add validation, size limits, rate limiting, and usage monitoring.
- Review EmailJS configuration and restrictions.
- Avoid private credentials in client-side build variables.

## AI Quality

- Empty-input validation.
- Better loading, failure, timeout, and retry states.
- Image type and size validation.
- Structured responses.
- Prompt evaluation with representative samples.
- Uncertainty wording for ambiguous images.
- Privacy-aware diagnostics.

## Food and Nutrition

- Clarify price uncertainty.
- Avoid medical or therapeutic claims.
- Avoid allergen safety guarantees.
- Explain limitations of image-based nutrition estimation.
- Separate provider-sourced facts from generated commentary.

## Meal Discovery

- Add clear loading and error states.
- Handle empty TheMealDB responses.
- Improve meal details and instructions layout.
- Consider category or ingredient discovery only after verifying provider endpoints.
- Add retry and cancellation behaviour.

## Favourites

- Prevent duplicate meal IDs.
- Add reducer tests.
- Decide whether local persistence is needed.
- Document retention and clear-data behaviour if persistence is added.
- Do not promise cloud synchronization without a backend and identity model.

## Accessibility

- Replace the mobile-blocking alert with responsive layouts.
- Improve field labels and file selection feedback.
- Add accessible loading and error announcements.
- Improve keyboard focus and screen reader flow.
- Review AI Markdown and meal cards.

## Testing

- Replace stale Create React App starter assertion.
- Test favourites reducer.
- Test AI components with mocked SDK.
- Test Axios response edge cases.
- Test EmailJS component with a mock.
- Add CI checks only after validating the workflow.

## Developer Experience

- Document Node.js support.
- Keep npm lockfile current.
- Make provider setup clear and safe.
- Document test mocks and local workflows.
- Keep architecture and route documentation current.

## Prioritization

Assess impact, security severity, reproducibility, effort, risk, provider dependencies, and ability to validate outcomes. Do not prioritize features only because they sound impressive.

## Definition of Done

- [ ] The problem is clearly defined.
- [ ] Implementation is focused and maintainable.
- [ ] Inputs and provider responses are validated.
- [ ] Loading, empty, and error states work.
- [ ] Security and privacy are reviewed.
- [ ] Accessibility and responsive impact are checked.
- [ ] Tests are added or updated.
- [ ] Production build succeeds.
- [ ] Documentation is updated.
- [ ] Limitations are recorded.

The roadmap should reflect actual project priorities, not promises or wish lists.
