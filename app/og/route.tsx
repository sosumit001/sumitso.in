import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Next.js Portfolio Starter'
  let des = url.searchParams.get('des') || '.'

  return new ImageResponse(
    (
      <div
      className="h-full w-full flex flex-col items-center justify-center bg-white bg-[radial-gradient(circle_at_25px_25px,_lightgray_2%,_transparent_0%),_radial-gradient(circle_at_75px_75px,_lightgray_2%,_transparent_0%)] bg-100px"
    >
      <div
        className="flex text-4xl normal-case text-black mt-7 leading-relaxed whitespace-pre-wrap"
      >
        {title}
      </div>
    </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
