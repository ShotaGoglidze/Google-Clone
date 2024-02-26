/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'freelogopng.com',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
