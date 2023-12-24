/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fsl-assessment-public-files.s3.amazonaws.com",
        port: "",
        pathname: "/assessment-cc-01/**"
      }
    ],
    domains: ["fsl-assessment-public-files.s3.amazonaws.com"]
  }
};

module.exports = nextConfig;
