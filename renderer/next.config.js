module.exports = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    return config;
  },
};
