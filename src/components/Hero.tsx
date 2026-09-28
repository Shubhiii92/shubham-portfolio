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
          <h2 className="text-xl font-medium text-gray-400 mb-2">
            Hey, I am <span className="text-accent">Shubham</span>
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Web developer <span className="text-accent">&</span> Leader
          </h1>
          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            Computer Science Engineering student with strong fundamentals in data structures, backend development, and software engineering principles. Seeking an entry-level Software Engineer role to build scalable solutions.
          </p>
          
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 106, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="orange-gradient px-8 py-4 rounded-full font-bold text-white shadow-lg"
            >
              Hire me
            </motion.a>
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Shubham_Patel_Resume.pdf"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-full font-bold text-white flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Resume</span>
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

            {/* Testimonial Card - Moved to Right with Liquid Glass Effect */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-10 -right-20 md:-right-32 glass p-6 rounded-[32px] max-w-[280px] z-30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl border border-white/20 bg-white/10 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-glow opacity-50" />
              <p className="text-xs text-gray-200 italic mb-4 leading-relaxed font-medium">
                "Shubham's ability to blend futuristic aesthetics with clean code is truly exceptional. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://picsum.photos/seed/caroline/100/100"
                  alt="Caroline Abbott"
                  className="w-8 h-8 rounded-full object-cover border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">Caroline Abbott</h4>
                  <p className="text-[10px] text-gray-400">Business Owner</p>
                </div>
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
