# RGWEB - Developer Blog & Portfolio

Welcome to **RGWEB**, a personal website and blog created by Romain Gaget. This site showcases my journey in web development, featuring articles, tutorials, and insights on front-end and back-end technologies. Here, you'll find a collection of projects, development tips, and resources aimed at helping developers of all levels grow and stay up-to-date with modern web practices.

This is a [Next.js](https://nextjs.org) project with [Sanity](https://sanity.io) for content management.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Content Management**: Sanity.io

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/rgweb.git
cd rgweb
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

### Running the Development Server

```bash
# Run Next.js frontend
npm run dev

# Run Sanity Studio (CMS)
npm run sanity
```

- Next.js frontend: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3333](http://localhost:3333)

## Project Structure

```
rgweb/
├── src/                  # Source code
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── lib/              # Utility functions
│   ├── actions/          # Server actions
│   ├── sanity/           # Sanity configuration
│   ├── types/            # TypeScript type definitions
│   └── content/          # Content files (MDX, etc.)
├── sanity/               # Sanity Studio configuration
├── public/               # Static assets
└── ...config files
```

## Building for Production

```bash
# Build the Next.js application
npm run build

# Start the production server
npm start
```

## Deployment

The application is configured for deployment on Vercel:

```bash
npm run build
```

This command will build the Next.js application.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the terms of the license included in the repository.
