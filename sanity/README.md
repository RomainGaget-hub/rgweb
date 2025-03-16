# Sanity Studio Management Guide

This README provides detailed instructions for managing content in your Sanity Studio, previewing changes, and deploying updates.

## Table of Contents

- [Getting Started](#getting-started)
- [Content Management](#content-management)
  - [Creating New Content](#creating-new-content)
  - [Editing Content](#editing-content)
  - [Managing Media](#managing-media)
- [Preview Functionality](#preview-functionality)
  - [How Preview Works](#how-preview-works)
  - [Using Preview](#using-preview)
  - [Troubleshooting Preview](#troubleshooting-preview)
- [Publishing Content](#publishing-content)
- [Deployment](#deployment)
  - [Deploying Studio Changes](#deploying-studio-changes)
  - [Deploying Schema Changes](#deploying-schema-changes)
- [Helpful Commands](#helpful-commands)

## Getting Started

1. Start the local Sanity Studio:

   ```bash
   npm run dev
   ```

   or from the project root:

   ```bash
   npm run sanity
   ```

2. The Studio will be available at http://localhost:3333

## Content Management

### Creating New Content

1. **Navigate to the appropriate content type** in the sidebar (e.g., Blog Post, Author, Category)
2. **Click the "Create new" button** at the top of the document list
3. **Fill in the required fields**:
   - For Blog Posts: title, slug, author, content, and publishedAt date are required
   - For Authors: name and slug are required
   - For Categories: title and description

### Editing Content

1. **Select the document** you want to edit from the list
2. **Make your changes** in the editing interface
3. **Click "Publish"** when you're ready to make the changes live
4. **Use the "Discard changes" option** if you want to revert to the published version

### Managing Media

1. **Upload images** by clicking on image fields and either:
   - Dragging and dropping files
   - Using the file picker
2. **Crop and adjust** images using the built-in image editor
3. **Select focus point** by using the hotspot feature (available for certain image fields)

## Preview Functionality

### How Preview Works

The preview functionality creates a direct connection between Sanity Studio and your Next.js frontend, allowing you to see how your content will look before publishing.

### Using Preview

1. **While editing a document**, click the "Preview" button (eye icon) in the top right corner
2. **A new browser tab will open** with a preview of your content
3. **Make changes** to your content in Sanity Studio
4. **See real-time updates** in the preview tab as you edit
5. **Use the preview mode to check**:
   - Layout and formatting
   - Image placement
   - Link functionality
   - Overall appearance

### Troubleshooting Preview

If preview isn't working correctly:

1. **Check that your Next.js application is running** (npm run dev in project root)
2. **Verify preview URLs** are correctly configured in sanity.config.ts
3. **Clear your browser cache** and try again
4. **Check for error messages** in both Sanity Studio and Next.js console logs

## Publishing Content

1. **After editing is complete and previewed**, click the "Publish" button
2. **Confirm the publication** in the dialog
3. **Published content will be immediately available** on your production site
4. **You can unpublish content** by selecting "Unpublish" from the document menu

## Deployment

### Deploying Studio Changes

When you make changes to the Sanity Studio configuration or schema:

1. **Build the studio**:

   ```bash
   cd sanity
   npm run build
   ```

2. **Deploy to Sanity.io**:
   ```bash
   npm run deploy
   ```

This will make your updated Studio available at your Sanity project URL.

### Deploying Schema Changes

When you modify the schema (add fields, change validation, etc.):

1. **Deploy your schema changes** with the studio deployment (see above)
2. **Update your frontend queries** to accommodate the schema changes
3. **Test thoroughly** before deploying to production

## Helpful Commands

Here are some useful commands when working with Sanity:

- **Start Sanity Studio**: `npm run dev` (in sanity directory)
- **Build Sanity Studio**: `npm run build` (in sanity directory)
- **Deploy Sanity Studio**: `npm run deploy` (in sanity directory)
- **Deploy GraphQL API**: `npm run deploy-graphql` (in sanity directory)
