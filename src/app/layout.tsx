import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KaraokeGoGo',
  description: 'Pour your soul. Remix your world.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preload" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          as="style" 
          crossOrigin="anonymous"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/fixed-nav.css" />
        <link rel="stylesheet" href="/css/panel-animations.css" />
        <Script id="ios-chrome-detection" strategy="beforeInteractive">
          {`
            window.isIOSChrome = /CriOS/i.test(navigator.userAgent) && /iP(hone|od|ad)/i.test(navigator.userAgent);
            
            if (window.isIOSChrome) {
              document.addEventListener('DOMContentLoaded', function() {
                document.body.classList.add('ios-chrome');
              });
            }
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}