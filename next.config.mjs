/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
    images: {
        domains: [
            "dev-cyclewaycoffee.pantheonsite.io",
            "dev-padre.pantheonsite.io",
        ],
    }
};

export default withPlaiceholder(nextConfig);
