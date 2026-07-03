import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "/images/hero/036-sing-drone.jpg",
  "/images/hero/041-melk-drone-2.jpg",
  "/images/hero/042-vine-walk-2.jpg",
  "/images/hero/045-cliff-convo.jpg",
  "/images/hero/048-pot.jpg",
  "/images/hero/059-castle-walk.jpg",
  "/images/hero/061-cliff-gaze.jpg",
  "/images/hero/062-cliff-look.jpg",
  "/images/hero/064-mark.jpg",
  "/images/hero/065-mark-sing.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img 
            key={heroImages[currentImageIndex]}
            src={heroImages[currentImageIndex]} 
            alt="Hero background" 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-gold uppercase tracking-[0.4em] text-sm mb-6 font-bold"
        >
          Presenting
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-serif mb-4 tracking-tight"
        >
          Kindred <span className="italic text-brand-gold/90">Spirits</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent max-w-md mx-auto mb-8"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-12"
        >
          With Deacon Charlie Echeverry & Ryan Bethea
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.a 
            href="https://treasuresofthechurch.com/donate/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 md:px-16 md:py-6 bg-brand-gold text-brand-dark rounded-full font-bold uppercase tracking-[0.3em] text-sm md:text-base hover:bg-white transition-all duration-500 shadow-2xl shadow-brand-gold/20"
          >
            Donate Now
            <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.a>
          
          <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-semibold">
            Partnered with the Treasures of the Church 501(c)(3)
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/60">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
