import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Connect', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300",
        scrolled ? "glass shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            className={cn(
              "text-sm font-medium transition-colors relative",
              active === item.name ? "text-accent" : "text-gray-400 hover:text-white"
            )}
          >
            {item.name}
            {active === item.name && (
              <motion.div
                layoutId="nav-active"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
              />
            )}
          </a>
        ))}
      </div>
      <div className="h-4 w-px bg-white/20" />
      <motion.a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="Shubham_Patel_Resume.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-xs font-semibold glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Download Resume</span>
      </motion.a>
    </motion.nav>
  );
}
