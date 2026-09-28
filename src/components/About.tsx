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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Crafting <span className="text-accent">Digital</span> Experiences
          </h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            I am a <span className="text-accent">Computer Science Engineering</span> student at Vidyalankar Institute of Technology with a <span className="text-accent">9.23 CGPA</span>. Beyond coding, I possess strong leadership skills and a natural inclination to take on responsibilities, ensuring projects are delivered with excellence and team cohesion.
          </p>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            I am an active contributor to my university community, serving as a <span className="text-accent">University Team Player</span> for the Kabaddi Team and a <span className="text-accent">Sports Council Extendee</span>, where I help organize inter-college sports events.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-10">
            <motion.div
              whileHover={{ x: 5 }}
              className="p-4 glass rounded-2xl border border-white/5"
            >
              <h4 className="text-accent font-bold mb-2 flex items-center gap-2">
                <span className="text-xl">🌟</span> Personality
              </h4>
              <p className="text-sm text-gray-400">Creative, Responsible, Team Player</p>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="p-4 glass rounded-2xl border border-white/5"
            >
              <h4 className="text-accent font-bold mb-2 flex items-center gap-2">
                <span className="text-xl">🚀</span> Strengths
              </h4>
              <p className="text-sm text-gray-500">Leadership, AI/ML, Problem solving</p>
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
