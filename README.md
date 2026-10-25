# Aahar AI

Aahar AI is a React application for an AI-assisted food and nutrition experience. The application combines a responsive Bootstrap interface, client-side routing, Redux state management, Markdown rendering, HTTP APIs, and Google Generative AI integrations.

## Highlights

- React 18 single-page application.
- Route-based navigation with React Router.
- Redux Toolkit and React Redux for shared state.
- Markdown-rendered AI responses.
- Axios-based API communication.
- Bootstrap-based responsive layout.
- EmailJS integration for contact or notification flows.

## Requirements

- Node.js 18 or newer
- npm
- Access to any backend or AI services used by the selected application flows

## Installation and development

```powershell
npm ci
npm start
```

The development server normally opens at <http://localhost:3000>.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the development server |
| `npm run build` | Create the optimized production bundle |
| `npm test` | Run the React test runner |
| `npm run eject` | Eject Create React App configuration; use only when the trade-off is understood |

## Project structure

- `src/` contains React components, pages, state, API calls, and styles.
- `public/` contains static files copied into the built application.
- `package.json` defines the runtime dependencies and development commands.
- `build/` is generated output and should not be edited or committed unless deployment requires it.

## Configuration and security

Browser applications cannot keep secrets private. API keys, Generative AI credentials, EmailJS values, and service tokens must be supplied through the project’s supported configuration mechanism and reviewed before production use. Never commit private credentials, and use a server-side proxy for privileged AI or data-provider operations.

Validate user-provided content before sending it to external services, avoid placing personal data in prompts or logs, and restrict allowed origins on any backend used by this application.

## Validation

```powershell
npm ci
npm test -- --watchAll=false
npm run build
```

Before release, test navigation, loading and error states, AI response rendering, contact flows, and mobile layouts.

## Contributing

Keep changes focused, preserve existing route and state behavior, and document new environment variables or API contracts. Do not commit generated dependencies, build output, or secrets. Include validation results in pull requests.
Last updated: 2026-10-25 23:42 UTC
