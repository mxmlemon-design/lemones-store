'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">✨ Lemones</h3>
            <p className="text-beige-dark text-sm">
              Luxury fashion and premium gadgets curated for the modern lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-beige-dark">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li><Link href="/products" className="hover:text-gold">Shop</Link></li>
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-beige-dark">
              <li><Link href="#" className="hover:text-gold">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-gold">Returns</Link></li>
              <li><Link href="#" className="hover:text-gold">FAQ</Link></li>
              <li><Link href="#" className="hover:text-gold">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-beige-dark">
              <li className="flex items-center gap-2">
                <FiMail /> support@lemones.com
              </li>
              <li className="flex items-center gap-2">
                <FiPhone /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin /> Luxury District, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gold-dark/20 mt-12 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-beige-dark text-sm">
              © 2024 Lemones. All rights reserved.
            </p>
            <div className="flex gap-4">
              <button className="text-beige-dark hover:text-gold text-lg">
                <FaInstagram />
              </button>
              <button className="text-beige-dark hover:text-gold text-lg">
                <FaFacebook />
              </button>
              <button className="text-beige-dark hover:text-gold text-lg">
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
