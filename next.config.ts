import createNextIntlPlugn from 'next-intl/plugin';
import webpack, { Configuration } from 'webpack';
import dotenv from 'dotenv';
import { NextConfig } from 'next';


const withNextIntl = createNextIntlPlugn();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

const { parsed: myEnv } = dotenv.config({path: '/'});

module.exports = {
  webpack: (config: Configuration) => {
    config.plugins?.push(new webpack.EnvironmentPlugin(myEnv || {}));
    return config;
  },
};


module.exports = withNextIntl(nextConfig);
