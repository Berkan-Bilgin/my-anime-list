/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // Diğer yapılandırma seçeneklerinizi buraya ekleyebilirsiniz
};

export default nextConfig;
