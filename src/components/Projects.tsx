import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, CheckCircle, Shield, Bot, Cloud, Gamepad2 } from 'lucide-react';

interface Project {
  title: string;
  badge: string;
  icon: ReactNode;
  description: string;
  technologies: string[];
  highlights: string[];
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'ChainGuard — DeFi Anomaly Detection',
    badge: 'Hackathon Project',
    icon: <Shield className="w-5 h-5 text-accent" />,
    description: 'An AI/ML-driven DeFi transaction anomaly detection prototype developed during the SPIT 24-Hour Hackathon to evaluate on-chain behavior and assign risk scores to suspicious activities.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'scikit-learn',
      'Random Forest',
      'Isolation Forest',
      'Solidity',
      'Web3',
      'Sepolia',
    ],
    highlights: [
      'Trained Random Forest and Isolation Forest models to score transaction anomalies.',
      'Integrated with Sepolia testnet using Web3 and Solidity smart contracts.',
      'Developed interactive React frontend communicating with FastAPI backend endpoints.',
      'Built and evaluated collaboratively within a 24-hour hackathon environment.',
    ],
    github: 'https://github.com/Shubhiii92/ChainGuard',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Agent Raksha — Automated Security Assistant',
    badge: 'Security Automation',
    icon: <Bot className="w-5 h-5 text-accent" />,
    description: 'An automated security assistant project designed to assist in telemetry inspection, threat signal classification, and guided remediation suggestions for detected vulnerabilities.',
    technologies: [
      'Python',
      'AI/ML',
      'Security Automation',
      'REST APIs',
      'JSON',
      'Vulnerability Assessment',
    ],
    highlights: [
      'Automated log and telemetry analysis to detect anomalous patterns and signs of compromise.',
      'Context-aware rule evaluation providing step-by-step security remediation guidance.',
      'Designed for modular integration into DevSecOps workflows and auditing scripts.',
    ],
    github: 'https://github.com/Shubhiii92',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Aegis — Cloud Security & Threat Intelligence',
    badge: 'Cloud & DevSecOps',
    icon: <Cloud className="w-5 h-5 text-accent" />,
    description: 'An AI-powered cloud security and threat intelligence project exploring cloud telemetry monitoring, misconfiguration detection, and unauthorized access identification.',
    technologies: [
      'Python',
      'AWS',
      'Cloud Security',
      'Threat Intelligence',
      'Security Monitoring',
      'DevSecOps',
    ],
    highlights: [
      'Explores cloud resource telemetry aggregation and IAM least-privilege auditing.',
      'Integrates threat intelligence patterns to flag anomalous network and access events.',
      'Focuses on proactive security posture management and continuous compliance concepts.',
    ],
    github: 'https://github.com/Shubhiii92/SecureCloudStorage',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Kids Car Game — Interactive 2D Driving',
    badge: 'Game Development',
    icon: <Gamepad2 className="w-5 h-5 text-accent" />,
    description: 'A responsive 2D browser-based obstacle driving game featuring dynamic car movement, obstacle avoidance, collision detection algorithms, and real-time score keeping.',
    technologies: [
      'JavaScript',
      'HTML5 Canvas',
      'CSS3',
      'Object-Oriented Programming',
    ],
    highlights: [
      'Engineered real-time collision detection logic and continuous animation loops using requestAnimationFrame.',
      'Implemented responsive keyboard and touch controls for cross-device support.',
      'Pure vanilla web technologies without external dependencies for lightweight performance.',
    ],
    github: 'https://github.com/Shubhiii92/kids-car-game',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Practical Implementation
            </span>
          </div>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl text-sm sm:text-base leading-relaxed"
          >
            A collection of real-world projects built during hackathons, coursework, and personal technical exploration in cybersecurity, cloud, and software engineering.
          </motion.p>
        </div>
        <motion.a
          href="https://github.com/Shubhiii92?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-semibold text-accent hover:text-accent-glow transition-colors flex items-center gap-2"
        >
          <span>View GitHub Repositories</span>
          <span>→</span>
        </motion.a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-[32px] overflow-hidden group border border-white/5 hover:border-accent/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Project Image & Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="glass px-3 py-1 rounded-full text-[10px] font-bold text-accent uppercase tracking-wider border border-accent/20">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-7 sm:p-8 pb-4">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    {project.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                <div className="mb-6">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-semibold px-2.5 py-1 glass rounded-md text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions / Buttons */}
            <div className="p-7 sm:p-8 pt-0 flex items-center gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass py-2.5 px-4 rounded-xl text-xs font-semibold text-white hover:bg-white/10 flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orange-gradient py-2.5 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
