# 🧭 Aahar AI Support Guide

This document explains how to get help with Aahar AI, how to report a reproducible issue, and what technical information helps maintainers investigate it. It is intended for visitors, developers, contributors, and people deploying their own copy of the project.

Support is provided on a best-effort basis. No guaranteed response time, deployment uptime, or resolution service-level agreement is offered.

## 📚 Table of Contents

- [Start Here](#-start-here)
- [Choose the Right Channel](#-choose-the-right-channel)
- [Before Reporting a Problem](#-before-reporting-a-problem)
- [Installation and Development](#-installation-and-development)
- [Text AI Support](#-text-ai-support)
- [Image AI Support](#-image-ai-support)
- [Meal Generator Support](#-meal-generator-support)
- [Favourites Support](#-favourites-support)
- [Contact Form Support](#-contact-form-support)
- [Routing and Deployment Support](#-routing-and-deployment-support)
- [Information to Include](#-information-to-include)
- [Support Request Template](#-support-request-template)
- [Security and Privacy](#-security-and-privacy)
- [Support Boundaries](#-support-boundaries)
- [Maintainer Triage Checklist](#-maintainer-triage-checklist)

## 🚦 Start Here

Read these documents first:
1. [README.md](README.md), project overview and quick setup.
2. [docs/README.md](docs/README.md), documentation index.
3. [docs/getting-started.md](docs/getting-started.md), local setup.
4. [docs/troubleshooting.md](docs/troubleshooting.md), common problems.
5. [CONTRIBUTING.md](CONTRIBUTING.md), development workflow.

Search existing issues before opening a new one.

## 🧭 Choose the Right Channel

| Request | Channel | Notes |
|---|---|---|
| Application defect | Bug report issue template | Include reproducible steps |
| Feature proposal | Feature request issue template | Explain user benefit |
| Documentation correction | Documentation issue or focused PR | Identify incorrect guidance |
| General usage question | GitHub Discussions, if enabled | Search first |
| Security vulnerability | Private report in SECURITY.md | Do not disclose publicly |
| Conduct concern | Private contact with repository owner | Protect privacy |
| Privacy question | Private contact with repository owner | Do not share personal data publicly |

Do not file duplicate issues or use a public issue for credentials or private visitor information.

## 🔍 Before Reporting a Problem

Determine:
- Which route or feature is affected?
- Does it happen on the current `main` branch?
- Can it be reproduced on a clean install?
- Does it happen with another browser?
- Is the failure from the application or an external provider?
- Are there console or network errors?
- Does the issue involve sensitive data?

For a clean local install:

```bash
git clone https://github.com/Brajesh31/Aahar-AI.git
cd Aahar-AI
npm ci
npm start
```

Use synthetic prompts and test data. Do not use personal health information or private images to reproduce ordinary defects.

## 📦 Installation and Development

Check versions:

```bash
node --version
npm --version
```

Install and start:

```bash
npm ci
npm start
```

If installation fails, include the exact command, runtime versions, operating system, and first meaningful error. If the development server does not start, check whether port 3000 is already occupied and use the actual URL printed by the terminal.

## 💬 Text AI Support

If text AI does not return a response, check:
- Whether the query is empty.
- Whether the provider credential is valid and has not been revoked.
- Whether the configured model is currently available.
- Provider quota and usage restrictions.
- Network request status.
- Browser console errors.
- Whether the request is rejected due to input or provider limits.

The repository currently contains a hard-coded AI credential that must be treated as exposed and rotated. Do not copy it into a support report or attempt to reuse it. The current AI flow also needs robust user-facing error handling.

Generated nutrition and mood-related statements are not medical advice.

## 🖼️ Image AI Support

For an image analysis problem, include:
- Browser and version.
- File type and approximate size.
- Whether the image preview appears.
- Whether the provider request starts.
- The sanitized error message.
- Whether another non-sensitive test image works.

Do not attach private or identifiable images. Use a synthetic or public food image that you have permission to share.

## 🍲 Meal Generator Support

The random meal generator uses TheMealDB through Axios. If it shows no meal:
- Inspect the Network panel.
- Check the request URL and HTTP status.
- Confirm the response contains a non-empty `meals` array.
- Check provider availability.
- Identify whether the component is still waiting or the request failed.

The current page has limited visitor-facing loading and error handling. Report whether the issue is a blank result, missing field, network failure, or rendering error.

## ❤️ Favourites Support

The current favourites feature is backed by an in-memory Redux store. It does not configure persistent browser or account storage in the inspected source.

If favourites disappear after a full refresh, that behaviour is consistent with the current implementation. Report other issues such as duplicate records, incorrect removal, or rendering missing meal fields.

## ✉️ Contact Form Support

The inspected EmailJS service, template, and public key values are placeholders. The form will not work in production until valid provider configuration is supplied.

For authorized tests:
- Use synthetic name, email, and message values.
- Check browser network and console output.
- Verify provider service and template settings.
- Confirm template parameters match form fields.
- Check provider account restrictions.
- Do not publish credentials or real contact messages.

## 🌐 Routing and Deployment Support

The app uses BrowserRouter. In production, the hosting server must serve the SPA entrypoint for routes handled by React Router.

When a nested route fails, report:
- Exact route.
- Whether in-app navigation works.
- Whether direct entry works.
- Whether refresh fails.
- Hosting provider or environment.
- HTTP status if available.

The repository includes a README timestamp workflow but the inspected tree does not contain a website deployment workflow. Do not assume deployment is configured simply because GitHub Actions exists.

## 🧾 Information to Include

| Information | Why it helps |
|---|---|
| Branch or commit | Identifies source version |
| Route or component | Narrows the issue |
| Operating system | Identifies environment differences |
| Browser and version | Helps reproduce rendering and API behaviour |
| Node/npm version | Helps reproduce installation/build issues |
| Input type and size | Helps reproduce image problems |
| Provider response status | Separates application and provider failures |
| Steps to reproduce | Makes the problem testable |
| Expected vs actual result | Defines the gap |
| Sanitized logs | Provides evidence safely |

Remove credentials, personal data, private prompts, email addresses, and image metadata where appropriate.

## ✍️ Support Request Template

```text
Title:

Environment:
Operating system:
Browser:
Node.js:
npm:

Affected route or feature:

Steps to reproduce:
1.
2.
3.

Expected result:

Actual result:

Provider involved, if any:

Sanitized console/network output:

Frequency:
Always / sometimes / once

Additional context:
```

## 🔐 Security and Privacy

Never report a vulnerability in a public issue. Follow [SECURITY.md](SECURITY.md). Do not share API keys, EmailJS account secrets, real visitor messages, personal health details, or private images.

For conduct concerns, follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). For privacy questions, use an appropriate private contact route.

## 🚧 Support Boundaries

Support does not guarantee:
- A response or resolution by a particular time.
- Debugging of every heavily modified fork.
- Recovery of third-party account credentials.
- Changes to hosting or provider accounts the maintainer does not control.
- Implementation of every feature request.
- Medical, nutritional, or legal advice.
- Availability of third-party AI or meal providers.

External service incidents may require the relevant provider's support channels.

## 🛠️ Maintainer Triage Checklist

- [ ] Request is in the correct channel.
- [ ] Affected commit and route are known.
- [ ] Reproduction steps are clear.
- [ ] Logs and attachments contain no secrets or personal data.
- [ ] The issue is not a duplicate.
- [ ] External provider involvement is identified.
- [ ] Impact and severity are understood.
- [ ] Next action is clear to the reporter.

Clear reports help keep Aahar AI reliable and maintainable.
