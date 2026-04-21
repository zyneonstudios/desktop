export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,script,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require('tailwindcss/nesting'), require('autoprefixer')],
}