import React from 'react';
import { motion } from 'motion/react';
import { Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[40px] p-12 md:p-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute inset-0 opacity-5 -z-20">
          <img 
            src="https://i.ibb.co/rBc2QjY/523ca8cf-b8c4-459a-b1c4-d1642e721580.png" 
            alt="Decorative Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's work <span className="text-accent">together</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-12 max-w-md leading-relaxed"
            >
              Have a project in mind? Let's build something amazing together. Reach out at <span className="text-accent">shubhamiit98@gmail.com</span> or <span className="text-accent">+91 9284324641</span>.
            </motion.p>

            <div className="flex gap-4">
              <SocialIcon icon={<Github />} href="https://github.com/Shubhiii92" />
              <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/shubham-patel-863ab6327/" />
              <SocialIcon icon={<Twitter />} href="#" />
              <SocialIcon icon={<Instagram />} href="#" />
            </div>
          </div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Name" type="text" />
              <Input placeholder="Email" type="email" />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full glass rounded-2xl p-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 106, 0, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="orange-gradient w-full py-5 rounded-2xl font-bold text-white flex items-center justify-center gap-3 shadow-lg"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Input({ placeholder, type }: { placeholder: string; type: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full glass rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
    />
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255, 106, 0, 0.2)" }}
      whileTap={{ scale: 0.9 }}
      className="p-4 glass rounded-2xl text-gray-400 hover:text-accent transition-colors"
    >
      {icon}
    </motion.a>
  );
}
