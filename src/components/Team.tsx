import { motion } from "motion/react";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs mb-4 font-bold">The Visionaries</p>
          <h2 className="text-4xl md:text-6xl font-serif">Creative <span className="italic text-white/40">Team</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left"
          >
            <div className="w-48 h-64 flex-shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="/images/ryan-bethea.png" 
                alt="Ryan Bethea" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-2 text-brand-gold">Ryan Bethea</h3>
              <p className="text-white uppercase tracking-widest text-xs mb-6 font-bold opacity-80">Creator, Producer and Host</p>
              <p className="text-white/80 text-base leading-relaxed font-normal">
                Producer of 'The Exorcist Files', one of the biggest podcasts in the faith space with over 45 million downloads. Master of spiritual storytelling.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-white/40">Assembly72 | Production Company</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left"
          >
            <div className="w-48 h-64 flex-shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="/images/charlie-echeverry.png" 
                alt="Deacon Charlie Echeverry" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-2 text-brand-gold">Deacon Charlie Echeverry</h3>
              <p className="text-white uppercase tracking-widest text-xs mb-6 font-bold opacity-80">Producer and Host</p>
              <p className="text-white/80 text-base leading-relaxed font-normal">
                Spiritual guide with a deep love for travel, culture, and faith. A prominent Catholic media personality and host dedicated to bridging traditions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

