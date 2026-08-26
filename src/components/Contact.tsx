import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const email = 'hello@delta-film.com';
  const phone = '+84 86 265 9753';
  const cleanPhoneDigits = phone.replace(/[^0-9]/g, '');

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-[#F9F9F7] py-16 sm:py-24 border-b border-[#1A1A1A]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8">
        
        {/* Typographic Statement */}
        <div className="pb-8 sm:pb-14 border-b border-[#1A1A1A]">
          <h2 className="text-[38px] sm:text-[68px] lg:text-[96px] font-light tracking-tighter text-[#1A1A1A] leading-[0.92] uppercase select-none">
            LET’S MAKE <br className="hidden sm:inline" />
            SOMETHING.
          </h2>
        </div>

        {/* Contact Links & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pt-10 sm:pt-14">
          
          {/* Email & Phone */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              
              {/* Direct Email */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#1A1A1A]/10 pb-6 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-[22px] sm:text-[32px] font-medium text-[#1A1A1A] hover:text-[#888888] transition-colors tracking-tight font-sans"
                  >
                    {email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[10px] uppercase tracking-widest text-[#1A1A1A] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY EMAIL'}</span>
                  </button>
                </div>
              </div>

              {/* Direct Phone / WhatsApp */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#1A1A1A]/10 pb-6 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                    PHONE & WHATSAPP
                  </span>
                  <a
                    href={`https://wa.me/${cleanPhoneDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[20px] sm:text-[28px] font-medium text-[#1A1A1A] hover:text-[#888888] transition-colors tracking-tight font-sans"
                  >
                    {phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyPhone}
                    className="px-3 py-1.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[10px] uppercase tracking-widest text-[#1A1A1A] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'COPIED' : 'COPY NUMBER'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Studio Brand Stamp */}
          <div className="lg:col-span-4 flex flex-col justify-end border-t lg:border-t-0 lg:border-l border-[#1A1A1A]/10 lg:pl-10 pt-6 lg:pt-0">
            <h3 className="text-[28px] sm:text-[34px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] leading-none">
              DELTA FILM
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};
