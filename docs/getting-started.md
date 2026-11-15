# 🚀 Getting Started with Aahar AI

This guide walks through a clean local setup of Aahar AI. It covers prerequisites, cloning, npm installation, local development, tests, production build, and first-run troubleshooting.

## 📚 Table of Contents

- [Prerequisites](#-prerequisites)
- [Check Your Environment](#-check-your-environment)
- [Clone the Repository](#-clone-the-repository)
- [Install Dependencies](#-install-dependencies)
- [Start the Development Server](#-start-the-development-server)
- [Understand the First Run](#-understand-the-first-run)
- [Run Tests](#-run-tests)
- [Create a Production Build](#-create-a-production-build)
- [Explore the Application](#-explore-the-application)
- [Configuration Warning](#-configuration-warning)
- [Common Setup Problems](#-common-setup-problems)
- [Next Steps](#-next-steps)

## 💻 Prerequisites

You need:
- Node.js 18 or newer, subject to the compatibility of Create React App and dependencies.
- npm.
- Git.
- A modern browser.
- Internet access for installing dependencies and contacting external providers.

The project uses React Scripts 5. It is not a Vite application.

## 🔎 Check Your Environment

```bash
node --version
npm --version
git --version
```

If a command is unavailable, install the corresponding tool and open a new terminal.

## 📥 Clone the Repository

```bash
git clone https://github.com/Brajesh31/Aahar-AI.git
cd Aahar-AI
```

Confirm that the terminal is inside the repository directory before installing packages.

## 📦 Install Dependencies

```bash
npm ci
```

The `npm ci` command installs dependencies using the committed lockfile. It is preferable for repeatable setup.

If it fails:
1. Read the first meaningful error.
2. Check Node.js and npm versions.
3. Confirm registry/network access.
4. Confirm the lockfile is present.
5. Avoid deleting or regenerating the lockfile without identifying the cause.

## ▶️ Start the Development Server

```bash
npm start
```

Create React App normally serves the application at <http://localhost:3000>. Use the actual URL printed by the terminal if another process occupies the default port.

Keep the terminal running while using the app. Compilation errors and warnings appear there.

## 🧭 Understand the First Run

The application router currently defines:

| Route | Experience |
|---|---|
| `/` | Home, text and image AI modes |
| `/about` | About Aahar AI |
| `/favorites` | Favourites from Redux state |
| `/meal-generator` | Random meal from TheMealDB |
| `/contact-us` | EmailJS contact form |

AI, meal API, and contact functions depend on external service availability and correct provider configuration. A route rendering does not prove an external integration is configured.

## 🧪 Run Tests

```bash
npm test -- --watchAll=false
```

The repository includes a starter test that expects a default Create React App “learn react” link. That assertion may be stale. A failing starter assertion should be inspected and replaced with tests for actual Aahar AI behaviour rather than ignored.

## 🏗️ Create a Production Build

```bash
npm run build
```

The generated files are placed in `build/`. Do not edit generated output directly.

## 🍽️ Explore the Application

Try the core flows with non-sensitive test data:
1. Open the home page and switch between text and image modes.
2. Enter a short cuisine query.
3. Select a permitted food image for the image flow.
4. Visit the meal generator.
5. Mark the random meal as a favourite.
6. Open the favourites page and remove the meal.
7. Open About and Contact routes.
8. Do not submit a real contact request unless provider configuration is authorized and intended for testing.

## 🔐 Configuration Warning

The inspected source contains a hard-coded Google Generative AI credential. Treat it as exposed and rotate it. Do not use it or copy it into a local environment file. Create React App `REACT_APP_*` variables are embedded into the browser build and are not safe for private API keys.

The AI integration should be moved to a server-side service before public production use. See [Configuration](configuration.md), [AI Integration](ai-integration.md), and [Security](../SECURITY.md).

## 🧯 Common Setup Problems

**Node or npm is not found:** install Node.js and open a new terminal.

**Dependency installation fails:** check the first npm error and the lockfile before changing package files.

**Port 3000 is occupied:** stop the other process or use the alternate address offered by Create React App.

**AI request fails:** verify credential rotation, server-side request architecture, provider model availability, quota, and network response.

**Meal endpoint fails:** check network access and the response from TheMealDB.

**Contact form does not send:** placeholder-looking EmailJS settings in the source need authorized configuration.

## ➡️ Next Steps

- Read [Architecture](architecture.md) to understand the component boundaries.
- Read [Configuration](configuration.md) before changing external integrations.
- Read [Testing](testing.md) before submitting changes.
- Read [Contributing](../CONTRIBUTING.md) before opening a pull request.
