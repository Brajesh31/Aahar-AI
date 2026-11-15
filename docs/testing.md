# 🧪 Aahar AI Testing Guide

This guide describes how to validate Aahar AI. The repository includes Create React App test support, Testing Library dependencies, a setup file, and a starter test. The current test looks for the default Create React App “learn react” link and may no longer match the application. Update it to test real Aahar AI behaviour rather than treating starter coverage as complete.

## Table of Contents
- [Commands](#commands)
- [Current Test Setup](#current-test-setup)
- [Testing Strategy](#testing-strategy)
- [Route Tests](#route-tests)
- [AI Tests](#ai-tests)
- [Meal Generator Tests](#meal-generator-tests)
- [Favourites Tests](#favourites-tests)
- [Contact Tests](#contact-tests)
- [Accessibility Tests](#accessibility-tests)
- [Build Validation](#build-validation)
- [Safe Test Data](#safe-test-data)
- [Release Checklist](#release-checklist)

## Commands

```bash
npm ci
npm test
npm test -- --watchAll=false
npm run build
```

## Current Test Setup

The repository contains `src/App.test.js` and `src/setupTests.js`, with React Testing Library and Jest DOM dependencies. The existing assertion expects a “learn react” link. That assertion should be replaced with tests that reflect the current Aahar AI routes and components.

## Testing Strategy

Use multiple layers:
1. Unit tests for reducers and pure helpers.
2. Component tests for form inputs and UI states.
3. Route-level tests for navigation.
4. Mocked integration tests for Google SDK, Axios, and EmailJS.
5. Manual provider checks in controlled accounts.
6. Production build and responsive review.

Avoid live API calls in ordinary unit tests. Mock external services for repeatability.

## Route Tests

Verify `/`, `/about`, `/favorites`, `/meal-generator`, and `/contact-us`. Confirm in-app navigation and direct route handling. BrowserRouter requires a server fallback for nested routes in production.

## AI Tests

Text mode: empty input, valid input, long input, provider failure, quota rejection, empty response, repeated submit, loading cleanup.

Image mode: no file, unsupported MIME type, oversized image, corrupt file, FileReader failure, successful preview, provider failure, empty response, replacing an image before submission.

Mock the Google SDK. Do not store API keys in test fixtures.

## Meal Generator Tests

Mock Axios and test a valid payload, empty meals array, missing meals field, request error, malformed record, and favourite dispatch. The component should not assume an API response always contains a valid meal.

## Favourites Tests

Test initial state, adding, duplicate identity handling, removal by `idMeal`, removal of an unknown record, and malformed items. The current store is in memory and has no persistence middleware.

## Contact Tests

Mock EmailJS. Test required fields, success feedback, failure feedback, and reset behaviour. Use synthetic values for any authorized provider integration test. Never store real visitor messages in fixtures.

## Accessibility Tests

Test keyboard access, visible focus, field labels, status announcements, readable Markdown, meal card controls, mobile layout, and zoom. Automated tests do not replace screen-reader review.

## Build Validation

```bash
npm ci
npm run build
```

A successful build does not prove that provider credentials are valid, external APIs are available, or deployed nested routes work.

## Safe Test Data

- Use non-sensitive cuisine queries.
- Use public or synthetic food images.
- Do not use personal health information.
- Mock AI and EmailJS for ordinary component tests.
- Avoid logging private prompts.
- Do not copy the exposed credential into local test configuration.

## Release Checklist

- [ ] Stale starter test is replaced.
- [ ] Favourites reducer tests pass.
- [ ] AI loading and failure cases are tested.
- [ ] Image validation cases are tested.
- [ ] Meal API empty and error cases are tested.
- [ ] Contact component is tested with a mock.
- [ ] Main routes are checked.
- [ ] Keyboard and responsive behaviour are reviewed.
- [ ] No secret is included in the browser build.
- [ ] Production build succeeds.
