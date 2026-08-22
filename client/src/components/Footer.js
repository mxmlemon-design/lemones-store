'use client';

import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">🍋 Lemones</h3>
            <p className="text-beige-dark text-sm">
              Luxury fashion and premium gadgets for the modern lifestyle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <h4 className="font-bold text-lg">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=fashion" className="text-beige-dark hover:text-gold transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/products?category=gadgets" className="text-beige-dark hover:text-gold transition-colors">
                  Gadgets
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-beige-dark hover:text-gold transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-beige-dark hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-beige-dark hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-beige-dark hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-beige-dark hover:text-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-beige-dark hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold text-lg">Stay Updated</h4>
            <p className="text-beige-dark text-sm">
              Subscribe for exclusive deals and new arrivals.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-gold/30 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
              />
              <button className="bg-gold hover:bg-gold-dark text-black p-2 rounded transition-all">
                <FiMail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gold/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-beige-dark">
          <p>&copy; {currentYear} Lemones Store. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
