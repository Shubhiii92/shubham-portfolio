import { motion } from 'motion/react';

const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Gemini API', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png' },
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
          My <span className="text-accent">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          I specialize in building high-performance web applications using modern technologies and best practices.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 mb-20">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="glass p-6 rounded-3xl flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-accent/50 transition-colors"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <SoftSkillCard 
          title="Leadership" 
          description="Experienced in leading teams and projects to success with a focus on collaboration."
          icon="👑"
        />
        <SoftSkillCard 
          title="Responsibility" 
          description="Highly accountable and dedicated to taking ownership of complex tasks."
          icon="🛡️"
        />
        <SoftSkillCard 
          title="Problem Solving" 
          description="Analytical thinker with a knack for finding creative solutions to technical challenges."
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
      className="glass p-8 rounded-[32px] border border-white/5 hover:border-accent/30 transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
