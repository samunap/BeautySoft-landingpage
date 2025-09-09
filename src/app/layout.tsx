import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { copy } from '@/content/site'
import { LanguageProvider } from '@/lib/language-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  keywords: 'barber booking, salon management, beauty appointments, staff scheduling, barbershop software',
  authors: [{ name: 'BeautySoft' }],
  creator: 'BeautySoft',
  publisher: 'BeautySoft',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://beautysoft.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: 'https://beautysoft.app',
    siteName: 'BeautySoft',
    images: [
      {
        url: copy.meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'BeautySoft - Barber & Salon Management App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: copy.meta.title,
    description: copy.meta.description,
    images: [copy.meta.ogImage],
    creator: '@beautysoft',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6B5BFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Analytics Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
                `,
              }}
            />
            
            {/* Meta Pixel */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
        {/* Vercel Analytics */}
        {process.env.NODE_ENV === 'production' && (
          <script
            defer
            src="/_vercel/insights/script.js"
          />
        )}
      </body>
    </html>
  )
}
