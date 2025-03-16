// Preview configuration for Sanity
export const previewSecret = process.env.SANITY_PREVIEW_SECRET || 'preview-secret'

// Helper function to check if a request should get preview data
export const checkPreviewUrl = (req: Request): boolean => {
  const url = new URL(req.url)
  const secret = url.searchParams.get('secret')
  return secret === previewSecret
}
