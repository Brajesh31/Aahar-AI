# 🧯 Aahar AI Troubleshooting

Use this guide to investigate local development, AI requests, image conversion, meal data, favourites, contact form, tests, and route handling. Collect evidence before changing dependencies or provider settings.

## Table of Contents
- [Environment](#environment)
- [Dependency Installation](#dependency-installation)
- [Development Server](#development-server)
- [Build](#build)
- [Text AI](#text-ai)
- [Image AI](#image-ai)
- [Meal Generator](#meal-generator)
- [Favourites](#favourites)
- [Contact Form](#contact-form)
- [Tests](#tests)
- [Nested Routes](#nested-routes)
- [Security](#security)
- [Reporting](#reporting)

## Environment

```bash
node --version
npm --version
```

Record your OS, browser, Node.js, npm, branch, and commit.

## Dependency Installation

If `npm ci` fails, inspect the first meaningful error, verify runtime compatibility, check network access, and confirm that the lockfile is present. Do not remove the lockfile as an initial fix.

## Development Server

Run `npm start`. Create React App normally uses port 3000. If occupied, use the alternate port printed by the terminal. Keep the terminal open to inspect compiler errors.

## Build

Run `npm run build`. Inspect the first compiler error, imports, file path casing, and dependency compatibility.

## Text AI

Possible causes include a revoked key, unavailable model, quota, network failure, or malformed request. The current source contains an exposed hard-coded key, which must be rotated. Do not reuse it or place a replacement private key in a `REACT_APP_*` variable.

## Image AI

Check file selection, MIME type, file size, decoding, FileReader completion, provider image support, and response errors. The current implementation needs better validation and user-visible errors. Use non-sensitive sample images.

## Meal Generator

The generator calls TheMealDB through Axios. Inspect HTTP status and response JSON. Confirm `response.data.meals` exists and contains an item. Handle missing fields rather than assuming a complete meal record.

## Favourites

The current Redux store is in memory and has no persistence middleware. A refresh can clear the favourites. The reducer also appends without preventing duplicate meal IDs.

## Contact Form

The inspected EmailJS service, template, and public-key arguments appear to be placeholders. Configure a valid authorized integration. Check field names, provider settings, allowed origins, and request status. Use synthetic information.

## Tests

The starter test still searches for a Create React App “learn react” link. Update it for actual Aahar AI routes and behaviours. Do not remove assertions simply to make tests green.

## Nested Routes

The app uses BrowserRouter. If in-app navigation works but direct entry or refresh fails, configure the host to return the SPA entrypoint for nested routes.

## Security

If a credential is exposed, revoke or rotate it at the provider, review account activity, remove it from active code, and inspect old builds and Git history. See [SECURITY.md](../SECURITY.md).

## Reporting

Include commit, route, environment, steps, expected result, actual result, provider status, and sanitized logs. Never include secrets, personal health information, private images, or real contact messages.
