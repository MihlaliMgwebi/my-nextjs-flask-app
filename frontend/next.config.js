// module.exports = {
//   reactStrictMode: true,
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//   },
//   webpack: (config) => {
//     // Custom webpack configurations can be added here
//     return config;
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
      return [
      {
          source: '/api/:path*',
          destination:
          process.env.NODE_ENV === 'development'
              ? 'http://127.0.0.1:8000/api/:path*'
              : '/api/',
      },
      ]
},
output: "export",
}

import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
});

export default {
  ...pwaConfig,
  ...nextConfig,
  reactStrictMode: true,
};