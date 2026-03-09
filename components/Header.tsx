'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ANASAYFA', href: '/' },
    { name: 'KLİNİĞİMİZ', href: '/klinigimiz' },
    { name: 'TEDAVİLER', href: '/tedaviler' },
    { name: 'LOKASYON', href: '/iletisim' },
    { name: 'BLOG', href: '/blog' },
    { name: 'İLETİŞİM', href: '/iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tighter text-amber-500 leading-none">
                ira
              </span>
              <span className="text-[10px] tracking-[0.2em] text-white/70 font-medium leading-none mt-1">
                AESTHETIC CLINIC
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-white/10 p-2 rounded-full">
                <Phone size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">+90 539 411 91 93</span>
                <span className="text-[10px] text-white/50 text-right">Destek Hattı</span>
              </div>
            </div>
            <Link
              href="/iletisim"
              className="bg-white text-black px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-amber-500 hover:text-white transition-all flex items-center group"
            >
              TEKLİF ALIN! <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="hidden md:block py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <nav className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-widest transition-colors hover:text-amber-500 ${
                  pathname === link.href ? 'text-amber-500' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <span className="text-xs font-bold text-white cursor-pointer hover:text-amber-500 transition-colors">EN</span>
            <div className="flex items-center space-x-4 text-white/70">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-white/5 ${
                    pathname === link.href ? 'text-amber-600' : 'text-white/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  href="/iletisim"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-white text-black px-5 py-3 rounded-sm text-base font-bold"
                >
                  TEKLİF ALIN!
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
