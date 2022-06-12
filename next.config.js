/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_PORT: process.env.BACKEND_PORT,
  }
}

module.exports = nextConfig
