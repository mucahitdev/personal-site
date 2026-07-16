import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/foldermini/download',
        destination: 'https://apps.apple.com/app/id6782827870',
        permanent: false,
      },
      // The app shipped as DualShot; its App Store listing still points at the
      // old paths. Keep them resolving until that metadata is updated.
      {
        source: '/dualshot/:path*',
        destination: '/verso/:path*',
        permanent: true,
      },
      {
        source:
          '/:locale(tr|es|pt|de|fr|it|nl|ru|pl|ja|ko|zh|ar|hi|id|vi)/dualshot/:path*',
        destination: '/:locale/verso/:path*',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(withMDX(nextConfig));
