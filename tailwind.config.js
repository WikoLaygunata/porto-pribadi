module.exports = {
    content: ['./index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                display: ['"Outfit"', 'sans-serif'],
                mono: ['"Fira Code"', 'monospace'],
            },
            colors: {
                dark: '#0f172a',
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                marquee: 'marquee 30s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
};
