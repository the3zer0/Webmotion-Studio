import type { Metadata } from 'next'
import Navigation from '@/components/common/Navigation'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp'
import Footer from '@/components/common/Footer'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Webmotion Studio — Graphics Design, Video Editing & Web Development',
    template: '%s | Webmotion Studio',
  },
  description:
    'Webmotion Studio is a creative agency offering premium Video Editing, Graphics Design, and Web Development services for creators, brands, and businesses worldwide.',
  keywords: [
    'Video Editing',
    'Graphics Design',
    'Web Development',
    'Webmotion Studio',
    'Creative Agency',
    'Bangladesh',
    'Logo Design',
    'Brand Identity',
    'Social Media Graphics',
  ],
  authors: [{ name: 'Webmotion Studio' }],
  creator: 'Webmotion Studio',
  metadataBase: new URL('https://the3zer0.github.io/Webmotion-Studio'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://the3zer0.github.io/Webmotion-Studio',
    siteName: 'Webmotion Studio',
    title: 'Webmotion Studio — Graphics Design, Video Editing & Web Development',
    description:
      'Creative agency offering premium Video Editing, Graphics Design, and Web Development services for creators, brands, and businesses worldwide.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webmotion Studio — Graphics Design, Video Editing & Web Development',
    description:
      'Creative agency offering premium Video Editing, Graphics Design, and Web Development services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

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