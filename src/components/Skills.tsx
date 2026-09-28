import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  ShieldCheck, 
  Cloud, 
  Layers, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: ReactNode;
  description: string;
  skills: { name: string; icon?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: <Code2 className="w-5 h-5 text-accent" />,
    description: 'Core languages for systems, algorithms, backend scripting, and application logic.',
    skills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    description: 'Foundational security concepts, vulnerability testing, and network defense principles.',
    skills: [
      { name: 'Network Security' },
      { name: 'Web Security' },
      { name: 'Vulnerability Assessment' },
      { name: 'OWASP Concepts' },
      { name: 'Security Monitoring' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-5 h-5 text-accent" />,
    description: 'Cloud environments, containerization, and continuous deployment workflows.',
    skills: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'CI/CD' },
    ],
  },
  {
    title: 'Development',
    icon: <Layers className="w-5 h-5 text-accent" />,
    description: 'Full-stack frameworks and libraries for responsive web applications and APIs.',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    title: 'Tools & Utilities',
    icon: <Wrench className="w-5 h-5 text-accent" />,
    description: 'Version control, packet analyzers, network scanners, and security testing proxies.',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Wireshark' },
      { name: 'Nmap' },
      { name: 'Burp Suite' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          A categorized overview of languages, frameworks, security fundamentals, and tools I use across academic coursework and practical projects.
        </motion.p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className={`glass rounded-3xl p-6 md:p-8 border border-white/5 hover:border-accent/30 transition-all flex flex-col justify-between ${
              index === 3 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-accent/10 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 glass rounded-xl text-xs font-medium text-gray-200 border border-white/10 hover:border-accent/40 hover:text-white transition-all group"
                >
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills & Academic Strengths */}
      <div className="grid md:grid-cols-3 gap-6">
        <SoftSkillCard 
          title="Leadership & Coordination" 
          description="Experienced in leading student teams during hackathons and university sporting events, managing responsibilities and task distribution."
          icon="👑"
        />
        <SoftSkillCard 
          title="Accountability & Ownership" 
          description="Dedicated to taking ownership of tasks, meeting deadlines, and delivering high quality results in collaborative settings."
          icon="🛡️"
        />
        <SoftSkillCard 
          title="Analytical Problem Solving" 
          description="Solid foundation in computer science and algorithms, with a disciplined approach to debugging and architectural reasoning."
          icon="🧩"
        />
      </div>
    </section>
  );
}

function SoftSkillCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass p-7 rounded-[28px] border border-white/5 hover:border-accent/30 transition-all"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
