import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import '../../public/globals.css'
import '../../public/css/bootstrap.min.css'
import '../../public/css/common.css'
import '../../public/css/home.css'
import '../../public/css/responsive.css'
import '../../public/css/inner_style.css'
import '../../public/css/owl.theme.default.min.css'
import '../../public/css/owl.carousel.css'
import '../../public/css/base.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        
        {children}
        
        </body>
    </html>
  )
}
