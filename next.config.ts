import type { NextConfig } from "next";

import createNextIntlPlugn from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugn();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
