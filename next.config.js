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
				destination: 'https://discord.gg/sr2JGq6m9Y',
				permanent: true,
			},{
				source: '/github',
				destination: 'https://github.com/Pedrvisk',
				permanent: true,
			}
		]
	}
}

module.exports = nextConfig;
