/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.nextwebworks.in',
          },
        ],
        destination: 'https://nextwebworks.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
