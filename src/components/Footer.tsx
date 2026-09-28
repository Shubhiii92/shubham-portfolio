import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-bold tracking-tighter"
        >
          shubham<span className="text-accent">.</span>
        </motion.div>
        
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="https://github.com/ShubhCoding13" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <p className="text-xs text-gray-600">
          © 2026 Shubham. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
