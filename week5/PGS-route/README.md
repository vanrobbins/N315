# N315 — PGS Website

This project is a modern record label website for Portage Garage Sounds built with MVC architecture, featuring responsive design, landing overlay, and interactive components.

## [Web 4 Link](https://in-info-web4.luddy.indianapolis.iu.edu/~vanrobbi/N315/PGS-Route/)

## Features

- **MVC Architecture**: Proper separation of Model, View, and Controller layers
- **Single Page Application**: Client-side routing with hash navigation
- **Landing Overlay**: Welcome screen with first-visit detection
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Custom Typography**: Inter font family with proper fallbacks
- **Interactive Components**: Scrolling text animations, hover effects
- **SCSS Compilation**: Modular stylesheets with watch mode

## Pages

- **Home**: Full-screen hero with scrolling text and PGS mission statements
- **Artists**: Gallery of album artwork from Bandcamp releases with hover effects
- **Releases**: Complete catalog of PGS music releases with artist information
- **Events**: Weekly events (Monday Is The New Monday, Space Is The Place) and special shows
- **About**: PGS history, founding story, and team member profiles
- **Store**: Merchandise and music showcase with links to Bandcamp

## Run locally (Windows / PowerShell)

1. Clone the repo or download and change into the project folder:

   Clone:
   Open terminal and cd to location you would like to download repository

   Enter command below:

   `git clone https://github.com/vanrobbins/N315 && cd N315/week5/PGS-route`

   Continue to step 2

   Download repo:
   https://github.com/vanrobbins/N315

   cd into the PGS-route folder wherever you chose to download it

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
PGS-route/
├── app/
│   └── app.js              # Controller layer - handles routing and user interactions
├── model/
│   └── model.js            # Model layer - data management and page loading
├── pages/
│   ├── home.html           # Home page template
│   ├── artists.html        # Artists showcase template
│   ├── releases.html       # Releases catalog template
│   ├── events.html         # Events listing template
│   ├── about.html          # About page template
│   ├── store.html          # Store page template
│   └── landing.html        # Landing overlay template
├── scss/
│   ├── style.scss          # Main SCSS entry point
│   ├── _structure.scss     # Base structure and layout
│   ├── _fonts.scss         # Inter font family definitions
│   ├── _nav-foot.scss      # Navigation and footer styles
│   ├── _home.scss          # Home page specific styles
│   ├── _landing.scss       # Landing overlay styles
│   ├── _artists.scss       # Artists page specific styles
│   ├── _releases.scss      # Releases page specific styles
│   ├── _events.scss        # Events page specific styles
│   ├── _about.scss         # About page specific styles
│   ├── _store.scss         # Store page specific styles
│   └── _scroll-text.scss   # Scrolling text animations
├── lib/
│   └── jquery-3.7.1.min.js # jQuery library
├── assets/
│   ├── images/             # Album covers, logos, event images
│   └── fonts/              # Inter font family files
├── css/
│   └── style.css           # Compiled CSS (generated)
└── index.html              # Main HTML file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3/SCSS**: Modern styling with variables and mixins
- **JavaScript ES6**: Modules and MVC architecture
- **jQuery**: DOM manipulation and AJAX for page loading
- **Inter Font**: Modern typography system

## About PGS

Portage Garage Sounds is a record label based in Hamtramck, MI founded in 2017 by brothers Ben Saginaw and Zachary Saginaw (aka Shigeto).

**Mission:**

- Promote Love / Fight Hate
- Promote Unity / Fight Racism
- Promote Music / Fight Bigotry

## Notes

- The SCSS entry point is `scss/style.scss`. If you change SCSS, re-run or keep `npm run compile:sass` running.
- The site uses MVC architecture with clear separation between Model (`model/`), View (`pages/`), and Controller (`app/app.js`).
- Artist artwork URLs reference Bandcamp's CDN for live content.
- Client-side routing handles navigation without page refreshes.

## Development

- Keep `npm run compile:sass` running while developing to automatically compile SCSS changes
- Page content is loaded dynamically through AJAX from the `pages/` directory
- Landing overlay can be tested by clearing localStorage or opening in incognito mode

## Future Improvements

- Home needs more content
- Add more pictures and further implement all pages
- Add bio pages for each artist and pages for each release
