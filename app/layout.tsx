import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Ashraful - Full-Stack Developer Portfolio',
    template: '%s | Ashraful Portfolio'
  },
  description: 'Professional portfolio showcasing full-stack development projects, skills, and experience. Specialized in Next.js, TypeScript, React, and modern web technologies.',
  keywords: ['Full-Stack Developer', 'Web Developer', 'Next.js', 'React', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Ashraful' }],
  creator: 'Ashraful',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashraful.dev',
    title: 'Ashraful - Full-Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full-stack development projects and expertise',
    siteName: 'Ashraful Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashraful - Full-Stack Developer',
    description: 'Full-stack developer specializing in modern web technologies',
    creator: '@ashrafulwpdev',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
