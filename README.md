# 🍱 Aahar AI

<p align="center">
  <strong>AI-assisted food discovery and meal exploration.</strong>
</p>

<p align="center">
  Discover meal ideas, explore food through text or images, generate a random meal, and save meals you want to revisit.
</p>

<p align="center">
  <a href="https://github.com/Brajesh31/Aahar-AI">Repository</a> ·
  <a href="https://github.com/Brajesh31/Aahar-AI/issues">Issues</a> ·
  <a href="docs/README.md">Documentation</a>
</p>

---

## 📚 Table of Contents

1. [Project Overview](#-project-overview)
2. [Project Vision](#-project-vision)
3. [Features](#-features)
4. [Technology Stack](#-technology-stack)
5. [Application Architecture](#-application-architecture)
6. [User Experience and Routes](#-user-experience-and-routes)
7. [Requirements](#-requirements)
8. [Installation](#-installation)
9. [Development Workflow](#-development-workflow)
10. [Available Scripts](#-available-scripts)
11. [Repository Structure](#-repository-structure)
12. [Integrations and Data Sources](#-integrations-and-data-sources)
13. [AI Features and Prompt Behaviour](#-ai-features-and-prompt-behaviour)
14. [API Key and Secret Management](#-api-key-and-secret-management)
15. [Redux State Management](#-redux-state-management)
16. [Meal Data and External API](#-meal-data-and-external-api)
17. [Testing and Validation](#-testing-and-validation)
18. [Accessibility and Responsive Design](#-accessibility-and-responsive-design)
19. [Performance and Reliability](#-performance-and-reliability)
20. [Production Build and Deployment](#-production-build-and-deployment)
21. [Troubleshooting](#-troubleshooting)
22. [Security](#-security)
23. [Privacy and Data Handling](#-privacy-and-data-handling)
24. [Contributing](#-contributing)
25. [Roadmap](#-roadmap)
26. [Documentation Index](#-documentation-index)
27. [License](#-license)

---

## 👋 Project Overview

**Aahar AI** is a React-based food discovery application that combines text-driven food suggestions, image-based food exploration, random meal discovery, and a favourites collection. It uses Google Generative AI for AI-assisted responses, TheMealDB for random meal data, Redux Toolkit for shared favourites state, React Router for navigation, and EmailJS for the contact form.

The concept is simple: food discovery can be more engaging when visitors can start with a cuisine or a food image, receive an AI-generated explanation, and explore meal ideas. The application provides separate text and image experiences and a dedicated random meal generator.

This repository currently contains a frontend application built with Create React App and React Scripts. It does not define a first-party backend API or database in the inspected source. The AI calls are made from browser-side components in the current implementation, and this has security implications described later in this README.

Documentation in this repository describes the code that exists. It does not claim that the application provides medically validated nutrition information, professional dietary advice, user accounts, cloud-synced favourites, or a production backend.

### Project snapshot

| Area | Implementation |
|---|---|
| Application | React single-page application |
| React | React 18 |
| Build tooling | Create React App / react-scripts 5 |
| Routing | React Router DOM 6 |
| State | Redux Toolkit and React Redux |
| AI integration | Google Generative AI SDK |
| AI response display | React Markdown |
| Meal source | TheMealDB random meal endpoint |
| HTTP client | Axios |
| Contact form | EmailJS browser SDK |
| Styling | Bootstrap and project CSS |
| Tests | React Scripts test runner and Testing Library dependencies |
| Package manager | npm |
| Production output | `build/` |

---

## 🎯 Project Vision

Aahar AI is designed around a few practical ideas:

1. **Make food discovery approachable.** A visitor should be able to start from a cuisine, ingredient, or food image without navigating a complicated workflow.
2. **Combine text and image input.** The application exposes separate AI interactions for typed food interests and uploaded food images.
3. **Encourage exploration.** A random meal generator helps visitors discover meals they may not have searched for directly.
4. **Keep useful discoveries accessible.** Visitors can mark generated meal results as favourites and remove them from the favourites collection.
5. **Explain rather than merely list.** AI prompts request ingredients, nutritional context, and food-related explanations.
6. **Keep the interface understandable.** AI-generated output should be displayed in a readable format, and loading or failure states should be clear.
7. **Treat food and health information carefully.** Generated nutrition content is informational and should not be represented as a verified medical or dietary recommendation.

---

## ✨ Features

### 💬 Food for Your Mood, text-based AI exploration

The home page includes a text mode through the `AiwithText` component. A visitor enters a preferred cuisine or food topic. The component builds a prompt that requests meal ideas, indicative prices in INR, ingredients, and a light explanation of how food may affect mood.

The response is generated through the Google Generative AI SDK and displayed using React Markdown.

**Important:** Generated prices, ingredients, nutrition statements, and mood-related explanations can be inaccurate or incomplete. Treat them as AI-generated suggestions, not verified menus, market prices, medical advice, or nutritional analysis.

### 🖼️ What Is in Your Food, image-based exploration

The `AiwithImage` component allows a visitor to select an image. The image is converted to a browser-readable Base64 representation for preview and to inline image data for the Gemini request.

The current prompt asks the model to identify food items, describe components, provide nutritional context, and briefly discuss food history. It also asks the model not to respond when the image does not contain food.

Image quality, camera angle, lighting, occlusion, portion size, and model limitations can affect results. The application does not independently validate the model's identification.

### 🎲 Random Meal Generator

The meal generator requests a random meal from TheMealDB endpoint configured in `src/core/config.js`. It displays the meal name, thumbnail, and instructions returned by the API.

The visitor can mark the displayed meal as a favourite. The current implementation dispatches the meal object to the Redux favourites slice.

### ❤️ Favourites

The favourites page reads the favourites array from the Redux store. It displays saved meal records and provides a remove action.

The current Redux store is in-memory application state. The inspected code does not configure browser persistence, a user account, or server-side synchronization. A refresh may therefore clear the collection unless persistence is added separately.

### 📬 Contact

The contact page uses EmailJS to submit a visitor's name, email address, and message. The service, template, and public key values in the current source are placeholders. A working contact flow requires valid provider configuration.

Do not add private account credentials to browser code. See [SECURITY.md](SECURITY.md) before configuring the contact integration.

### 🧭 Informational pages

The application includes About and Contact routes. The About page describes the project's stated focus on food discovery, meal planning, health, cuisine diversity, and community.

---

## 🧰 Technology Stack

| Technology | Role |
|---|---|
| React 18 | Component-based interface |
| React DOM | Browser rendering |
| Create React App / react-scripts | Development server, build, and test commands |
| React Router DOM | Client-side route navigation |
| Redux Toolkit | Favourites state slice and store creation |
| React Redux | Store provider and state hooks |
| Google Generative AI SDK | Text and image AI requests |
| React Markdown | Rendering Markdown-formatted AI responses |
| Axios | HTTP request to TheMealDB |
| TheMealDB | Random meal data source |
| EmailJS Browser SDK | Contact form submission |
| Bootstrap 5 | Layout and styling utilities |
| Testing Library | React component testing utilities |
| Jest DOM | DOM assertion matchers |
| Web Vitals | Web performance measurement library |

The exact package versions are maintained in `package.json` and `package-lock.json`. This table lists the primary technologies visible in the project, not every transitive package.

---

## 🏗️ Application Architecture

Aahar AI is currently a client-side React application.

At a high level:

1. `src/index.js` mounts the React application and configures the Redux provider.
2. `src/App.js` renders the application router.
3. `src/AppRouter.js` declares the routes and renders the navigation.
4. Page components compose the main user experiences.
5. AI components call Google Generative AI from the browser.
6. The meal generator requests random meal information through Axios.
7. Redux Toolkit stores the favourites array in application memory.
8. The contact page sends form data through EmailJS.
9. Create React App produces a production build in `build/`.

The project does not currently contain a first-party server/API implementation in the inspected source tree. External services are called by frontend components. This has implications for API key exposure, validation, privacy, and abuse controls.

For the detailed component map and data flow, see [Architecture](docs/architecture.md).

---

## 🧭 User Experience and Routes

The route definitions are maintained in `src/AppRouter.js`.

| Path | Page | Purpose |
|---|---|---|
| `/` | Home | Switch between text AI and image AI experiences |
| `/about` | About Us | Project description, mission, and values |
| `/favorites` | My Favorites | Display and remove saved meal records |
| `/meal-generator` | Meal Generator | Load a random meal and save it |
| `/contact-us` | Contact Us | Submit a contact request through EmailJS |

The navigation component reads the exported route definitions from `AppRouter.js`. When adding, removing, or renaming a route, update the route configuration and verify the navigation and direct URL behaviour.

The current router uses `BrowserRouter`. Production hosting must serve the SPA entrypoint for paths handled by React Router. Otherwise, navigation may work from the homepage while a direct route request or refresh returns a server-side 404.

---

## 💻 Requirements

Recommended baseline:

- Node.js 18 or newer, subject to the current Create React App and dependency compatibility requirements.
- npm.
- Git.
- A modern browser.
- Network access to the configured AI and meal-data providers.
- Valid provider configuration for AI and contact flows.

Check installed versions:

```bash
node --version
npm --version
git --version
```

The project has a committed `package-lock.json`. Use npm and the lockfile for predictable dependency installation.

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Brajesh31/Aahar-AI.git
cd Aahar-AI
```

### 2. Install dependencies

```bash
npm ci
```

Use `npm ci` for a clean installation from the lockfile. If installation fails, inspect the first useful error and verify the Node.js/npm versions before changing the dependency tree.

### 3. Start the development server

```bash
npm start
```

Create React App normally starts the local server at <http://localhost:3000>. If the port is occupied, the development server may offer another port.

### 4. Open the application

Use the local address printed by the terminal. Keep the terminal open while developing so that compilation errors and warnings remain visible.

### 5. Create a production build

```bash
npm run build
```

Create React App writes the optimized output to `build/`. This is generated output. Make changes in `src/` or `public/`, then rebuild.

---

## 🧑‍💻 Development Workflow

A reliable local workflow is:

```bash
git pull origin main
npm ci
npm start
```

Make a focused change in the relevant component or page. Review the browser console and terminal output. Run the relevant tests and a production build before considering the work complete.

For a clean production-style validation:

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

The existing test file is a Create React App starter test that expects a default React learning link. That expectation may no longer match the current application. Do not interpret the presence of a test command as proof that the current test suite passes. Update the test to assert the real application behaviour as part of a dedicated test-maintenance task.

---

## 📜 Available Scripts

| Command | Purpose | Notes |
|---|---|---|
| `npm start` | Start development server | Create React App |
| `npm run build` | Create optimized production bundle | Output in `build/` |
| `npm test` | Run the Jest test runner in watch mode | Uses React Scripts |
| `npm test -- --watchAll=false` | Run tests once in non-watch mode | Suitable for CI-style execution |
| `npm run eject` | Copy hidden Create React App configuration into the repository | One-way operation; avoid unless necessary |

### About ejecting

`npm run eject` is a one-way operation. It exposes configuration files and build tooling that Create React App normally manages. It increases maintenance responsibility and should not be used merely to change a small setting. Prefer existing supported configuration options unless a specific requirement justifies ejecting.

---

## 🗂️ Repository Structure

The following structure reflects the inspected repository paths:

```text
Aahar-AI/
├── .github/
│   └── workflows/
│       └── update-readme.yml
├── public/
│   ├── aahar-logo.png
│   ├── favicon.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AiwithImage.js
│   │   ├── AiwithText.js
│   │   └── Navbar.js
│   ├── core/
│   │   └── config.js
│   ├── helpers/
│   │   └── imageHelper.js
│   ├── pages/
│   │   ├── AboutMe.js
│   │   ├── Contact.jsx
│   │   ├── Favorites.js
│   │   ├── Home.js
│   │   └── MealGenerator.js
│   ├── state/
│   │   ├── slices/
│   │   │   └── favouriteSlice.js
│   │   └── store/
│   │       └── index.js
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── AppRouter.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── package-lock.json
└── README.md
```

| Path | Responsibility |
|---|---|
| `src/App.js` | Root application component |
| `src/AppRouter.js` | Browser router and route configuration |
| `src/components/` | AI interaction components and navigation |
| `src/pages/` | Route-level pages |
| `src/core/config.js` | Shared API base URL |
| `src/helpers/` | Image conversion helper |
| `src/state/slices/` | Redux Toolkit slices |
| `src/state/store/` | Redux store configuration |
| `public/` | Static assets and web app metadata |
| `.github/workflows/` | Repository automation |
| `build/` | Generated production output |

---

## 🔌 Integrations and Data Sources

### Google Generative AI

The text and image experiences use the `@google/generative-ai` package. The current components instantiate the SDK in browser-side code and use model identifiers in their request functions.

The selected model identifiers in the current source are `gemini-pro` for text and `gemini-pro-vision` for image analysis. Model availability and SDK compatibility can change. Verify current provider documentation and model support before changing or deploying this integration.

The currently committed source contains a hard-coded API credential. This is a security issue. Treat the credential as exposed, revoke or rotate it in the provider console, and migrate AI requests to a server-side endpoint or another secure design before production use. Do not reuse or copy the exposed value.

### TheMealDB

The random meal generator builds a request using the base URL stored in `src/core/config.js` and calls the random meal endpoint.

Current configured base URL:

```text
https://www.themealdb.com/api/json/v1
```

The request path used by the component is:

```text
/1/random.php
```

The UI expects a response containing a `meals` array and reads the first meal. Handle missing or empty API results before relying on a meal object.

### EmailJS

The contact form imports `@emailjs/browser` and submits the form through the EmailJS browser SDK. The currently inspected source uses placeholder-looking service, template, and public key values. A production configuration must be set through an intentional, safe approach.

Do not put an EmailJS private account credential or dashboard password in browser code.

### Axios

Axios is used for the random meal HTTP request. Keep request handling explicit, check response shape, and surface errors to the visitor rather than relying only on console output.

---

## 🤖 AI Features and Prompt Behaviour

### Text mode

The text component builds a prompt using the visitor's entered cuisine or preference. The current request asks for meals related to the input, prices in Indian rupees, ingredients, and a light mood-related explanation.

Suggested future improvements:
- Input validation and empty-query handling.
- Request cancellation or protection against repeated submissions.
- Clear error messages and retry behaviour.
- A visible disclaimer for nutrition and price uncertainty.
- Prompt constraints that reduce unsupported medical claims.
- Server-side request handling so credentials are not exposed.
- Rate limiting and abuse controls.

### Image mode

The image component:
1. Receives a file from the browser file input.
2. Converts the selected file into a Base64 data URL for preview.
3. Converts the file into inline image data for the AI request.
4. Sends the prompt and image data to the selected generative model.
5. Receives a textual response.
6. Renders the result with React Markdown.

Before production use, validate file presence, MIME type, file size, image decoding, and model-supported image formats. A malformed or very large image should not be sent blindly to an external provider.

### AI response reliability

Generative responses are probabilistic. They can contain:
- Incorrect food identification.
- Incorrect ingredients or substitutions.
- Unsupported nutritional estimates.
- Inaccurate prices.
- Fabricated cultural or historical details.
- Advice that is unsuitable for a person's medical or dietary needs.

Do not present generated content as a laboratory analysis, verified ingredient list, allergen guarantee, medical diagnosis, or personalized therapeutic diet.

---

## 🔐 API Key and Secret Management

**Important security warning:** the inspected AI components currently contain a hard-coded Google Generative AI credential. A credential committed to a public repository must be treated as compromised, even if it is later removed from the latest version.

Required remediation by the account owner:

1. Open the relevant Google AI / Cloud credential management console.
2. Revoke or rotate the exposed credential.
3. Review usage and billing activity for unexpected requests.
4. Remove the hard-coded credential from application source.
5. Avoid placing a replacement private key in any `REACT_APP_*` variable. Create React App embeds such variables into the browser bundle.
6. Move privileged AI calls behind a server-side service that reads the secret from server environment configuration.
7. Apply authentication or abuse controls, rate limiting, input-size limits, and provider restrictions where available.
8. Review Git history and prior builds because deleting a key from the latest commit does not invalidate it.
9. Do not paste the old or replacement credential into an issue, pull request, or chat.

Any variable prefixed with `REACT_APP_` is exposed to the browser at build time. Such variables are suitable only for intentionally public configuration, not private secrets.

For more detail, see [SECURITY.md](SECURITY.md) and [docs/configuration.md](docs/configuration.md).

---

## 🧠 Redux State Management

The project uses Redux Toolkit to manage the favourites collection.

### Store

The store is configured in:

```text
src/state/store/index.js
```

It registers the favourites reducer under the `favourites` key.

### Slice

The slice is maintained in:

```text
src/state/slices/favouriteSlice.js
```

The current state shape is:

```js
{
  value: []
}
```

The slice exposes two actions:

| Action | Current behaviour |
|---|---|
| `addToFavourites(meal)` | Appends a meal object to the favourites array |
| `removeFromFavourites(meal)` | Removes meals whose `idMeal` matches the supplied meal |

### Current persistence limitation

The inspected store does not configure persistence to local storage, IndexedDB, or a backend account. Treat favourites as session/application-memory state. Do not promise that favourites survive a full page refresh.

### Data assumptions

The favourites UI expects meal records to contain fields such as:
- `idMeal`
- `strMeal`
- `strMealThumb`

If the external API changes its response shape, update the data handling and tests together.

---

## 🍲 Meal Data and External API

The random meal generator requests one random meal from TheMealDB.

The current flow:
1. The page mounts.
2. An effect requests the random meal endpoint.
3. Axios resolves the response.
4. The first meal in `response.data.meals` is stored in component state.
5. The UI displays the meal when available.
6. A visitor can dispatch the meal to the favourites slice.

Potential reliability improvements:
- A visible loading state.
- A user-facing error state.
- A retry action.
- Empty response handling.
- Duplicate favourite prevention.
- Safe rendering of long instructions.
- API timeout or cancellation strategy.
- Clear attribution or source information where required by the provider.

Do not assume that a provider's public endpoint guarantees availability or a specific response time.

---

## 🧪 Testing and Validation

The project includes Create React App testing infrastructure, Testing Library dependencies, `src/App.test.js`, and `src/setupTests.js`.

The existing `App.test.js` appears to be the Create React App starter test that searches for a “learn react” link. That expectation may not reflect the current Aahar AI interface. The presence of the test infrastructure does not mean that all current application flows are covered or passing.

### Available checks

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

### Manual smoke testing

- [ ] Home route loads.
- [ ] Navigation links open the intended routes.
- [ ] Text AI mode accepts a non-empty query.
- [ ] Text AI loading and response states behave as expected.
- [ ] Text AI provider errors are handled.
- [ ] Image input accepts a supported image.
- [ ] Selected image preview is displayed.
- [ ] Image analysis produces readable output when provider configuration is valid.
- [ ] Empty or invalid image selection is handled.
- [ ] Random meal request returns a valid meal.
- [ ] Meal can be added to favourites.
- [ ] Favourites page displays saved meals.
- [ ] A favourite can be removed.
- [ ] Empty favourites state is meaningful.
- [ ] Contact form validates required fields.
- [ ] Contact integration is tested only with authorized provider settings and synthetic content.
- [ ] Mobile and desktop layouts are reviewed.
- [ ] Browser console and network failures are inspected.

### Test boundaries

A passing unit test does not prove that Google Generative AI, EmailJS, or TheMealDB is available. Test external integrations with controlled accounts and synthetic data, and report the exact provider configuration used.

See [docs/testing.md](docs/testing.md) for the full quality process.

---

## ♿ Accessibility and Responsive Design

The home page currently includes a JavaScript alert stating that the website is not for mobile. This is an existing application behaviour, not evidence of responsive support. The mobile experience should be tested and improved rather than relying on an alert to communicate a limitation.

Accessibility and responsive priorities:
- Use semantic navigation links and buttons.
- Provide labels for text and file inputs.
- Announce loading and error states accessibly.
- Keep AI-generated Markdown readable.
- Provide meaningful alternative text for food images.
- Maintain keyboard access and visible focus.
- Ensure buttons have clear names and adequate target size.
- Test narrow viewports and zoom.
- Avoid relying on colour alone.
- Make long meal instructions readable on smaller screens.

See [ACCESSIBILITY.md](ACCESSIBILITY.md) and [docs/accessibility.md](docs/accessibility.md).

---

## ⚡ Performance and Reliability

AI requests can take time and image encoding can consume memory. External meal requests can fail due to network or provider availability.

Review:
1. Validate inputs before making expensive requests.
2. Limit uploaded image size.
3. Avoid converting the same image repeatedly.
4. Provide visible loading and error states.
5. Prevent repeated submissions while a request is in progress.
6. Avoid logging personal prompts or message content unnecessarily.
7. Handle missing API response fields.
8. Keep large images and assets optimized.
9. Avoid unnecessary state updates and component work.
10. Verify the production build after dependency changes.

Do not claim performance improvements without measurements.

---

## 🚀 Production Build and Deployment

Create React App generates a production-ready static bundle:

```bash
npm ci
npm run build
```

The generated output is placed in `build/`. The inspected repository contains a workflow named `.github/workflows/update-readme.yml`, which updates the README timestamp on schedule, push, or manual dispatch. This workflow is not a website deployment workflow.

No production hosting workflow was identified in the inspected repository tree. Deployment instructions should be added only after the actual hosting provider, build destination, and deployment process are confirmed.

Before deployment:
- [ ] Rotate the exposed AI credential.
- [ ] Move privileged AI requests out of browser source.
- [ ] Confirm EmailJS configuration is intentional and public-safe.
- [ ] Run the test suite and fix stale test assumptions.
- [ ] Run the production build.
- [ ] Verify BrowserRouter fallback handling on the host.
- [ ] Check provider quotas and abuse controls.
- [ ] Review privacy information.
- [ ] Test the main user flows using synthetic data.

---

## 🧯 Troubleshooting

| Symptom | Initial investigation |
|---|---|
| `npm ci` fails | Check Node/npm versions, lockfile, registry access, first error |
| `npm start` fails | Check dependency installation, port 3000, terminal output |
| Build fails | Inspect first compiler error and package compatibility |
| AI request fails | Verify credential status, model availability, provider quota, request format |
| Image analysis fails | Check file type, file size, Base64 conversion, model image support |
| Meal generator is empty | Inspect endpoint response and network status |
| Favourites disappear after refresh | Current store is in-memory and does not persist state |
| Contact form does not send | Current service/template/key values are placeholders and need valid configuration |
| Nested route returns 404 | Configure the hosting server to serve the SPA entrypoint |
| Tests fail on “learn react” | Existing starter test expectation may be stale for the current interface |

For detailed steps, see [docs/troubleshooting.md](docs/troubleshooting.md).

---

## 🔐 Security

The current source contains a hard-coded Google Generative AI credential. Treat it as exposed and rotate it. Do not copy it into another file or replace it with a new browser-exposed key.

Additional rules:
- Never commit private keys, passwords, access tokens, or real visitor messages.
- Treat all `REACT_APP_*` variables as browser-visible.
- Keep privileged AI operations on a server.
- Restrict provider usage and review quotas.
- Validate uploaded files and text input.
- Use synthetic test data.
- Report vulnerabilities privately using [SECURITY.md](SECURITY.md).

---

## 🛡️ Privacy and Data Handling

Text prompts and uploaded images are sent to an external AI provider by the current browser-side components. Meal requests are sent to TheMealDB. Contact form values are submitted through EmailJS when configured.

Visitors should be informed about these data flows. Do not upload sensitive personal information, medical records, or identifiable images unless the application has a reviewed purpose and suitable safeguards. See [PRIVACY.md](PRIVACY.md).

---

## 🤝 Contributing

Contributions that improve food discovery, reliability, accessibility, AI request handling, state management, and documentation are welcome.

Before making changes:
1. Inspect the affected component and data flow.
2. Search existing issues.
3. Keep the change focused.
4. Avoid exposing credentials.
5. Add or update tests for changed behaviour.
6. Run tests and production build.
7. Update documentation when routes, integrations, or setup change.

Read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

## 🗺️ Roadmap

Candidate improvements, subject to investigation and prioritization:

- Secure server-side AI request handling.
- Credential rotation and provider restrictions.
- Robust loading, validation, and error states for AI flows.
- Image type and size validation.
- More reliable prompt and response handling.
- Nutrition and health disclaimers.
- Persistent favourites with a clearly chosen storage model.
- Duplicate favourite prevention.
- Meal details and structured ingredient presentation.
- Responsive mobile experience.
- Accessibility improvements across routes.
- Updated tests for actual Aahar AI behaviour.
- Documentation and deployment verification.

These are candidate directions, not claims that the features are already implemented.

---

## 📖 Documentation Index

| Document | Description |
|---|---|
| [Documentation home](docs/README.md) | Complete documentation navigation |
| [Getting started](docs/getting-started.md) | Install, run, and build the application |
| [Architecture](docs/architecture.md) | Component boundaries and data flow |
| [Configuration](docs/configuration.md) | AI, EmailJS, and environment configuration |
| [AI integration](docs/ai-integration.md) | Text and image prompt flows and safety |
| [Testing](docs/testing.md) | Automated and manual validation |
| [Deployment](docs/deployment.md) | Production build and hosting checklist |
| [Accessibility](docs/accessibility.md) | Accessibility review process |
| [Troubleshooting](docs/troubleshooting.md) | Common setup and runtime problems |
| [Roadmap](docs/roadmap.md) | Candidate maintenance priorities |
| [FAQ](docs/faq.md) | Common project and setup questions |
| [Maintenance](docs/maintenance.md) | Repository and dependency maintenance |
| [Release process](docs/release-process.md) | Release validation and publishing checklist |
| [Contributing](CONTRIBUTING.md) | Contribution workflow |
| [Security](SECURITY.md) | Vulnerability reporting and secrets |
| [Code of Conduct](CODE_OF_CONDUCT.md) | Community behaviour |
| [Privacy](PRIVACY.md) | Known data flows and privacy responsibilities |
| [Support](SUPPORT.md) | Support channels and issue information |
| [Changelog](CHANGELOG.md) | Project change record |

---

## 📄 License

This repository is distributed under the **MIT License**. See the [LICENSE](LICENSE) file for the complete license text.

Copyright (c) 2026 Brajesh Kumar.

The MIT License permits use, modification, distribution, sublicensing, and sale of copies, subject to the conditions stated in the license. The license applies only to material the copyright holder is authorized to license. Third-party packages, assets, APIs, and other externally sourced materials remain subject to their own applicable terms and licenses.

---

<p align="center">
  <strong>Aahar AI, making food discovery more interactive with AI.</strong>
</p>

Last updated: 2026-11-18 18:35 UTC
