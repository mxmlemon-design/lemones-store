'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiPackage, FiTruck, FiShield } from 'react-icons/fi';

export default function Home() {
  const categories = [
    {
      name: 'Luxury Fashion',
      image: '👗',
      href: '/products?category=fashion',
      description: 'Premium designer collections'
    },
    {
      name: 'Premium Gadgets',
      image: '📱',
      href: '/products?category=gadgets',
      description: 'Latest tech innovations'
    },
    {
      name: 'Accessories',
      image: '⌚',
      href: '/products?category=accessories',
      description: 'Elegant finishing touches'
    },
    {
      name: 'Home Luxury',
      image: '🏠',
      href: '/products?category=home',
      description: 'Luxurious home decor'
    },
  ];

  const features = [
    { icon: FiPackage, title: 'Premium Selection', desc: 'Curated luxury products' },
    { icon: FiTruck, title: 'Fast Shipping', desc: 'Worldwide delivery' },
    { icon: FiShield, title: 'Secure Payment', desc: '100% protected transactions' },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover <span className="gradient-text">Luxury</span> Redefined
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-beige-dark max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience curated collections of premium fashion and innovative gadgets, handpicked for the modern luxury lifestyle.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/products"
                className="bg-gold hover:bg-gold-dark text-black font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Shop Now <FiArrowRight />
              </Link>
              <Link
                href="/about"
                className="border-2 border-gold text-gold hover:bg-gold/10 font-bold py-3 px-8 rounded-lg transition-all w-full sm:w-auto text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <motion.div
                className="text-9xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-emerald-dark/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="gradient-text">Lemones</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="p-6 sm:p-8 bg-white/5 backdrop-blur border border-gold-dark/20 rounded-lg hover-lift text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <feature.icon className="text-4xl text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-beige-dark text-sm sm:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Shop by <span className="gradient-text">Category</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={cat.href}>
                  <div className="group cursor-pointer bg-gradient-to-br from-emerald-dark to-wine-dark p-6 sm:p-8 rounded-lg hover-lift border border-gold-dark/20 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <span className="text-5xl sm:text-6xl group-hover:scale-125 transition-transform">
                      {cat.image}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl group-hover:text-gold transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-beige-dark hidden sm:block">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-dark to-wine-dark/50">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Join Our Luxury Community
          </h2>
          <p className="text-lg text-beige-dark">
            Subscribe to get exclusive offers, early access to new collections, and luxury lifestyle tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-beige-dark focus:outline-none focus:border-gold"
            />
            <button className="px-6 py-3 bg-gold hover:bg-gold-dark text-black font-bold rounded-lg transition-all hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
