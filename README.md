# EventTier - Tier-Based Event Showcase Platform

A responsive web application that displays events to users based on their subscription tier, built as a screening test project for Psypher AI.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 📋 Features

- **Tier-based Authentication**: Users can only view events for their tier or below
- **Responsive Design**: Mobile-friendly interface with clean UI
- **Event Management**: Admin panel for creating and managing events
- **Real-time Updates**: Live event data synchronization
- **User Dashboard**: Personalized event recommendations

## 🎯 User Tiers

- **Free**: Access to free events only
- **Silver**: Access to free + silver events
- **Gold**: Access to free + silver + gold events  
- **Platinum**: Access to all events

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/adityatekale27/eventtier.git
   cd eventtier-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000)

## 🎪 Demo Credentials

- **Free User**: `free@demo.com` / `freedemo`
- **Silver User**: `silver@demo.com` / `silverdemo`
- **Gold User**: `gold@demo.com` / `golddemo`
- **Platinum User**: `platinum@demo.com` / `platinumdemo`
- **Admin**: `admin@demo.com` / `admindemo`

## 🚀 Deployment

Deployed on Vercel: [Live Demo]*upcoming...*

## 👨💻 Developer

**Aditya Tekale**
- Email: aditekale27@gmail.com
- GitHub: [@adityatekale27](https://github.com/adityatekale27)
- LinkedIn: [linkedin.com/in/adityatekale](https://linkedin.com/in/adityatekale)

*Built for Psypher AI Screening Test - August 2025*