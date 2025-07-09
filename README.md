# Abhranil Documentation

This documentation should explain the structure, logic, and connections between the main files of this project: `index.html`, `style.css`, and `script.js`.

---

## Table of Contents
- [Project Overview](#project-overview)
- [index.html](#indexhtml)
  - [Structure](#structure)
  - [Key Sections](#key-sections)
  - [Connections to CSS and JS](#connections-to-css-and-js)
- [style.css](#stylecss)
  - [Variables and Theming](#variables-and-theming)
  - [Layout and Components](#layout-and-components)
  - [Responsiveness](#responsiveness)
- [script.js](#scriptjs)
  - [Project Modal Logic](#project-modal-logic)
  - [Event Listeners](#event-listeners)
  - [Smooth Scrolling](#smooth-scrolling)
- [How Everything Connects](#how-everything-connects)

---

## Project Overview
This is a modern, responsive portfolio website for Abhranil Paul. It showcases projects, skills, and contact information, using HTML, CSS (with Bootstrap and custom styles), and JavaScript for interactivity.

---

## index.html

### Structure
- **Head**: Includes meta tags, Google Fonts, Bootstrap CSS, Font Awesome, custom `style.css`, and some inline styles.
- **Body**: Contains the main content, including header, navigation, sidebar, profile card, sections (About, Projects, Skills, Contact), and a modal for project details.
- **Scripts**: Loads Bootstrap JS and `script.js` for interactivity.

### Key Sections
- **Header**: Fixed at the top, contains the site title, subtitle, and navigation links.
- **Sidebar**: Vertical, fixed to the left, with quick links to main sections.
- **Profile Card**: Shows profile photo and contact button.
- **Sections**:
  - `#about`: About Me
  - `#projects`: Project cards (with modal popups)
  - `#skills`: List of skills as badges
  - `#contact`: Contact buttons (email, GitHub, LinkedIn)
- **Project Modal**: Hidden by default, shown when a project is clicked.

### Connections to CSS and JS
- **CSS**: Linked via `<link rel="stylesheet" href="style.css">` and inline `<style>` for quick overrides.
- **JS**: Linked via `<script src="script.js"></script>`. Handles modal logic and smooth scrolling.

---

## style.css

### Variables and Theming
- Uses CSS variables (`:root`) for primary colors, background, text, and accent.
- Example:
  ```css
  :root {
      --primary: #4f8cff;
      --bg: #f7f9fb;
      --text: #222;
      --accent: #ffb347;
  }
  ```
- These variables are used throughout for consistent theming.

### Layout and Components
- **Body & Container**: Sets background, font, and layout constraints.
- **Header**: Fixed, semi-transparent, with blur and shadow effects.
- **Navigation**: Styled links, hover effects, and active states.
- **Sidebar**: Fixed vertical bar with icons, styled for hover and active states.
- **Profile Card**: Floating card with photo and info, styled for desktop and mobile.
- **Sections**: White background, rounded corners, shadow for separation.
- **Cards & Badges**: Project cards and skill badges styled with color variables and effects.
- **Buttons**: `.modern-btn` class for consistent button styling.
- **Modal**: Styles for modal overlay, content, and close button.

### Responsiveness
- Uses media queries for screens below 900px and 600px.
- Adjusts layout, font sizes, sidebar, and profile card for mobile friendliness.

---

## script.js

### Project Modal Logic
- **Project Data**: Array of project objects (title, desc, img, link).
- **openProjectModal(idx)**: Populates and displays the modal with project info.
- **closeProjectModal()**: Hides the modal.

### Event Listeners
- **DOMContentLoaded**: Sets up all event listeners after the DOM is ready.
- **Project Buttons**: Clicking a `.card-link.modern-btn` opens the modal for the corresponding project.
- **Modal Close**: Clicking the close button, overlay, or pressing Escape closes the modal.

### Smooth Scrolling
- Navigation links with `href^="#"` smoothly scroll to their target section, offsetting for the fixed header.

---

## How Everything Connects

- **index.html** is the main structure, referencing both `style.css` and `script.js`.
- **style.css** provides all custom styles, variables, and responsive design, affecting all elements in the HTML.
- **script.js** adds interactivity:
  - Handles project modal popups (triggered by project card buttons in HTML, styled by CSS).
  - Enables smooth scrolling for navigation (HTML links, CSS for layout).
- **Bootstrap** and **Font Awesome** are used for layout and icons, but custom CSS overrides much of their default look.

---

## Example: Project Modal Flow
1. User clicks a "View Project" button in the Projects section (`index.html`).
2. Event listener in `script.js` intercepts the click, calls `openProjectModal(idx)`.
3. Modal is populated with project data and shown (`index.html` for structure, `style.css` for appearance).
4. User can close modal by clicking close button, overlay, or pressing Escape (handled in `script.js`).

---

## File Map
- `index.html` → Structure, content, links to CSS/JS
- `style.css` → All custom styles, variables, responsive rules
- `script.js` → Modal logic, event listeners, smooth scrolling

---

For further details, see code comments and inspect each file for more granular logic and style connections.












# CSS Style Guide

This document explains the structure, main components, and the purpose of the key CSS classes and rules found in `style.css`.

---

## Table of Contents
1. [Overview](#overview)
2. [Color Variables](#color-variables)
3. [Layout Structure](#layout-structure)
4. [Header & Navigation](#header--navigation)
5. [Sidebar](#sidebar)
6. [Profile Card](#profile-card)
7. [Container & Section](#container--section)
8. [Cards & Badges](#cards--badges)
9. [Buttons](#buttons)
10. [Modal Styles](#modal-styles)
11. [Responsive Design](#responsive-design)
12. [Animations](#animations)

---

## Overview
This stylesheet provides a modern, responsive, and visually appealing design for a web page. It uses CSS variables for easy theming, flexbox for layout, and includes custom styles for headers, navigation, sidebars, profile cards, cards, badges, buttons, modals, and more.

---

## Color Variables
Defined at the root for easy theme management:
Will Have To Be Changed Over Time _/\_
```css
:root {
    --primary: #4f8cff;      /* Main accent color */
    --bg: #f7f9fb;           /* Background color */
    --text: #222;            /* Main text color */
    --accent: #ffb347;       /* Secondary accent */
}
```

---

## Layout Structure
- **body**: Sets background, text color, font, and removes default margin.
- **body::before**: Adds a subtle overlay for a frosted glass effect.
- **.container**: Main content wrapper with animated gradient background, rounded corners, and blur effect.

---

## Header & Navigation
- **header**: Fixed at the top, with a semi-transparent background, blur, and drop shadow. Contains the site title and subtitle.
- **header h1, header p**: Styled for prominence and readability.
- **nav a**: Navigation links with color transitions and hover/active effects.

---

## Sidebar
- **.sidebar-vertical**: Fixed vertical sidebar on the left, with icons/links stacked vertically. Uses flexbox for alignment and spacing.
- **.sidebar-vertical a**: Icon links with hover effects and color transitions.

---

## Profile Card
- **.profile-card**: Sticky/fixed card (right side on desktop, static on mobile) for user info. Includes photo, name, and details.
- **.profile-photo**: Circular, bordered profile image.
- **.profile-info**: Contains name and description.

---

## Container & Section
- **.container**: Main wrapper for page content, with animated gradient and blur.
- **section**: White, rounded, shadowed content blocks for grouping content.

---

## Cards & Badges
- **.card**: Content cards with background, rounded corners, and hover effects.
- **.card-title**: Highlighted card titles.
- **.card-link**: Underlined, colored links with hover transitions.
- **.badge**: Pill-shaped, colored badges for tags or highlights, with hover/active effects.

---

## Buttons
- **.modern-btn**: Rounded, colored buttons with shadow, hover, and focus effects.

---

## Modal Styles
- **.modal-overlay**: Full-screen overlay for modals, with semi-transparent background.
- **.modal-content**: Centered modal box with padding, rounded corners, and entry animation.
- **.modal-close**: Close button in the modal, styled for visibility and interaction.

---

## Responsive Design
Media queries adjust layout and sizing for different screen widths:
- **@media (max-width: 900px)**: Adjusts profile card, sidebar, container padding, and font sizes for tablets.
- **@media (max-width: 600px)**: Further reduces padding, font sizes, and modal width for mobile devices.

---

## Animations
- **@keyframes gradientFlow**: Animates the background gradient of `.container` for a dynamic effect.
- **@keyframes modalFadeIn**: Smoothly animates modal appearance.

---

## Additional Notes
- Uses `backdrop-filter` and `box-shadow` for modern, soft UI effects.
- All interactive elements (links, buttons, badges) have hover and focus states for better UX.
- Uses CSS variables for easy color and theme adjustments.

---

**For further customization, refer to the comments and structure in `style.css`.**
