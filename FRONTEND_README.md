# Product Listing - Frontend

A modern, responsive dessert e-commerce application built with React and Vite.

## Overview

This is the frontend application for a full-stack dessert marketplace. Users can browse dessert products, add items to their cart, manage quantities, and complete purchases with an intuitive checkout experience.

## Features

- **Product Browsing** - Display all available desserts with responsive image handling
- **Shopping Cart** - Add/remove products, adjust quantities, and persist cart to localStorage
- **User Authentication** - Registration and login with form validation
- **Order Confirmation** - Modal confirmation with order summary after checkout
- **Responsive Design** - Mobile, tablet, and desktop optimized layouts
- **Form Validation** - Real-time error handling and user feedback
- **Loading States** - Visual feedback during API calls

## Tech Stack

- **React** 19.2.0 - UI framework
- **Vite** 7.2.4 - Build tool and dev server
- **React Router** 7.13.0 - Client-side routing
- **Tailwind CSS** 3.4.18 - Utility-first CSS framework
- **DaisyUI** 5.5.18 - Component library for Tailwind
- **Axios** 1.13.5 - HTTP client for API requests
- **React Icons** 5.5.0 - Icon library
- **React Loader Spinner** 8.0.2 - Loading indicator component

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (if needed for API endpoints):
```
VITE_API_URL=http://localhost:3000
```

## Running the Application

### Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── homepage.jsx      # Main product listing and cart page
│   ├── Cart.jsx          # Shopping cart sidebar component
│   └── Modal.jsx         # Order confirmation modal
├── pages/
│   ├── Login-page.jsx    # Login authentication page
│   ├── SignupPage.jsx    # User registration page
│   └── NotFound.jsx      # 404 page
├── data/
│   └── data.json         # Product database
├── utils/
│   ├── money.js          # Utility functions for currency
│   └── images/           # SVG icons and static images
├── assets/
│   ├── fonts/            # Custom fonts
│   └── images/           # Product images
├── App.jsx               # Main app router
├── App.css               # App styles
├── main.jsx              # React entry point
└── index.css             # Global styles
```

## Key Components

### HomePage
- Displays all dessert products
- Manages cart state with localStorage persistence
- Handles add/remove product operations
- Shows cart quantity indicator

### Cart
- Shows cart items with quantities and prices
- Remove items functionality
- Calculates order total
- Triggers order confirmation modal

### Modal
- Displays confirmed order details
- Shows all ordered items with images and prices
- Final order total display
- New order initialization

### Login & Signup Pages
- Form validation
- Password visibility toggle
- API authentication integration
- Error message handling
- Loading states

## Routing

- `/signup` - User registration page
- `/login` - User login page
- `/home` - Main product listing page
- `/` - Redirects to signup
- `*` - 404 Not Found page

## Product Data

Products include:
- Waffle with Berries ($6.50)
- Vanilla Bean Crème Brûlée ($7.00)
- Macaron Mix of Five ($8.00)
- Classic Tiramisu ($5.50)
- And more...

Each product has:
- Multiple image sizes (thumbnail, mobile, tablet, desktop)
- Name and category
- Price
- Unique ID

## State Management

- **Cart State** - Managed with useState and persisted to localStorage
- **UI State** - Modal visibility, loading, error messages
- **Form State** - Form inputs for login/signup

## Styling

The application uses:
- **Tailwind CSS** for utility-first styling
- **DaisyUI** components for pre-built UI elements
- **Custom CSS** for specific component styling
- **PostCSS** for CSS processing

## API Integration

- Login endpoint for user authentication
- Signup endpoint for user registration
- Expected backend URL: configurable via environment variables

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for screens from 320px and up

## Development Workflow

1. Make changes to components in `src/`
2. Hot module replacement (HMR) will refresh the browser automatically
3. Run `npm run lint` to check for code issues
4. Test authentication flows and cart functionality
5. Build and test production version with `npm run build && npm run preview`

## Future Enhancements

- Product filter and search functionality
- User profile management
- Order history
- Payment integration
- Admin dashboard for product management
- Wishlist feature

## License

This project is part of the product-listing application.
