import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: 'Daniel Calin Stanus | Desarrollador Full Stack',
  description: 'Portafolio profesional de Daniel Calin Stanus, Desarrollador Full Stack especializado en .NET, PHP, React y Angular. Con experiencia en desarrollo web y aplicaciones empresariales.',
  keywords: '.NET, PHP, React, Angular, Full Stack, Desarrollador, Madrid, Desarrollo Web, Aplicaciones Empresariales',
  authors: [{ name: 'Daniel Calin Stanus' }],
  creator: 'Daniel Calin Stanus',
  publisher: 'Daniel Calin Stanus',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://danielstanus.com',
    title: 'Daniel Calin Stanus | Desarrollador Full Stack',
    description: 'Portafolio profesional de Daniel Calin Stanus, Desarrollador Full Stack especializado en .NET, PHP, React y Angular.',
    siteName: 'Daniel Calin Stanus Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Calin Stanus | Desarrollador Full Stack',
    description: 'Portafolio profesional de Daniel Calin Stanus, Desarrollador Full Stack especializado en .NET, PHP, React y Angular.',
    creator: '@danielstanus'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} bg-background text-foreground relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}