# **Shelter**

**Shelter** is a landing page that helps you give a chance to a small and cute puppy or kitten with a very wide and open heart. He or she will love you more than anyone else in the world, you'll see!

![readmePhoto](https://res.cloudinary.com/dkcilxezg/image/upload/v1748604988/readme_shelter_vyhgvd.jpg)

📋 Task: [Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/shelter/shelter.md)

🏞️ Layout in figma: [Link](https://www.figma.com/design/Yk6EnbY63FyG2PJTFkJDMh/shelter?node-id=94-43&node-type=canvas&t=HFcOxSqlnoE0QtPH-0)

💻 Deploy: [Link](https://w0x3r.github.io/Shelter/)

## Technology stack

➖ HTML

➖ SCSS (BEM)

➖ JavaScript (ES6)

➖ PerfectPixel

➖ Webpack 5

## Features

✅ **Burger menu:**

- Implementation of burger menu on both pages when the screen width is less than 768px.

- Clicking the burger icon triggers a smooth 90° rotation and opens a adaptive menu sliding in from the right.

- All links inside the menu use smooth scrolling to navigate to corresponding anchor sections.

- Clicking on any menu link (interactive or not), the burger icon, or anywhere outside the menu smoothly hides the menu by sliding it off the screen to the right and rotating the burger icon back by 90°.

- The area outside the menu darkens, and page scrolling is disabled while the menu is open.

- The menu and its animations provide a seamless and accessible user experience.

✅ **Slider carousel:**

- Clicking the arrows navigates to a new set of cards with a smooth carousel animation.

- The slider is infinite — you can scroll left or right endlessly, and it will always show the next set of cards

- The number of cards scrolled matches the number visible at the current screen width (3 at 1280px, 2 at 768px, 1 at 320px).

- The slider adapts dynamically when the screen is resized — it rebuilds itself and continues working without requiring a page reload.

✅ **Pagination:**

- When the page reloads, pagination always opens on the first page.

- Clicking the < or > buttons navigates to the previous or next page.

- Clicking the << or >> buttons jumps to the first or last page.

- On the first page, the << and < buttons are disabled.

- On the last page, the > and >> buttons are disabled.

- The current page number is displayed in the center of a circle and updates dynamically when navigating.

- When resizing the screen (from 1280px to 320px and back), the pagination adjusts and continues working without page reload.

✅ **Popup:**

- Popups are implemented on both pages.

- The area outside the popup is darkened.

- When a popup is open, page scrolling is disabled; scrolling is restored when the popup is closed.

- Clicking outside the popup or on the close (×) button closes the popup. Clicking inside the popup does nothing.

✅ **Adaptive:**

- The layout adapts optimally to different screen sizes.
- The application displays correctly on both desktop and mobile devices.

## Run the project locally:

To start working on the project on your local machine, please, make sure that you install [Git](https://git-scm.com/downloads) and [Node.js LTS](https://nodejs.org/en/download).

### Steps to start:

- Clone [repository](https://github.com/W0x3R/Shelter).
- Open the project locally.
- Switch to the dev-page branch.
- Run `npm install` or `npm i` - to install all packages needed.
- Run `npm run start` - to starts a local dev-server (The tab will open automatically in the browser).
- Run `npm run dev` - build the project for development.
- Run `npm run prod` - build the project for production.
