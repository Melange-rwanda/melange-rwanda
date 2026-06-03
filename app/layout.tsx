import type { Metadata } from 'next'
import { Playfair_Display, Inter, Montserrat, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"]
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ["latin"]
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ["latin"]
});

const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITEURL || 'https://www.melangerwanda.com';

export const metadata: Metadata = {
  title: 'Mélange Rwanda - Join Rwanda\'s Elite',
  description: 'Mélange Rwanda is hiring top Rwandan freelancers. Remote roles in writing, research, design & operations. Join our founding team. Apply now.',
  keywords: 'mélange rwanda,melange rwanda,melangerwanda, rwanda jobs, youth empowerment rwanda, mélange freelance rwanda, rwanda education, skills development rwanda, rwanda freelance opportunities, join rwanda elite, work from home rwanda, mélange youth programs, community initiatives rwanda, rwanda career opportunities, freelance partners rwanda, north american clients rwanda,north american job, mélange digital jobs, remote work rwanda, rwanda talent, youth skills training, mélange employment',
  icons: {
    icon: [
      { url: '/logo2.png', sizes: 'any' } 
    ],
    apple: [
      { url: '/logo2.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Mélange Rwanda - Join Rwanda\'s Elite',
    description: 'Join Rwanda\'s elite. Become a founding freelance partner and provide world-class services to North American clients.',
    type: 'website',
    url: siteUrl,
    siteName: 'Mélange Rwanda',
    images: [
      {
        url: `${siteUrl}/logo2.png`,
        width: 1200,
        height: 630,
        alt: 'Mélange Rwanda - Join Rwanda\'s Elite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mélange Rwanda - Join Rwanda\'s Elite',
    description: 'Join Rwanda\'s elite. Become a founding freelance partner and provide world-class services to North American clients.',
    images: [`${siteUrl}/logo2.png`],
  },
  verification: {
    google: 'vB2RuXjznm_ewaniDm-AUBQ6Sx2nW-ZESRBhokT4O0E',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#97e83a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BY82R2Y3JT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BY82R2Y3JT');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}