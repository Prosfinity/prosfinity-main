const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  // Rewrites all /api/* calls to vpn.prosfinity.com
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://vpn.prosfinity.com/api/:path*',
      },
      {
        source: '/payment/:path*',
        destination: 'https://vpn.prosfinity.com/payment/:path*',
      },
    ];
  },
};

module.exports = withFlowbiteReact(nextConfig);
