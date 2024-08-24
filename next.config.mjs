/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: "build",
  env: {
    MAILER_API: process.env.MAILER_API,
  },
};

export default nextConfig;
