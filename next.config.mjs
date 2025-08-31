const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Optional: Disable image optimization for static export
  },
  assetPrefix: isProd ? '/your-repo-name/' : '',
  basePath: isProd ? '/your-repo-name' : '',
};
