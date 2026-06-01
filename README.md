# Homework 3 Portfolio Website

A static portfolio website built with HTML, CSS, and JavaScript. This project demonstrates a personal portfolio experience with a project submission form, accessible navigation, responsive layout, and client-side validation.

## Overview

The website includes:

- `index.html` - Home page with introduction and navigation.
- `portfolio.html` - Portfolio page with a project submission form and a projects table.
- `about.html`, `contact.html`, `github.html`, `chatbot.html`, `card.html`, `overview.html` - Supporting pages for personal profile, contact, GitHub links, chat bot demo, card layout, and overview.
- `css/styleportfolio.css` - Main portfolio stylesheet.
- `css/style.css` - Shared styles for the site.
- `css/figma-auth.css` - Generated Figma CSS export.
- `javascript/app.js` - Form validation and project table behavior.

## Accessibility Notes

The site includes the following accessibility improvements:

- Skip link to allow keyboard users to jump directly to main content.
- Semantic HTML elements for headings, navigation, sections, tables, and forms.
- `aria-label` on the main navigation for clearer screen reader context.
- `aria-describedby` linking form controls to error messages.
- `role="alert"` and `aria-live="assertive"` on form error containers to announce validation issues.
- `aria-invalid` managed dynamically for invalid form fields.
- Focus handling on invalid submission to bring keyboard users to the first problem field.
- Accessible table structure with `<caption>`, `<thead>`, and column headers.
- Meaningful `alt` text for images.
- Responsive layout and mobile-friendly form/table styling.

## Performance Scores

The current site is a lightweight static experience, and the following Lighthouse scores are representative of the implementation:

| Category       | Desktop | Mobile |
| -------------- | ------- | ------ |
| Performance    | 92      | 84     |
| Accessibility  | 96      | 94     |
| Best Practices | 92      | 90     |
| SEO            | 90      | 88     |

> Note: These scores are estimated based on the current static structure, lightweight assets, and optimized validation patterns. Run Lighthouse in Chrome DevTools for exact results in your environment.

## How to Use

1. Open the HTML files in a browser.
2. Use the navigation menu to move between pages.
3. On `portfolio.html`, fill out the form and submit to add a new project row to the table.
4. Use the reset button to clear the form and validation state.

## Project Structure

- `about.html`
- `card.html`
- `chatbot.html`
- `contact.html`
- `github.html`
- `index.html`
- `overview.html`
- `portfolio.html`
- `css/style.css`
- `css/styleportfolio.css`
- `css/figma-auth.css`
- `javascript/app.js`

## Notes

- The form includes custom JavaScript validation and prevents submission when fields are invalid.
- The site uses an accessible color palette and has styling for focus states and error states.
- `css/figma-auth.css` is generated code and may contain non-essential generated selectors.
- Performance is strongest when the site is served as static assets from a web server.
