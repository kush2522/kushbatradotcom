/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/demos", destination: "/case-studies", permanent: true },
      { source: "/video-resume", destination: "/about", permanent: true },
      { source: "/book", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
