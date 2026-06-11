import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../Images/logo.jpeg';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-warm shadow-md py-3' : 'bg-warm/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Manna Salva Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-gold"
              />
              <span className="font-heading font-bold text-xl sm:text-2xl text-primary tracking-wide">
                Manna Salva
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="font-label text-earth hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="#how-to-order" className="font-label text-earth hover:text-primary transition-colors font-medium">
              How to Order
            </a>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-earth hover:text-primary transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-warm text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button and cart */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-earth hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-warm text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-earth hover:text-primary p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-warm border-t border-earth/10 absolute top-full left-0 right-0 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium font-label text-earth hover:text-primary hover:bg-gold/10 rounded-md"
            >
              Products
            </a>
            <a
              href="#how-to-order"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium font-label text-earth hover:text-primary hover:bg-gold/10 rounded-md"
            >
              How to Order
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
