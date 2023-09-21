import Theme from "@/components/Theme"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from "@/components"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Digital Portfolio',
  description: 'Software Engineer Digital Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" className={`${inter.className}`}>
      <Theme>
        <body>
          <NavBar />
          <div className="flex-col mx-auto">{children}</div>
        </body>
      </Theme>
    </html>
  )
}
