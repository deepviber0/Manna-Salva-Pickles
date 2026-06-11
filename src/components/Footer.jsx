import { MessageCircle, MapPin } from 'lucide-react';
import logo from '../Images/logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-earth text-warm pt-16 pb-8 border-t-[8px] border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Manna Salva Logo"
                className="h-14 w-14 rounded-full object-cover border-2 border-gold/50 opacity-90"
              />
              <span className="font-heading font-bold text-2xl tracking-wide text-white">
                Manna Salva
              </span>
            </div>
            <p className="font-heading text-xl text-warm/90 italic mb-6">
              "The Taste of Home,<br />Preserved with Love"
            </p>
            <p className="font-body text-warm/70 text-sm max-w-sm leading-relaxed mb-6">
              Bringing authentic, traditional Andhra pickles from our family kitchen to your dining table. Made with pure ingredients and cold-pressed oils.
            </p>
            <a 
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-wa hover:bg-[#1DA851] text-white px-6 py-3 rounded-full font-label font-bold text-sm transition-transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Chat with us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 font-body text-warm/70 text-sm">
              <li><a href="#products" className="hover:text-gold transition-colors">Our Products</a></li>
              <li><a href="#how-to-order" className="hover:text-gold transition-colors">How to Order</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Delivery info</h4>
            <div className="flex items-start gap-3 font-body text-warm/70 text-sm mb-4">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p>We deliver across India. International shipping coming soon!</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-6">
              <p className="font-label font-bold text-white text-sm mb-1">Standard Delivery</p>
              <p className="font-body text-warm/60 text-xs">3-5 business days depending on location.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-warm/50 text-xs">
            © {new Date().getFullYear()} Manna Salva. All rights reserved.
          </p>
          <p className="font-body text-warm/50 text-xs">
            Designed for pickle lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
