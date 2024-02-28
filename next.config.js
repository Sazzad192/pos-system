/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.ehshirts.com",
      "richmanbd.com",
      "www.aristobrat.in",
      "rukminim2.flixcart.com",
      "kinclimg9.bluestone.com",
      "media.e-valy.com",
    ],
  },
};

module.exports = nextConfig;
