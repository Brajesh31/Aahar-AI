# 📚 Aahar AI Documentation

Welcome to the technical documentation for Aahar AI. This directory contains guides for understanding, installing, configuring, testing, and maintaining the application.

The repository is a React 18 frontend built with Create React App. It uses React Router, Redux Toolkit, Google Generative AI, Axios, TheMealDB, EmailJS, and React Markdown. The documentation distinguishes current implementation from suggested future improvements.

## 📖 Documentation Index

| Document | Audience | Purpose |
|---|---|---|
| [Getting Started](getting-started.md) | New developers | Install dependencies and run locally |
| [Architecture](architecture.md) | Contributors | Understand routes, components, state, and data flow |
| [Configuration](configuration.md) | Developers and maintainers | Understand providers, credentials, and build variables |
| [AI Integration](ai-integration.md) | AI developers | Understand text/image prompts and request handling |
| [Testing](testing.md) | Contributors and reviewers | Run automated checks and manual validation |
| [Deployment](deployment.md) | Maintainers | Build and verify a production deployment |
| [Accessibility](accessibility.md) | Designers and contributors | Review keyboard, forms, output, and responsive behaviour |
| [Troubleshooting](troubleshooting.md) | All users | Diagnose common failures |
| [Roadmap](roadmap.md) | Maintainers | Track candidate quality improvements |

Repository policies:

- [README](../README.md)
- [Contributing](../CONTRIBUTING.md)
- [Security](../SECURITY.md)
- [Code of Conduct](../CODE_OF_CONDUCT.md)
- [Privacy](../PRIVACY.md)
- [Support](../SUPPORT.md)
- [Changelog](../CHANGELOG.md)

## 🎯 Project Overview

Aahar AI offers a text-based food suggestion flow, an image-based food exploration flow, a random meal generator, favourites, and a contact page.

The application is a browser-side React project. The current implementation calls Google Generative AI directly from the browser, requests random meal information from TheMealDB, stores favourites in Redux memory, and uses EmailJS for the contact form.

**Security note:** the inspected source contains a hard-coded Google Generative AI credential. Treat it as exposed, rotate it, and move privileged AI calls to a server-side service. See [Security Policy](../SECURITY.md).

## 🗺️ Recommended Reading Paths

### New contributor
1. Read the root README.
2. Follow [Getting Started](getting-started.md).
3. Review [Architecture](architecture.md).
4. Read [Contributing](../CONTRIBUTING.md).
5. Run [Testing](testing.md).

### AI feature developer
1. Read [AI Integration](ai-integration.md).
2. Review [Configuration](configuration.md).
3. Review [Security](../SECURITY.md).
4. Read [Testing](testing.md).
5. Review privacy implications in [PRIVACY.md](../PRIVACY.md).

### Release maintainer
1. Review [Configuration](configuration.md).
2. Verify credential remediation.
3. Follow [Testing](testing.md).
4. Follow [Deployment](deployment.md).
5. Review [Privacy](../PRIVACY.md) and [Security](../SECURITY.md).

### Troubleshooting a user issue
1. Read [Troubleshooting](troubleshooting.md).
2. Identify whether the issue belongs to the application or an external provider.
3. Use [Support](../SUPPORT.md) to gather a reproducible report.
4. Keep secrets and personal data out of public reports.

## 🧱 Documentation Principles

- Describe only functionality supported by the source or verified deployment.
- Distinguish implemented behaviour from proposed work.
- Do not invent environment variables, API routes, or backend services.
- Keep configuration guidance aligned with `package.json` and the actual components.
- Explain security and privacy limitations honestly.
- Update the relevant guide when implementation changes.
- Do not claim tests or deployment verification that has not occurred.

## 🔄 Keeping Documentation Current

When a route changes, update the README and architecture guide. When an AI provider or prompt changes, update AI integration and configuration. When state persistence is introduced, update architecture and privacy. When deployment automation is added, update deployment instructions and the README.

Documentation should be reviewed as part of the same change that alters the behaviour it describes.
