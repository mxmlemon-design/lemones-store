# Lemones Store 🍋✨

A luxury dropshipping e-commerce platform specializing in fashion and premium gadgets.

## 🎨 Design Philosophy

Lemones represents luxury, elegance, and premium quality. Our color palette features:
- Deep Emerald Green
- Wine Red
- Black
- Beige
- Golden Orange

## 🏗️ Architecture

### Monorepo Structure
```
lemones-store/
├── client/           # Next.js frontend
├── server/           # Node.js backend
└── shared/          # Shared types & utilities
```

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14+
- React 18+
- Tailwind CSS
- Framer Motion (animations)
- Stripe.js (payments)

**Backend:**
- Node.js + Express
- MongoDB
- JWT Authentication
- Stripe API

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Features

- ✅ Stunning Product Catalog
- ✅ Shopping Cart
- ✅ Checkout Flow
- ✅ User Authentication
- ✅ Order Management
- ✅ Admin Dashboard
- ✅ Payment Processing
- ✅ Wishlist System
- ✅ Product Search & Filtering

## 🎯 Timeline

- **Week 1:** Core functionality & structure
- **Week 2:** Polish, animations, deployment

## 📝 Setup Instructions

### Environment Variables

**Client (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
```

**Server (.env):**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/lemones
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=your_key
NODE_ENV=development
```

---

Built with ❤️ for luxury dropshipping
