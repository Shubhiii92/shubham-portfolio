import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ChainGuard - DeFi Fraud Detection',
    description: 'An AI/ML-based system developed during a 24Hr Hackathon to analyze DeFi blockchain transactions and assign risk scores for fraud detection using supervised and unsupervised learning.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60',
    tags: ['AI/ML', 'Blockchain', 'Fraud Detection', 'Python'],
    link: '#',
    github: 'https://github.com/ShubhCoding13',
  },
  {
    title: 'Distributed Task Management System',
    description: 'A backend system to manage tasks across multiple users with priority handling. Features relational database schemas focusing on data consistency and scalability.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60',
    tags: ['Java', 'Node.js', 'PostgreSQL', 'REST APIs'],
    link: '#',
    github: 'https://github.com/ShubhCoding13',
  },
  {
    title: 'Authentication & Authorization Service',
    description: 'A secure authentication service supporting user login and role-based access control using JWT and Bcrypt. Designed to be reusable across multiple applications.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60',
    tags: ['Node.js', 'JWT', 'Bcrypt', 'REST APIs'],
    link: '#',
    github: 'https://github.com/ShubhCoding13',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'An interactive Tic-Tac-Toe game using tree data structures and traversal algorithms for efficient game state management with a console/GUI interface.',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&auto=format&fit=crop&q=60',
    tags: ['DSA', 'Algorithms', 'Java'],
    link: '#',
    github: 'https://github.com/ShubhCoding13',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl"
          >
            A selection of my recent work, ranging from complex web applications to creative UI experiments.
          </motion.p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-semibold text-accent hover:text-accent-glow transition-colors"
        >
          View All Projects →
        </motion.button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass rounded-3xl overflow-hidden group border-white/5 hover:border-accent/30 transition-colors"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 gap-4">
                <a href={project.link} className="p-3 glass rounded-full hover:bg-accent transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a href={project.github} className="p-3 glass rounded-full hover:bg-accent transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 glass rounded-md text-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
