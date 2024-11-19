# **Shelter:dog:**

**Shelter** is a landing page that helps you give a chance to a small and cute puppy or kitten with a very wide and open heart. He or she will love you more than anyone else in the world, you'll see!

![readmePhoto](/assets/images/readme-picture.jpg)

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

- Implementation of burger menu on both pages.

- If the page width is less than 768px,the navigation bar is hidden and the burger icon appears.

- When you click on the burger icon, a 320px wide adaptive menu smoothly appears on the right, the burger icon smoothly rotates 90 degrees.

- The links in the adaptive menu work by providing smooth scrolling through the anchors.

- When clicking on a link in the adaptive menu the adaptive menu is smooth, also hiding the menu happens if you make a click outside this window.

- When you tap again on the burger-icon or on the space free from the burger-menu, the adaptive menu smoothly hides moving away behind the right side of the screen, the burger icon smoothly rotates back by 90 degrees.

- When clicking on any link (interactive or non-interactive) in the menu, the adaptive menu smoothly hides to the right, the burger icon rotates back 90 degrees.

- The area free of burger menus is getting dark.

- The page under the burger menu does not scroll.

✅ **Slider carousel:**

- Clicking on the arrows moves to a new block of elements.

- The blocks are changed with a carousel animation.

- The slider is infinite, meaning you can click left or right infinitely many times, and each time will scroll that way with a new set of cards.

- Switching left or right scrolls exactly as many cards as are shown at the current screen width (3 for 1280px, 2 for 768px, 1 for 320px).

- When you change the screen width (from 1280px to 320px and back), the slider rebuilds and works without reloading the page.

✅ **Pagination:**

- When reloading the page, the first page of pagination
  is always opened.

- Pressing the > or < buttons opens the next or previous pagination page, respectively.

- Pressing the >> or << buttons will open the last or first page of pagination, respectively.

- When opening the first page, the << and < buttons are inactive.

- When opening the last page, the > and >> buttons are inactive.

- The current page number is shown in the center of the circle. When you switch pages, the number changes to the current page number.

- When changing the screen width (from 1280px to 320px and back), the pagination is rebuilt and works without reloading the page.

✅ **Popup:**

- Implemented popup on both pages.

- The part of the page outside the popup is blacked out.

- When you open a popup, the vertical scroll of the page becomes inactive, when you close it, it becomes active again.

- When clicking on the area around the popup or on the button with a cross, the popup closes, but nothing happens when clicking on the popup itself.

✅ **Adaptive:**

- The application elements optimally occupy the page space.
- The app displays correctly on both computer and mobile devices.

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
