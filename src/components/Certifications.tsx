import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

interface Certification {
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  certificateUrl?: string;
  credentialId?: string;
}

const certifications: Certification[] = [
  {
    title: 'SPIT React Hackathon — Team Lead & Project Development',
    organization: 'Sardar Patel Institute of Technology / Unstop',
    year: '2025',
    category: 'Hackathon & Engineering',
    description: 'Led a team to develop ChainGuard, a DeFi transaction anomaly detection prototype, over a 24-hour sprint.',
    certificateUrl: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/ddcdd910-bdf5-4d74-b846-a3a32e54e765.pdf',
    credentialId: 'ddcdd910-bdf5-4d74-b846-a3a32e54e765',
  },
  {
    title: 'Drone Dexterity National Competition — 1st Place Winner',
    organization: 'MEGALEIO 2025 | St. John College, Palghar',
    year: '2025',
    category: 'Robotics & Control Systems',
    description: 'Won 1st place in national drone dexterity and dynamic obstacle navigation competition.',
  },
  {
    title: 'DJ Sanghvi Drone Challenge — Technical Participant',
    organization: 'D.J. Sanghvi College of Engineering, Mumbai',
    year: '2025',
    category: 'Autonomous & Drone Systems',
    description: 'Participated in competitive drone navigation challenges, flight telemetry, and real-time stabilization.',
  },
  {
    title: 'Satellite Image Processing & Terrain Classification',
    organization: 'Vidyalankar Institute of Technology',
    year: '2025',
    category: 'Machine Learning Training',
    description: 'Hands-on training in synthetic aperture radar (PolSARpro) and machine learning terrain classification.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Verified Credentials & Achievements
          </span>
        </div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          My <span className="text-accent">Certifications</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          Verified student technical credentials, hackathons, and competition achievements.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-accent/30 transition-all flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent group-hover:scale-105 transition-transform flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/25 uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.year}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium mb-3">
                {cert.organization}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                Verified Student Credential
              </span>

              {cert.certificateUrl ? (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orange-gradient text-white text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-1.5 shadow-md hover:shadow-accent/40 transition-all"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-[10px] text-gray-400 font-medium italic">
                  Institutional Record
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
