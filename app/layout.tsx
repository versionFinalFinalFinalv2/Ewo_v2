import type React from "react"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const rubik = Rubik({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik"
})

export const metadata: Metadata = {
  title: "EWO-2000 | Autó Szervíz",
  description: "Professzionális autó szervíz, karosszéria javítás és fényezés szolgáltatások",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={rubik.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
