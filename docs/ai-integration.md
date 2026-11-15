# 🤖 Aahar AI Integration Guide

This document describes the text and image AI flows currently implemented in Aahar AI, their input and response lifecycle, limitations, security requirements, and a safer production architecture.

The existing components call Google Generative AI from browser code. The repository contains a hard-coded provider credential. Treat it as exposed, rotate it, and do not reproduce it in another file or a Create React App environment variable.

## Table of Contents
- [Overview](#overview)
- [Text Experience](#text-experience)
- [Image Experience](#image-experience)
- [Prompt Behaviour](#prompt-behaviour)
- [Image Data Handling](#image-data-handling)
- [Response Rendering](#response-rendering)
- [Model Compatibility](#model-compatibility)
- [Error Handling](#error-handling)
- [Food and Nutrition Limitations](#food-and-nutrition-limitations)
- [Security Architecture](#security-architecture)
- [Testing Matrix](#testing-matrix)
- [Improvement Backlog](#improvement-backlog)

## Overview

The AI experiences live in `src/components/AiwithText.js` and `src/components/AiwithImage.js`. `src/pages/Home.js` switches between the two experiences. Both components keep input, loading, and response values in local React state and use React Markdown to display generated output.

## Text Experience

The text component accepts a cuisine or food preference. It builds a prompt requesting meals related to that input, prices in INR, ingredients, and a light mood-related explanation. The component sends the prompt through the Google Generative AI SDK and renders the returned text.

Current implementation limitations:
- Empty input is not blocked.
- Provider failures are not displayed as a complete error state.
- The request does not have robust timeout or cancellation behaviour.
- Loading state is not guaranteed to reset after every failure.
- The UI does not sufficiently explain that generated prices and claims may be inaccurate.
- The provider credential is embedded in the component source.

Recommended behaviour includes trimmed input validation, bounded prompt length, duplicate-submit prevention, visible errors, safe retries, and explicit uncertainty wording.

## Image Experience

The image component receives a browser file input. It converts the image to a Base64 data URL for preview and also prepares inline image data for the AI request. The prompt asks the model to identify food items, describe components, provide nutritional context, and briefly explain food history.

File handling should validate:
- A file was selected.
- The MIME type is allowed.
- The file is below a defined size limit.
- The file can be decoded as an image.
- The selected format is supported by the model.
- The request payload is within provider limits.

A user should be able to replace or clear an image, and failures should be visible and actionable.

## Prompt Behaviour

A prompt guides a model but does not guarantee correctness. A useful prompt should request concise output, identify uncertainty, avoid unsupported medical claims, and distinguish an estimate from a verified fact.

For food image analysis, a photograph cannot reliably reveal exact serving size, all ingredients, cooking oil, recipe substitutions, or allergens. Prompts should not ask the model to certify allergen safety or diagnose a health condition.

## Image Data Handling

The current implementation uses FileReader and Base64 encoding. Base64 adds overhead to payload size, so file size should be checked before conversion. FileReader errors should be handled, and a previous image should not be accidentally submitted after a new file is selected.

Consider centralizing file validation and conversion rather than maintaining separate conversion paths with different error behaviour.

## Response Rendering

React Markdown is used for the response. Treat model output as untrusted. Avoid enabling arbitrary raw HTML without a deliberate sanitization design. Review long tables, headings, links, and lists at narrow viewport widths. Empty output and malformed responses should have explicit UI states.

## Model Compatibility

The inspected source uses `gemini-pro` and `gemini-pro-vision` model identifiers. Model availability and SDK compatibility can change. Verify the provider's current documentation before changing identifiers or upgrading the SDK. Do not assume a historical model name remains available.

## Error Handling

Handle these cases separately:
- Empty text input.
- Missing image.
- Unsupported image.
- Oversized image.
- FileReader failure.
- Provider authentication failure.
- Model unavailable.
- Provider quota or rate limit.
- Network timeout.
- Empty response.
- Unexpected response shape.

Always finish the loading state after success or failure. Prevent an older request from overwriting a newer response.

## Food and Nutrition Limitations

AI-generated nutrition information is not a measured analysis. Images do not reveal exact amounts or hidden ingredients. Do not present model output as medical advice, an allergen guarantee, a laboratory nutrition report, or a personalized therapeutic diet. Visitors with medical or dietary concerns should consult qualified professionals and verified food information.

## Security Architecture

The exposed credential must be rotated. Do not put a new private key in a `REACT_APP_*` variable, because Create React App embeds those values into the browser bundle.

Recommended architecture:

```text
Visitor -> React UI -> Application API -> Server-side AI client -> AI provider
                         | validation
                         | rate limits
                         | size controls
                         | server-only secret
```

This backend is not currently present in the inspected repository. Implementing it is a separate application change. The backend should enforce input limits, request quotas, timeouts, and privacy-aware logs.

## Testing Matrix

| Scenario | Expected result |
|---|---|
| Empty query | No provider request; validation shown |
| Normal query | Response displayed |
| Very long query | Rejected or bounded |
| Provider failure | Visible error; loading ends |
| Missing image | Submission blocked |
| Unsupported file | Clear file error |
| Oversized file | Rejected before conversion |
| Corrupt image | Decode error displayed |
| Valid food image | Preview and response rendered |
| Non-food image | Uncertainty handled without misleading claims |
| Repeated click | Duplicate requests prevented |
| Empty response | Useful empty state |

## Improvement Backlog

- Server-side AI proxy and credential rotation.
- Request validation and quotas.
- Structured response format.
- File type and size validation.
- Better loading, cancellation, and retry behaviour.
- Privacy-aware diagnostics.
- Prompt evaluation using non-sensitive examples.
- Clear nutrition and price disclaimers.

These are recommendations, not claims of implemented functionality.
