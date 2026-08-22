'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black via-emerald-dark/5 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="gradient-text">Luxury</span> Redefined
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-beige-dark max-w-2xl mx-auto"
            >
              Discover curated fashion and premium gadgets that elevate your lifestyle. 
              Experience luxury that doesn't compromise on style.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center pt-8"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 rounded-lg flex items-center gap-2"
                >
                  Shop Now <FiArrowRight />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gold text-gold hover:bg-gold/10 font-semibold px-8 py-4 rounded-lg"
              >
                Explore Collections
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Shop by <span className="gradient-text">Category</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fashion Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl h-80 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark to-wine-dark opacity-80 group-hover:opacity-90 transition-all" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold mb-2">Luxury Fashion</h3>
                <p className="text-beige-light mb-4">
                  Curated styles from premium designers
                </p>
                <Link
                  href="/products?category=fashion"
                  className="text-gold flex items-center gap-2 group/link"
                >
                  Explore <FiArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Gadgets Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl h-80 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-wine-dark to-black opacity-80 group-hover:opacity-90 transition-all" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold mb-2">Premium Gadgets</h3>
                <p className="text-beige-light mb-4">
                  Innovative tech for modern living
                </p>
                <Link
                  href="/products?category=gadgets"
                  className="text-gold flex items-center gap-2 group/link"
                >
                  Explore <FiArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-emerald-dark/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Quality',
                desc: 'Handpicked items from trusted suppliers worldwide',
                icon: '✨',
              },
              {
                title: 'Fast Shipping',
                desc: 'Quick delivery to your doorstep globally',
                icon: '🚚',
              },
              {
                title: 'Luxury Experience',
                desc: 'Exceptional service and exclusive collections',
                icon: '👑',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-xl glass"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-beige-dark">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join the <span className="gradient-text">Lemones</span> Club
          </h2>
          <p className="text-beige-dark mb-8">
            Subscribe for exclusive deals, new arrivals, and luxury lifestyle tips
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
            />
            <button className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
