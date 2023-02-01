module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ananddhakane01",
        permanent: true,
      },
    ];
  },
};
