import { motion } from "motion/react";

export default function Concept() {
  return (
    <section id="concept" className="py-24 px-6 bg-brand-dark relative overflow-hidden border-b border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
            Faith meets <span className="italic text-brand-gold">Fermentation</span>
          </h2>
          
          <div className="space-y-8 text-white/90 leading-relaxed font-small text-xl md:text-2xl mb-16">
            <p>
              Kindred Spirits is a cinematic travel series exploring the intersection of Christian history and alcohol—from abbey ales to monastic wine cellars.
            </p>
            <p>
              Join Catholic Deacon Charlie Echeverry and Protestant co-host Ryan Bethea on a global pilgrimage to learn the lost arts of fermentation and the preserved wisdom of faith.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

