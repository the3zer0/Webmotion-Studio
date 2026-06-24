import type { Metadata } from 'next'
import Navigation from '@/components/common/Navigation'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp'
import Footer from '@/components/common/Footer'
import '../globals.css'

export const metadata = {
  title: 'Webmotion Studio',

  description:
    'Creative studio offering Video Editing, Graphics Design and Web Development services.',

  keywords: [
    'Video Editing',
    'Graphics Design',
    'Web Development',
    'Webmotion Studio',
    'Bangladeshi Agency',
  ],
} as Metadata


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-dark text-light antialiased">
        <Navigation />

        {children}
        <FloatingWhatsApp />
        
        <Footer />
      </body>
    </html>
  )
}