import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        titleColor: '#212529',
        tagColor: '#212529',
        modifyfont: '#12b886',
        modifyfontHover: '#38d9a9',
      },
    },
  },
  plugins: [],
};
export default config;
