/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZGFya2NvZGVyIiwiYSI6ImNraGRkcXQ2ZDAxbHMycHJyMWk2dDZkbTkifQ.eNbvVLBnHphPu_FSqR4TDw",
  },
};

module.exports = nextConfig;
