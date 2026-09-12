import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async headers() {
    return [
      {
        // Apple fetches this without following redirects and requires JSON.
        // It has no extension, so the content type has to be set explicitly.
        source: '/.well-known/apple-app-site-association',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },
  async redirects() {
    // The Lecto site used to live on its own project at lecto.mucahitk.com with
    // /<locale>/privacy style paths, and those URLs are in the App Store
    // listing. Now that the domain points here, keep every one of them working.
    const lectoHost = [{ type: 'host', value: 'lecto.mucahitk.com' }];
    const lectoLegacy = [
      { from: '/', to: '/lecto' },
      { from: '/privacy', to: '/lecto/privacy-policy' },
      { from: '/terms', to: '/lecto/terms-of-use' },
      { from: '/support', to: '/lecto/support' },
    ].flatMap(({ from, to }) => [
      { source: from, has: lectoHost, destination: to, permanent: true },
      {
        source: `/:locale(en|tr)${from === '/' ? '' : from}`,
        has: lectoHost,
        destination: to,
        permanent: true,
      },
    ]);

    return [
      ...lectoLegacy,
      {
        source: '/widgetloft/download',
        destination: 'https://apps.apple.com/app/id6782827870',
        permanent: false,
      },
      // Legacy download link (kept direct to avoid a double hop).
      {
        source: '/foldermini/download',
        destination: 'https://apps.apple.com/app/id6782827870',
        permanent: false,
      },
      // FolderMini was renamed to WidgetLoft; the App Store listing and older
      // links still point at /foldermini, so keep them resolving.
      {
        source: '/foldermini/:path*',
        destination: '/widgetloft/:path*',
        permanent: true,
      },
      {
        source:
          '/:locale(tr|es|pt|de|fr|it|nl|ru|pl|ja|ko|zh|ar|hi|id|vi)/foldermini/:path*',
        destination: '/:locale/widgetloft/:path*',
        permanent: true,
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
