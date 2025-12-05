/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's0.wp.com',
        port: '',
        pathname: '/mshots/v1/**',
      },
      {
        protocol: 'https',
        hostname: 'replit.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Use modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 60 seconds
  },
  // Optimize bundle size
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
