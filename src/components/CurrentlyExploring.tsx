import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Network, 
  CloudRain, 
  Terminal, 
  Server, 
  Container, 
  Bot, 
  Cpu 
} from 'lucide-react';

const exploringTopics = [
  {
    title: 'Cybersecurity',
    icon: <ShieldAlert className="w-5 h-5 text-accent" />,
    badge: 'Core Focus',
    description: 'Threat models, endpoint protection, and defense-in-depth principles.',
  },
  {
    title: 'Network Security',
    icon: <Network className="w-5 h-5 text-accent" />,
    badge: 'Protocols',
    description: 'Packet inspection, firewall policies, Wireshark traffic analysis & secure routing.',
  },
  {
    title: 'Cloud Security',
    icon: <CloudRain className="w-5 h-5 text-accent" />,
    badge: 'Cloud Defense',
    description: 'IAM least privilege, VPC peering, encryption in transit & at rest.',
  },
  {
    title: 'DevSecOps',
    icon: <Terminal className="w-5 h-5 text-accent" />,
    badge: 'Pipeline Security',
    description: 'Automated vulnerability scanning, SAST/DAST in CI/CD, and policy-as-code.',
  },
  {
    title: 'AWS',
    icon: <Server className="w-5 h-5 text-accent" />,
    badge: 'Cloud Platform',
    description: 'EC2, S3, Lambda, CloudWatch, and secure architectural fundamentals.',
  },
  {
    title: 'Docker & Kubernetes',
    icon: <Container className="w-5 h-5 text-accent" />,
    badge: 'Containers',
    description: 'Container security hardening, Dockerfile optimization, and pod networking.',
  },
  {
    title: 'Security Automation',
    icon: <Bot className="w-5 h-5 text-accent" />,
    badge: 'Workflows',
    description: 'Automating security compliance checks, audit scripts, and alert triage.',
  },
  {
    title: 'AI/ML for Security',
    icon: <Cpu className="w-5 h-5 text-accent" />,
    badge: 'Intelligent Defense',
    description: 'Anomaly detection models, malicious traffic classification, and behavioral heuristics.',
  },
];

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[36px] p-8 md:p-12 border border-accent/20 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Continuous Technical Growth
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Currently <span className="text-accent">Exploring</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md">
            Key areas I am actively studying, practicing in labs, and experimenting with through practical hands-on mini-projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploringTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, borderColor: 'rgba(255, 106, 0, 0.4)' }}
              className="glass p-5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                    {topic.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    {topic.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-accent transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
