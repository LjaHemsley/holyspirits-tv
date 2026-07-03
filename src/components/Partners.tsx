import { motion } from "motion/react";

const partners = [
  {
    name: "Clonakilty Distillery",
    description: "A family-run maritime distillery in West Cork producing award-winning whiskey on the edge of the Atlantic.",
    location: "West Cork, Ireland"
  },
  {
    name: "Kinsale Mead Co",
    description: "Reviving the ancient art of mead-making in Ireland, producing world-class honey wines in historic Kinsale.",
    location: "Cork, Ireland"
  },
  {
    name: "Stift Klosterneuburg",
    description: "Austria's oldest winery, where Augustinian canons have been crafting exceptional wines for over 900 years.",
    location: "Klosterneuburg, Austria"
  },
  {
    name: "Stift Melk",
    description: "The iconic Benedictine Abbey overlooking the Danube, preserving a millennium of brewing and winemaking heritage.",
    location: "Melk, Austria"
  },
  {
    name: "St. Brigid Ale",
    description: "A tribute to the patroness of Kildare, inspired by the ancient monastic brewing traditions of the Emerald Isle.",
    location: "Kildare, Ireland"
  },
  {
    name: "Destillerie Farthofer",
    description: "Masters of organic distillation; Farthofer made the number 1 vodka in the world in 2014.",
    location: "Oehling, Austria"
  }
];

export default function Partners() {
  return (
    <section className="py-24 bg-brand-dark/50 border-t border-white/5" id="partners">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs mb-4 font-bold">Collaborators</p>
          <h2 className="text-4xl md:text-6xl font-serif">Our <span className="italic text-white/40">Partners</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-brand-green/5 border border-white/5 hover:border-brand-gold/20 transition-all duration-300 group"
            >
              <span className="text-[10px] uppercase tracking-widest text-brand-gold/60 mb-2 block">{partner.location}</span>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-gold transition-colors">{partner.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
