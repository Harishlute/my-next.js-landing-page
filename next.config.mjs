const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Optional: Disable image optimization for static export
  },
  assetPrefix: isProd ? '/my-next.js-landing-page /' : '',
  basePath: isProd ? '/my-next.js-landing-page' : '',
};
