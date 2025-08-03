# EventTier - Tier-Based Event Showcase Platform

A responsive web application that displays events to users based on their subscription tier, built as a screening test project for Psypher AI.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: ShadCN/UI
- **Icons**: Lucide React

## 📋 Features

- **Tier-based Authentication**: Users can only view events for their tier or below
- **Responsive Design**: Mobile-friendly interface with clean UI
- **Event Management**: Admin panel for creating and managing events
- **User Dashboard**: Personalized event recommendations
- **Loading States**: Skeleton animations for better UX
- **Security Headers**: Production-ready security configuration

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
   Create your environment file from the template:

   ```env
   cp .env.example .env
   ```

   Then update `.env` with your actual credentials:

   ```env
   NODE_ENV=development
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Database Setup**

Set up your Supabase database:
1. Create a new project at [Supabase](https://app.supabase.com)
2. Run the SQL schema from `database/schema.sql` in your Supabase SQL editor
3. Seed the database with sample events from `database/seed.sql`

5. **Clerk Configuration**

1. Go to [Clerk Dashboard](https://dashboard.clerk.dev)
2. Create a new application
3. Configure user metadata to include `tier` field
4. Set up demo users with different tier levels

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open the application** 
Visit [http://localhost:3000](http://localhost:3000)

## 🎪 Demo Credentials

- **Free User**: `free@eventtier.demo` / `demo123`
- **Silver User**: `silver@eventtier.demo` / `demo123`  
- **Gold User**: `gold@eventtier.demo` / `demo123`
- **Platinum User**: `platinum@eventtier.demo` / `demo123`
- **Admin**: `admin@eventtier.demo` / `demo123`

## 🚀 Deployment

- **Production URL**: [https://eventtier.vercel.app](https://eventtier.vercel.app)
- **Status**: Inactive

## 👨💻 Developer

**Aditya Tekale**
- Email: aditekale27@gmail.com
- GitHub: [@adityatekale27](https://github.com/adityatekale27)
- LinkedIn: [linkedin.com/in/adityatekale](https://linkedin.com/in/adityatekale)

*Built for Psypher AI Screening Test - August 2025*