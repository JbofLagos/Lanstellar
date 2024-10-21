/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'moccasin-decent-amphibian-950.mypinata.cloud',
                // port: '',
                // pathname: '/media/catalog/product/**',
            },

        ],
    },
};

export default config;
