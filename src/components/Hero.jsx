import { useEffect, useRef } from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Hero() {
  const varietiesRef = useRef(null);

  useEffect(() => {
    // Count up animation for stats
    let start = 0;
    const end = 7;
    const duration = 1500;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      if (varietiesRef.current) {
        varietiesRef.current.innerText = Math.floor(start) + '+';
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background with warm gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm via-warm to-gold/10 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-primary font-label text-sm font-semibold mb-6 border border-gold/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            100% Authentic Andhra Recipes
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-earth mb-6 leading-tight">
            Pickles That Taste Like <br className="hidden md:block" />
            <span className="text-primary relative inline-block">
              Grandma Made Them.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-earth/80 font-body mb-10 max-w-2xl mx-auto">
            Experience the true "Taste of Home, Preserved with Love". Our authentic Andhra pickles are made with premium ingredients, traditional spices, and cold-pressed oils.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#products" 
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-label font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30 w-full sm:w-auto justify-center"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </a>
            <a 
              href="#how-to-order" 
              className="flex items-center gap-2 bg-white hover:bg-warm text-earth border-2 border-earth/10 px-8 py-4 rounded-full font-label font-bold text-lg transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              How to Order
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-earth/10 pt-8">
            <div className="flex flex-col items-center">
              <span ref={varietiesRef} className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-1">0+</span>
              <span className="text-xs sm:text-sm font-label font-medium text-earth/70 uppercase tracking-wider">Varieties</span>
            </div>
            <div className="flex flex-col items-center border-l border-r border-earth/10">
              <span className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-1">100%</span>
              <span className="text-xs sm:text-sm font-label font-medium text-earth/70 uppercase tracking-wider">Natural</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-1">Home</span>
              <span className="text-xs sm:text-sm font-label font-medium text-earth/70 uppercase tracking-wider">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
