import './globals.css';
import Navbar from '../components/Navbar';
import { Poppins, DM_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
