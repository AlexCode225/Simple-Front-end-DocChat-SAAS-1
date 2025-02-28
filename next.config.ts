import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
    
      },
    ],
  },
  
};

export default nextConfig;
