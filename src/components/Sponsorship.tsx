import { motion } from "motion/react";
import { Mail, Shield, Zap, Globe } from "lucide-react";

const opportunities = [
  {
    title: "Primary Series Partner",
    description: "Exclusive top-tier branding across all episodes, marketing materials, and digital platforms.",
    icon: Shield
  },
  {
    title: "Regional Episode Sponsor",
    description: "Focused branding within specific geographical segments (e.g., The Ireland Pilgrimage).",
    icon: Globe
  },
  {
    title: "Brand Integration",
    description: "Authentic placement and storytelling around products or services that align with our mission.",
    icon: Zap
  }
];

export default function Sponsorship() {
  return (
    <section className="py-24 bg-brand-green/10 relative overflow-hidden" id="sponsorship">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <p className="text-brand-gold uppercase tracking-[0.3em] text-base mb-4 font-bold">Partner With Us</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Sponsorship <span className="text-white/40 not-italic">Opportunities</span></h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Kindred Spirits offers a unique platform to reach a deeply engaged audience of faith-seekers and culture enthusiasts. Join us in bringing this cinematic journey to the world.
            </p>
            
            <a 
              href="mailto:Ryan@saltandwater.tv"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-dark text-sm uppercase tracking-[0.2em] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-brand-gold/10"
            >
              <Mail className="w-4 h-4" />
              Inquire Now
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 w-full md:max-w-md">
            {opportunities.map((opt, index) => (
              <motion.div 
                key={opt.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-brand-dark/40 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                    <opt.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-lg mb-2">{opt.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{opt.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
