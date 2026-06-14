import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import './globals.css'
import { TRPCReactProvider } from '@/trpc/client'

export const metadata: Metadata = {
  title: 'IT Learn | Discover Your Potential',
  description: 'Learn IT skills and advance your career with IT Learn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary">

        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
        <Footer />
      </body>
    </html>
  )
}
