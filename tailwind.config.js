const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        colors: {
            'brand': {
                100: '#cffafe',
                200: '#a5f3fc',
                300: '#67e8f9',
                400: '#22d3ee',
                500: '#06b6d4',
                600: '#0891b2',
                700: '#0e7490',
                800: '#155e75',
                900: '#164e63',
            },
        },
    },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        flowbite.content(),
    ],
    plugins: [
        // ...
        flowbite.plugin(),
    ],
};