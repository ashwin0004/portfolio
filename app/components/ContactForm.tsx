"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { portfolioData } from "../data/portfolio";

export default function ContactForm() {
  const { form, footerImage, status: systemStatus } = portfolioData.contact;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('sent');
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="lg:col-span-7 flex items-center justify-center min-h-[500px]">
        <div className="text-center glass-pill bg-surface-container/60 p-12 rounded-3xl border border-secondary/20 shadow-2xl animate-in fade-in zoom-in duration-500 w-full">
          <span className="material-symbols-outlined text-secondary text-6xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Transmission Confirmed</h2>
          <p className="text-on-surface-variant max-w-sm mx-auto leading-relaxed">
            Your message has been successfully encrypted and sent. I&apos;ll get back to you across the digital void as soon as possible.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-10 text-primary font-bold hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-7 flex flex-col gap-12">
      <div className="relative">
        <form 
          onSubmit={handleSubmit}
          className="relative glass-card bg-surface-container/80 p-10 md:p-16 rounded-[40px] border border-outline-variant/10 shadow-3xl overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16">
            {/* Name Input */}
            <div className="relative">
              <label htmlFor="name" className="text-[10px] font-black tracking-[0.3em] uppercase text-on-surface-variant/50 mb-3 block">
                {form.labels.name}
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-outline-variant/30 py-4 focus:border-secondary transition-all outline-hidden text-xl font-medium text-on-surface"
                id="name"
                name="name"
                required
                disabled={status === 'sending'}
                type="text"
              />
            </div>
            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="text-[10px] font-black tracking-[0.3em] uppercase text-on-surface-variant/50 mb-3 block">
                {form.labels.email}
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-outline-variant/30 py-4 focus:border-secondary transition-all outline-hidden text-xl font-medium text-on-surface"
                id="email"
                name="email"
                required
                disabled={status === 'sending'}
                type="email"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="relative mb-20">
            <label htmlFor="message" className="text-[10px] font-black tracking-[0.3em] uppercase text-on-surface-variant/50 mb-3 block">
              {form.labels.message}
            </label>
            <textarea
              className="w-full bg-transparent border-b-2 border-outline-variant/30 py-4 focus:border-secondary transition-all outline-hidden text-xl font-medium text-on-surface resize-none min-h-[120px]"
              id="message"
              name="message"
              required
              disabled={status === 'sending'}
              rows={3}
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/40 leading-relaxed max-w-[280px]">
              {form.legal}
            </p>
            <button
              className={`group relative py-6 px-12 ${status === 'sending' ? 'bg-surface-container-highest' : 'bg-primary'} rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.3)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
              type="submit"
              disabled={status === 'sending'}
            >
              <div className="flex items-center gap-4 text-on-primary">
                <span className="font-extrabold tracking-tighter text-xl uppercase">
                  {status === 'sending' ? 'TRANSMITTING...' : form.button.split(' ')[0] + ' ' + form.button.split(' ')[1]}
                </span>
                <span className={`material-symbols-outlined text-2xl ${status === 'sending' ? 'animate-spin' : 'group-hover:translate-x-1'} transition-transform`}>
                  {status === 'sending' ? 'sync' : 'arrow_forward'}
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>

      {/* System Status Blueprint Card */}
      <div className="relative rounded-[32px] overflow-hidden h-56 border border-outline-variant/15 group">
        <Image
          alt="System Blueprint Background"
          className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
          src={footerImage}
          fill
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-r from-surface-container via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-8 flex flex-col gap-1">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-on-surface-variant/60">Current Protocol</span>
          <span className="text-sm font-bold tracking-[0.25em] uppercase text-primary drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]">
            {systemStatus}
          </span>
        </div>
        
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-20"></div>
      </div>
    </div>
  );
}
