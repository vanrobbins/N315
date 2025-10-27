# Book Nook

A responsive single-page e-commerce web application for browsing and managing a spooky book catalog, featuring dynamic blog posts and interactive user accounts.

## [Web 4 Link](https://in-info-web4.luddy.indianapolis.iu.edu/~vanrobbi/N315/book-nook/)

## 🎃 Features

- **Dynamic Book Catalog** - Browse 69+ books with filtering and details loaded dynamically from json
- **Blog System** - Read blog posts with featured book highlights and hero images from json
- **User Accounts** - Sign in and create accounts with personalized shopping carts
- **Responsive Design** - Fluid layouts using CSS `clamp()` for all screen sizes

### Prerequisites

- Node.js (for running the development server)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vanrobbins/N315.git
cd Book-Nook
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run serve
```

4. In a separate terminal, watch SCSS files for compilation:

```bash
npm run compile:sass
```

## 📚 Technology Stack

- **Frontend**: HTML5, CSS3 (SCSS), JavaScript (ES6+)
- **Framework**: jQuery 3.7.1
- **Architecture**: Single Page Application (SPA) with MVC pattern
- **Build Tools**: SCSS compiler, Node.js
- **Styling**: CSS variables for theming, responsive `clamp()` functions

## 🎨 Design Features

### Responsive Layout

- Uses CSS `clamp()` for fluid sizing between min and max values
- Example: `width: clamp(76.25vw, calc(76.25vw - 91.5rem), 91.5rem);`
- Maintains proper proportions on all screen sizes

### Color System

- Light/Dark mode support with CSS variables
- Accent color: `#587c83` (teal)
- Focus color: `#8fbac3` (light teal)
- Accent muted: `#587c8360` (transparent teal)

### Typography

- Clean, modern font stack: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes using `clamp()`

## 📖 Navigation

The app uses hash-based routing with query parameters:

- `#home` - Homepage
- `#books` - Book catalog
- `#blog` - All blog posts
- `#blog?{postId}` - Individual blog post (e.g., `#blog?1`)
- `#about` - About page
- `#cart` - Shopping cart
- `#account` - User account
- `#signin` - Sign in page

## 🛒 Featured Content

### Halloween Books (IDs 64-69)

1. **The Haunting of Hill House** by Shirley Jackson - Mystery
2. **The Shining** by Stephen King - Thriller
3. **Twilight** by Stephenie Meyer - Fantasy/Vampire
4. **The Woman in Black** by Susan Hill - Mystery
5. **Mexican Gothic** by Silvia Moreno-Garcia - Horror
6. **The Silent Companion** by Laura Purcell - Mystery

### October Favorites Blog Post

Features a spooky header quote and highlights selected Halloween books with interactive previews.

## 🔧 Development

### SCSS Structure

The styles are organized into logical modules:

- `_colors.scss` - Color variables and theming
- `_structure.scss` - Grid and layout foundations
- `_nav.scss` - Navigation component
- `_home.scss` - Homepage specific styles
- `_book.scss` - Blog and book catalog styles
- `_mobile-nav.scss` - Mobile navigation drawer
- `_shadows.scss` - Shadow utilities

### JavaScript Architecture

**app.js** - Main controller:

- `route()` - Handles URL hash routing
- `loadBlogDetailPage(postId)` - Loads individual blog posts
- `initBlog()` - Initializes blog post listing
- `setActive(pageID)` - Updates active navigation link

**model.js** - Data management:

- `PageModel` - Page state
- `BooksModel` - Book data retrieval
- `BlogModel` - Blog post management
- `LoginModel` - Authentication
- `SignupModel` - User registration

**data.json** - Central data store with books and blog content

## 📱 Responsive Breakpoints

The design uses fluid responsive sizing with `clamp()`:

- Adapts smoothly from mobile (320px) to desktop (1920px+)
- No hard breakpoints - continuous scaling
- Content remains readable and properly proportioned at all sizes

## 🐛 Known Issues & Future Improvements

- Mobile navigation drawer functionality
- Advanced book filtering
- User authentication backend integration
- Search functionality

## 📝 License

This project is part of N315 coursework.

## 👤 Author

Created by van Robbins for N315 (Fall 2025)
