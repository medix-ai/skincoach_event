import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ohseoyoung.github.io'),
  title: '올영 장바구니 성향 테스트 | 스킨코치',
  description: '12문항으로 알아보는 내 스킨케어 장바구니 성향. 총 16가지 유형 중 나는?',
  openGraph: {
    title: '올영 장바구니 성향 테스트 | 스킨코치',
    description: '12문항으로 알아보는 내 스킨케어 장바구니 성향',
    images: ['/skincoach_event/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
