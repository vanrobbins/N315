# N315 — SecureBank Website

This project is a modern banking website built with MVC architecture, featuring authentication flows, responsive design, custom alerts/toasts, and interactive components.

## Run locally (Windows / PowerShell)

1. Clone the repo or download and change into the project folder:

   Clone:
   Open terminal and cd to location you would like to download repository

   Enter command below:

   `git clone https://github.com/vanrobbins/N315 && cd N315/week6/feedbackHW`

   Continue to step 2

   Download repo:
   https://github.com/vanrobbins/N315

   cd into the feedbackHW folder where ever you chose to download it

2. Install dependencies:

   `npm install`

3. Compile the SCSS and watch for changes (recommended while developing):

   `npm run compile:sass`

   This runs the local `sass` compiler in watch mode and writes `css/style.css`.

4. Serve the site locally (optional) or open `index.html` in your browser:

   `npm run serve`

   The `serve` script uses `live-server` (ensure it's installed globally or run via an editor extension). If you don't have `live-server`, you can open `index.html` directly.

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3/SCSS**: Modern styling with gradients, animations, and responsive design
- **JavaScript ES6**: Modules, classes, async/await, and MVC architecture
- **jQuery**: DOM manipulation and AJAX for page loading
- **Custom UI Components**: Themed alerts and toast notifications

## Authentication Features

### Login

- Username validation (8-16 characters, no spaces)
- Password validation (8-32 characters, must include number)
- Custom error alerts for validation failures
- Success toast notification on login
- Remember me functionality

### Signup

- Username validation with real-time feedback
- Email format validation
- Password strength requirements
- Real-time password confirmation matching
- Terms & Conditions agreement required
- Custom error alerts for all validation issues

### Validation Rules

- **Username**: 8-16 characters, no spaces
- **Email**: Valid email format (name@domain.com)
- **Password**: 8-32 characters, must contain at least one number
- **Confirm Password**: Must match password field

## Design Theme

### Color Palette

- **Primary Blue**: `#1e3a8a` → `#1e40af` (gradient)
- **Light Blue**: `#f0f9ff` → `#e0f2fe` (backgrounds)
- **White**: `#ffffff` (cards, text)
- **Gray Scale**: `#475569`, `#94a3b8`, `#f1f5f9`

### Components

- **Navigation**: Sticky blue gradient header with mobile hamburger menu
- **Alerts**: Modal dialogs with backdrop blur, slide-up animation, and blue gradient buttons
- **Toasts**: Bottom-center notifications with bounce animation and auto-dismiss
- **Forms**: Clean input fields with focus states and validation feedback
- **Buttons**: Gradient primary buttons with hover effects and state changes

## Notes

- The SCSS entry point is `scss/style.scss`. If you change SCSS, re-run or keep `npm run compile:sass` running.
- The site uses MVC architecture with clear separation between Model (`model/`), View (`pages/`), and Controller (`app/app.js`).
- Client-side routing handles navigation without page refreshes.
- All form errors display as custom themed alert modals instead of inline errors.
- Toast notifications appear for successful actions (login, signup).

## Development

- Keep `npm run compile:sass` running while developing to automatically compile SCSS changes
- Page content is loaded dynamically through AJAX from the `pages/` directory
- Form validation happens in the Model layer with results passed to Controller
- UI updates (alerts, toasts) are handled by utility functions in `lib/util.js`
