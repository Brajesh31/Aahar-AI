# 🛠️ Maintainer Operations

This guide collects routine maintenance practices for Aahar AI.

## Dependency Maintenance

- Review Dependabot proposals before merging.
- Read release notes for React, React Scripts, Google Generative AI, Redux Toolkit, Axios, and EmailJS changes.
- Update related packages in small, reviewable groups.
- Run tests and production builds after updates.
- Keep `package-lock.json` in sync with `package.json`.
- Do not use `npm audit fix --force` without reviewing breaking changes.

## Repository Hygiene

- Keep generated output and `node_modules` out of Git.
- Never commit API keys, tokens, private images, or real contact form data.
- Remove stale documentation when behaviour changes.
- Use descriptive commit messages.
- Keep issue and pull request discussions focused and reproducible.

## GitHub Automation

The existing `.github/workflows/update-readme.yml` changes the README timestamp on a schedule and on pushes. It is not a build or deployment workflow. Review whether hourly timestamp-only commits provide real value before retaining this automation.

## External Services

Review Google AI credential exposure, model availability, usage quotas, TheMealDB response behaviour, and EmailJS configuration. Provider credentials and account access should be managed outside public browser source.

## Operational Review

At a regular maintenance interval:
- Review security advisories.
- Review dependency update proposals.
- Check the build.
- Check routes and critical interactions.
- Review open bug reports.
- Confirm documentation matches implementation.
- Review accessibility and mobile behaviour.
- Review third-party service configuration.

## Change Documentation

When a route changes, update README and architecture. When state shape changes, update architecture and testing. When a provider changes, update configuration, AI integration, privacy, and troubleshooting. When hosting changes, update deployment and release process.
