# 🛒 ShopCart

![Demo](./images/demo.png)

ShopCart is a modern e-commerce web application built with [Next.js 15](https://nextjs.org/), [Sanity.io](https://www.sanity.io/) for headless CMS, [Clerk](https://clerk.com/) for authentication, and [Stripe](https://stripe.com/) for payments. It features a clean UI, product management, cart, wishlist, and more.

## 🚀 Features

- Product catalog with categories, brands, and deals
- Product details with images, price, stock, and characteristics
- Add to cart, wishlist, and quantity management
- Secure authentication with Clerk
- Checkout and payment integration with Stripe
- Blog and content managed via Sanity Studio
- Responsive design for all devices

## 🏗️ Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend/CMS:** Sanity.io
- **Auth:** Clerk
- **Payments:** Stripe
- **UI Components:** Radix UI, Lucide Icons

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shopcart.git
cd shopcart
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root and add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
NEXT_PUBLIC_SANITY_API_VERSION=2025-06-23
CLERK_PUBLISHABLE_KEY=your_clerk_key
STRIPE_PUBLIC_KEY=your_stripe_key
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 5. Sanity Studio

Sanity Studio is available at `/studio`. You can manage products, categories, brands, and blog content there.

## 📦 Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Lint the codebase
- `npm run typegen` – Generate Sanity TypeScript types

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Stripe Documentation](https://stripe.com/docs)

## 📝 License

MIT
