module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Add any custom colors you need
            },
        },
    },
    plugins: [],
}

export default {
    theme: {
        extend: {
            keyframes: {
                'slide-in-bottom': {
                    '0%': {
                        transform: 'translateY(1000px)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
            },
            animation: {
                'slide-in-bottom': 'slide-in-bottom 0.8s ease-out both',
            },
        },
    },
    plugins: [],
};
