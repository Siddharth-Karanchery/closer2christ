/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.psephizo.com",
      },
    ],
  },
  output: "export", // <=== enables static exports
  basePath: "/closer2christ",
};

export default nextConfig;
