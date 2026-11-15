# 🚀 Aahar AI Deployment Guide

This guide explains the production build and the hosting requirements for Aahar AI. The current project uses Create React App and builds static output into `build/`.

The inspected repository contains a scheduled README timestamp workflow. It does not contain a verified website deployment workflow or a documented hosting destination. Do not describe the README automation as a website deployment pipeline.

## Table of Contents
- [Build Overview](#build-overview)
- [Current Automation](#current-automation)
- [Production Blockers](#production-blockers)
- [Build Locally](#build-locally)
- [Static Hosting](#static-hosting)
- [BrowserRouter Fallback](#browserrouter-fallback)
- [Provider Readiness](#provider-readiness)
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Post-Deployment Verification](#post-deployment-verification)
- [Rollback](#rollback)
- [Troubleshooting](#troubleshooting)

## Build Overview

```bash
npm ci
npm run build
```

Create React App writes the optimized application into `build/`. This folder is generated output. Do not edit it manually.

## Current Automation

The workflow `.github/workflows/update-readme.yml` updates the README timestamp after push, on a schedule, or by manual dispatch. It does not build and publish the website.

No hosting provider or destination was confirmed in the inspected repository.

## Production Blockers

Before public production use:
- Rotate the hard-coded Google Generative AI credential.
- Move privileged AI calls behind a server-side endpoint.
- Add request validation, size limits, quotas, and rate limits.
- Configure EmailJS with valid, public-safe client settings.
- Add visible error handling for AI and meal requests.
- Correct stale starter tests and run meaningful tests.
- Verify privacy notice and provider retention.
- Confirm hosting and BrowserRouter fallback.

Do not deploy a replacement private key in the React bundle or a `REACT_APP_*` variable.

## Build Locally

```bash
npm ci
npm run build
```

Inspect the output and warnings. If compilation fails, resolve the first meaningful error rather than changing multiple dependencies at once.

## Static Hosting

A compatible static host must serve files from `build/`, support HTTPS, serve static assets with correct MIME types, and provide SPA fallback for BrowserRouter routes. Exact provider-specific instructions should be added only after the actual host is selected and verified.

## BrowserRouter Fallback

The app defines `/about`, `/favorites`, `/meal-generator`, and `/contact-us`. The server must return the SPA entrypoint for these client-side routes when visitors open them directly or refresh the page.

Test the root and each nested route by direct URL, then refresh each page.

## Provider Readiness

- Google Generative AI: rotate exposed credential and use server-side secret handling.
- EmailJS: verify service, template, allowed origins, and abuse limits.
- TheMealDB: handle response failures and missing meal records.

Third-party provider availability is separate from static hosting availability.

## Pre-Deployment Checklist

- [ ] AI credential is rotated.
- [ ] Private AI key is absent from browser assets.
- [ ] Server-side AI endpoint is ready.
- [ ] Rate limits and request size controls exist.
- [ ] EmailJS is configured and restricted.
- [ ] Privacy notice reflects actual service processing.
- [ ] Tests are current and run.
- [ ] Production build succeeds.
- [ ] BrowserRouter fallback is configured.
- [ ] Assets load correctly.
- [ ] No private test data is included.
- [ ] Hosting target is confirmed.

## Post-Deployment Verification

1. Open home page.
2. Navigate to all routes.
3. Refresh each nested route.
4. Check images and static assets.
5. Test text AI with authorized configuration.
6. Test image AI with a non-sensitive image.
7. Test meal API handling.
8. Verify favourites interactions.
9. Test contact form with synthetic values.
10. Inspect console and network requests.
11. Review mobile and desktop layouts.
12. Confirm no provider key is present in downloaded assets.

## Rollback

A static rollback generally republishes a previously verified build. Record the commit associated with each release. A frontend rollback does not revoke a leaked provider key; rotate credentials independently at the provider.

## Troubleshooting

Build fails: inspect compiler output and package compatibility.

Nested route fails: configure SPA fallback.

AI fails: verify server endpoint, model availability, credential status, quota, and request response.

Meal API is empty: inspect HTTP response and validate the `meals` payload.

Contact submission fails: check EmailJS configuration and origin restrictions.

Do not claim a deployment succeeded until the live site and core flows have been checked.
