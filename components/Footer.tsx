import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white/50 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-start">
          {/* Brand */}
          <div className="space-y-8 col-span-1 md:col-span-1">
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
            <p className="text-sm leading-relaxed font-light">
              Modern estetik çözümleri ve uzman kadromuzla kendinizi yenilenmiş hissetmeniz için buradayız.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/30 hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/30 hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/30 hover:text-amber-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Hızlı Bağlantılar</h4>
            <ul className="grid grid-cols-1 gap-4 text-sm font-light">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Anasayfa</Link></li>
              <li><Link href="/klinigimiz" className="hover:text-amber-500 transition-colors">Kliniğimiz</Link></li>
              <li><Link href="/tedaviler" className="hover:text-amber-500 transition-colors">Tedaviler</Link></li>
              <li><Link href="/iletisim" className="hover:text-amber-500 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Tedaviler</h4>
            <ul className="grid grid-cols-1 gap-4 text-sm font-light">
              <li><Link href="/tedaviler" className="hover:text-amber-500 transition-colors">Saç Ekimi</Link></li>
              <li><Link href="/tedaviler" className="hover:text-amber-500 transition-colors">Lazer Epilasyon</Link></li>
              <li><Link href="/tedaviler" className="hover:text-amber-500 transition-colors">Medikal Estetik</Link></li>
              <li><Link href="/tedaviler" className="hover:text-amber-500 transition-colors">Cilt Bakımı</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">İletişim</h4>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-amber-500 shrink-0" />
                <span className="leading-relaxed">Nişantaşı, Valikonağı Cd. No:123, Şişli/İstanbul</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-amber-500 shrink-0" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-amber-500 shrink-0" />
                <span>info@iraclinics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 space-y-6 md:space-y-0">
          <p>© 2024 IRA Aesthetic Clinic. Tüm hakları saklıdır.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
