import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          𝙇𝙖𝙫𝙞𝙨𝙝 𝙂𝙚𝙝𝙡𝙤𝙙
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {[
            { Icon: Github, href: 'https://github.com/lavi9966' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/lavish-gehlod-340207237/' },
            { Icon: Mail, href: 'mailto:gehlodlavish@gmail.com' }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}