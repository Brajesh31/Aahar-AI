# ♿ Aahar AI Accessibility Guide

This guide provides a practical accessibility review process for Aahar AI. The application includes navigation, text and file inputs, AI response content, meal cards, favourites actions, and a contact form. Every core action should be usable with a keyboard and understandable with assistive technology.

This guide is not a claim of WCAG conformance or an independent accessibility certification.

## Table of Contents
- [Objectives](#objectives)
- [Navigation](#navigation)
- [Keyboard Use](#keyboard-use)
- [Text Input](#text-input)
- [Image Upload](#image-upload)
- [AI Output](#ai-output)
- [Meal Cards and Favourites](#meal-cards-and-favourites)
- [Contact Form](#contact-form)
- [Loading and Errors](#loading-and-errors)
- [Colour and Typography](#colour-and-typography)
- [Responsive Layout](#responsive-layout)
- [Screen Reader Review](#screen-reader-review)
- [Test Checklist](#test-checklist)

## Objectives

Visitors should be able to understand the page, navigate routes, enter text, select images, perceive request status, read AI output, manage favourites, and send a contact request without being dependent on a mouse or visual-only signals.

## Navigation

Use meaningful link names and logical headings. Identify the active route using more than colour alone. Ensure the navigation remains available and understandable on narrow screens.

## Keyboard Use

Verify Tab and Shift+Tab order, visible focus, Enter activation for links, Space activation for buttons, and no keyboard trap. Use semantic buttons for actions and links for navigation.

## Text Input

Provide a persistent label and instructions. Placeholder text is not a replacement for a label. Empty input validation should identify the problem and explain how to continue.

## Image Upload

Label the file input. Explain supported types and limits when implemented. Communicate the selected file and provide a way to replace or clear it. A preview should not be the only confirmation that the image was selected.

## AI Output

Ensure Markdown headings, lists, and tables have logical structure. Long content must be readable on mobile. External links should have meaningful names. Do not allow untrusted raw HTML from model output without a sanitization design.

## Meal Cards and Favourites

Use meaningful meal titles and image alternatives. Mark and remove actions should be semantic buttons with clear names. Provide an understandable empty favourites state.

## Contact Form

Associate labels with all fields. Explain required fields. Make errors identify the affected control. Announce submission success and failure. Do not rely only on alerts or colour changes.

## Loading and Errors

AI and API requests may take time. Loading, errors, and completion should be perceivable. Avoid repeated submissions while a request is pending. Always clear the loading state after failure as well as success.

## Colour and Typography

Check contrast for text, controls, links, focus, and error states. Do not use colour alone to convey selected mode, favourite status, or validation state. Avoid text over visually busy images.

## Responsive Layout

The current home page shows an alert saying the website is not for mobile. This does not constitute a responsive experience. Review mobile widths for overflow, tiny controls, clipped AI responses, broken meal cards, and contact form usability. Test zoom at 200%.

## Screen Reader Review

Use a screen reader to inspect page headings, navigation, mode selector, file input, loading feedback, AI response, meal card actions, favourites, and contact form.

## Test Checklist

- [ ] Navigation works with keyboard.
- [ ] Focus is visible.
- [ ] All form controls have labels.
- [ ] Buttons and links have meaningful names.
- [ ] Loading and errors are perceivable.
- [ ] AI Markdown remains readable.
- [ ] Meal images have appropriate alternatives.
- [ ] Favourite actions are accessible.
- [ ] Contact validation and status feedback are accessible.
- [ ] Narrow layouts and zoom are reviewed.
- [ ] Screen reader review covers core tasks.
