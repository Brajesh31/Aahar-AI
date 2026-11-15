# 🤝 Contributing to Aahar AI

Thank you for considering contributing to Aahar AI. This guide explains how to understand the current application, prepare a development environment, propose a change, implement it responsibly, test it, and prepare a focused contribution for review.

Aahar AI combines React pages, Google Generative AI requests, external meal data, Redux favourites state, and an EmailJS contact form. These integrations have different failure modes and trust boundaries. A high-quality contribution should consider more than whether the component renders.

## 📚 Table of Contents

- [Contribution Principles](#-contribution-principles)
- [Ways to Contribute](#-ways-to-contribute)
- [Before Starting](#-before-starting)
- [Development Environment](#-development-environment)
- [Repository Architecture](#-repository-architecture)
- [Issue and Proposal Guidelines](#-issue-and-proposal-guidelines)
- [Branching and Commits](#-branching-and-commits)
- [React Component Guidelines](#-react-component-guidelines)
- [AI Integration Guidelines](#-ai-integration-guidelines)
- [Image Upload Guidelines](#-image-upload-guidelines)
- [State Management Guidelines](#-state-management-guidelines)
- [External API and Contact Integration](#-external-api-and-contact-integration)
- [UX and Accessibility](#-ux-and-accessibility)
- [Security and Privacy](#-security-and-privacy)
- [Testing and Validation](#-testing-and-validation)
- [Pull Request Preparation](#-pull-request-preparation)
- [Review Expectations](#-review-expectations)
- [Documentation Requirements](#-documentation-requirements)
- [Contributor Checklist](#-contributor-checklist)
- [Changes to Avoid](#-changes-to-avoid)
- [Getting Help](#-getting-help)

## 🎯 Contribution Principles

A good contribution should:
1. Solve a clear user or maintainer problem.
2. Fit the current React and Create React App architecture unless a migration is intentionally proposed.
3. Preserve useful behaviour in existing routes.
4. Handle loading, empty, and error states.
5. Treat external responses as untrusted input.
6. Keep credentials and visitor data private.
7. Include meaningful validation evidence.
8. Update documentation when behaviour or configuration changes.

Do not add complexity simply because a library or framework is popular. A new dependency should have a clear benefit that outweighs the maintenance and bundle-size cost.

## 🧭 Ways to Contribute

| Area | Examples | Evidence |
|---|---|---|
| Food discovery | Better cuisine input and meal suggestions | Clear user scenario |
| Image AI | File validation and better feedback | Supported file tests |
| Meal generator | Retry, details, empty states | Provider response cases |
| Favourites | Duplicate prevention or persistence proposal | State transition tests |
| AI reliability | Error handling, request state, model compatibility | Controlled provider test |
| Security | Remove exposed credential and move AI requests server-side | Secret scan and safe architecture |
| Accessibility | Labels, focus, status announcements | Keyboard and screen reader review |
| UI | Responsive layout and clear controls | Screenshots at multiple widths |
| Documentation | Setup, API flow, privacy, troubleshooting | Verified instructions |

Non-code contributions such as reproducible bug reports, documentation corrections, and accessibility findings are also useful.

## 🔎 Before Starting

Before implementing a change:
- Read the root README and relevant documents in `docs/`.
- Check existing issues and pull requests.
- Inspect the relevant page and its child components.
- Trace API requests and state updates.
- Confirm whether the behaviour already exists.
- Identify effects on external providers, data handling, or secrets.
- Discuss large architectural changes before starting a broad implementation.

Do not assume that a feature mentioned in project copy is implemented exactly as described. Verify it in source code.

## 🛠️ Development Environment

Requirements:
- Node.js 18 or newer, subject to toolchain compatibility.
- npm.
- Git.
- A modern browser.
- Network access for dependencies and external providers.

Clone and install:

```bash
git clone https://github.com/Brajesh31/Aahar-AI.git
cd Aahar-AI
npm ci
```

Start the development server:

```bash
npm start
```

Run tests in non-watch mode:

```bash
npm test -- --watchAll=false
```

Create a production build:

```bash
npm run build
```

The application uses Create React App through `react-scripts`. Do not assume Vite commands, scripts, or configuration files exist in this repository.

## 🗂️ Repository Architecture

| Path | Responsibility |
|---|---|
| `src/App.js` | Root component |
| `src/AppRouter.js` | Route definitions and router |
| `src/components/` | Navigation and AI interaction components |
| `src/pages/` | Home, About, Favorites, Meal Generator, Contact |
| `src/core/config.js` | Meal API base URL |
| `src/helpers/imageHelper.js` | File-to-Base64 utility |
| `src/state/slices/` | Redux Toolkit slices |
| `src/state/store/` | Redux store |
| `src/index.js` | Application mount and provider setup |
| `public/` | Static assets and metadata |

Inspect the actual files before relying on this map. Keep new files in a consistent location and avoid moving existing modules without a clear migration plan.

## 💡 Issue and Proposal Guidelines

### Bug report

Include:
- A concise title.
- Affected route or component.
- Browser and operating system.
- Steps to reproduce.
- Expected and actual result.
- Whether the problem is consistent.
- Sanitized console or network output.

### Feature proposal

Include:
- User problem and target workflow.
- Expected behaviour.
- Proposed approach and alternatives.
- Dependencies or provider requirements.
- Privacy and security considerations.
- Acceptance criteria.
- Validation plan.

For AI features, explain what the model is expected to do and how incorrect or unsafe output will be handled.

## 🌿 Branching and Commits

Create a focused branch from the latest main:

```bash
git checkout main
git pull origin main
git checkout -b feat/meal-search-validation
```

Suggested prefixes:

- `feat/` for new functionality.
- `fix/` for a defect.
- `docs/` for documentation.
- `test/` for tests.
- `security/` for security improvements.
- `chore/` for maintenance.
- `a11y/` for accessibility.

Use descriptive commit messages:

```text
feat: add meal search input validation
fix: handle empty random meal response
docs: clarify AI provider configuration
test: cover favourites reducer actions
security: remove browser-exposed AI credential
```

Keep changes scoped. Do not mix unrelated framework migrations, design rewrites, dependency upgrades, and feature development in one contribution.

## ⚛️ React Component Guidelines

The application uses React 18 with JavaScript components.

- Follow the existing component patterns in the affected area.
- Keep page-level composition separate from reusable UI where practical.
- Use semantic elements and controlled inputs when appropriate.
- Keep state as close as practical to the component that owns it.
- Use effects for synchronization with external systems, not for calculations that can happen during rendering.
- Clean up listeners and asynchronous work where needed.
- Handle empty and missing data.
- Avoid unnecessary state duplication.
- Provide stable keys for mapped components.
- Avoid putting provider credentials directly in component source.
- Keep user-facing errors understandable.

Do not perform broad refactors solely to match personal style preferences. Explain the maintenance, correctness, or reliability benefit.

## 🤖 AI Integration Guidelines

AI responses are untrusted, probabilistic content.

When changing AI integration:
- Verify the current SDK and model support.
- Avoid assuming a model identifier will remain available indefinitely.
- Validate the user's input before sending it.
- Limit prompt and image size.
- Handle rejected requests and provider errors.
- Prevent duplicate submissions while a request is in progress.
- Avoid logging full user prompts unless necessary and disclosed.
- Keep the API credential on a trusted server.
- Apply rate limiting and usage controls in the server-side design.
- Display a clear disclaimer for generated food and nutrition information.

Do not promise factual correctness or medical reliability from a generative model. Do not present output as a verified nutritional report.

## 🖼️ Image Upload Guidelines

The image feature converts selected files into Base64 data. Contributions should validate:
- A file is actually selected.
- MIME type is supported.
- File size is within an intentional limit.
- The browser can decode the image.
- The request format matches provider requirements.
- The user can replace or clear a selected image.
- Errors are visible and actionable.
- The preview has meaningful alternative text where appropriate.

Do not send arbitrary files to an image model. Do not retain uploaded images unnecessarily. Be clear when an image is transmitted to a third-party AI provider.

## 🧠 State Management Guidelines

Redux Toolkit is used for the favourites collection.

Current assumptions:
- Store key: `favourites`.
- Slice state: `value`, initialized as an array.
- Meal identity: `idMeal`.
- Actions: `addToFavourites` and `removeFromFavourites`.

When changing the state model:
- Preserve stable meal identity.
- Consider duplicate additions.
- Handle missing IDs safely.
- Keep reducers deterministic.
- Add reducer tests for important transitions.
- Update selectors and UI together.
- Document whether data persists across reloads.

Do not claim persistence until a persistence mechanism is implemented and tested.

## 🌐 External API and Contact Integration

The random meal flow uses Axios and TheMealDB. Treat response payloads as external data:
- Check HTTP errors.
- Check the response structure.
- Handle an empty `meals` array.
- Avoid rendering missing fields as though they exist.
- Provide a retry or recovery path.

The contact flow uses EmailJS browser SDK. Never commit private account credentials. Test with authorized service and template configuration and synthetic information. Report failure without exposing provider data.

## ♿ UX and Accessibility

Food discovery should remain usable to visitors with different devices and input methods.

Review:
- Navigation and form controls are keyboard accessible.
- Text and file inputs have clear labels.
- Loading states are announced appropriately.
- Errors explain what happened and how to continue.
- AI output has readable typography and spacing.
- Images have useful alternative text.
- Controls have visible focus.
- Layout works at narrow viewports and zoom.
- Colour is not the only signal of state.
- Long meal instructions remain readable.

Avoid using a JavaScript alert as the only way to communicate a major usability limitation.

## 🔐 Security and Privacy

Never commit:
- Google AI API keys.
- EmailJS private credentials.
- Access tokens or passwords.
- Local environment files with secrets.
- Real contact submissions.
- Personal or sensitive visitor data.
- Credentials in screenshots or logs.

Create React App variables prefixed with `REACT_APP_` are embedded into the browser bundle. They are not a secure place for private API keys.

The current codebase contains a hard-coded Google Generative AI credential. Treat it as exposed. The owner should rotate it and move the AI request to a server-side service. Do not copy the value into another file or a replacement client-side variable.

Report security vulnerabilities privately using [SECURITY.md](SECURITY.md).

## 🧪 Testing and Validation

The repository includes Jest/Create React App test support and Testing Library dependencies. The current starter test expects a “learn react” link and may be stale relative to the Aahar AI interface. Update the relevant tests as part of changes rather than assuming the starter assertion represents application coverage.

Baseline checks:

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

Validation matrix:

| Change | Checks |
|---|---|
| Routing | Every route, direct URL, refresh, back/forward |
| Text AI | Empty input, success, provider failure, repeated submit |
| Image AI | No file, invalid type, oversized file, valid image, API failure |
| Meal API | Valid response, empty response, network failure |
| Favourites | Add, duplicate, remove, missing identity |
| Contact | Required fields, authorized provider test, failure path |
| UI | Narrow and wide viewports, focus, long content |
| Security | Secret scan, no credential in client bundle |
| Documentation | Links, commands, paths, accurate claims |

Report exactly which commands and manual checks were run. A build passing is not proof that external services work.

## 📦 Pull Request Preparation

A useful pull request includes:
- A clear title.
- The problem and desired outcome.
- A concise implementation summary.
- Related issue links.
- The commands and checks that were run.
- Screenshots for visible changes.
- Provider or configuration requirements.
- Security and privacy implications.
- Known limitations and follow-up work.

Keep the diff reviewable. Remove debug logs and temporary assets before requesting review.

## 🔍 Review Expectations

Reviewers may consider:
- Correctness and scope.
- React component quality.
- Data and response validation.
- AI prompt safety and output handling.
- Secret management.
- Privacy implications.
- Accessibility and responsive behaviour.
- Test evidence.
- Documentation accuracy.
- Dependency and build impact.

A change may be asked to be revised when the implementation is incomplete, unsafe, hard to maintain, or unsupported by evidence. Review feedback should be addressed with technical reasoning.

## 📚 Documentation Requirements

Update documentation whenever a change affects:
- Routes or page names.
- AI model or prompt behaviour.
- API provider configuration.
- Environment variables.
- Image upload rules.
- State shape or persistence.
- Contact form processing.
- Build and deployment commands.
- Testing approach.
- Data handling or privacy.

Remove outdated instructions rather than leaving conflicting statements.

## ✅ Contributor Checklist

- [ ] I reviewed the relevant implementation before editing.
- [ ] My change solves a defined problem.
- [ ] I kept the diff focused.
- [ ] I followed the current Create React App setup.
- [ ] I validated external response shapes.
- [ ] I considered loading, empty, and error states.
- [ ] I did not commit private credentials or visitor data.
- [ ] I considered keyboard and responsive behaviour.
- [ ] I added or updated relevant tests.
- [ ] I ran the production build.
- [ ] I documented configuration or behaviour changes.
- [ ] I accurately reported checks and limitations.

## 🚫 Changes to Avoid

Do not submit:
- Exposed provider credentials.
- Real visitor messages or sensitive images.
- Unrelated generated files.
- Unnecessary package-manager migration.
- A complete framework migration hidden inside a feature.
- Unverified nutrition or medical claims.
- A large dependency upgrade without compatibility checks.
- Claims of persistent favourites without implementation.
- Unsupported backend/API documentation.
- Formatting-only changes that conceal functional modifications.

## ❓ Getting Help

For usage questions, read [SUPPORT.md](SUPPORT.md). For security issues, use [SECURITY.md](SECURITY.md). For community expectations, read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

Thank you for contributing to Aahar AI. The goal is to make food discovery safer, clearer, more reliable, and easier to maintain.
