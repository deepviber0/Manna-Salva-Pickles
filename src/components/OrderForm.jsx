import { useState } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OrderForm({ onBack }) {
  const { cartItems, cartTotal } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    instructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = (e) => {
    e.preventDefault();

    const itemsList = cartItems
      .map(item => `• ${item.name} x${item.qty} — ₹${item.price * item.qty}`)
      .join('\n');

    const message = `
🛒 *New Order — Manna Salva*

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}, 
${formData.city} - ${formData.pincode}

*Order Summary:*
${itemsList}

*Order Total: ₹${cartTotal}*

${formData.instructions ? `\n*Special Instructions:*\n${formData.instructions}` : ''}

_Sent via Manna Salva website_
    `.trim();

    const encoded = encodeURIComponent(message);
    const number = import.meta.env.VITE_WHATSAPP_NUMBER; // Target WhatsApp number from env

    window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
  };

  return (
    <div className="flex flex-col h-full">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-earth/70 hover:text-primary transition-colors font-label font-medium mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Cart
      </button>

      <form id="order-form" onSubmit={generateWhatsAppMessage} className="space-y-4 flex-1">
        <div>
          <label className="block text-sm font-label font-bold text-earth mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-earth/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-label font-bold text-earth mb-1">WhatsApp Number *</label>
          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-earth/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
            placeholder="9876543210"
          />
        </div>

        <div>
          <label className="block text-sm font-label font-bold text-earth mb-1">Complete Address *</label>
          <textarea
            name="address"
            required
            rows="2"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-earth/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body resize-none"
            placeholder="House/Flat No., Street Name, Landmark"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-label font-bold text-earth mb-1">City *</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-earth/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-sm font-label font-bold text-earth mb-1">Pincode *</label>
            <input
              type="text"
              name="pincode"
              required
              pattern="[0-9]{6}"
              title="Please enter a valid 6-digit pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-earth/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
              placeholder="123456"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-label font-bold text-earth mb-1">Special Instructions (Optional)</label>
          <input
            type="text"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-earth/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
            placeholder="e.g. Leave at the door"
          />
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-earth/10">
        <button
          form="order-form"
          type="submit"
          className="w-full bg-wa hover:bg-[#1DA851] text-white py-4 rounded-xl font-label font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-wa/20"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          Place Order on WhatsApp
        </button>
      </div>
    </div>
  );
}
