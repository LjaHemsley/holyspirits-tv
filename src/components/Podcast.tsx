import { motion } from "motion/react";
import { Mic, Play, ArrowRight } from "lucide-react";

export default function Podcast() {
  return (
    <section id="podcast" className="py-24 bg-brand-green relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark/20 skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-gold/20 rounded-lg">
                <Mic className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-medium">Companion Podcast</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Barrels & <br />
              <span className="italic text-brand-gold">Benedictions</span>
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
              A weekly 6-part companion series featuring 45-minute episodes with all the incredible content we couldn't squeeze into the show. Uncut spiritual conversations, behind-the-scenes stories, and listener questions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-dark rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 group">
                <Play className="w-4 h-4 fill-current" />
                Listen Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-6 px-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg" alt="Apple Podcasts" className="h-6 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="h-6 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-dark/40 p-6 rounded-2xl border border-white/5"
            >
              <p className="text-brand-gold font-serif text-lg mb-2">Uncut Conversations</p>
              <p className="text-white/40 text-xs leading-relaxed">Deep dives between Charlie and Ryan that go beyond the screen.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-dark/40 p-6 rounded-2xl border border-white/5 mt-8"
            >
              <p className="text-brand-gold font-serif text-lg mb-2">Local Interviews</p>
              <p className="text-white/40 text-xs leading-relaxed">Extended chats with brewers, theologians, and monastics.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-dark/40 p-6 rounded-2xl border border-white/5"
            >
              <p className="text-brand-gold font-serif text-lg mb-2">Travel Stories</p>
              <p className="text-white/40 text-xs leading-relaxed">The hilarious and moving moments from the global pilgrimage.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-brand-dark/40 p-6 rounded-2xl border border-white/5 mt-8"
            >
              <p className="text-brand-gold font-serif text-lg mb-2">Theology & Tradition</p>
              <p className="text-white/40 text-xs leading-relaxed">Answering listener questions on history, faith, and alcohol.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
