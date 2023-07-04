const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: "export",
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets/scss')]
    }
}

module.exports = nextConfig