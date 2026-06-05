# Medical Camp Registration Portal

The Medical Camp Registration Portal is a static, client-side web application for publishing medical camp information, collecting participant registrations, and presenting saved registrations in an administrative view. The project is designed as an accessible informational and registration interface for community healthcare outreach programs, with a strong emphasis on clarity, simplicity, and offline-friendly browser storage.

## Project Purpose

The central objective of the application is to connect prospective participants with free medical camp services in a structured, low-friction way. The portal serves three primary functions:

1. Inform the public about upcoming camps, their dates, locations, and service categories.
2. Allow users to submit a registration form for a selected camp.
3. Provide a browser-based admin view that displays the captured registrations in tabular form.

In practical terms, the project models a complete informational workflow for a healthcare outreach program without requiring a backend server or database. The result is a lightweight, easy-to-deploy portal that can be opened directly in a browser or hosted as a static site.

## Functional Overview

The application is organized around a straightforward user journey:

- A visitor lands on the home page and is introduced to the portal.
- The visitor can review the camp schedule, explore individual camp detail pages, or consult the contact and gallery pages.
- The visitor can open the registration form, enter their name, age, contact number, and preferred camp, and submit the form.
- The registration data is stored locally in the browser under the `registrations` key.
- The admin page reads the saved records from browser storage and renders them in a table.
- A floating chatbot is available across the main pages to answer common questions about camps, registration, contact information, and the admin view.

This workflow reflects the intended motive of the project: to provide a simple digital front door for a free medical camp initiative, combining public information, registration capture, and basic administrative visibility in one portal.

## Data Flow

The project does not use a server-side database. Instead, the data flow is intentionally local and browser-scoped:

1. The registration form on [register.html](register.html) collects participant input.
2. When the form is submitted, the data is packaged into a participant object with `name`, `age`, `contact`, and `camp` fields.
3. The object is appended to the `registrations` array stored in `localStorage`.
4. The admin page on [admin.html](admin.html) retrieves the same `registrations` array from `localStorage`.
5. Each stored participant is rendered as a table row in the admin view.

This design keeps the application simple and self-contained, but it also means the saved registrations are tied to the current browser and device. Clearing site data or using a different browser will remove the stored records.

## Application Structure

- [index.html](index.html) serves as the landing page and introduces the portal.
- [camp.html](camp.html) lists the available camps and includes a second section for upcoming camp information.
- [general-health.html](general-health.html), [eye-dental.html](eye-dental.html), [blood-donation.html](blood-donation.html), and [women-health.html](women-health.html) provide detailed pages for each camp.
- [register.html](register.html) contains the participant registration form and local persistence logic.
- [admin.html](admin.html) displays the stored registrations in a structured table.
- [contact.html](contact.html) presents contact channels and an embedded map.
- [gallery.html](gallery.html) displays camp-related imagery and community-health visuals.
- [chatbot.js](chatbot.js) implements the interactive help widget.
- [style.css](style.css) defines the shared visual system, responsive layout rules, card styling, form styling, and chatbot presentation.
- [images/](images) contains the visual assets used across the camp and gallery pages.

## Key Features

- Multi-page informational portal for medical camp outreach.
- Camp-specific detail pages with dates, locations, contact information, and map embeds.
- Participant registration form with client-side validation through required inputs.
- Browser storage-based persistence for submitted registrations.
- Administrative table view for reviewing saved participants.
- Responsive layout for desktop and mobile screens.
- Floating chatbot with keyword-based responses for common user queries.
- Gallery section for presenting program documentation and camp photographs.

## Chatbot Behavior

The chatbot is a lightweight, rule-based assistant implemented in [chatbot.js](chatbot.js). It does not call an external AI service. Instead, it inspects the user’s message for keywords and returns a predefined response.

Supported intents include:

- registration guidance
- camp date and schedule questions
- location and address questions
- fee or free-service questions
- contact details
- admin view questions
- gallery questions
- general greetings

If the chatbot does not recognize a query, it falls back to a general help message that directs the user toward the main portal sections.

## Visual And UI System

The interface is built with a consistent design language centered on clean spacing, soft greens and teals, and card-based content blocks. The stylesheet provides:

- a sticky top navigation bar
- a large hero section on the home page
- reusable section headings and content containers
- responsive information grids and cards
- styled registration inputs and buttons
- a tabular admin layout
- an embedded map container
- a fixed-position chatbot panel

The responsive rules are designed to adapt the navigation, card layouts, typography, and chatbot dimensions for smaller screens.

## Technology Stack

- HTML5 for page structure and semantic content.
- CSS3 for layout, typography, responsiveness, and visual styling.
- Vanilla JavaScript for registration handling, local storage access, table rendering, and chatbot interactions.
- Google Maps embeds for location display.

## Running The Project

Because this is a static site, no build step is required.

1. Open the project folder in VS Code or any file browser.
2. Launch [index.html](index.html) in a browser, or use a local static server such as VS Code Live Server.
3. Navigate through the portal using the top menu.
4. Submit a registration through [register.html](register.html).
5. View stored submissions on [admin.html](admin.html).

## Data Reset Behavior

The project stores registrations in browser `localStorage`. If you want to clear all saved participant data, remove the `registrations` item from the browser storage or clear site data for the portal origin. The current implementation does not include a server-side database, export feature, or authentication layer.

## Project Limitations

- Registrations are stored only in the browser, not in a central database.
- Admin access is not protected by authentication.
- The chatbot is keyword-driven rather than model-based.
- There is no form submission API or external persistence service.

These limitations are consistent with the project’s static architecture and classroom-demo style implementation.

## Recommended Future Enhancements

- Add server-side storage for registrations.
- Introduce authentication for the admin area.
- Replace the rule-based chatbot with a more advanced assistant.
- Add validation feedback messages for form fields.
- Provide registration export or print functionality for administrators.

## Summary

This project presents a complete, formalized flow for a community medical camp portal: inform, register, store locally, and review. Its structure is intentionally straightforward so the operational path remains easy to understand, easy to maintain, and easy to demonstrate in a static web environment.#   M e d i c a l - C a m p - R e g i s t r a t i o n - P o r t a l  
 