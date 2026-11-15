# 🔐 Security Policy

Aahar AI depends on frontend code, external AI services, an external meal-data API, a contact form provider, npm dependencies, and repository automation. Security therefore includes credential handling, data flows, uploaded files, external responses, and deployment practices.

This document explains how to report vulnerabilities and provides security expectations for contributors and maintainers. It does not claim that the application has been independently audited or that it is free of vulnerabilities.

## 📚 Table of Contents

- [Security Commitment](#-security-commitment)
- [Scope](#-scope)
- [Supported Versions](#-supported-versions)
- [Critical Credential Exposure Notice](#-critical-credential-exposure-notice)
- [Private Vulnerability Reporting](#-private-vulnerability-reporting)
- [Information to Include](#-information-to-include)
- [Safe Testing Rules](#-safe-testing-rules)
- [Response and Disclosure](#-response-and-disclosure)
- [Architecture and Trust Boundaries](#-architecture-and-trust-boundaries)
- [Google Generative AI Security](#-google-generative-ai-security)
- [Create React App Environment Variables](#-create-react-app-environment-variables)
- [Image Upload Security](#-image-upload-security)
- [External API Handling](#-external-api-handling)
- [EmailJS Contact Flow](#-emailjs-contact-flow)
- [Dependencies and Supply Chain](#-dependencies-and-supply-chain)
- [Repository Workflow Security](#-repository-workflow-security)
- [Privacy and User Data](#-privacy-and-user-data)
- [Incident Response](#-incident-response)
- [Security Checklist](#-security-checklist)
- [Limitations](#-limitations)

## 🛡️ Security Commitment

The project aims to handle security reports responsibly, avoid publishing sensitive information, and make safe configuration decisions.

Security claims should be based on inspection and evidence. Documentation alone does not fix a credential exposure or validate the production security posture.

## 🎯 Scope

This policy covers vulnerabilities in:
- React application code.
- AI request construction and handling.
- Image upload and Base64 conversion.
- TheMealDB request and response handling.
- Redux state handling.
- EmailJS integration.
- Create React App build configuration.
- npm dependencies and lockfile.
- GitHub workflows and repository automation.
- Documentation that could lead to unsafe configuration.

External services and hosting systems have their own security policies. A vulnerability in Google, EmailJS, TheMealDB, GitHub, or a hosting provider may need to be reported to that provider.

## 📦 Supported Versions

Security fixes are considered for the current code on the default branch, `main`.

The repository does not publish a formal long-term support matrix or guaranteed response schedule. Include the affected commit, component, dependency version, route, or provider integration when known.

## 🚨 Critical Credential Exposure Notice

The source files inspected for this documentation update include a hard-coded Google Generative AI credential in the AI components.

A credential committed to a public repository must be treated as exposed. Removing it from the latest file does not revoke it, and changing the source alone does not make the old credential safe.

The repository owner should:
1. Revoke or rotate the exposed credential in the provider console.
2. Review provider usage and billing for unexpected requests.
3. Remove the hard-coded value from source.
4. Review commit history and prior build artefacts.
5. Move privileged AI requests to a trusted server-side endpoint.
6. Apply quota restrictions and abuse controls.
7. Never paste the exposed credential or replacement private key into public files, issues, or documentation.

This documentation update does not itself rotate credentials or modify application source. The credential remediation is a separate security change and should be completed before production use.

## 📣 Private Vulnerability Reporting

**Do not publish exploitable vulnerability details in public issues, pull requests, discussions, or social media before coordinated remediation.**

Preferred process:

1. Open the repository's Security tab.
2. Select the private vulnerability reporting or security advisory option if enabled.
3. Describe the affected code and impact.
4. Include a safe reproduction method.
5. Avoid including credentials or real user data.

Private advisory route:

<https://github.com/Brajesh31/Aahar-AI/security/advisories/new>

If private reporting is not enabled, contact the repository owner through the contact method listed on the owner's GitHub profile. Do not transmit passwords or private keys through an unverified channel.

## 🧾 Information to Include

A useful report may include:
- A short title and vulnerability category.
- Affected file, component, route, dependency, or provider.
- Affected commit or version.
- Preconditions and safe reproduction steps.
- Expected and actual behaviour.
- Realistic security impact.
- Sanitized console or network evidence.
- A mitigation idea where known.

Do not include:
- Actual API keys or service credentials.
- EmailJS account secrets.
- Private visitor messages.
- Personal images or sensitive records.
- Access tokens or passwords.
- Unredacted logs containing confidential values.

## 🧪 Safe Testing Rules

Only test systems and accounts you own or are explicitly authorized to assess.

Do not:
- Use exposed credentials to access provider accounts.
- Generate high-volume requests against live AI services.
- Exhaust another account's quota.
- Send unsolicited messages through the contact form.
- Access or retain another visitor's images or prompts.
- Perform denial-of-service testing against the live site.
- Modify third-party data.
- Publish private information to prove impact.

Use local environments, synthetic data, and controlled provider accounts. Stop testing when an action could affect real visitors or third-party services.

## ⏱️ Response and Disclosure

The maintainer will make a best-effort attempt to acknowledge and assess reports, request clarification, coordinate remediation, and agree on disclosure.

No fixed acknowledgement or resolution time is promised. The timeline can depend on severity, reproducibility, maintainer availability, and third-party provider involvement.

Allow an opportunity for investigation and remediation before public disclosure. Coordinated disclosure should balance user protection with the reporter's need for transparency and recognition.

## 🧱 Architecture and Trust Boundaries

Aahar AI is currently a browser-side React application. The inspected repository does not contain a first-party backend or database implementation.

Consequences:
- Browser-delivered source and values can be inspected.
- Client-side validation is not a security boundary.
- A hidden page or route does not protect data.
- Requests to external providers may be inspected by the browser user.
- Privileged credentials must not be included in the bundle.
- External API responses must be treated as untrusted data.

Sensitive operations should be moved to a server that can protect credentials and enforce authorization, quotas, validation, and logging policies.

## 🤖 Google Generative AI Security

The text and image components use the Google Generative AI SDK from browser code.

Recommended production architecture:
1. Browser submits a bounded request to an application-controlled backend.
2. Backend validates the request and enforces size and usage limits.
3. Backend reads the provider credential from server-only environment configuration.
4. Backend sends the request to the AI provider.
5. Backend filters or structures the returned content where appropriate.
6. Browser receives only the response needed for the UI.

The backend should consider:
- Authentication or abuse prevention appropriate to the product.
- Rate limits per visitor or session.
- Maximum prompt and image size.
- Request timeouts and cancellation.
- Provider quota and cost monitoring.
- Logging that avoids unnecessary prompt and image retention.
- Clear error handling.
- Model availability and supported request formats.

Do not present AI output as verified medical, nutrition, allergen, or health advice.

## 🔑 Create React App Environment Variables

Create React App embeds variables prefixed with `REACT_APP_` into the browser build. These values are not private.

Do not put the following in `REACT_APP_*`:
- Private Google AI keys.
- Database passwords.
- Email provider account secrets.
- Access tokens.
- Signing keys.
- Any value granting privileged access.

A variable file ignored by Git can help local configuration hygiene, but it does not make a browser-exposed key secret after compilation.

## 🖼️ Image Upload Security

The image feature accepts a browser-selected file and converts it into Base64 data.

Validate:
- A file exists.
- The file type is allowed.
- The file size is limited.
- The file can be decoded as an image.
- The image format is supported by the provider.
- The converted payload is within request limits.

Do not assume that an HTML file input guarantees safe content. Browser-provided MIME types are not a complete security check. Do not retain uploaded images longer than needed.

## 🌐 External API Handling

The meal generator uses TheMealDB through Axios.

Treat returned data as untrusted:
- Check request failures.
- Validate the expected object and array shape.
- Handle missing meal records.
- Render external text safely.
- Avoid assuming every field exists.
- Avoid logging unnecessary visitor or request data.

Do not place private service credentials in client code. Public endpoints should still be handled with resilience and appropriate request limits.

## ✉️ EmailJS Contact Flow

The contact page uses EmailJS browser SDK. The inspected source includes placeholder-looking service, template, and key values.

Before configuring a live form:
- Use the provider's intended public-client setup.
- Keep private account credentials out of frontend source.
- Configure origin restrictions where supported.
- Apply abuse prevention and usage limits.
- Validate required fields.
- Avoid logging full message content.
- Test using synthetic content.
- Review provider retention and privacy practices.

## 📦 Dependencies and Supply Chain

Dependencies may contain known vulnerabilities or introduce unexpected behaviour.

A safe update process:
1. Review the advisory and affected package.
2. Determine whether the affected functionality is used.
3. Check release notes and compatibility.
4. Update a focused set of packages.
5. Regenerate the lockfile with npm.
6. Run tests and production build.
7. Test the affected route and integration.
8. Record any breaking changes.

Do not blindly force-upgrade the entire dependency tree.

## ⚙️ Repository Workflow Security

The repository includes a scheduled README timestamp workflow with write access to repository contents. Review any workflow change for:
- Least-privilege permissions.
- Trusted third-party actions.
- Safe shell handling.
- Untrusted input in command strings.
- Credential exposure in logs.
- Unnecessary write permissions.
- Unexpected triggers.

A workflow that writes to the repository should be reviewed carefully because it can change committed content.

## 🛡️ Privacy and User Data

AI text prompts and uploaded images are sent to an external AI provider in the current implementation. Meal requests are sent to TheMealDB, and contact form values are submitted through EmailJS when configured.

Do not use real personal or sensitive data for routine tests. Explain external processing to visitors and review provider terms, retention, and settings.

See [PRIVACY.md](PRIVACY.md).

## 🚑 Incident Response

If a credential or personal data is exposed:
1. Identify what was exposed and where.
2. Revoke or rotate affected credentials.
3. Restrict access where possible.
4. Review provider and workflow activity.
5. Identify affected commits and build artefacts.
6. Remove unsafe active configuration.
7. Determine whether visitors or third parties are affected.
8. Make required notifications based on applicable obligations.
9. Validate the remediation.
10. Record lessons learned without retaining unnecessary sensitive data.

## ✅ Security Checklist

- [ ] No private credentials are committed.
- [ ] Previously exposed AI credential has been rotated.
- [ ] AI calls do not expose privileged credentials in browser bundles.
- [ ] AI requests have suitable rate and size limits.
- [ ] Image file type and size are validated.
- [ ] External response shapes are checked.
- [ ] EmailJS is configured with appropriate restrictions.
- [ ] Test data is synthetic.
- [ ] Workflows use least privilege.
- [ ] Dependencies are reviewed.
- [ ] Public reports do not contain secrets or personal data.
- [ ] Privacy documentation reflects actual integrations.

## 🚧 Limitations

This policy does not provide a response SLA, authorize testing of systems you do not own, replace provider policies, provide legal advice, or certify the application as secure.

Security is ongoing work. Report credible vulnerabilities privately and include enough detail for a safe investigation.
