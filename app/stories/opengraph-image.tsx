import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sumit So - Stories'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f6f5f1',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: 'linear-gradient(90deg, #042f2e, #0d9488)',
              marginRight: 8,
            }}
          />
          <span style={{ color: '#042f2e' }}>sumitso.in</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: 'linear-gradient(90deg, #042f2e, #0d9488)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 16,
            }}
          >
            Stories
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#374151',
              maxWidth: 600,
              textAlign: 'center',
            }}
          >
            Stories, experiences, and reflections from my journey
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
