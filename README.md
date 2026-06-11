# Manna Salva — Authentic Andhra Pickles 🌶️

Manna Salva is a premium, modern, and clean e-commerce website for an artisanal pickle business. It features an appetizing traditional-meets-modern design, interactive product grid with category filtering, and a direct checkout flow that allows customers to place orders directly through WhatsApp.

## 🚀 Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Architecture:** Zero backend, zero login, no payment gateway (100% WhatsApp-driven)

---

## 🛠️ Getting Started

Follow these steps to run the application locally or prepare it for hosting:

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Configure Environment Variables 🔑
Because this project is hosted publicly on GitHub, private contact information like the business phone number is kept in environment variables.

1. In the root directory, copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and set your WhatsApp contact number (include country code, no symbols or spaces. E.g., `919441476663`):
   ```env
   VITE_WHATSAPP_NUMBER=919441476663
   ```

*Note: The `.env` file is listed in `.gitignore` and will not be pushed to GitHub.*

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### 4. Build for Production
```bash
npm run build
```
The production-ready assets will be generated in the `dist` folder.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx            # Sticky top nav with cart badge
│   ├── Hero.jsx              # Banner with scroll counting stats
│   ├── ProductCard.jsx       # Individual card with add to cart, veg badge & spice indicator
│   ├── ProductGrid.jsx       # Tab filters (All, Veg, Non-Veg)
│   ├── Cart.jsx              # Slide-out panel for order summary
│   ├── OrderForm.jsx         # Customer details form & WhatsApp payload compiler
│   ├── HowToOrder.jsx        # Step-by-step ordered guide
│   ├── WhyUs.jsx             # Card grid illustrating product value
│   ├── Footer.jsx            # Multi-column footer with contact links
│   └── FloatingWhatsApp.jsx  # Pulsing floating bottom-right support link
├── data/
│   └── products.js           # Catalog items details (prices, weights, descriptions)
├── context/
│   └── CartContext.jsx       # Shared cart state (items, totals, counts)
├── App.jsx                   # Main layout container
├── main.jsx                  # React entry point
└── index.css                 # Custom font pairings & Tailwind v4 theme configuration
```

---

## 💬 WhatsApp Order Integration

When a customer clicks **Place Order on WhatsApp** in the checkout form, the website automatically builds a message payload formatted as:

```text
🛒 *New Order — Manna Salva*

*Customer Details:*
Name: John Doe
Phone: 9876543210
Address: 123 Street Name, Hyderabad - 500001

*Order Summary:*
• Raw Mango Pickle (Avakaya) x2 — ₹360
• Chicken Pickle (Kodi Pachadi) x1 — ₹320

*Order Total: ₹680*

_Sent via Manna Salva website_
```

It opens a new tab directed to `https://wa.me/{VITE_WHATSAPP_NUMBER}?text={message}` allowing the customer to click "Send" immediately.
