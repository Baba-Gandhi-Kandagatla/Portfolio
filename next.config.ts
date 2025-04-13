import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Build will pass even if there are type errors
  },
};


export default nextConfig;
