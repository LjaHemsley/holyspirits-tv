import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const episodes = [
  {
    number: "01",
    title: "Irish Spring",
    location: "Ireland",
    description: "Explore Ireland’s ancient connection to spirits through the lives of St. Kevin and St. Patrick. From the wild coasts to hidden monastic ruins, we trace the liquid history of the Emerald Isle.",
    image: "https://www.galwaytourism.ie/wp-content/uploads/2019/05/Cliffs-of-Moher.jpg"
  },
  {
    number: "02",
    title: "Leopold's Fine Wine",
    location: "Klosterneuburg, Austria",
    description: "Journey to Austria's oldest winery under the saintly patronage of Leopold. Discover the Verdun Bible and how a saint cared for his people in miraculous ways through the fruit of the vine.",
    image: "https://www.austrianfinewine.com/media/1f/c9/30/1589539826/OeWM_Marcus-Wiesner_NOE_Kremstal_Steinwandl_vor_Krems_mobil.jpg"
  },
  {
    number: "03",
    title: "AquaVit: The Good Soil",
    location: "Scandinavia",
    description: "Explore the lush fjords and Viking history. Bishop Varden joins to explore the parable of the soil and how the Gospel takes root in harsh climates, mirrored in the production of unique Nordic spirits.",
    image: "https://images.squarespace-cdn.com/content/v1/6089609ad885f529dc01ee7e/1619900284687-42EYTJJNSXONIOH4UL7W/vineyard-crop.jpg"
  },
  {
    number: "04",
    title: "Enchanting Wines",
    location: "Spain",
    description: "In Spanish wine country, an old monastery shares a border with a vineyard. Explore how Gregorian chants 'fed' the grapes and shaped the spirits, creating a unique harmony between prayer and production.",
    image: "https://cf.ltkcdn.net/wine/images/orig/308250-1600x1066-spain-wine-regions-map.jpg"
  }
];

export default function Episodes() {
  const [expandedEpisode, setExpandedEpisode] = useState<string | null>(null);

  const toggleEpisode = (number: string) => {
    setExpandedEpisode(expandedEpisode === number ? null : number);
  };

  return (
    <section id="episodes" className="py-24 bg-brand-green/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-brand-gold uppercase tracking-[0.2em] text-xs mb-4 font-bold">The Journey</p>
            <h2 className="text-4xl md:text-6xl font-serif">Season One <span className="italic text-white/40">Concepts</span></h2>
          </div>
          <p className="text-white/70 max-w-md text-base leading-relaxed">
            Each episode is a curated exploration of a region's spiritual heritage through the lens of its most iconic libations. Click to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {episodes.map((episode, index) => {
            const isExpanded = expandedEpisode === episode.number;
            
            return (
              <motion.div 
                key={episode.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => toggleEpisode(episode.number)}
                className={`group relative bg-brand-dark/40 rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                  isExpanded ? 'border-brand-gold/50 shadow-2xl shadow-brand-gold/5' : 'border-white/5 hover:border-brand-gold/30'
                }`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={episode.image} 
                    alt={episode.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${isExpanded ? 'scale-105' : 'group-hover:scale-110'}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-brand-gold font-serif text-sm mb-1 block">Episode {episode.number}</span>
                      <h3 className="text-2xl font-serif">{episode.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1 rounded-full font-bold">
                        {episode.location}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-brand-gold"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/80 text-base leading-relaxed pt-6 border-t border-white/5 mt-6">
                          {episode.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
