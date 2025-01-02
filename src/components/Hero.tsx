import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Crafting Digital
              <span className="block text-blue-600">Experiences</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Full-stack developer specializing in building exceptional digital experiences.
              Let's turn your ideas into reality.
            </p>
            <div className="flex gap-4">
              <a href='#projects'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View Projects
                </motion.button>
              </a>
              <a href='#contact'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Contact Me
                </motion.button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  borderRadius: ["25% 75% 75% 25% / 25% 25% 75% 75%", "75% 25% 25% 75% / 75% 75% 25% 25%"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
              />
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800"
                alt="Developer"
                className="absolute inset-4 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}