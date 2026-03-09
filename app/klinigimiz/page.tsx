'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle2, Heart, Shield, Sparkles } from 'lucide-react';

export default function ClinicPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
              Güzelliğin ve <br /> Sağlığın Buluşma Noktası
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Aura Estetik Kliniği, 15 yılı aşkın tecrübesiyle estetik ve medikal uygulamalarda Türkiye&apos;nin öncü kurumlarından biridir.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Modern tıbbın sunduğu en son teknolojileri, sanatsal bir bakış açısıyla birleştirerek her danışanımıza özel, doğal ve estetik sonuçlar sunuyoruz. Nişantaşı&apos;ndaki butik kliniğimizde, konforunuz ve güvenliğiniz bizim için her şeyden önce gelir.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://picsum.photos/seed/clinic-interior/1200/900"
                alt="Clinic Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-50 p-3 rounded-xl text-amber-600">
                  <Sparkles size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">Premium Hizmet</div>
                  <div className="text-xs text-stone-500">Kişiye Özel Yaklaşım</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            {
              icon: Heart,
              title: 'Hasta Odaklılık',
              desc: 'Her danışanımızın ihtiyaçlarını ve beklentilerini dinliyor, onlara en uygun çözümleri sunuyoruz.'
            },
            {
              icon: Shield,
              title: 'Güven ve Kalite',
              desc: 'Tüm uygulamalarımızda FDA onaylı cihazlar ve en yüksek kalite standartlarında ürünler kullanıyoruz.'
            },
            {
              icon: Sparkles,
              title: 'Doğal Sonuçlar',
              desc: 'Abartıdan uzak, doğal güzelliğinizi ön plana çıkaran estetik dokunuşlara inanıyoruz.'
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center space-y-6"
            >
              <div className="inline-flex p-4 rounded-2xl bg-stone-50 text-amber-600">
                <value.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">{value.title}</h3>
              <p className="text-stone-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-4">Ekibimiz</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Uzman Kadromuz</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { name: 'Dr. Selin Yılmaz', role: 'Medikal Estetik Uzmanı', img: 'https://picsum.photos/seed/doc1/400/500' },
            { name: 'Dr. Ahmet Kaya', role: 'Plastik Cerrah', img: 'https://picsum.photos/seed/doc2/400/500' },
            { name: 'Dr. Elif Demir', role: 'Dermatolog', img: 'https://picsum.photos/seed/doc3/400/500' },
            { name: 'Dr. Murat Can', role: 'Saç Ekimi Uzmanı', img: 'https://picsum.photos/seed/doc4/400/500' },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-stone-900">{member.name}</h4>
              <p className="text-sm text-stone-500 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
