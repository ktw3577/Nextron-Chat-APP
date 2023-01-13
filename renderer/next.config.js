module.exports = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    return config;
  },
};
