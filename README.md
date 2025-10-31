# Inevitable Spot Asset Review

A minimal, sleek asset review platform for viewing and commenting on video and image assets. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Grid Gallery View**: Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
- **Modal Viewer**: Click any asset to open a detailed modal
- **Video Support**: Native HTML5 video player with full controls
- **Image Support**: High-resolution image viewing
- **Metadata System**: Easy JSON-based asset management
- **Comments**: Add notes and comments to each asset
- **Dark Theme**: Minimal, professional dark design

## Project Structure

```
inevitable-asset-review/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page with grid view
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AssetCard.tsx      # Individual asset card
│   ├── AssetGrid.tsx      # Grid layout container
│   └── AssetModal.tsx     # Modal for detailed view
├── lib/                   # Utilities and types
│   └── types.ts          # TypeScript type definitions
├── public/
│   ├── assets.json       # Asset metadata
│   └── assets/
│       ├── videos/       # Video files
│       └── images/       # Image files
└── [config files]        # TypeScript, Tailwind, ESLint configs
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Asset Management

Edit `public/assets.json` to update asset metadata:

```json
{
  "title": "Inevitable Spot Asset Review",
  "assets": [
    {
      "id": "001",
      "filename": "/assets/videos/example.mp4",
      "type": "video",
      "title": "Asset Title",
      "comments": "Your comments here..."
    }
  ]
}
```

## Deployment

This project is optimized for Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel

## License

Private project
