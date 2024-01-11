import './sass/globals.scss'
import { ReduxProvider } from './providers/provider'
import type { Metadata } from 'next'
import SessionProvider from './providers/SessionProvider'

export const metadata: Metadata = {
  title: 'Hotel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <SessionProvider>
        <ReduxProvider>
          <body>{children}</body>
        </ReduxProvider>
      </SessionProvider>
    </html>
  )
}
