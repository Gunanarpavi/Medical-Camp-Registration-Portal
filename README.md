# Medical Camp Registration Portal

The Medical Camp Registration Portal is a static, client-side web application for presenting medical camp information, collecting participant registrations, and reviewing saved submissions in an administrative view. It is designed for community healthcare outreach and demonstrates a complete informational and registration workflow without requiring a server-side application or database.

## Purpose

The project supports a simple but practical public-health use case:

1. Inform visitors about upcoming medical camps.
2. Allow participants to submit a registration form.
3. Display saved registrations in an admin-oriented table view.

The overall motive of the project is to provide a clean digital front door for a free medical camp program. Visitors can discover services, review dates and locations, register for a camp, and contact the organizers from one unified portal.

## How The System Works

The application follows a straightforward client-side workflow:

1. The home page introduces the portal and provides navigation to the main sections.
2. The camp details page lists available camps and links to individual camp pages.
3. Each camp detail page presents the schedule, location, contact information, map, and a direct link to registration.
4. The registration page collects participant details and stores them in browser localStorage under the registrations key.
5. The admin page reads the same localStorage data and renders the participant list in a table.
6. A floating chatbot offers quick answers to common questions about camps, registration, contact details, and the admin view.

Because the project is fully client-side, registrations are tied to the browser and device where they were submitted. Clearing browser storage removes the saved entries.

## Data Flow

The data flow is intentionally simple and transparent:

- User input is captured on register.html.
- The form submission handler creates a participant object with name, age, contact, and selected camp.
- The object is appended to the registrations array in localStorage.
- admin.html retrieves the same array and displays each record in the registration table.

There is no backend API, server session, or database layer. This keeps the application lightweight and easy to deploy as a static site.

## Site Structure

- index.html: Landing page and primary entry point.
- camp.html: Overview of available and upcoming camps.
- general-health.html: Detail page for the general health checkup camp.
- eye-dental.html: Detail page for the eye and dental care camp.
- blood-donation.html: Detail page for the blood donation camp.
- women-health.html: Detail page for the women health awareness camp.
- register.html: Participant registration form and localStorage save logic.
- admin.html: Administrative table view of saved registrations.
- contact.html: Contact information and embedded map.
- gallery.html: Image gallery for camp and health outreach visuals.
- chatbot.js: Keyword-based help widget logic.
- style.css: Shared styles, layout rules, responsive behavior, and UI components.
- images/: Static image assets used across the site.

## Features

- Multi-page public information portal for medical camp outreach.
- Camp-specific pages with dates, locations, descriptions, and contact details.
- Registration form with required fields for participant details.
- Client-side persistence using localStorage.
- Administrative view that displays stored registrations in a table.
- Contact page with email, phone, landline, and embedded map information.
- Gallery page for visual documentation of camp activities.
- Floating chatbot for quick, keyword-based assistance.
- Responsive layout for desktop and mobile screens.

## Chatbot Behavior

The chatbot in chatbot.js is rule-based rather than AI-driven. It checks the user's message for keywords and returns a predefined response.

It can answer questions about:

- registration steps
- camp dates and schedules
- camp locations
- fee and free-service questions
- contact details
- admin view information
- gallery content
- general greetings

If the chatbot does not recognize the message, it returns a general help response that points the user back to the main portal pages.

## Technology Stack

- HTML5 for page structure.
- CSS3 for styling, layout, and responsive design.
- Vanilla JavaScript for registration storage, table rendering, and chatbot behavior.
- Google Maps embeds for location display.

## Running The Project

This is a static website, so there is no build step.

1. Open the project folder in VS Code or a file browser.
2. Open index.html in a browser, or use a local static server such as Live Server.
3. Navigate through the portal using the top menu.
4. Submit a registration through register.html.
5. Review the saved participant records on admin.html.

## Data Storage Notes

The registration records are stored only in the browser's localStorage. This means:

- Data is local to the browser and device.
- Clearing browser storage removes the saved registrations.
- There is no server-side persistence or authentication layer.

This implementation is appropriate for a lightweight demonstration project, but a production deployment would normally require backend storage and access control.

## Limitations

- Registrations are not stored in a central database.
- The admin page is not protected by login access.
- The chatbot uses fixed keyword matching rather than natural language understanding.
- There is no export or print workflow for administrative records.

## Suggested Future Enhancements

- Add a backend database for registrations.
- Introduce authentication for the admin area.
- Improve form validation and error handling.
- Replace the rule-based chatbot with a more advanced assistant.
- Add export, filtering, or printing options for admin records.

## Summary

Medical Camp Registration Portal presents a clear end-to-end flow for a healthcare outreach website: inform the public, register participants, store the data locally, and review the submissions in an admin view. Its static architecture keeps the project easy to understand, easy to deploy, and suitable for demonstration or academic presentation.
