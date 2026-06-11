import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  const isVeg = product.category === 'Vegetarian';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-earth/5 group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-warm">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-label font-bold text-earth shadow-sm flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
            {product.category}
          </div>
          
          {product.tag && (
            <div className="bg-gold text-white px-3 py-1 rounded-full text-xs font-label font-bold shadow-sm">
              {product.tag}
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-bold text-xl text-earth leading-tight pr-4">
            {product.name}
          </h3>
        </div>
        
        <p className="text-earth/70 font-body text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Meta info */}
        <div className="flex items-center gap-4 mt-auto mb-5">
          <div className="flex items-center gap-1">
            <span className="text-xs font-label text-earth/60 uppercase">Weight:</span>
            <span className="text-sm font-body font-semibold text-earth">{product.weight}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-xs font-label text-earth/60 uppercase">Spice:</span>
            <span className="text-primary font-bold tracking-widest" title={`Spice Level: ${product.spice}`}>
              {'🌶'.repeat(product.spice)}
            </span>
          </div>
        </div>
        
        {/* Action area */}
        <div className="flex items-center justify-between pt-4 border-t border-earth/10">
          <div className="flex flex-col">
            <span className="text-xs font-label text-earth/60 uppercase mb-0.5">Price</span>
            <span className="font-body font-bold text-2xl text-primary tracking-tight">₹{product.price}</span>
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-earth hover:bg-primary text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-label font-bold hidden sm:block px-1">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
