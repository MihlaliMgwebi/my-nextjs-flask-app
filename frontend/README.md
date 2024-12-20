# Frontend Application Documentation

## Overview

This is the frontend part of the My Next.js Flask App project. It is built using Next.js and is configured as a Progressive Web App (PWA) to provide a seamless experience on mobile devices.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd my-nextjs-flask-app/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the Development Server**
   Start the development server with:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to see the application in action.

## PWA Features

This application is configured as a Progressive Web App. Key features include:

- **Offline Support**: The service worker caches essential assets for offline access.
- **App Manifest**: The `manifest.json` file provides metadata for the app, allowing it to be installed on mobile devices.

## File Structure

- `public/manifest.json`: Metadata for the PWA.
- `public/service-worker.js`: Service worker for offline capabilities.
- `src/app/layout.tsx`: Layout component for consistent structure.
- `src/app/page.tsx`: Main entry point for the application.
- `src/components/Header.tsx`: Navigation header component.
- `src/styles/globals.css`: Global CSS styles.
- `next.config.js`: Configuration settings for Next.js.
- `package.json`: NPM configuration file.
- `tsconfig.json`: TypeScript configuration file.

## Deployment

To deploy the frontend application, follow the instructions in the root `netlify.toml` file for configuration settings specific to Netlify.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.