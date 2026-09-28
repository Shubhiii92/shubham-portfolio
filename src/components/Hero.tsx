import { motion } from 'motion/react';
import { Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl font-medium text-gray-300 mb-3 flex items-center gap-2">
            <span>Hi, I'm</span> <span className="text-accent font-bold">Shubham Patel</span>
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            Computer Engineering Student <span className="text-accent">|</span> <span className="text-accent">Cybersecurity</span> • <span className="text-accent">Cloud</span> • <span className="text-accent">DevSecOps</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            Third-year Computer Engineering student building practical projects across cybersecurity, cloud and software engineering.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 106, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="orange-gradient px-7 py-3.5 rounded-full font-bold text-white shadow-lg text-sm"
            >
              View Projects
            </motion.a>
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Shubham_Patel_Resume.pdf"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="glass px-7 py-3.5 rounded-full font-bold text-white flex items-center gap-2 border border-white/10 text-sm"
            >
              <Download className="w-4 h-4 text-accent" />
              <span>Download Resume</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="glass px-7 py-3.5 rounded-full font-semibold text-gray-300 hover:text-white flex items-center gap-2 border border-white/5 text-sm"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>Contact Me</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - 3D Character Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Background Glows */}
          <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute w-[600px] h-[600px] opacity-20 -z-20 blur-3xl">
            <img 
              src="https://i.ibb.co/rBc2QjY/523ca8cf-b8c4-459a-b1c4-d1642e721580.png" 
              alt="Decorative Background" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Main Abstract Visual */}
          <div className="relative z-10">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[400px] h-[400px] glass rounded-[60px] flex items-center justify-center overflow-hidden border-2 border-white/20 shadow-[0_0_50px_rgba(255,106,0,0.2)]"
            >
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Shubham"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Floating Tech Icons */}
            <TechIcon 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
              className="top-0 -left-10"
              delay={0}
            />
            <TechIcon 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
              className="bottom-10 -left-20"
              delay={1}
            />
            <TechIcon 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
              className="top-20 -right-10"
              delay={0.5}
            />
            <TechIcon 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
              className="bottom-0 -right-20"
              delay={1.5}
            />
            <TechIcon 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
              className="-bottom-16 left-1/2 -translate-x-1/2"
              delay={2}
            />

            {/* Focus Card - Real Student Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 md:-right-24 glass p-5 rounded-[28px] max-w-[280px] z-30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl border border-white/15 bg-white/10 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-glow opacity-60 rounded-t-full" />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-[11px] font-bold text-accent uppercase tracking-wider">Current Focus</span>
              </div>
              <p className="text-xs text-gray-200 mb-3 leading-relaxed font-medium">
                Cybersecurity, Cloud Architecture, DevSecOps & Practical Project Building
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">VIT, Mumbai</h4>
                  <p className="text-[10px] text-gray-400">Third Year · Batch 2024–2028</p>
                </div>
                <span className="text-sm">🛡️</span>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 border-2 border-accent/20 rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 border-2 border-white/10 rounded-full animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

function TechIcon({ src, className, delay }: { src: string; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay, duration: 0.5 }}
      className={`absolute glass p-3 rounded-2xl shadow-xl z-20 ${className}`}
    >
      <motion.img
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay }}
        src={src}
        alt="Tech Icon"
        className="w-8 h-8"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
