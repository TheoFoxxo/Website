/** @type {import('next').NextConfig} */
const RIMP = require("next-remove-imports")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = RIMP({ ...nextConfig, })