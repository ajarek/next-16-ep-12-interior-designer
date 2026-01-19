import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["next-16-ep-12-interior-designer.vercel.app"], // Add your Vercel domain
    unoptimized: true, // If you need to bypass Next.js image optimization
  },
}

export default nextConfig
