import { Heart, Leaf, Truck } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      id: 1,
      title: 'Handmade with Love',
      description: 'Prepared in small batches to preserve authentic flavors and unmatched quality.',
      icon: <Heart className="w-10 h-10 text-primary mb-4" />
    },
    {
      id: 2,
      title: '100% Natural',
      description: 'Zero artificial preservatives, colors, or flavors. Just pure, natural ingredients.',
      icon: <Leaf className="w-10 h-10 text-primary mb-4" />
    },
    {
      id: 3,
      title: 'Delivered Fresh',
      description: 'From our kitchen to your dining table, safely packed to retain freshness.',
      icon: <Truck className="w-10 h-10 text-primary mb-4" />
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Why Choose Manna Salva?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="bg-white rounded-2xl p-8 text-center shadow-xl shadow-black/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-earth mb-3">{reason.title}</h3>
              <p className="text-earth/70 font-body leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
