import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>God'sGift Essence</title>
        <meta name="description" content="Scented by Grace, Made to Leave a Mark" />
        <Script src="https://js.paystack.co/v1/inline.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0 }}>
        <div style={{ flex: 1 }}>{children}</div>
        <footer style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '2rem 1rem', marginTop: 'auto', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#9ca3af' }}>
            © {new Date().getFullYear()} God'sGift Essence. All rights reserved.
          </p>
        </footer>
        <a
          href="https://wa.me/2348149189463"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px',
            backgroundColor: '#25D366', borderRadius: '50%', display: 'flex',
            alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 1000, textDecoration: 'none'
          }}
        >
          <span style={{ color: 'white', fontSize: '2rem' }}>💬</span>
        </a>
      </body>
    </html>
  );
}
