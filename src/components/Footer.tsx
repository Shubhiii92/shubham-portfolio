import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-primary-bg/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>Shubham Patel</span>
          <span className="text-gray-500 font-normal text-xs ml-2">| Third Year Computer Engineering</span>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400 font-medium">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
          <a href="#resume" className="hover:text-white transition-colors">Resume</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="https://github.com/Shubhiii92" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Shubham Patel. Built with Vite, React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
