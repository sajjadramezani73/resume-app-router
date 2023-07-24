import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'sajjad ramezani',
  description: 'resume project with next.js app router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
