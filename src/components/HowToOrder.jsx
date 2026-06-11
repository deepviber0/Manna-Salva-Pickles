import { Search, ShoppingBag, FileText, MessageCircle } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    {
      id: 1,
      title: 'Browse',
      description: 'Explore our authentic collection of Andhra pickles.',
      icon: <Search className="w-8 h-8 text-primary" />
    },
    {
      id: 2,
      title: 'Add to Cart',
      description: 'Select your favorites and adjust the quantities.',
      icon: <ShoppingBag className="w-8 h-8 text-primary" />
    },
    {
      id: 3,
      title: 'Fill Details',
      description: 'Provide your delivery address and contact info.',
      icon: <FileText className="w-8 h-8 text-primary" />
    },
    {
      id: 4,
      title: 'WhatsApp Order',
      description: 'Send the auto-generated order message on WhatsApp.',
      icon: <MessageCircle className="w-8 h-8 text-wa" />
    }
  ];

  return (
    <section id="how-to-order" className="py-20 bg-white border-t border-earth/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-earth mb-4">
            How to Order
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-4"></div>
          <p className="text-earth/70 font-body max-w-2xl mx-auto">
            Ordering is simple, direct, and completely secure. No accounts, no complex checkouts. Just you and us on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-earth/10 -z-10"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-warm rounded-full flex items-center justify-center mb-6 shadow-md border border-earth/5 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300 relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-heading font-bold text-sm shadow-sm">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-earth mb-2">{step.title}</h3>
              <p className="text-earth/70 font-body text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
