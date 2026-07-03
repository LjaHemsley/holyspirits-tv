import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-brand-gold/10 group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <div className="absolute inset-0 z-10">
              <img 
                src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070&auto=format&fit=crop" 
                alt="Video thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 md:w-28 md:h-28 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center shadow-xl shadow-brand-gold/40"
                >
                  <Play className="w-8 h-8 md:w-12 md:h-12 fill-current ml-1" />
                </motion.div>
              </div>

              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-left">
                <p className="text-brand-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-2">Watch the Trailer</p>
                <h3 className="text-2xl md:text-4xl font-serif text-white">Faith & Fermentation</h3>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/hG7PCRHYoDE?start=64&autoplay=1" 
                title="Kindred Spirits Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-center text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium"
        >
          Cinematic Series Trailer • 2:45
        </motion.p>
      </div>
    </section>
  );
}
