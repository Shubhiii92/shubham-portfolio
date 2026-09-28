import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-accent">Education</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Academic foundation in Computer Engineering, computer science principles, and core systems.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-[36px] p-8 md:p-12 border border-white/10 hover:border-accent/30 transition-all shadow-2xl overflow-hidden group"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-accent/15 transition-all" />

          {/* Top Row: Degree & Status */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-accent/15 rounded-2xl border border-accent/30 text-accent flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    B.Tech — Computer Engineering
                  </h3>
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-accent/20 text-accent border border-accent/40 animate-pulse">
                    Currently: Third Year
                  </span>
                </div>
                <h4 className="text-lg text-gray-300 font-medium mb-3">
                  Vidyalankar Institute of Technology, Mumbai
                </h4>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    2024 – 2028 (Expected)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    Mumbai, Maharashtra
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-accent" />
                    Current CGPA: <strong className="text-white font-semibold">9.23</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10 mb-8" />

          {/* Core Focus & Key Coursework */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-accent" />
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                Core Coursework & Foundational Focus
              </h4>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Data Structures & Algorithms',
                'Computer Networks',
                'Operating Systems',
                'Database Management Systems',
                'Object-Oriented Programming (Java/C++)',
                'Information & Network Security',
                'Software Engineering Principles',
                'Cloud Computing Concepts',
              ].map((course) => (
                <span
                  key={course}
                  className="text-xs px-3.5 py-1.5 glass rounded-xl text-gray-300 border border-white/5 hover:border-accent/40 hover:text-white transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
