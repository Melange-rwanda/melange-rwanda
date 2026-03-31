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

export const metadata: Metadata = {
  title: 'Mélange Rwanda - Join Rwanda\'s Elite',
  description: 'Mélange Rwanda is a non-profit organization dedicated to empowering youth through quality education, skills development, and community-driven initiatives.',
  keywords: 'melange rwanda, Rwanda, education, youth empowerment, non-profit, skills development',
  openGraph: {
    title: 'Mélange Rwanda - Join Rwanda\'s Elite',
    description: 'Empowering Rwanda\'s youth through education and opportunity',
    type: 'website',
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
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
