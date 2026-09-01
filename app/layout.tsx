import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uworks.ca'),
  title: 'UWorks | Data Analytics & Power BI Consulting',
  description:
    'UWorks helps organizations turn complex data into useful decisions with Power BI, Microsoft Fabric, Azure, Google Cloud, ETL, EDI, SQL Server, and DB2 expertise.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: '/',
    siteName: 'UWorks',
    title: 'UWorks | Make your business data work harder',
    description: 'Practical data, analytics, reporting, and integration consulting in Canada.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'UWorks — Make your business data work harder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UWorks | Make your business data work harder',
    description: 'Practical data, analytics, reporting, and integration consulting in Canada.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#122925',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'UWorks',
  url: 'https://www.uworks.ca',
  email: 'xmu@uworks.ca',
  telephone: '+1-647-854-3326',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9560 Markham Road, Unit 316',
    addressLocality: 'Markham',
    addressRegion: 'ON',
    postalCode: 'L6E 0T9',
    addressCountry: 'CA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
