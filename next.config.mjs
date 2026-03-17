/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 75, 100], // Add 100 here
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
