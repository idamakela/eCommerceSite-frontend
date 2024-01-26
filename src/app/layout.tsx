import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'
import { JetBrains_Mono, Kumbh_Sans } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { cn } from '@/utils/classnames'

const jetBrainMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--jet-brain-mono',
})
const kumbhSans = Kumbh_Sans({ subsets: ['latin'], variable: '--kumbh-sans' })

export const metadata: Metadata = {
  title: 'FunkFlare',
  description: 'Elevate your phone’s vibe with funky free backgrounds',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn(jetBrainMono.variable, kumbhSans.variable, 'font-body')}>
        <Header />
        {children}
        <Footer />
        <Toaster /> 
      </body>
    </html>
  )
}
