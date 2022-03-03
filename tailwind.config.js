module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#41624B',
                red: '#FF0000',
                gray: '#9fa09c',
                'light-gray': '#F4F4F4',
                'green-gray': '#E8E9E3',
            },
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            grotesque: ['Darker Grotesque', 'sans-serif'],
        },
        minHeight: {
            '1/2vh': '50vh',
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
