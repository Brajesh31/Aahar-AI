# 📦 Release and Change Management

This guide defines a cautious release process for Aahar AI. It is a proposed maintainer workflow, not a statement that releases are currently automated.

## Table of Contents
- [Release Principles](#release-principles)
- [Before a Release](#before-a-release)
- [Validation](#validation)
- [Documentation](#documentation)
- [Publishing](#publishing)
- [After Release](#after-release)
- [Rollback and Incident Response](#rollback-and-incident-response)

## Release Principles

Ship changes that can be explained, tested, and rolled back. Security fixes take priority over feature work. Never treat a green build as proof that third-party services are available.

## Before a Release

- Review merged changes and open critical issues.
- Confirm the intended version and release notes.
- Verify dependency changes and lockfile consistency.
- Review AI provider model and credential configuration.
- Check EmailJS configuration and provider restrictions.
- Review privacy and security impact.
- Confirm the hosting target and deployment procedure.

## Validation

Run:

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

The current starter test may be stale because it expects the default Create React App learning link. Replace it with meaningful application tests before treating test success as release confidence.

Manually verify home, About, Favourites, Meal Generator, and Contact routes. Test direct route refreshes on the target host.

## Documentation

Update README, architecture, configuration, AI integration, troubleshooting, privacy, and changelog documents when behaviour changes. Mark planned functionality as planned, not shipped.

## Publishing

Tag and publish only after the intended build has been validated. Hosting instructions depend on the selected provider. The repository currently has a README timestamp workflow, not a verified website deployment workflow.

## After Release

- Check the deployed site and nested routes.
- Verify critical user flows.
- Inspect browser console and network failures.
- Check provider quotas and service status.
- Record the release commit and known limitations.

## Rollback and Incident Response

Restore the last known-good frontend build when required. If a credential is exposed, revoke or rotate it at the provider immediately. Rolling back frontend code does not revoke a leaked credential.
