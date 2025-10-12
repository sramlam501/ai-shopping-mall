import './globals.css'
import { Playfair_Display, Poppins } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-poppins' })

export const metadata = {
  title: 'AI Shopping Mall — The world’s first AI-curated lifestyle mall',
  description: 'Shop, style, travel, and dine with AI. Luxury recommendations across fashion, beauty, food, and travel.',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sanslux bg-blacklux text-ivory">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
