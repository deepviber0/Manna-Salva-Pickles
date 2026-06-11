import { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import OrderForm from './OrderForm';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const [showForm, setShowForm] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-earth/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Cart Panel */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-[450px] bg-warm shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-earth/10 bg-white">
          <h2 className="text-2xl font-heading font-bold text-earth flex items-center gap-2">
            <ShoppingBag className="text-primary" />
            {showForm ? 'Checkout Details' : 'Your Cart'}
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-earth/50 hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {showForm ? (
            <OrderForm onBack={() => setShowForm(false)} />
          ) : (
            <>
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                    <ShoppingBag className="w-10 h-10 text-primary/40" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-earth">Your cart is empty</h3>
                  <p className="text-earth/60 font-body">Looks like you haven't added any delicious pickles yet.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 bg-earth text-white px-6 py-3 rounded-full font-label font-bold hover:bg-primary transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-earth/5">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-warm flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-heading font-bold text-earth leading-tight pr-4">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-earth/40 hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="text-sm font-body text-earth/60 mb-2">{item.weight}</div>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-body font-bold text-primary tracking-tight">₹{item.price}</span>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center bg-warm rounded-full border border-earth/10">
                            <button 
                              onClick={() => updateQuantity(item.id, item.qty - 1)}
                              className="w-8 h-8 flex items-center justify-center text-earth hover:text-primary transition-colors"
                              disabled={item.qty <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-label font-bold text-sm">{item.qty}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.qty + 1)}
                              className="w-8 h-8 flex items-center justify-center text-earth hover:text-primary transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!showForm && cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-earth/10">
            <div className="flex items-center justify-between mb-4 font-heading text-lg">
              <span className="font-bold text-earth">Subtotal</span>
              <span className="font-body font-bold text-primary text-2xl tracking-tight">₹{cartTotal}</span>
            </div>
            <p className="text-xs font-body text-earth/50 text-center mb-6">
              Shipping & taxes calculated on WhatsApp
            </p>
            <button 
              onClick={() => setShowForm(true)}
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-label font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
            >
              Proceed to Order
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
