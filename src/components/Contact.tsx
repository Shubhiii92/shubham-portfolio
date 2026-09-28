import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Github, Linkedin, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open user's email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:shubhamiit98@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[40px] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-white/10">
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Get In Touch
              </span>
            </div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Let's <span className="text-accent">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-gray-300 mb-8 max-w-md leading-relaxed"
            >
              I am always eager to collaborate on cybersecurity, cloud security, DevSecOps projects, hackathons, and technical initiatives. Feel free to reach out directly.
            </motion.p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:shubhamiit98@gmail.com"
                className="flex items-center gap-4 p-3.5 glass rounded-2xl border border-white/5 hover:border-accent/40 transition-all group"
              >
                <div className="p-2.5 bg-accent/10 rounded-xl text-accent group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                    shubhamiit98@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919284324641"
                className="flex items-center gap-4 p-3.5 glass rounded-2xl border border-white/5 hover:border-accent/40 transition-all group"
              >
                <div className="p-2.5 bg-accent/10 rounded-xl text-accent group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Phone</p>
                  <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                    +91 9284324641
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 glass rounded-2xl border border-white/5">
                <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Location</p>
                  <p className="text-sm font-semibold text-white">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Social Profiles
              </p>
              <div className="flex gap-3">
                <SocialIcon
                  icon={<Github className="w-5 h-5" />}
                  label="GitHub"
                  href="https://github.com/Shubhiii92"
                />
                <SocialIcon
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/shubham-patel-863ab6327/"
                />
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass p-8 sm:p-10 rounded-3xl border border-white/10 space-y-5"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full glass rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full glass rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Your Message</label>
              <textarea
                required
                placeholder="What would you like to discuss?"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full glass rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/10 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 106, 0, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="orange-gradient w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2.5 shadow-lg text-sm"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>

            {submitted && (
              <p className="text-xs text-accent flex items-center gap-1.5 justify-center pt-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Redirecting to your email client...</span>
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-3.5 glass rounded-2xl text-gray-300 hover:text-accent border border-white/10 hover:border-accent/40 transition-all flex items-center gap-2 text-xs font-semibold"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}
