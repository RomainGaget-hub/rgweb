import {EyeOpenIcon} from '@sanity/icons'
import PreviewPane from './components/PreviewPane'

export const getDefaultDocumentNode = (S) => {
  // For all document types, show preview
  return S.document().views([
    // Default form view
    S.view.form(),

    // Preview view
    S.view.component(PreviewPane).title('Preview').icon(EyeOpenIcon),
  ])
}

// Main structure
export default (S) =>
  S.list()
    .title('Content')
    .items([
      // Blog posts
      S.listItem()
        .title('Blog Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog Posts')),

      // Authors
      S.listItem().title('Authors').schemaType('author').child(S.documentTypeList('author')),

      // Categories
      S.listItem().title('Categories').schemaType('category').child(S.documentTypeList('category')),
    ])
