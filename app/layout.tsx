'use client'
import { setupStore } from './redux/store/store'
import './globals.css'
import { Provider } from 'react-redux'

const appStore = setupStore()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Provider store={appStore}>
          <body>{children}</body>
        </Provider>
    </html>
  )
}
