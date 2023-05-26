/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: isProd ? '/resume_portfolio_website/' : '',
    basePath: isProd ? '/resume_portfolio_website' : '',
    images: {
        unoptimized: true,
    },
    output: "export",
}

module.exports = nextConfig