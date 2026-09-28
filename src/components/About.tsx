import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Background Glows */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />
          
          <div className="relative z-10 overflow-hidden rounded-[40px] border border-white/10 glass shadow-2xl">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src={`${import.meta.env.BASE_URL}shubham-suit.jpg`}
              alt="Shubham Patel"
              className="w-full h-full object-cover object-top aspect-[4/5] brightness-95 group-hover:brightness-100 transition-all duration-700"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-60" />
          </div>

          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl z-20 shadow-2xl border border-accent/20">
            <h4 className="text-3xl font-bold text-accent">9.23</h4>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">B.Tech CGPA</p>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-1/4 -left-8 w-16 h-16 glass rounded-2xl rotate-12 animate-bounce" />
          <div className="absolute bottom-1/4 -right-8 w-12 h-12 glass rounded-full -rotate-12 animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-5 leading-relaxed">
            I am a third-year <span className="text-accent font-semibold">Computer Engineering student</span> at Vidyalankar Institute of Technology, Mumbai (2024–2028) with a strong foundation in computer science and a <span className="text-accent font-semibold">9.23 CGPA</span>. My primary technical interests are focused on <span className="text-white font-medium">cybersecurity, cloud security, DevSecOps, and software engineering</span>.
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
            I learn through practical projects, hands-on experimentation, and building functional systems. From developing DeFi transaction anomaly detection models to experimenting with containerized environments and network security tools, I prioritize understanding system internals, secure architecture, and clean implementation.
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
            Beyond academics, I am an active contributor to student communities — participating in the <span className="text-accent">AWS Student Builders Group (VIT)</span>, competing as a <span className="text-white font-medium">University Kabaddi Team player</span>, and serving as a <span className="text-white font-medium">Sports Council Extendee</span> organizing inter-college events.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <motion.div
              whileHover={{ y: -3 }}
              className="p-4 glass rounded-2xl border border-white/5"
            >
              <h4 className="text-accent font-bold mb-1.5 flex items-center gap-2 text-sm">
                <span>🛡️</span> Technical Mindset
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">Curious, hands-on, focused on secure architecture and practical problem solving.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              className="p-4 glass rounded-2xl border border-white/5"
            >
              <h4 className="text-accent font-bold mb-1.5 flex items-center gap-2 text-sm">
                <span>⚡</span> Collaboration & Drive
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">Disciplined team player, hackathon lead, and active technical community member.</p>
            </motion.div>
          </div>

          <motion.a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Shubham_Patel_Resume.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 glass px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <Download className="w-5 h-5 text-accent" />
            <span>Download Full Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
