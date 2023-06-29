/** @type {import('next').NextConfig} */
const nextConfig = {}

module.export = nextConfig

module.exports = {
    reactStrictMode: true,
    images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'echowebllc-dev.s3.amazonaws.com',
        port: '',
        pathname: '/public/**',
        },
    ],
    },
}