/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cloudinary.com', 'images.unsplash.com', 'placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
