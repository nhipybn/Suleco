import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Roboto } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "600", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Suleco - Cơ Hội Làm Việc Tại Nhật Bản",
  description:
    "Đơn vị hàng đầu trong lĩnh vực phái cử lao động sang Nhật Bản. Cầu nối đáng tin cậy giúp bạn hiện thực hóa ước mơ làm việc tại Nhật Bản.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${notoSansJP.variable} ${roboto.variable}`}>
      <body className="font-roboto">{children}</body>
    </html>
  )
}
