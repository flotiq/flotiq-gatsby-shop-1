module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}', // Flotiq Components location
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'light-blue': '#E9F3FF',
                primary: '#0083FC',
                'primary-2': '#015BD7',
                'dark-blue': '#141046',
            },
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
