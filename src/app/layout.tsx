import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import CustomCursor from '@/components/CustomCursor';
import StructuredData from '@/components/StructuredData';
import './globals.css';
import type { Viewport } from 'next'; // Import Viewport type

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
  preload: false,
});

// New generateViewport function
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Daniel Calin Stanus | Desarrollador Full Stack',
    template: '%s | Daniel Calin Stanus'
  },
  description: 'Portafolio profesional de Daniel Calin Stanus, Desarrollador Full Stack especializado en .NET, PHP, React y Angular. Con experiencia en desarrollo web y aplicaciones empresariales.',
  keywords: [
    '.NET', 'PHP', 'React', 'Angular', 'Full Stack', 'Desarrollador', 'Madrid', 
    'Desarrollo Web', 'Aplicaciones Empresariales', 'C#', 'TypeScript', 'JavaScript',
    'SQL Server', 'API REST', 'Ionic', 'Android', 'Programador', 'Software Developer'
  ],
  authors: [{ name: 'Daniel Calin Stanus', url: 'https://danielstanus.github.io' }],
  creator: 'Daniel Calin Stanus',
  publisher: 'Daniel Calin Stanus',
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
  alternates: {
    canonical: 'https://danielstanus.github.io',
    languages: {
      'es-ES': 'https://danielstanus.github.io',
    },
  },
  category: 'technology',
  classification: 'Portfolio',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: [
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://danielstanus.github.io',
    title: 'Daniel Calin Stanus | Desarrollador Full Stack',
    description: 'Portafolio profesional de Daniel Calin Stanus, Desarrollador Full Stack especializado en .NET, PHP, React y Angular.',
    siteName: 'Daniel Calin Stanus Portfolio',
    images: [
      {
        url: 'https://danielstanus.github.io/images/profile-min.jpg',
        width: 1200,
        height: 630,
        alt: 'Daniel Calin Stanus - Desarrollador Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Calin Stanus | Desarrollador Full Stack',
    description: 'Portafolio profesional de Daniel Calin Stanus, Desarrollador Full Stack especializado en .NET, PHP, React y Angular.',
    creator: '@danielstanus',
    images: ['https://danielstanus.github.io/images/profile-min.jpg'],
  },
  verification: {
    google: 'google-site-verification-code', // Reemplazar con código real si tienes
  },
  other: {
    'geo.region': 'ES-MD',
    'geo.placename': 'Madrid',
    'geo.position': '40.4168;-3.7038',
    'ICBM': '40.4168, -3.7038',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} bg-background text-foreground relative`}>
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}