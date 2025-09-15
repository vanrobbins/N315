# N315 — Primary Colors demo

This project contains a small static site demonstrating primary colors and mixes.

## [Web 4 Link](https://in-info-web4.luddy.indianapolis.iu.edu/~vanrobbi/N315/primaryColors/index.html)

## Run locally (Windows / PowerShell)

1. Clone the repo or download change into the project folder:

   Clone:
   Open terminal and cd to location you would like to download repository

   Enter command below:

   `git clone https://github.com/vanrobbins/N315 && cd N315/week3/firstProject`

   Continue to step 2

   Download repo:
   https://github.com/vanrobbins/N315

   cd into the firstProject folder where ever you chose to download it

2. Install dependencies:

   `npm install`

3. Compile the SCSS and watch for changes (recommended while developing):

   `npm run compile:sass`

   This runs the local `sass` compiler in watch mode and writes `css/style.css`.

4. Serve the site locally (optional) or open `index.html` in your browser:

   npm run serve

   The `serve` script uses `live-server` (ensure it's installed globally or run via an editor extension). If you don't have `live-server`, you can open `index.html` directly.

## Notes

- The SCSS entry point is `scss/style.scss`. If you change SCSS, re-run or keep `npm run compile:sass` running.
- The nav colors are stored in `scss/_colors.scss` for easy reuse.
- If `npm run serve` fails because `live-server` is not available, you can install it globally:

  `npm install -g live-server`
