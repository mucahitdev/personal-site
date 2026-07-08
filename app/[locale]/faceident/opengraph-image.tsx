import { ImageResponse } from 'next/og'

export const alt =
  'FaceIdent — On-Device Face & Pet Recognition Photo Organizer for iOS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#a1a1aa',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          iOS App
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 132,
              fontWeight: 700,
              color: '#fafafa',
              lineHeight: 1,
            }}
          >
            FaceIdent
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              fontSize: 44,
              color: '#d4d4d8',
            }}
          >
            On-Device Face & Pet Recognition
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#fafafa',
              color: '#09090b',
              fontSize: 32,
              fontWeight: 600,
              padding: '18px 34px',
              borderRadius: 999,
            }}
          >
            Private · 100% On-Device
          </div>
          <div style={{ display: 'flex', fontSize: 30, color: '#71717a' }}>
            mucahitk.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
