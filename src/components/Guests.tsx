import { motion } from "motion/react";

const guests = [
  {
    name: "Siobhan Fallon Hogan",
    role: "Actress, Producer, Comedian",
    description: "Actress, Producer, Comedian (Men in Black, SNL, Forrest Gump) and from Ireland. So more than qualified!",
    image: "/images/siobhan-fallon-hogan.png",
    position: "50% 20%"
  },
  {
    name: "Jonathan Pokluda",
    role: "Lead Pastor & Host",
    description: "Lead pastor of Harris Creek Baptist Church in Waco, Texas, and former leader of The Porch a young adult ministry of more than 7,000.",
    image: "/images/jonathan-pokluda.png",
    position: "50% 10%"
  },
  {
    name: "Carl Edwards",
    role: "Nascar Driver",
    description: "Legendary NASCAR driver known for his backflips and competitive spirit, now joining the kindred journey.",
    image: "https://www.nbc.com/sites/nbcblog/files/styles/scale_862/public/2024/11/carl-edwards.jpg",
    position: "50% 10%"
  },
  {
    name: "Gabe Castillo",
    role: "Producer & Evangelist",
    description: "Catholic producer and YouTube evangelist creator of more than a dozen Christian documentaries",
    image: "/images/gabe-castillo.png",
    position: "50% 10%"
  },
  {
    name: "Lisa Bevere",
    role: "Speaker & NYT Bestseller",
    description: "Internationally reknown speaker and the New York Times bestselling author",
    image: "/images/lisa-bevere.png",
    position: "50% 20%"
  },
  {
    name: "Zachary Levi",
    role: "Acclaimed Actor",
    description: "Zachary Levi is a box-office hero (literally), acclaimed actor, and best selling author. From Shazam to Chuck, Zach Levi has lit up screens all over the world.",
    image: "/images/zachary-levi.png",
    position: "50% 10%"
  },
  {
    name: "Matt Maher",
    role: "Worship Leader & Artist",
    description: "Canadian Catholic contemporary Christian music artist, songwriter, and worship leader based in the United States. with more hits than Guinness Has Pints",
    image: "/images/matt-maher.png",
    position: "50% 10%"
  },
  {
    name: "Fr. Gregory Pine",
    role: "Dominican Theologian",
    description: "Instructor of Dogmatic and Moral Theology at the Dominican House of Studies and Asst. Director of the Thomistic Institute. Host of Godsplaining podcast!",
    image: "/images/gregory-pine.png",
    position: "50% 20%"
  }
];

export default function Guests() {
  return (
    <section id="guests" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-xs mb-4 font-bold">Voices of Wisdom</p>
          <h2 className="text-4xl md:text-6xl font-serif">Potential <span className="italic text-white/40">Guests</span></h2>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto text-base leading-relaxed">
            Joining us on this pilgrimage are some of the most influential voices in modern theology and faith-based media.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {guests.map((guest, index) => (
            <motion.div 
              key={guest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-8 mx-auto w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 border border-brand-gold/20 rounded-full scale-110 group-hover:scale-120 transition-transform duration-700" />
                <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-2 border-brand-dark">
                  <img 
                    src={guest.image} 
                    alt={guest.name} 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: guest.position || 'center' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-brand-gold transition-colors">{guest.name}</h3>
              <p className="text-brand-gold uppercase tracking-[0.2em] text-xs mb-4 font-bold">{guest.role}</p>
              <p className="text-white/70 text-sm leading-relaxed px-4 font-medium italic">
                "{guest.description}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
