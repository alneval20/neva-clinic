'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız alındı. En kısa sürede size dönüş yapacağız.');
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6"
          >
            İletişime Geçin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600"
          >
            Sorularınız için bizimle iletişime geçebilir veya randevu talebinde bulunabilirsiniz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-stone-900">İletişim Bilgileri</h3>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Adres', content: 'Nişantaşı, Valikonağı Cd. No:123, Şişli/İstanbul' },
                  { icon: Phone, title: 'Telefon', content: '+90 (212) 123 45 67' },
                  { icon: Mail, title: 'E-posta', content: 'info@auraestetik.com' },
                  { icon: Clock, title: 'Çalışma Saatleri', content: 'Pzt - Cmt: 09:00 - 19:00' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-amber-50 p-3 rounded-xl text-amber-600 shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-1">{item.title}</div>
                      <div className="text-stone-600">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-900 p-8 rounded-3xl text-white space-y-6">
              <h4 className="text-xl font-bold">Hızlı İletişim</h4>
              <p className="text-stone-400 text-sm">WhatsApp üzerinden anında bilgi alabilirsiniz.</p>
              <a
                href="https://wa.me/905000000000"
                className="flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-2xl font-bold transition-all"
              >
                <MessageCircle size={20} />
                <span>WhatsApp&apos;tan Yazın</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-900 uppercase tracking-wider">Ad Soyad</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-900 uppercase tracking-wider">E-posta</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                    placeholder="E-posta Adresiniz"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-900 uppercase tracking-wider">Telefon</label>
                <input
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  placeholder="Telefon Numaranız"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-900 uppercase tracking-wider">Mesajınız</label>
                <textarea
                  rows={6}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                  placeholder="Size nasıl yardımcı olabiliriz?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-stone-800 transition-all flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Mesaj Gönder</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
