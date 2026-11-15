# 📜 Changelog

This file records meaningful changes to Aahar AI. It is intended to communicate user-visible changes, maintenance work, security updates, and changes that affect configuration or development.

Entries should describe verified changes. Do not list proposed features as completed work or invent release versions and dates.

## 📚 Table of Contents

- [Purpose](#-purpose)
- [Change Categories](#-change-categories)
- [Versioning](#-versioning)
- [Unreleased](#-unreleased)
- [Maintaining the Changelog](#-maintaining-the-changelog)
- [Release Checklist](#-release-checklist)

## 🧭 Purpose

A useful entry explains what changed, why it matters, and whether the change requires action from users or maintainers.

This file complements commit history and pull requests. It should not copy every commit message.

## 🏷️ Change Categories

| Category | Meaning |
|---|---|
| Added | New feature, documentation, or supported workflow |
| Changed | Modification to existing behaviour |
| Fixed | Verified defect correction |
| Security | Credential, vulnerability, or security hardening work |
| Deprecated | Feature or workflow planned for removal |
| Removed | Feature or configuration removed |
| Performance | Measured performance improvement |
| Maintenance | Internal maintenance that affects development or operations |

## 🔖 Versioning

The package manifest currently identifies the application as version `0.1.0`. The repository does not define a full release cadence or formal semantic-versioning policy in its documentation.

Do not assume that every commit increments the package version. When a release policy is adopted, document version format, breaking-change rules, release tags, and deployment steps.

## 🚧 Unreleased

### Added
- Expanded the root README into a comprehensive project guide.
- Added technical documentation for setup, architecture, configuration, AI integration, testing, deployment, accessibility, troubleshooting, and roadmap planning.
- Added contribution, security, community conduct, support, and privacy policies.
- Added issue, pull request, and documentation templates.

### Changed
- Documentation now describes the actual Create React App toolchain and installed technologies.
- Documentation distinguishes browser-side AI calls, TheMealDB requests, Redux in-memory favourites, and EmailJS contact submission.
- Documentation records the current security concern involving a hard-coded Google Generative AI credential.

### Security
- Added explicit guidance to revoke/rotate the exposed AI credential and move privileged AI requests to a server-side design.

### Fixed
- No application source-code defect is claimed as fixed by this documentation update.

## ✍️ Maintaining the Changelog

When a meaningful change is completed:
1. Add it under the correct category in `Unreleased`.
2. Explain the effect, not only the file name.
3. Mention configuration or migration steps.
4. Reference an issue or pull request when one exists.
5. Do not expose credentials or personal information.
6. Do not claim tests passed unless they were actually run.
7. Move completed entries to a dated release section when a real release is prepared.

Example:

```markdown
### Fixed
- Handle an empty meal API response without rendering an invalid meal card.

### Changed
- Move AI requests behind a server endpoint so the provider credential is not included in the frontend bundle.
```

## 📦 Release Checklist

- [ ] Review the intended commit range.
- [ ] Confirm package version and release notes.
- [ ] Rotate any exposed credential.
- [ ] Verify AI and contact provider configuration.
- [ ] Run tests and fix stale assertions.
- [ ] Run the production build.
- [ ] Test core routes and external integrations.
- [ ] Review privacy and accessibility impact.
- [ ] Verify deployment configuration.
- [ ] Confirm the live result.
- [ ] Add only verified changelog entries.

The changelog should remain factual and current. It is not a marketing description or a substitute for migration documentation.
