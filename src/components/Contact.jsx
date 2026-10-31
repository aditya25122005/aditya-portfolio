import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Check, Copy } from 'lucide-react';

const Contact = () => {
  const [copiedField, setCopiedField] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Dynamic mailto trigger fallback (Or connect Web3Forms / Formspree API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
      window.open(`mailto:adityamah25@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-sky-400 font-mono text-xs uppercase tracking-widest px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full mb-3">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Connect</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Direct Info */}
        <div className="space-y-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Reach Out Directly</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Open for SDE internships, full-stack web applications, and technical collaboration. Feel free to connect via email, phone, or direct message!
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Email item with copy logic */}
            <div 
              onClick={() => handleCopy('adityamah25@gmail.com', 'email')}
              className="flex items-center justify-between p-4 bg-slate-900/60 rounded-2xl border border-slate-700/60 hover:border-sky-500/40 transition cursor-pointer group"
            >
              <div className="flex items-center gap-3 text-slate-200">
                <div className="p-2.5 bg-sky-500/10 rounded-xl border border-sky-500/20 text-sky-400 group-hover:scale-105 transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase">Email</p>
                  <p className="text-sm font-semibold text-white">adityamah25@gmail.com</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-sky-400 p-2 rounded-lg transition">
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone item with copy logic */}
            <div 
              onClick={() => handleCopy('+919720711715', 'phone')}
              className="flex items-center justify-between p-4 bg-slate-900/60 rounded-2xl border border-slate-700/60 hover:border-sky-500/40 transition cursor-pointer group"
            >
              <div className="flex items-center gap-3 text-slate-200">
                <div className="p-2.5 bg-sky-500/10 rounded-xl border border-sky-500/20 text-sky-400 group-hover:scale-105 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-white">+91 9720711715</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-sky-400 p-2 rounded-lg transition">
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 bg-slate-900/60 rounded-2xl border border-slate-700/60">
              <div className="p-2.5 bg-sky-500/10 rounded-xl border border-sky-500/20 text-sky-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-mono uppercase">Location</p>
                <p className="text-sm font-semibold text-white">Mathura / Kasganj, Uttar Pradesh, India</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form 
          onSubmit={handleSubmit}
          className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 space-y-5 shadow-xl"
        >
          <div>
            <label className="text-xs text-slate-300 font-semibold block mb-2">Your Name</label>
            <input 
              type="text" 
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              placeholder="Aditya Maheshwari" 
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 transition placeholder:text-slate-500" 
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 font-semibold block mb-2">Your Email</label>
            <input 
              type="email" 
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              placeholder="name@company.com" 
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 transition placeholder:text-slate-500" 
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 font-semibold block mb-2">Message</label>
            <textarea 
              rows="4" 
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Hi Aditya, I came across your portfolio and would like to discuss..." 
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 transition placeholder:text-slate-500 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : submitted ? (
              <span className="flex items-center gap-2 text-emerald-300"><Check className="w-4 h-4" /> Message Prepared!</span>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Message
              </>
            )}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;