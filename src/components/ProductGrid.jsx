import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductGrid() {
  const [filter, setFilter] = useState('All');

  const filteredProducts = products.filter(product => {
    if (filter === 'All') return true;
    if (filter === 'Veg') return product.category === 'Vegetarian';
    if (filter === 'Non-Veg') return product.category === 'Non-Vegetarian';
    return true;
  });

  return (
    <section id="products" className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-earth mb-4">
            Our Authentic Collection
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
          
          {/* Filters */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-earth/5">
            {['All', 'Veg', 'Non-Veg'].map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-full font-label font-bold text-sm transition-all duration-300 ${
                  filter === tab 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-earth/70 hover:text-earth hover:bg-warm/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
