import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#dadad0',
                foreground: 'var(--foreground)',
                primary: '#7d972d',
                second: '#bf9f6d',
                success: '#14903a',
                warning: '#f7c53a',
                danger: '#cf292b',
                info: '#1296f6',
                black: '#101010',
                white: '#ffffff',
                gray: '#b6b6b6',
            },
        },
    },
    plugins: [],
};
export default config;
