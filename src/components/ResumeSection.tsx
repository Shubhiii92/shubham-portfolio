import { motion } from 'motion/react';
import { Download, FileText, CheckCircle2, Eye } from 'lucide-react';

export default function ResumeSection() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="resume" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[36px] p-8 md:p-14 border border-white/10 relative overflow-hidden shadow-2xl">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Ready to Explore My <span className="text-accent">Full Resume?</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A comprehensive overview of my academic record at Vidyalankar Institute of Technology (9.23 CGPA), hands-on cybersecurity and cloud projects, and extracurricular student leadership.
          </motion.p>

          {/* Resume Snapshot Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left mb-10">
            <div className="p-4 glass rounded-2xl border border-white/5">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">Education</span>
              <p className="text-xs text-white font-semibold">B.Tech Computer Engg</p>
              <p className="text-[11px] text-gray-400">VIT Mumbai · 9.23 CGPA</p>
            </div>
            <div className="p-4 glass rounded-2xl border border-white/5">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">Security & Cloud</span>
              <p className="text-xs text-white font-semibold">DevSecOps & AWS</p>
              <p className="text-[11px] text-gray-400">Docker, Linux, Wireshark</p>
            </div>
            <div className="p-4 glass rounded-2xl border border-white/5">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">Engineering</span>
              <p className="text-xs text-white font-semibold">Java, Python, Web</p>
              <p className="text-[11px] text-gray-400">FastAPI, React, Tailwind</p>
            </div>
            <div className="p-4 glass rounded-2xl border border-white/5">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">Activities</span>
              <p className="text-xs text-white font-semibold">AWS Student Builders</p>
              <p className="text-[11px] text-gray-400">Hackathon Lead, Sports</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={resumeUrl}
              download="Shubham_Patel_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 106, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="orange-gradient px-8 py-4 rounded-full font-bold text-white shadow-xl flex items-center gap-3 text-sm sm:text-base"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume (PDF)</span>
            </motion.a>

            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-full font-bold text-white flex items-center gap-2.5 border border-white/10 text-sm sm:text-base"
            >
              <Eye className="w-5 h-5 text-accent" />
              <span>Preview in Browser</span>
            </motion.a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>Updated format directly downloadable from <code className="text-gray-400">public/resume.pdf</code></span>
          </div>
        </div>
      </div>
    </section>
  );
}
