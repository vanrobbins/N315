# N315 — MVC Bikes Website

This project is a modern bike shop website built with MVC architecture, featuring responsive design, custom typography, and interactive components.

## [Web 4 Link](https://in-info-web4.luddy.indianapolis.iu.edu/~vanrobbi/N315/RBikes/index.html)

## Features

- **MVC Architecture**: Proper separation of Model, View, and Controller layers
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Custom Typography**: "DazedAndCondensed" font for urban aesthetic
- **Interactive Components**: Contact form with validation, dynamic navigation
- **Feather Icons**: Modern icon system throughout the site
- **SCSS Compilation**: Modular stylesheets with watch mode

## Pages

- **Home**: Hero section with navigation cards to other sections
- **About**: Company story with image/text layout and values grid
- **Store**: Product showcase with 3 bike models, services, and accessories
- **Contact**: Interactive contact form with business information

## Run locally (Windows / PowerShell)

1. Clone the repo or download and change into the project folder:

   Clone:
   Open terminal and cd to location you would like to download repository

   Enter command below:

   `git clone https://github.com/vanrobbins/N315 && cd N315/week4/MVCBikes`

   Continue to step 2

   Download repo:
   https://github.com/vanrobbins/N315

   cd into the MVCBikes folder wherever you chose to download it

2. Install dependencies:

   `npm install`

3. Compile the SCSS and watch for changes (recommended while developing):

   `npm run compile:sass`

   This runs the local `sass` compiler in watch mode and writes `css/style.css`.

4. Serve the site locally (optional) or open `index.html` in your browser:

   `npm run serve`

   The `serve` script uses `live-server` (ensure it's installed globally or run via an editor extension). If you don't have `live-server`, you can open `index.html` directly.

## Project Structure

```
MVCBikes/
├── app/
│   └── app.js              # Controller layer - handles user interactions
├── model/
│   ├── model.js            # Model layer - business logic and data management
│   └── pages.js            # View templates for each page
├── scss/
│   ├── style.scss          # Main SCSS entry point
│   ├── _structure.scss     # Base structure and layout
│   ├── _fonts.scss         # Custom font definitions
│   ├── _navFoot.scss       # Navigation and footer styles
│   ├── _home.scss          # Home page specific styles
│   ├── _about.scss         # About page specific styles
│   ├── _products.scss      # Store page specific styles
│   └── _contact.scss       # Contact page specific styles
├── lib/
│   ├── jquery-3.7.1.min.js # jQuery library
│   └── feather.min.js      # Feather icons library
├── fonts/                  # Custom font files
├── images/                 # Project images
├── css/
│   └── style.css           # Compiled CSS (generated)
└── index.html              # Main HTML file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3/SCSS**: Modern styling with variables and mixins
- **JavaScript ES6**: Modules and modern syntax
- **jQuery**: DOM manipulation and event handling
- **Feather Icons**: SVG icon system
- **NPM**: Package management and build scripts

## Notes

- The SCSS entry point is `scss/style.scss`. If you change SCSS, re-run or keep `npm run compile:sass` running.
- The site uses MVC architecture with clear separation between Model (`model/`), View (`index.html`), and Controller (`app/app.js`).
- Feather icons are loaded locally from `lib/feather.min.js` for better performance.
- Custom fonts are stored in the `fonts/` directory and loaded via `scss/_fonts.scss`.
- The contact form includes client-side validation with proper error handling.

## Development

- Keep `npm run compile:sass` running while developing to automatically compile SCSS changes
- Form validation is handled through the model layer for proper MVC separation
