/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
    images: {
        domains: [
            "images.pexels.com",
            "cdn.cssauthor.com",
            "lift-car.com",
            "dev-padre.pantheonsite.io",
        ],
    }
};

export default withPlaiceholder(nextConfig);
