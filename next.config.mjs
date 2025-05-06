/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  output: 'export', // Static site export
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};
