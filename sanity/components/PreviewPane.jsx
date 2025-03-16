import React, {useEffect, useState} from 'react'
import {useClient} from 'sanity'

// A simple React component that renders the preview
export default function PreviewPane(props) {
  const {document} = props
  const {displayed} = document
  const [status, setStatus] = useState('Preparing preview...')

  // Get slug or fallback
  const slug = displayed.slug?.current ? displayed.slug.current : 'unknown-slug'

  // Create direct links for easier debugging
  const previewSecret = 'LfVnYq42KqbrcCwRiZmm'
  const encodedSlug = encodeURIComponent(`/${displayed._type}/${slug}`)
  const previewUrl = `http://localhost:3000/api/preview?secret=${previewSecret}&slug=${encodedSlug}`
  const directContentUrl = `http://localhost:3000/post/${slug}`

  // Testing the preview endpoint directly
  useEffect(() => {
    async function testPreviewEndpoint() {
      try {
        setStatus('Testing preview endpoint...')
        const response = await fetch(previewUrl)
        if (response.ok) {
          setStatus('Preview endpoint working! You can now use the iframe below.')
        } else {
          setStatus(`Error from preview endpoint: ${response.status} ${response.statusText}`)
        }
      } catch (error) {
        setStatus(`Error connecting to preview endpoint: ${error.message}`)
      }
    }

    testPreviewEndpoint()
  }, [previewUrl])

  return (
    <div style={{padding: '20px', height: '100%', display: 'flex', flexDirection: 'column'}}>
      <div
        style={{marginBottom: '20px', background: '#f0f0f0', padding: '15px', borderRadius: '4px'}}
      >
        <h2 style={{marginTop: 0}}>Preview Debug Panel</h2>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Document Type:</strong> {displayed._type}
        </p>
        <p>
          <strong>Slug:</strong> {slug}
        </p>

        <div style={{marginTop: '15px'}}>
          <h3>Try direct links:</h3>
          <div style={{marginBottom: '10px'}}>
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '8px',
                background: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              1. Enable Preview Mode
            </a>
          </div>
          <div>
            <a
              href={directContentUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '8px',
                background: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              2. View Content Directly
            </a>
          </div>
        </div>
      </div>

      <div style={{flex: 1}}>
        <iframe
          src={previewUrl}
          style={{width: '100%', height: '100%', border: '1px solid #ccc', borderRadius: '4px'}}
        />
      </div>
    </div>
  )
}
