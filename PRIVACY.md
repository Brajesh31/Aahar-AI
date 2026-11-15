# 🛡️ Aahar AI Privacy and Data Handling Notes

This document describes privacy-relevant behaviour visible in the Aahar AI repository and identifies what must be verified before operating a live deployment.

It is technical documentation, not a legally reviewed privacy policy. It does not establish that the application complies with any particular law, and it is not a complete inventory of production data collection. The site operator must confirm actual provider settings, hosting configuration, retention practices, analytics, cookies, and applicable legal responsibilities.

## 📚 Table of Contents

- [Purpose and Scope](#-purpose-and-scope)
- [Important Limitations](#-important-limitations)
- [Information Entered by Visitors](#-information-entered-by-visitors)
- [Text AI Requests](#-text-ai-requests)
- [Image AI Requests](#-image-ai-requests)
- [Meal Data Requests](#-meal-data-requests)
- [Favourites and Browser State](#-favourites-and-browser-state)
- [Contact Form](#-contact-form)
- [Browser-Side Configuration](#-browser-side-configuration)
- [External Providers](#-external-providers)
- [Cookies, Analytics, and Storage](#-cookies-analytics-and-storage)
- [Data Minimization](#-data-minimization)
- [Retention and Deletion](#-retention-and-deletion)
- [Security Practices](#-security-practices)
- [Visitor Transparency](#-visitor-transparency)
- [Privacy Incident Handling](#-privacy-incident-handling)
- [Maintainer Checklist](#-maintainer-checklist)

## 🎯 Purpose and Scope

Aahar AI allows visitors to enter text, upload food images, request meal data, save favourites in application state, and submit contact details through an external provider.

The current source contains browser-side integrations with Google Generative AI, TheMealDB, and EmailJS. These providers may process request information according to their own terms and settings.

This document describes the visible application flows. It cannot determine every data flow in a production environment, including hosting logs, provider telemetry, analytics, browser storage, or scripts added outside this repository.

## ⚠️ Important Limitations

The source code alone cannot establish:
- The identity of the operator of a live deployment.
- Exact provider data locations.
- Provider retention periods.
- Whether additional production analytics or tracking are active.
- Hosting log retention.
- The complete cookie or storage inventory.
- The legal basis or notice requirements for a specific deployment.

Verify these details before making public privacy claims.

## ✍️ Information Entered by Visitors

Visitors may enter or select:
- A text query describing a cuisine or food preference.
- An image file for food analysis.
- A meal selection that is stored in the current Redux state.
- Name, email address, and message fields in the contact form.

Text queries and images may reveal personal preferences or other information depending on what a visitor chooses to submit. The application should discourage visitors from entering sensitive personal information that is not needed for food discovery.

## 💬 Text AI Requests

The text AI component builds a prompt from the visitor's search input and sends it to Google Generative AI using the current browser-side SDK integration.

Before production use, the operator should confirm:
- Which model and provider endpoint are active.
- What text is sent.
- Whether the provider stores prompts or response information.
- Provider processing location and retention terms.
- Whether prompts are used for model improvement under the applicable provider terms.
- What visitor notice is required.

Do not log complete prompts unnecessarily. Use synthetic prompts for routine development.

## 🖼️ Image AI Requests

The image AI component reads a selected file in the browser, converts it to Base64 data, and sends inline image data with a prompt to the generative AI provider.

Images may contain more than food. A photo can include faces, location clues, receipts, documents, or other personal information in the background. Visitors should be encouraged to upload only images appropriate for the food analysis purpose.

The operator should:
- Explain that images are sent to an external AI provider.
- Limit allowed file types and size.
- Avoid retaining images longer than required.
- Avoid storing image payloads in application logs.
- Review provider handling and retention terms.
- Use synthetic or non-sensitive images for testing.

## 🍲 Meal Data Requests

The random meal generator sends a request to TheMealDB through Axios. The request retrieves a random meal record from the configured endpoint.

The repository code does not establish the provider's complete logging or retention practices. Review TheMealDB's current terms and privacy information before making claims about the external service.

## ❤️ Favourites and Browser State

The Redux store maintains favourites in application memory. The inspected code does not configure a persistence layer, account system, or backend synchronization.

Do not promise that favourites are permanently stored or synchronized across devices. If persistence is added later, document:
- The storage mechanism.
- Data stored.
- Whether it remains on the device.
- How the visitor can clear it.
- Whether it is associated with an account.
- Any third-party service involved.

## ✉️ Contact Form

The contact component uses EmailJS browser SDK and exposes fields for name, email address, and message. The currently inspected source contains placeholder-looking service, template, and public-key values, so a working production configuration must be confirmed.

Provider settings determine how contact information is delivered, processed, retained, and accessed.

Before enabling the contact form:
1. Verify the active EmailJS service and template.
2. Confirm all transmitted fields.
3. Review provider privacy and data-processing terms.
4. Check recipient and automatic response configuration.
5. Apply origin restrictions and abuse prevention where available.
6. Restrict provider account access.
7. Determine how long contact requests are retained.
8. Provide a visitor-facing privacy notice and contact route.

Do not copy actual visitor messages into public issues or test fixtures.

## 🌐 Browser-Side Configuration

This is a browser-delivered React application. Values included in the JavaScript bundle, HTML, CSS, or public assets can be inspected.

Create React App embeds variables prefixed with `REACT_APP_` into client-side builds. They must not be used for private credentials.

Never put private API keys, passwords, access tokens, or privileged provider credentials in the frontend bundle.

## 📦 External Providers

The current source references:
- Google Generative AI for text and image responses.
- TheMealDB for random meal information.
- EmailJS for contact form delivery.

The application also uses public software libraries for UI, routing, state, Markdown rendering, and HTTP requests. The presence of a library does not automatically prove that it transmits personal data to its maintainers.

When adding a provider or service, document:
- What information is transmitted.
- Which provider receives it.
- Why the information is needed.
- Whether the provider stores it.
- Whether cookies or browser storage are used.
- Whether a visitor notice or consent is required.
- How the integration can be disabled or removed.

## 🍪 Cookies, Analytics, and Storage

The inspected source does not establish a complete inventory of production cookies, local storage, analytics, or tracking scripts.

Do not claim that the live site uses no tracking or cookies without inspecting the production environment and provider settings.

Before adding analytics, session recording, advertising scripts, or tracking tools, review their data collection, access, retention, consent requirements, and visitor-facing disclosure.

## 🧹 Data Minimization

Collect and transmit only information needed for the requested feature.

Good practices:
- Keep text prompts limited to the food discovery request.
- Avoid requesting sensitive health information.
- Encourage visitors not to upload images containing unrelated personal information.
- Do not retain image payloads unnecessarily.
- Avoid logging full prompts or message bodies.
- Use synthetic data in development.
- Restrict access to contact submissions.
- Avoid copies of visitor data in public repository files.

## 🗃️ Retention and Deletion

The repository does not define verified retention periods for AI prompts, uploaded images, contact requests, meal API requests, or provider logs.

The site operator must review provider settings and define a retention plan that identifies:
- Information category.
- Purpose.
- Storage location.
- Who can access it.
- Retention period.
- Deletion or anonymization method.
- Any operational or legal reason to retain it longer.

Do not promise deletion timelines unless provider settings and the operational process support that promise.

## 🔐 Security Practices

Privacy depends on security:
- Keep provider secrets out of browser code.
- Rotate exposed credentials.
- Restrict provider account permissions.
- Use HTTPS for live service communication.
- Validate image files and text input.
- Apply request limits.
- Avoid unnecessary logging.
- Protect contact submissions.
- Use synthetic data for tests.
- Review third-party integrations.

See [SECURITY.md](SECURITY.md) for the security policy and credential exposure remediation.

## 🔎 Visitor Transparency

A visitor-facing privacy notice should identify the operator and accurately explain the actual deployed configuration.

Depending on the environment and applicable rules, it may need to explain:
- What information visitors enter.
- Why text and images are sent to an AI provider.
- Which providers receive information.
- How the contact form works.
- Whether analytics or tracking are active.
- How long information is retained.
- How visitors can ask privacy questions or exercise applicable rights.

The operator should seek qualified legal review where appropriate. This repository document is not legal advice.

## 🚨 Privacy Incident Handling

If visitor information is exposed or sent to an unintended destination:
1. Identify the information and affected systems.
2. Stop ongoing exposure where possible.
3. Restrict affected accounts or resources.
4. Preserve evidence securely.
5. Avoid sharing exposed information publicly.
6. Determine which providers and people may be affected.
7. Seek appropriate legal or professional guidance.
8. Make notifications where required.
9. Correct the underlying code or configuration.
10. Record lessons learned without retaining unnecessary personal data.

## ✅ Maintainer Checklist

- [ ] AI text processing and provider settings are verified.
- [ ] Image upload behaviour and provider destination are documented.
- [ ] Visitors are warned not to upload unrelated sensitive information.
- [ ] The exposed AI credential is rotated.
- [ ] AI request handling does not expose privileged secrets.
- [ ] TheMealDB provider details are reviewed.
- [ ] EmailJS configuration and retention settings are verified.
- [ ] Favourites persistence claims match actual implementation.
- [ ] Cookies, analytics, and browser storage are inventoried.
- [ ] Retention and deletion practices are documented.
- [ ] Public privacy notice reflects the live deployment.
- [ ] Privacy questions have an appropriate contact path.

Review this document whenever providers, AI prompts, image handling, contact form behaviour, analytics, or storage mechanisms change.
