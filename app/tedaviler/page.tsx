'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';
import { treatments } from '@/lib/data';

export default function TreatmentsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6"
          >
            Tedavilerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600 leading-relaxed"
          >
            Size en uygun estetik ve medikal çözümleri keşfedin. Uzman kadromuz ve modern teknolojilerimizle her zaman yanınızdayız.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, i) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{treatment.title}</h3>
                <p className="text-stone-600 text-sm mb-8 leading-relaxed flex-grow">
                  {treatment.description}
                </p>
                <Link
                  href={`/tedaviler/${treatment.slug}`}
                  className="inline-flex items-center justify-center w-full bg-stone-50 text-stone-900 py-4 rounded-2xl font-bold text-sm hover:bg-amber-500 hover:text-white transition-all group-hover:shadow-md"
                >
                  Detayları Gör <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
