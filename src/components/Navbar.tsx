import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between",
        isScrolled ? "bg-brand-dark/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-gold flex items-center justify-center rounded-sm font-serif font-bold text-brand-dark text-xs">
          KS
        </div>
        <span className="font-serif text-lg tracking-wider uppercase">Kindred Spirits</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] font-semibold text-white/80">
        <a href="#concept" className="hover:text-brand-gold transition-colors">Summary</a>
        <a href="#guests" className="hover:text-brand-gold transition-colors">Guests</a>
        <a href="#team" className="hover:text-brand-gold transition-colors">Team</a>
        <a href="#episodes" className="hover:text-brand-gold transition-colors">Episodes</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="mailto:Ryan@saltandwater.tv"
          className="hidden lg:block px-5 py-2 border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
        >
          Contact Us
        </a>
        <a 
          href="https://www.youtube.com/watch?v=hG7PCRHYoDE"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-brand-gold text-brand-dark text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-white transition-all duration-300"
        >
          Watch Trailer
        </a>
      </div>
    </motion.nav>
  );
}
