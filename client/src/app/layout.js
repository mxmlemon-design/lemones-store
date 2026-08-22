import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Lemones - Luxury Fashion & Gadgets',
  description: 'Discover premium fashion and innovative gadgets at Lemones. Curated collections for the modern luxury lifestyle.',
  keywords: 'luxury fashion, gadgets, dropshipping, premium products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
