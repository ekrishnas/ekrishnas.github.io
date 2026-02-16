import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E Sai Krishna - Senior Software Engineer',
  description: '8+ years of experience in .NET, AWS, and building scalable systems. Portfolio of E Sai Krishna.',
  authors: [{ name: 'E Sai Krishna' }],
  keywords: ['Software Engineer', 'AWS', 'C#', '.NET', 'Full Stack', 'Backend', 'API Development'],
  openGraph: {
    title: 'E Sai Krishna - Senior Software Engineer',
    description: '8+ years of experience in .NET, AWS, and building scalable systems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
