import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"

// Load local Geist fonts
const geist = localFont({
  src: [
    {
      path: './fonts/GeistVF.woff',
      style: 'normal',
    },
  ],
  variable: '--font-geist'
})

const geistMono = localFont({
  src: [
    {
      path: './fonts/GeistMonoVF.woff',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: "Tri Bui - Computer Engineering Portfolio",
  description: "Personal website and project portfolio of Tri Bui, a computer engineering student.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark h-full ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col overflow-x-hidden font-sans">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}