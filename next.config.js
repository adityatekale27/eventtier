// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Enable experimental features */
  experimental: {
    serverComponentsExternalPackages: ['@clerk/nextjs', '@supabase/supabase-js'],
    optimizePackageImports: ['lucide-react'],
  },

  /* Allow external domains for images */
  images: {
    domains: [
      'images.clerk.dev',
      'img.clerk.com',
      'zywczffiopkihmtswvqr.supabase.co',
    ],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
  },
  
  /* Security headers */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ]
      }
    ]
  },
};

export default nextConfig;
