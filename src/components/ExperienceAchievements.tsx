import { motion } from 'motion/react';
import { Trophy, Users, Star, Code, Heart, Plane } from 'lucide-react';

const items = [
  {
    title: 'Team Lead - SPIT React Hackathon',
    organization: 'SPIT, Mumbai',
    date: 'Nov 2025',
    type: 'Experience & Leadership',
    description: 'Led a team to design and develop a functional web-based solution (ChainGuard) within a 24-hour timeframe. Managed task distribution, problem-solving, and team coordination while contributing to AI/ML-based fraud detection development.',
    icon: <Code className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/QvSbZY7j/Whats-App-Image-2026-04-04-at-5-32-42-PM.jpg',
    link: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/ddcdd910-bdf5-4d74-b846-a3a32e54e765.pdf',
    linkText: 'View Certificate'
  },
  {
    title: '1st Place – Drone Dexterity',
    organization: 'MEGALEIO 2025 | St. John College, Palghar',
    date: 'Feb 2025',
    type: 'Achievement',
    description: 'Secured 1st place in a national-level drone dexterity competition, demonstrating precision in drone dynamics, control systems, and real-time problem solving.',
    icon: <Trophy className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/35rSP7jd/Whats-App-Image-2026-04-04-at-6-21-11-PM.jpg',
  },
  {
    title: 'Drone Competition – Team Participation',
    organization: 'DJ Sanghvi Drone Competition',
    date: 'Feb 2025',
    type: 'Technical Experience',
    description: 'Collaborated with a team in a competitive drone challenge, gaining hands-on experience in drone dynamics, control systems, and real-time problem solving.',
    icon: <Plane className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/dJ1wn89T/Whats-App-Image-2026-04-04-at-7-40-55-PM.jpg',
  },
  {
    title: 'University Kabaddi Player',
    organization: 'VIT, Wadala (University Level)',
    date: '2024 - 2026',
    type: 'Sports & Leadership',
    description: 'Represented Vidyalankar Institute of Technology at the University level for two consecutive years. Demonstrated discipline, strategic coordination, and leadership in high-pressure inter-college tournaments.',
    icon: <Star className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/r2kJLZtz/Whats-App-Image-2026-04-04-at-6-09-15-PM.jpg',
  },
  {
    title: 'Social Service Initiative (SSI)',
    organization: 'Community Volunteering',
    date: 'Jan - March 2026',
    type: 'Volunteering',
    description: 'Mentored students and organized educational activities. Focused on building confidence, creativity, and a positive learning environment through interactive sessions.',
    icon: <Heart className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/Vpv9Y06j/Whats-App-Image-2026-04-04-at-5-38-25-PM.jpg',
  },
  {
    title: 'Image Processing Trainee',
    organization: 'Vidyalankar Institute of Technology',
    date: 'Dec 2024 - May 2025',
    type: 'Technical Experience',
    description: 'Analyzed satellite imagery and classified landforms using PolSARpro. Applied Machine Learning techniques for terrain analysis and data classification.',
    icon: <Plane className="w-6 h-6 text-accent" />,
  }
];

export default function ExperienceAchievements() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Experience & <span className="text-accent">Achievements</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          A combined journey of technical expertise, leadership, and impactful achievements.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-[32px] overflow-hidden border border-white/5 hover:border-accent/30 transition-all group flex flex-col"
          >
            {item.image && (
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="glass px-3 py-1 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest border border-accent/20">
                    {item.type}
                  </span>
                </div>
              </div>
            )}
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-accent/10 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.organization}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              {item.link && (
                <div className="mt-auto">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-glow transition-colors"
                  >
                    {item.linkText} →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
