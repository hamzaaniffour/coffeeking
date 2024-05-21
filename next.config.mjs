/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
    images: {
        domains: [
            "dev-padre.pantheonsite.io",
            "teeslax.org",
        ],
    }
};

export default withPlaiceholder(nextConfig);
