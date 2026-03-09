# Transcript Highlights — AI Development Process

**Project:** Travel Bucket List
**Course:** DIG 4503 — Midterm Project
**Phase:** Setup & Planning (Week 1)

This document summarizes key moments from my AI-assisted development session during the project kickoff phase.

---

## Highlight 1 — Planning the Project Architecture

**What I asked:**
I described the full scope of the app — a Travel Bucket List where users can save destinations and write why they want to visit — and asked for a recommended React project structure, a component breakdown, and a list of 6–8 strong features.

**What the AI produced:**
A complete folder structure separating `pages/`, `components/`, `context/`, `hooks/`, `services/`, and `utils/`. The AI explained the reasoning behind each folder — for example, isolating Firebase calls in `services/` so that swapping out a backend in the future only requires changing one location. It also introduced the concept of separating route-level components (pages) from reusable UI pieces (components).

**Why this was useful:**
Rather than starting to code and reorganizing later, I had a clear, justified structure before writing a single file. Understanding *why* the structure is organized this way helped me learn architectural thinking, not just copy a layout.

---

## Highlight 2 — Designing the Data Model

**What I asked:**
I asked what data fields each travel destination should include, and then asked for a concrete example as a JSON object.

**What the AI produced:**
A 13-field data model covering identity fields (`id`, `userId`), descriptive fields (`name`, `country`, `continent`), user-input fields (`reason`, `notes`, `imageUrl`, `priority`), status tracking (`status`, `visitedDate`), and timestamps (`createdAt`, `updatedAt`). It then showed a realistic JSON example using Kyoto as a sample destination, with `visitedDate: null` and `priority: 5`.

**Key insight I learned:**
The AI explained that `userId` is not just organizational — it's essential for Firestore security rules, which restrict each user to reading and writing only their own documents. It also distinguished `reason` (emotional, motivational) from `notes` (practical travel info), which shaped how I'll design the form UI.

---

## Highlight 3 — Mapping Component Interactions

**What I asked:**
I asked how the main React components would interact with each other in the final app.

**What the AI produced:**
A full ASCII component tree showing the parent-child hierarchy, where data flows, and which components talk to which. It explained two layers of React Context — `AuthContext` for the logged-in user (global) and `BucketListContext` for destination data (dashboard-scoped) — and clarified that filtering/search state should live locally inside `DashboardPage` rather than in context, because filtering is a UI concern, not a data concern.

**Key insight I learned:**
The distinction between global state (context) and local UI state (`useState`) clarified a pattern I had struggled to understand. The AI's rule — "components call context methods, context methods call services, services talk to Firebase" — gave me a clear mental model for unidirectional data flow.

---

## Highlight 4 — Generating the Landing Page

**What I asked:**
I asked the AI to build a React landing page that included the project name, description, and planned features list, with styling that did not look like the default Vite starter page.

**What the AI produced:**
Three new files — `LandingPage.jsx`, `LandingPage.css`, and `Navbar.jsx` with its own CSS — plus a fully rewritten `App.jsx`, `index.css`, and updated `index.html`. The landing page used a white card centered on a soft blue-gray background (`#f0f2ff`), with a globe emoji header, tagline, an 8-item features list rendered from a JavaScript array, a "under development" status banner, and disabled CTA buttons as placeholders for future authentication.

**Why this was useful:**
The AI generated production-quality, component-scoped CSS alongside the JSX rather than inline styles, which matches how I'll need to write styles throughout the rest of the project. It also showed how to render a list from a data array using `.map()`, which I'll use repeatedly when building the destination cards on the dashboard.

---

## Highlight 5 — Writing the Project README

**What I asked:**
I asked the AI to write a `README.md` covering the project description, planned features, technologies, setup instructions, and a summary of what the final app will do.

**What the AI produced:**
A fully structured Markdown README with six sections: a plain-English description of the final product, a feature list with emoji labels, a technologies table, an annotated project structure tree, step-by-step setup instructions including a `.env` Firebase config template, and a current status note.

**Key insight I learned:**
The AI included a warning inside the setup instructions — "Never commit your `.env` file" — and showed the correct Vite convention for environment variables (`VITE_` prefix). This is something easy to overlook as a beginner and could expose API keys if ignored.

---

## Reflection

Using AI during the planning phase helped me think through architecture decisions I would not have considered until much later in development — like security rules, data ownership via `userId`, and the separation between context state and local UI state. The most valuable outputs were not just the code, but the explanations of *why* each decision was made, which I can carry forward into the full build next week.
