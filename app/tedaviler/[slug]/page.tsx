'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { treatments } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function TreatmentDetail({ params }: PageProps) {
  const { slug } = use(params);
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const otherTreatments = treatments.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <Link
          href="/tedaviler"
          className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-amber-600 transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" /> Tedavilere Dön
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                {treatment.title}
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed italic">
                {treatment.description}
              </p>
            </div>

            <div className="prose prose-stone max-w-none">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Tedavi Hakkında</h3>
              <p className="text-stone-700 leading-relaxed text-lg">
                {treatment.details}
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-3xl space-y-6">
              <h4 className="text-xl font-bold text-amber-700">Neden Bu Tedaviyi Seçmelisiniz?</h4>
              <ul className="space-y-4">
                {[
                  'Kısa sürede gözle görülür sonuçlar',
                  'Ağrısız ve konforlu uygulama süreci',
                  'Kalıcı ve doğal görünüm',
                  'Uzman doktor kontrolünde uygulama'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-stone-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/iletisim"
                className="flex-1 bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-stone-800 transition-all flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} /> Randevu Al
              </Link>
              <a
                href="https://wa.me/905000000000"
                className="flex-1 bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-amber-600 transition-all flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={20} /> WhatsApp Bilgi
              </a>
            </div>
          </motion.div>
        </div>

        {/* Other Treatments */}
        <div className="mt-32">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12">Diğer Tedavilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherTreatments.map((t) => (
              <Link key={t.id} href={`/tedaviler/${t.slug}`} className="group">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-500 transition-colors">
                  {t.title}
                </h3>
                <p className="text-sm text-stone-500 mt-2 line-clamp-2">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
