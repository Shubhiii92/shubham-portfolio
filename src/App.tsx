/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import CurrentlyExploring from './components/CurrentlyExploring';
import Projects from './components/Projects';
import ExperienceAchievements from './components/ExperienceAchievements';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-primary-bg text-white selection:bg-accent selection:text-white">
      {/* Custom Cursor Glow (Desktop) */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0 hidden md:block"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="space-y-12">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <ExperienceAchievements />
        <Certifications />
        <CurrentlyExploring />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
