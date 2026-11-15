# 🏗️ Aahar AI Architecture

This document describes the current architecture of Aahar AI based on the inspected source tree. It is intended to help contributors understand application startup, routing, AI components, meal data flow, Redux state, contact delivery, and external service boundaries.

The architecture is frontend-focused. The inspected repository does not include a first-party backend API or database implementation.

## 📚 Table of Contents

- [Architecture Overview](#-architecture-overview)
- [Technology Responsibilities](#-technology-responsibilities)
- [Application Startup](#-application-startup)
- [Routing](#-routing)
- [Component Map](#-component-map)
- [Text AI Flow](#-text-ai-flow)
- [Image AI Flow](#-image-ai-flow)
- [Meal Generator Flow](#-meal-generator-flow)
- [Favourites State](#-favourites-state)
- [Contact Form Flow](#-contact-form-flow)
- [External Service Boundaries](#-external-service-boundaries)
- [Error and Loading Behaviour](#-error-and-loading-behaviour)
- [Security Boundaries](#-security-boundaries)
- [Architecture Improvement Areas](#-architecture-improvement-areas)
- [Safe Change Workflow](#-safe-change-workflow)

## 🎯 Architecture Overview

Aahar AI is a React 18 single-page application built with Create React App and React Scripts. The application mounts through the React entrypoint, wraps the page experience in Redux state context, and uses BrowserRouter for client-side navigation.

The home page allows a visitor to switch between two AI experiences. Other routes show project information, favourites, a random meal, and a contact form.

External interactions:
- Google Generative AI is called by the text and image components.
- TheMealDB is requested by the random meal generator using Axios.
- EmailJS is called by the contact component.
- Redux Toolkit stores favourites in application memory.

There is no first-party server-side API layer in the inspected source. Provider credentials used in browser code are visible to visitors, which is a critical concern for the current AI integration.

## 🧰 Technology Responsibilities

| Layer | Technology | Responsibility |
|---|---|---|
| UI | React 18 | Component rendering and local state |
| Build/runtime tooling | Create React App / react-scripts | Development server, tests, production bundle |
| Routing | React Router DOM | Route selection and navigation |
| Global state | Redux Toolkit | Favourites reducer and store |
| Store bindings | React Redux | Provider and hooks |
| AI | Google Generative AI SDK | Text and image generation requests |
| Response display | React Markdown | Markdown response rendering |
| HTTP | Axios | TheMealDB request |
| Data source | TheMealDB | Random meal payload |
| Contact | EmailJS | Browser-side contact submission |
| Styling | Bootstrap and CSS | Layout and visual styling |

## 🚀 Application Startup

The application startup path:

1. `src/index.js` imports the React app, global styles, and Redux store.
2. The app is mounted into the root DOM node.
3. The Redux provider makes the store available to page components.
4. `src/App.js` renders `AppRouter`.
5. `AppRouter` creates the BrowserRouter, renders Navbar, and maps paths to pages.

Inspect `src/index.js` when changing provider composition or root-level initialization. Avoid creating a second Redux store or router unintentionally.

## 🧭 Routing

Routes are exported from `src/AppRouter.js` and consumed by the Navbar.

| Path | Component | Main responsibility |
|---|---|---|
| `/` | Home | Text/image AI selector |
| `/about` | AboutMe | Project overview |
| `/favorites` | Favorites | Redux favourites |
| `/meal-generator` | MealGenerator | Random meal request |
| `/contact-us` | ContactUs | EmailJS form |

The route array stores component elements alongside path and display name. When updating route configuration, check the menu, direct navigation, active link behaviour, and production refresh behaviour.

BrowserRouter requires hosting fallback configuration so server requests for nested paths return the SPA entrypoint.

## 🧩 Component Map

### Root components
- `App.js`: imports application CSS and renders the router.
- `AppRouter.js`: route definitions and global navigation.

### Shared components
- `Navbar.js`: creates navigation links from the route list.
- `AiwithText.js`: accepts a text query and asks the generative model for meal-related content.
- `AiwithImage.js`: accepts an image and asks the generative model to identify food and explain it.

### Pages
- `Home.js`: selects the text or image AI mode.
- `AboutMe.js`: presents project mission and values.
- `MealGenerator.js`: loads a random meal and dispatches it to favourites.
- `Favorites.js`: reads and removes saved meal objects.
- `Contact.jsx`: sends the contact form through EmailJS.

### State and helpers
- `src/state/slices/favouriteSlice.js`: favourites reducer and action creators.
- `src/state/store/index.js`: Redux store.
- `src/helpers/imageHelper.js`: converts a browser file to a Base64 data URL.
- `src/core/config.js`: TheMealDB API base URL.

## 💬 Text AI Flow

1. Visitor enters a cuisine or food search string.
2. The component stores the string in local React state.
3. The search action calls the AI request function.
4. A prompt is constructed with the visitor input.
5. The Google Generative AI SDK sends the prompt.
6. The returned text is stored in component state.
7. React Markdown renders the response.

The current component has loading state but does not provide a complete error state or empty-input guard. A more robust implementation should handle rejected provider promises and reset loading state in a `finally` block.

## 🖼️ Image AI Flow

1. Visitor selects a file using the file input.
2. The `getBase64` helper reads the image for preview.
3. A separate FileReader process creates inline image data.
4. The visitor starts the analysis.
5. The component sends a prompt and image payload to the generative model.
6. Response text is rendered through React Markdown.

The current implementation should be hardened with file presence, MIME type, size, decoding, and provider format checks. The prompt response is not independently validated for nutritional accuracy.

## 🍲 Meal Generator Flow

1. MealGenerator mounts.
2. A React effect sends a GET request to `API_BASE_URL + /1/random.php`.
3. Axios receives the response.
4. The component stores `response.data.meals[0]`.
5. The UI displays the meal when available.
6. A visitor can dispatch the meal through `addToFavourites`.

The current component logs errors to the browser console but does not expose a complete visitor-facing error or retry state. It should also validate that the response contains a meal before accessing the first element.

## ❤️ Favourites State

The Redux store registers the favourites reducer under the `favourites` key.

Current state shape:

```js
{
  favourites: {
    value: []
  }
}
```

The slice has:
- `addToFavourites`: appends a meal object.
- `removeFromFavourites`: filters out a record by matching `idMeal`.

The current reducer does not prevent duplicate meal IDs. The store is in memory and no persistence middleware is configured.

## ✉️ Contact Form Flow

The ContactUs component uses a form ref and calls EmailJS `sendForm` when submitted. The inspected source contains placeholder-looking service, template, and public-key values. It resets the form after success and logs provider errors.

A complete implementation should provide visible status feedback, a submitting state, safe configuration, and field validation. Do not put private EmailJS account credentials in browser code.

## 🌐 External Service Boundaries

| Provider | Current use | Data leaving the browser |
|---|---|---|
| Google Generative AI | Text and image analysis | Text prompt and selected image payload |
| TheMealDB | Random meal | HTTP request to meal endpoint |
| EmailJS | Contact request | Name, email, message form fields |

Provider behaviour, availability, retention, and processing rules are outside the repository's direct control.

## ⚠️ Error and Loading Behaviour

The AI components track loading state but lack comprehensive user-facing error recovery. The meal generator logs request failures. The contact form logs provider failure output.

Improvement priorities:
- User-facing error messages.
- Retry behaviour where safe.
- Request cancellation or stale response protection.
- Empty and malformed response handling.
- Submission disabling during in-flight requests.
- Safe logging and redaction.

## 🔐 Security Boundaries

The current AI credential is hard-coded in browser components. Treat it as exposed and rotate it. A replacement secret must not be placed in `REACT_APP_*` variables because those are bundled into the client.

A production architecture should send browser requests to an application-controlled server endpoint that validates inputs and reads the provider key from server-only configuration.

## 🧭 Architecture Improvement Areas

Potential, not yet implemented:
- Backend proxy for AI requests.
- Request validation and rate limiting.
- Image upload limits.
- Robust AI and API error states.
- Persistent favourites.
- Duplicate favourite prevention.
- Contact form status handling.
- Automated tests for actual routes and reducers.
- Better route accessibility and mobile experience.

## ✅ Safe Change Workflow

1. Identify the owning component.
2. Trace state, props, imports, and external requests.
3. Confirm the current behaviour.
4. Keep the change focused.
5. Validate edge cases and provider failures.
6. Run relevant tests and build.
7. Update documentation.
8. Avoid exposing credentials or visitor data.

This document should change as the architecture changes. Keep it descriptive rather than treating proposed improvements as existing services.
