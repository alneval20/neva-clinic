'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Saç Ekimi Sonrası Dikkat Edilmesi Gerekenler',
    excerpt: 'Operasyon sonrası ilk 10 gün iyileşme süreci için kritik öneme sahiptir. İşte bilmeniz gerekenler...',
    date: '15 Mart 2024',
    author: 'Dr. Murat Can',
    image: 'https://picsum.photos/seed/blog1/800/600',
    category: 'Saç Ekimi'
  },
  {
    id: '2',
    title: 'Botoks mu Dolgu mu? Hangisi Size Uygun?',
    excerpt: 'Kırışıklıklar ve hacim kayıpları için hangi uygulamanın daha etkili olduğunu uzmanımız anlatıyor.',
    date: '10 Mart 2024',
    author: 'Dr. Selin Yılmaz',
    image: 'https://picsum.photos/seed/blog2/800/600',
    category: 'Medikal Estetik'
  },
  {
    id: '3',
    title: 'Ozon Terapinin Bağışıklık Sistemine Etkileri',
    excerpt: 'Vücut direncini artırmak ve kronik yorgunlukla savaşmak için ozon terapi nasıl bir çözüm sunuyor?',
    date: '5 Mart 2024',
    author: 'Dr. Elif Demir',
    image: 'https://picsum.photos/seed/blog3/800/600',
    category: 'Sağlıklı Yaşam'
  },
  {
    id: '4',
    title: 'Lazer Epilasyonda En İyi Sonuç İçin İpuçları',
    excerpt: 'Seans aralıkları, cilt bakımı ve dikkat edilmesi gereken noktalarla pürüzsüz bir cilt mümkün.',
    date: '1 Mart 2024',
    author: 'Aura Klinik',
    image: 'https://picsum.photos/seed/blog4/800/600',
    category: 'Cilt Bakımı'
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-6"
          >
            Blog & Haberler
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600"
          >
            Estetik dünyasındaki yenilikler, tedavi rehberleri ve uzman görüşleri için blog sayfamızı takip edin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-zinc-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-6 text-sm text-zinc-500 font-medium">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-serif font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors pt-2"
                >
                  Devamını Oku <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
