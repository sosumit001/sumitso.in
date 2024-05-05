import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Next.js Portfolio Starter'
  let des = url.searchParams.get('des') || '.'

  return new ImageResponse(
    (
      <div>
          <h2>
            {title}
          </h2>
          <h3>
            {des}
          </h3>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}