# ❔ Aahar AI Frequently Asked Questions

This page answers common questions about the current repository. It describes the checked-in implementation, not features that may be planned.

## Table of Contents
- [What is Aahar AI?](#what-is-aahar-ai)
- [Which tools are required?](#which-tools-are-required)
- [How do I run the project?](#how-do-i-run-the-project)
- [Does the project have a backend?](#does-the-project-have-a-backend)
- [How does AI work?](#how-does-ai-work)
- [Are nutrition results accurate?](#are-nutrition-results-accurate)
- [Where does random meal data come from?](#where-does-random-meal-data-come-from)
- [Are favourites permanent?](#are-favourites-permanent)
- [Why might the contact form fail?](#why-might-the-contact-form-fail)
- [How do I report a problem?](#how-do-i-report-a-problem)

## What is Aahar AI?

Aahar AI is a React food discovery application with text-based food suggestions, image-based food exploration, random meal discovery, and a favourites collection.

## Which tools are required?

The repository uses React 18, Create React App, React Router, Redux Toolkit, Google Generative AI SDK, Axios, TheMealDB, EmailJS, and npm. Check the root package manifest for the exact dependency declarations.

## How do I run the project?

Install dependencies with `npm ci` and start the development server with `npm start`. See [Getting Started](getting-started.md).

## Does the project have a backend?

The inspected repository is a frontend application. It does not define a first-party backend API or database. AI calls are currently made from browser-side components, which is not a safe way to protect a private provider credential.

## How does AI work?

The text and image components construct prompts and call the Google Generative AI SDK. See [AI Integration](ai-integration.md). Provider model availability and credentials must be checked separately.

## Are nutrition results accurate?

Not necessarily. Model output is an estimate or explanation, not a verified nutrition label, laboratory analysis, allergen guarantee, or medical recommendation.

## Where does random meal data come from?

The random meal generator calls TheMealDB through the base URL in `src/core/config.js`.

## Are favourites permanent?

The current Redux store is in memory. The inspected source does not configure persistence or account synchronization, so a browser refresh may clear favourites.

## Why might the contact form fail?

The checked-in EmailJS service, template, and public key values appear to be placeholders. A valid EmailJS configuration is required. See [Configuration](configuration.md).

## How do I report a problem?

Use the GitHub issue templates for reproducible bugs or feature requests. Never publish credentials, private images, personal health information, or private contact form contents. Security issues should follow [SECURITY.md](../SECURITY.md).
