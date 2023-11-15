import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gossip.',
  description: 'Most Advanced Chatting app on the web.',
}

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode,
  
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
        {children}
        <Toaster />
        </ThemeProvider>
       
      </body>
    </html>
    </ClerkProvider>
  )
}
