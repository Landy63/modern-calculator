import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Just calcul',
  description: 'A modern, responsive, and intuitive online calculator',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#A855F7', // Purple-500 to match our gradient start
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`h-full ${poppins.className}`}>
      <body className="fixed inset-0 overflow-hidden bg-gradient-to-b from-purple-500 to-pink-500">
        <div className="relative h-full w-full p-4 pt-safe flex flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}

