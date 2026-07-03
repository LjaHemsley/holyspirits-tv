import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-gold flex items-center justify-center rounded-sm font-serif font-bold text-brand-dark text-xs">
                KS
              </div>
              <span className="font-serif text-xl tracking-wider uppercase">Kindred Spirits</span>
            </div>
            <p className="text-white/60 text-base max-w-sm leading-relaxed">
              A cinematic travel series exploring the uncanny intersection of Faith and Fermentation. Join us on a global pilgrimage.
            </p>
          </div>
          
          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/60 text-sm uppercase tracking-widest font-medium">
              <li><a href="#concept" className="hover:text-brand-gold transition-colors">Summary</a></li>
              <li><a href="#guests" className="hover:text-brand-gold transition-colors">Guests</a></li>
              <li><a href="#team" className="hover:text-brand-gold transition-colors">Team</a></li>
              <li><a href="#episodes" className="hover:text-brand-gold transition-colors">Episodes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm tracking-widest font-medium">
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-brand-gold" />
                <a href="mailto:Ryan@saltandwater.tv" className="hover:text-brand-gold transition-colors">Ryan@saltandwater.tv</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-brand-gold" />
                <a href="mailto:charlie@blackbrown.us" className="hover:text-brand-gold transition-colors">charlie@blackbrown.us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
            © 2026 Kindred Spirits. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Instagram className="w-4 h-4 text-white/20 hover:text-brand-gold cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-white/20 hover:text-brand-gold cursor-pointer transition-colors" />
            <Youtube className="w-4 h-4 text-white/20 hover:text-brand-gold cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
