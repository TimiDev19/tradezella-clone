// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// ADDING i18n
import type { NextConfig } from 'next';
import i18nConfig from './next-i18next.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // i18n settings pulled directly from your next-i18next config
  i18n: i18nConfig.i18n,
};

export default nextConfig;


