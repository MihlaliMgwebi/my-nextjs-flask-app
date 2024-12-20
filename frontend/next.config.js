module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  webpack: (config) => {
    // Custom webpack configurations can be added here
    return config;
  },
};