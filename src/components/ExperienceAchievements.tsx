import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Code, Heart, Plane, Cloud, ExternalLink } from 'lucide-react';

interface ActivityItem {
  title: string;
  organization: string;
  date: string;
  badge: string;
  description: string;
  icon: ReactNode;
  image?: string;
  link?: string;
  linkText?: string;
}

const items: ActivityItem[] = [
  {
    title: 'AWS Student Builders Group',
    organization: 'Vidyalankar Institute of Technology, Mumbai',
    date: '2024 – Present',
    badge: 'Student Technical Community',
    description: 'Active participant in the student AWS and cloud community at VIT. Involved in peer-to-peer technical learning sessions, cloud architecture discussions, hands-on labs with core AWS services, and exploring DevSecOps and container deployment workflows.',
    icon: <Cloud className="w-6 h-6 text-accent" />,
  },
  {
    title: 'Team Lead — SPIT React Hackathon',
    organization: 'Sardar Patel Institute of Technology, Mumbai',
    date: 'Nov 2025',
    badge: 'Hackathon & Leadership',
    description: 'Led a 4-person team to build ChainGuard, a DeFi transaction anomaly detection prototype, within a strict 24-hour timeframe. Handled task planning, problem-solving coordination, and AI/ML model integration.',
    icon: <Code className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/QvSbZY7j/Whats-App-Image-2026-04-04-at-5-32-42-PM.jpg',
    link: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/ddcdd910-bdf5-4d74-b846-a3a32e54e765.pdf',
    linkText: 'View Certificate on Unstop',
  },
  {
    title: '1st Place – Drone Dexterity Competition',
    organization: 'MEGALEIO 2025 | St. John College, Palghar',
    date: 'Feb 2025',
    badge: 'National Competition',
    description: 'Secured 1st place in a national-level drone dexterity competition, demonstrating precision piloting, dynamic control systems handling, and real-time situational problem-solving.',
    icon: <Trophy className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/35rSP7jd/Whats-App-Image-2026-04-04-at-6-21-11-PM.jpg',
  },
  {
    title: 'Drone Competition – Team Participant',
    organization: 'DJ Sanghvi College of Engineering',
    date: 'Feb 2025',
    badge: 'Technical Challenge',
    description: 'Collaborated with a team in competitive drone navigation challenges, gaining practical experience in control systems, hardware-software coordination, and aerodynamic adjustments.',
    icon: <Plane className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/dJ1wn89T/Whats-App-Image-2026-04-04-at-7-40-55-PM.jpg',
  },
  {
    title: 'University Kabaddi Player',
    organization: 'VIT, Wadala (University Level)',
    date: '2024 – 2026',
    badge: 'University Sports',
    description: 'Represented Vidyalankar Institute of Technology at the university level for two consecutive years. Practiced physical discipline, strategic match coordination, and teamwork under pressure.',
    icon: <Star className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/r2kJLZtz/Whats-App-Image-2026-04-04-at-6-09-15-PM.jpg',
  },
  {
    title: 'Social Service Initiative (SSI)',
    organization: 'Community Mentoring',
    date: 'Jan – March 2026',
    badge: 'Volunteering',
    description: 'Mentored school students and conducted educational activities, building confidence and interactive learning environments through hands-on sessions.',
    icon: <Heart className="w-6 h-6 text-accent" />,
    image: 'https://i.ibb.co/Vpv9Y06j/Whats-App-Image-2026-04-04-at-5-38-25-PM.jpg',
  },
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
          Experience & <span className="text-accent">Activities</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          Student technical communities, hackathons, drone robotics competitions, university athletics, and campus leadership initiatives.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass rounded-[28px] overflow-hidden border border-white/5 hover:border-accent/30 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="glass px-2.5 py-0.5 rounded-full text-[10px] font-bold text-accent uppercase tracking-wider border border-accent/20">
                      {item.badge}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                {!item.image && (
                  <div className="mb-3">
                    <span className="glass px-2.5 py-0.5 rounded-full text-[10px] font-bold text-accent uppercase tracking-wider border border-accent/20">
                      {item.badge}
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-xl text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{item.organization}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-semibold text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-md">
                    {item.date}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {item.link && (
              <div className="p-6 pt-0 mt-auto">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-glow transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
