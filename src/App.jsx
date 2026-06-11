import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import HowToOrder from './components/HowToOrder';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-warm font-body selection:bg-gold/30">
        <Navbar />
        <main>
          <Hero />
          <ProductGrid />
          <HowToOrder />
          <WhyUs />
        </main>
        <Footer />
        <Cart />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
}

export default App;
