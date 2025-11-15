# RRD - React Router DOM Learning Project

A simple React application built to understand and practice React Router DOM concepts, with a focus on advanced features like route loaders

## Purpose

This project demonstrates key React Router DOM concepts:

- Client-side routing and navigation
- Dynamic routes with URL parameters
- route loaders
- Prefetch intent on hover for optimized data fetching
- Component-based page structure

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Project Structure

```
src/
├── main.jsx          # Routing configuration with loaders
├── App.jsx           # Layout wrapper
├── components/
│   ├── Home.jsx      # Home route
│   ├── About.jsx     # About route
│   ├── Github.jsx    # GitHub user search with API
│   ├── User.jsx      # Dynamic route (/user/:id)
│   ├── Header.jsx    # Navigation
│   └── Footer.jsx    # Footer
```

## Key Learning Points

- **Routing**: Navigate between Home, About, and GitHub pages
- **Dynamic Routes**: `/user/:id` parameter handling
- **Data Preloading**: Route loaders fetch data before component renders
- **API Integration**: Fetch GitHub user data using REST API

## Routes

- `/` - Home
- `/about` - About
- `/github` - GitHub user search
- `/user/:id` - User profile (dynamic)

## Technologies

- React 19
- React Router DOM 7
- Vite
- Tailwind CSS

## GitHub API Usage

Searches public GitHub profiles via: `https://api.github.com/users/{username}`
