'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(0);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Fashion', href: '/products?category=fashion' },
    { label: 'Gadgets', href: '/products?category=gadgets' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 glass border-b border-gold-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              ✨ Lemones
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="hidden sm:flex text-xl hover:text-gold"
            >
              <FiSearch />
            </motion.button>

            <Link href="/cart" className="relative">
              <motion.div whileHover={{ scale: 1.1 }} className="text-xl">
                <FiShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-wine text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </motion.div>
            </Link>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-xl hover:text-gold"
            >
              <FiUser />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 hover:bg-gold/10 rounded"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
