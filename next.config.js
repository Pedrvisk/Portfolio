const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  i18n,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/users/216662585737478144',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/Pedrvisk',
        permanent: true,
      },
      {
        source: '/spotify',
        destination:
          'https://open.spotify.com/user/novoshigod?si=dc5e4661f79a4be',
        permanent: true,
      },
      {
        source: '/lastfm',
        destination: 'https://www.last.fm/pt/user/Pedrov1sk',
        permanent: true,
      },
      {
        source: '/wakapi',
        destination: 'https://wakapi.dev/',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'miuky.xyz',
      },
    ],
  },
};

module.exports = nextConfig;
