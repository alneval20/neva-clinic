'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppButton = () => {
  const phoneNumber = '905000000000'; // Örnek numara
  const message = 'Merhaba, tedavi seçenekleri hakkında bilgi almak istiyorum.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-rose-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-rose-600 transition-colors"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-stone-900 px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Bize Yazın
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
