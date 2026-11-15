# ⚙️ Aahar AI Configuration Guide

This guide documents configuration visible in the current source. The project uses Create React App and npm. It calls Google Generative AI from the browser, requests random meal data from TheMealDB, and uses EmailJS for contact form submission.

## Table of Contents
- [Overview](#overview)
- [Build Configuration](#build-configuration)
- [Meal API](#meal-api)
- [Google Generative AI](#google-generative-ai)
- [EmailJS](#emailjs)
- [Create React App Variables](#create-react-app-variables)
- [Secret Handling](#secret-handling)
- [Production Checklist](#production-checklist)

## Overview

Relevant files:
| File | Responsibility |
|---|---|
| `package.json` | Scripts and dependency declarations |
| `package-lock.json` | Locked npm dependency tree |
| `src/core/config.js` | TheMealDB base URL |
| `src/components/AiwithText.js` | Text AI client construction and prompt |
| `src/components/AiwithImage.js` | Image AI client construction and prompt |
| `src/pages/Contact.jsx` | EmailJS form submission |
| `.github/workflows/update-readme.yml` | README timestamp automation |

## Build Configuration

The project uses Create React App through `react-scripts`. Available commands are `npm start`, `npm run build`, `npm test`, and `npm run eject`. Avoid ejecting unless a concrete requirement justifies taking ownership of the build configuration.

## Meal API

The base URL is declared in `src/core/config.js` and the random meal component appends `/1/random.php`. Check the provider response shape and handle an empty `meals` array. The public API URL is not a secret.

## Google Generative AI

The source uses `@google/generative-ai`. The inspected code has hard-coded the provider credential inside both AI components. Treat that credential as exposed and rotate or revoke it immediately. Do not copy it into another file.

The inspected model identifiers are `gemini-pro` and `gemini-pro-vision`. Verify current provider documentation before changing model names or upgrading the SDK.

A safe production architecture sends requests to an application backend. The backend stores the provider key in server-only configuration, validates requests, limits image and prompt size, rate-limits usage, and returns only the response needed by the browser. This backend is not currently present in the repository.

## EmailJS

The contact component calls EmailJS `sendForm`. Current service, template, and public-key values appear to be placeholders. Before enabling the form, configure an authorized service, matching template field names, origin restrictions, and abuse prevention. Keep private account credentials out of browser code.

## Create React App Variables

Create React App substitutes variables prefixed with `REACT_APP_` into the browser build. Visitors can inspect these values. Never place private AI keys, database passwords, access tokens, or other privileged credentials in such variables.

A local environment file ignored by Git can reduce accidental commits, but it does not make a value private after the value is bundled into browser JavaScript.

## Secret Handling

- Revoke or rotate a committed credential.
- Review provider usage and billing.
- Remove the value from active source.
- Review Git history and previously generated bundles.
- Do not print credentials in workflow logs.
- Restrict provider account access.
- Use quotas and usage alerts.
- Do not send secrets in issues or pull requests.

## Production Checklist

- [ ] Exposed AI credential has been rotated.
- [ ] AI key is not embedded in the browser bundle.
- [ ] Server-side AI proxy is implemented before production use.
- [ ] AI requests have size and rate limits.
- [ ] Model support is verified.
- [ ] EmailJS service and template are configured.
- [ ] EmailJS origin restrictions are reviewed.
- [ ] Meal API response handling is resilient.
- [ ] Privacy documentation reflects actual provider settings.
