/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-black': '#0A0A0A',
                'dark-grey': '#1F1F1F',
                'blood-red': '#8B0000',
                'electric-blue': '#00FFFF',
                'off-white': '#E0E0E0',
            },
            fontFamily: {
                serif: ['Cinzel', 'serif'],
                'slab': ['Roboto Slab', 'serif'],
                sans: ['Pretendard', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
