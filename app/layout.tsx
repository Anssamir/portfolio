import { Inter } from 'next/font/google';
import { ClientProviders } from './ClientProviders';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anas Amir — Product Designer Portfolio',
  description: 'Portfolio of Anas Amir, Product & UX Designer specializing in intuitive digital experiences.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
