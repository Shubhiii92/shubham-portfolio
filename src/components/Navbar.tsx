import { motion, AnimatePresence } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-5 sm:px-7 py-3 rounded-full transition-all duration-300 max-w-6xl w-full mx-auto",
            scrolled ? "glass shadow-2xl border border-white/10 backdrop-blur-xl" : "bg-primary-bg/60 border border-white/5 backdrop-blur-md"
          )}
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            className="text-sm sm:text-base font-bold text-white flex items-center gap-2 group flex-shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
            <span>Shubham<span className="text-accent">.dev</span></span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={cn(
                  "text-xs font-semibold transition-colors relative py-1",
                  active === item.name ? "text-accent" : "text-gray-400 hover:text-white"
                )}
              >
                {item.name}
                {active === item.name && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Actions: Resume Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Shubham_Patel_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 text-xs font-bold orange-gradient text-white px-4 py-2 rounded-full shadow-md hover:shadow-accent/30 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full glass text-gray-300 hover:text-white border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 glass rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-2xl lg:hidden flex flex-col gap-3"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "py-2.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-between",
                  active === item.name
                    ? "bg-accent/15 text-accent border border-accent/25"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                )}
              >
                <span>{item.name}</span>
                {active === item.name && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-white/10">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Shubham_Patel_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full orange-gradient text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
