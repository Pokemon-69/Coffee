/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Zap, 
  Wifi, 
  Heart,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data ---

const menuItems = [
  { id: 1, name: "Signature Latte", description: "Double shot espresso with steamed milk and our house vanilla bean syrup.", price: "$5.50", category: "Coffee" },
  { id: 2, name: "Cold Brew", description: "Steeped for 18 hours for a smooth, low-acid, and naturally sweet finish.", price: "$4.75", category: "Coffee" },
  { id: 3, name: "Flat White", description: "Micro-foam milk poured over a double ristretto for a rich, velvety texture.", price: "$4.50", category: "Coffee" },
  { id: 4, name: "Matcha Latte", description: "Ceremonial grade matcha whisked with your choice of milk.", price: "$5.25", category: "Tea" },
  { id: 5, name: "Espresso Tonic", description: "Double espresso poured over premium tonic water with a twist of orange.", price: "$6.00", category: "Specials" },
  { id: 6, name: "Seasonal Special", description: "Ask about our current farm-to-cup rotation. Changing every 3 months.", price: "$6.50", category: "Specials" },
];

const testimonials = [
  { id: 1, name: "Sarah J.", rating: 5, text: "The best cold brew in the city. The atmosphere is perfect for getting work done or catching up with friends." },
  { id: 2, name: "Mark R.", rating: 5, text: "Truly artisan. You can taste the quality of the beans in every cup. Their flat white is perfection." },
  { id: 3, name: "Elena K.", rating: 5, text: "The staff is so welcoming. It's more than just coffee; it's a community hub." },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary py-3 shadow-lg' : 'bg-primary/95 lg:bg-transparent py-6'
      } border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Coffee className="w-8 h-8 text-accent group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-serif italic font-bold tracking-tight text-light">Brew & Co.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                isScrolled ? 'text-light/80 hover:text-accent' : 'text-primary md:text-primary lg:text-primary hover:text-accent'
              } ${!isScrolled ? 'lg:text-primary' : ''}`}
              style={{ color: isScrolled ? '#FDF6EF' : '#2C1A0E' }}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-accent text-white px-6 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-widest hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20">
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-light p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-serif text-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-accent text-white px-6 py-3 rounded-[4px] font-bold uppercase tracking-widest w-full">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-light to-bg-alt border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-[4px] bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Brewed with Passion
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-primary leading-[1.1] mb-8">
            Every Cup <br />
            <span className="text-accent italic">Tells a Story</span>
          </h1>
          <p className="text-lg text-text-muted max-w-lg mb-10 leading-relaxed font-sans">
            Artisan beans roasted with precision, served in a space designed for community. Your daily ritual, elevated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent text-white px-10 py-4 rounded-[4px] font-bold uppercase tracking-widest text-sm hover:bg-accent/95 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2 group">
              Order Online
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-primary text-primary px-10 py-4 rounded-[4px] font-bold uppercase tracking-widest text-sm hover:bg-primary/5 transition-all">
              See Our Menu
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
             <div className="flex items-center">
                <span className="text-orange-500 mr-2 text-lg">★★★★★</span>
                <span className="text-sm font-bold opacity-70 text-primary">4.9/5 — Loved by 2,400+ coffee enthusiasts</span>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] bg-primary rounded-[20px] overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
               <Coffee className="w-48 h-48 text-white/5" />
            </div>
            {/* Decorative block */}
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
               <p className="text-white font-serif italic text-2xl">The perfect brew awaits.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const highlights = [
    { icon: "☕", label: "Ethically Sourced" },
    { icon: "🔥", label: "Roasted Daily" },
    { icon: "📶", label: "Free Wi-Fi" },
    { icon: "🐕", label: "Dog Friendly" },
  ];

  return (
    <div className="bg-primary text-light py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center gap-2 border-r border-white/10 last:border-0"
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-white border-l border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif text-primary mb-2">Most-Loved Drinks</h2>
            <div className="h-1 w-20 bg-accent"></div>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent cursor-pointer hover:underline decoration-accent">
            Today's Special &rarr;
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-white p-6 rounded-lg border border-primary/10 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(44,26,14,0.05)] cursor-default ${
                item.name === "Seasonal Special" ? 'border-dashed border-accent bg-orange-50/30' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`font-bold text-sm uppercase tracking-tight ${item.name === "Seasonal Special" ? 'text-accent' : 'text-primary'}`}>{item.name}</h3>
                <span className="text-xs font-bold text-primary opacity-60 uppercase tracking-widest bg-light px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
              <p className="text-text-muted text-[11px] leading-relaxed mb-6 font-sans">
                {item.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                 <span className="font-bold text-primary">{item.price}</span>
                 <div className={`${item.name === "Seasonal Special" ? 'bg-accent text-white' : 'bg-light text-primary hover:bg-primary/5'} p-1.5 px-4 text-[10px] rounded-[4px] font-bold uppercase tracking-widest cursor-pointer transition-colors`}>
                    + Add
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-xs font-bold uppercase tracking-[0.2em] text-accent border-b border-accent pb-1 hover:opacity-80 transition-opacity">
            View Full Menu &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="py-24 bg-bg-alt/30 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif text-primary mb-6 inline-block border-b-2 border-accent pb-2">From Seed to Cup</h2>
          <div className="space-y-6 text-text-muted leading-relaxed text-sm font-sans">
            <p>
              We partner directly with farmers in Ethiopia and Colombia to bring you the highest quality microlots. Our roastery is located right in the heart of the city, ensuring your beans are never more than 48 hours from the flame.
            </p>
            <p>
              Our roasting process is a delicate balance of science and intuition, bringing out the unique characteristics of each harvest. We believe every bean has a story worth telling.
            </p>
          </div>
          <a href="#" className="mt-8 inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent hover:opacity-80 transition-opacity">
            Meet the Roasters &rarr;
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="aspect-video bg-cover bg-center rounded-xl bg-primary shadow-2xl relative overflow-hidden"
           style={{ backgroundImage: 'linear-gradient(45deg, #2C1A0E, #D4823A)' }}
        >
           <div className="absolute inset-0 flex items-center justify-center">
              <Coffee className="w-24 h-24 text-white/5" />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-12 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] snap-center border-l-2 border-primary/10 pl-8"
            >
              <p className="font-serif italic text-xl text-primary mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                 <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                 </div>
                 <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-60">— {t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Get 10% Off Your First Order</h2>
          <p className="text-white/70 text-lg mb-10">
            Join our community for weekly specials, early access to seasonal drinks, and exclusive invites to our tasting events.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 mb-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
            />
            <button className="bg-accent text-white px-10 py-4 rounded-full font-bold hover:bg-accent/90 transition-all shadow-xl shadow-accent/20">
              Join Now
            </button>
          </form>
          <p className="text-white/40 text-xs">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

const VisitUs = () => {
  return (
    <section id="visit" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-serif text-primary mb-10 italic">Visit the Brew House</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="font-bold text-primary mb-1">Our Location</p>
                <p className="text-text-muted">123 Artisan Way, Roasters District<br />Portland, OR 97201</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="font-bold text-primary mb-1">Opening Hours</p>
                <p className="text-text-muted">Mon – Fri: 7:00am – 8:00pm</p>
                <p className="text-text-muted">Sat – Sun: 8:00am – 9:00pm</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="font-bold text-primary mb-1">Phone Number</p>
                <p className="text-text-muted">(555) 123-4567</p>
              </div>
            </div>
          </div>
          <button className="mt-12 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/95 transition-all w-full md:w-auto">
            Get Directions
          </button>
        </div>

        <div className="aspect-square bg-bg-alt rounded-3xl border border-primary/5 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#E0D5C1] opacity-50 transition-transform group-hover:scale-105 duration-1000" />
          <div className="relative z-10 text-primary/40 flex flex-col items-center">
            <MapPin className="w-16 h-16 mb-4" />
            <p className="font-serif italic text-xl">Find Your Way to Brew & Co.</p>
          </div>
          {/* Placeholder for "Map" details */}
          <div className="absolute inset-x-0 bottom-0 p-8">
             <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-primary/5">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Arriving Soon?</p>
                <p className="text-sm text-primary font-medium">Free parking is available behind the cafe.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="space-y-4">
          <div className="text-2xl font-serif italic font-bold">Brew & Co.</div>
          <p className="text-[10px] uppercase tracking-widest opacity-60">© 2026 Artisan Coffee Roasters. All rights reserved.</p>
        </div>

        <div className="bg-white/5 p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 border border-white/5">
           <div className="flex-1 text-center sm:text-left">
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-1">Get 10% Off</h4>
              <p className="text-[10px] opacity-60 tracking-widest uppercase">Join our weekly brew digest.</p>
           </div>
           <div className="flex w-full sm:w-auto">
              <input type="text" placeholder="Email" className="bg-white/10 border-0 rounded-l-[4px] px-4 py-2 text-xs w-full sm:w-32 focus:ring-0" />
              <button className="bg-accent text-white py-2 px-6 rounded-r-[4px] font-bold text-[10px] uppercase tracking-widest whitespace-nowrap shadow-lg shadow-accent/20">Join Now</button>
           </div>
        </div>

        <div className="text-center md:text-right space-y-2">
           <div className="text-xs opacity-80 font-sans">123 Artisan Way, Roasters District, Portland</div>
           <div className="text-xs opacity-70 font-sans">Mon-Fri 7am-8pm | Sat-Sun 8am-9pm</div>
           <div className="text-[10px] mt-4 flex justify-center md:justify-end gap-6 uppercase font-bold tracking-[0.3em] text-accent">
              <span className="hover:text-light transition-colors cursor-pointer">IG</span>
              <span className="hover:text-light transition-colors cursor-pointer">FB</span>
              <span className="hover:text-light transition-colors cursor-pointer">TT</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="scroll-smooth selection:bg-accent/30">
      <Navbar />
      <Hero />
      <TrustBar />
      <Menu />
      <Story />
      <Testimonials />
      <Newsletter />
      <VisitUs />
      <Footer />
      
      {/* Mobile Sticky Order Button */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button className="w-full bg-accent text-white py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2 group active:scale-95 transition-all">
          <Coffee className="w-5 h-5" />
          Order Now
        </button>
      </div>
    </div>
  );
}
