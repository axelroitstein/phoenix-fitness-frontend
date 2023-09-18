/** @type {import('next').NextConfig} */
const nextConfig = {

    modularizeImports: {
        '@mui/material': {
          transform: '@mui/material/{{member}}',
        },
        '@mui/icons-material': {
          transform: '@mui/icons-material/{{member}}',
        },
        
},
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
}
module.exports = nextConfig
