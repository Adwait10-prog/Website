# Madhav Dabke's Portfolio Website

A professional personal portfolio website showcasing Madhav Dabke's professional journey and technical expertise, designed with modern web technologies.

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: TailwindCSS, shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Server**: Express.js 
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure

```
madhav-portfolio/
├── client/                 # Frontend code
│   ├── index.html          # HTML entry point
│   └── src/                # React components and logic
│       ├── assets/         # Static assets (images, etc)
│       ├── components/     # Reusable UI components
│       │   ├── ui/         # shadcn/ui components
│       │   └── [Component].tsx # Custom components
│       ├── context/        # React context providers
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utility functions and constants
│       ├── pages/          # Page components
│       ├── App.tsx         # Main app component with routing
│       ├── index.css       # Global styles
│       └── main.tsx        # React entry point
├── server/                 # Backend code
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage 
│   └── vite.ts             # Vite configuration for server
├── shared/                 # Shared code between client and server
│   └── schema.ts           # Data models and types
├── components.json         # shadcn/ui configuration
├── drizzle.config.ts       # Database ORM configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Running Locally

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd madhav-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Local Development Setup**

   If you're having issues running the app locally, make these changes:

   **For server/index.ts:**
   ```typescript
   // Change this:
   const port = 5000;
   server.listen({
     port,
     host: "0.0.0.0",
     reusePort: true,
   }, () => {
     log(`serving on port ${port}`);
   });

   // To this:
   const port = process.env.PORT || 3000;
   server.listen(port, () => {
     log(`serving on port ${port}`);
   });
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   The application will be running at http://localhost:3000 by default.

## Key Features

1. **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop.
2. **Dark/Light Mode**: Theme toggle with persistent user preference.
3. **Interactive Timeline**: Visual representation of professional journey.
4. **Dynamic Blog Section**: Displays both blog posts and LinkedIn posts with filtering.
5. **Skills Showcase**: Visual representation of professional skills.
6. **Project Portfolio**: Showcase of professional projects with details.
7. **Contact Form**: Form with validation for reaching out.
8. **Modern Animations**: Smooth transitions and animations using Framer Motion.

## Building for Production

1. **Build the application:**
   ```bash
   npm run build
   ```
   This creates optimized production builds for both frontend and backend in the `dist` directory.

2. **Start the production server:**
   ```bash
   npm start
   ```
   This starts the Express.js server which serves the built frontend assets.

## Troubleshooting

### Error: `listen ENOTSUP: operation not supported on socket`

If you encounter this error when running the app locally, it's likely due to the server trying to use `0.0.0.0` as the host with the `reusePort` option, which may not be supported on your system.

Solution: Modify the `server/index.ts` file as shown in the "Local Development Setup" section above.

### Error: `Cannot find module`

If you encounter module import errors, run:
```bash
npm install
```

### Port Already in Use

If port 3000 is already in use, you can specify a different port with:
```bash
PORT=3001 npm run dev
```

## Deployments

### Netlify/Vercel Deployment

1. Connect your repository to Netlify or Vercel
2. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Environment variables: Add any required environment variables

### GitHub Pages

For GitHub Pages, you may need to make some adjustments for path handling. Consider using HashRouter instead of BrowserRouter.

## License

This project is licensed under the MIT License.