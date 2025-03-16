# Sanity Preview Guide

This guide explains how to use the preview functionality in your Sanity Studio to view content before publishing.

## How to Use Preview

1. **Start your development server**:

   ```bash
   # In your main project folder
   npm run dev

   # In a separate terminal, start Sanity Studio
   cd sanity
   npm run dev
   ```

2. **Navigate to a document** in Sanity Studio:

   - Go to your Sanity Studio (usually at http://localhost:3333)
   - Select a content type (like Blog Posts)
   - Open an existing document or create a new one

3. **Use the Preview Tab**:

   - At the top of the document view, you should see a tab labeled "Preview" with an eye icon
   - Click on this tab to see a live preview of your content
   - The preview updates in real-time as you make changes

4. **Switch between editing and previewing**:
   - The "Editor" tab contains your editing interface
   - The "Preview" tab shows how the content will appear on your site
   - You can switch between these tabs as needed

## Troubleshooting Preview

If the preview functionality isn't working:

1. **Check your development servers**:

   - Make sure your Next.js app is running at http://localhost:3000
   - Make sure your Sanity Studio is running at http://localhost:3333

2. **Verify your document has required fields**:

   - Most importantly, ensure your document has a slug field that's properly filled out
   - For blog posts, make sure title, slug, and content are filled in

3. **Check console errors**:

   - Look for any error messages in both your Next.js and Sanity Studio browser consoles
   - These can often point to configuration issues

4. **URL structure matters**:
   - The preview system relies on proper URL construction
   - Make sure your document's slug follows proper formatting

## How Preview Works

Behind the scenes, the preview function:

1. Creates a special preview URL that includes your document information
2. Passes this URL to a preview API route in your Next.js application
3. The API route enables draft mode and redirects to the appropriate page
4. The page then renders using unpublished content data

This allows you to see exactly how your content will appear on your site before publishing it.

## Notes on Production Preview

For preview in production:

1. Deploy your Sanity Studio
2. Set up proper environment variables for your production URL
3. Use a secure preview secret in production

For more details, see the official Sanity documentation on preview functionality.
