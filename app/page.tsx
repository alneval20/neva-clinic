'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Award } from 'lucide-react';
import { treatments } from '@/lib/data';

const heroImages = [
  {
    url: 'https://picsum.photos/seed/hair-transplant-clinic/1920/1080',
    alt: 'Saç Ekimi Operasyonu',
  },
  {
    url: 'https://picsum.photos/seed/laser-hair-removal-machine/1920/1080',
    alt: 'Lazer Epilasyon Cihazı',
  },
  {
    url: 'https://picsum.photos/seed/botox-injection/1920/1080',
    alt: 'Botoks İşlemi',
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-[600px] h-[600px] border border-amber-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/flower-pattern/1920/1080')] bg-no-repeat bg-left-top opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-tight mb-8">
              Vücudunuzu & <br />
              Ruhunuzu <br />
              <span className="text-amber-500 tracking-wider">YENİLEYİN</span>
            </h1>
            <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-lg font-light">
              Eşsiz seyahat destinasyonlarıyla estetik, saç ekimi tekliflerimizin keyfini çıkarın. Size özel fırsatlarımız ve VIP hizmetlerimizle iyi eğlenceler. Estetik veya Saç ekimi bakım planınızı seçin ve güvenle yeniden gülümsemeye başlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/iletisim"
                className="bg-white text-black px-10 py-4 rounded-sm font-bold text-sm tracking-widest hover:bg-amber-500 hover:text-white transition-all group flex items-center justify-center"
              >
                TEKLİF ALIN! <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative h-[600px] md:h-[800px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
            <Image
              src="https://picsum.photos/seed/aesthetic-model/1200/1600"
              alt="Aesthetic Model"
              fill
              className="object-cover object-center rounded-bl-[100px]"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Users, label: 'Mutlu Danışan', value: '10k+' },
              { icon: Award, label: 'Yıllık Deneyim', value: '15+' },
              { icon: Star, label: 'Başarılı Operasyon', value: '25k+' },
              { icon: CheckCircle2, label: 'Uzman Doktor', value: '12' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex p-4 rounded-full bg-white/5 text-amber-500 mb-2 border border-white/5">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs text-white/40 font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-4">HİZMETLERİMİZ</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Popüler Tedavilerimiz</h3>
            </div>
            <Link href="/tedaviler" className="text-white/70 font-bold text-xs tracking-widest flex items-center hover:text-amber-500 transition-colors uppercase">
              TÜMÜNÜ GÖR <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {treatments.slice(0, 3).map((treatment, i) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-stone-900 rounded-sm overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{treatment.title}</h4>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed font-light">
                    {treatment.description}
                  </p>
                  <Link
                    href={`/tedaviler/${treatment.slug}`}
                    className="inline-flex items-center text-xs font-bold tracking-widest text-amber-500 hover:text-white transition-colors uppercase"
                  >
                    DETAYLI BİLGİ <ArrowRight className="ml-2" size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-stone-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-sm overflow-hidden aspect-[4/5] border border-white/10">
                <Image
                  src="https://picsum.photos/seed/aesthetic-clinic-interior/800/1000"
                  alt="IRA Aesthetic Clinic Interior"
                  fill
                  className="object-cover brightness-75"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-amber-500/20 rounded-sm -z-0"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 border border-white/10 rounded-full -z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-4">BİZ KİMİZ?</h2>
                <h3 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                  Güzelliğinizi Uzman <br />Ellere Emanet Edin
                </h3>
              </div>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                IRA Aesthetic Clinic, İstanbul&apos;un kalbinde, en yüksek tıbbi standartlarda hizmet veren butik bir estetik merkezidir. Amacımız, her danışanımızın doğal güzelliğini ön plana çıkararak özgüvenini artırmaktır.
              </p>
              <div className="space-y-6">
                {[
                  'Kişiye Özel Tedavi Planları',
                  'Son Teknoloji FDA Onaylı Cihazlar',
                  'Steril ve Konforlu Klinik Ortamı',
                  'Deneyimli ve Uzman Medikal Kadro',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="bg-amber-500/10 p-1 rounded-full">
                      <CheckCircle2 className="text-amber-500" size={18} />
                    </div>
                    <span className="text-white/80 font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/klinigimiz"
                className="inline-block bg-white text-black px-10 py-4 rounded-sm font-bold text-sm tracking-widest hover:bg-amber-500 hover:text-white transition-all uppercase"
              >
                DAHA FAZLA BİLGİ
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight"
            >
              Değişime Bugün <br /><span className="text-amber-500">Başlayın</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/50 text-xl font-light leading-relaxed"
            >
              Ücretsiz ön görüşme için hemen randevunuzu oluşturun ve size en uygun tedaviyi birlikte planlayalım.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-6 pt-6"
            >
              <Link
                href="/iletisim"
                className="bg-white text-black px-12 py-5 rounded-sm font-bold text-sm tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-2xl uppercase"
              >
                RANDEVU AL
              </Link>
              <a
                href="https://wa.me/905000000000"
                className="bg-transparent text-white border border-white/20 px-12 py-5 rounded-sm font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all uppercase"
              >
                WHATSAPP&apos;TAN YAZ
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
