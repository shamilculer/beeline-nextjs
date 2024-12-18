import type { Config } from "tailwindcss";

export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
        primary: 'var(--primary)',
        primary2: 'var(--primary2)',
  			background: 'var(--background)',
  			text: 'hsl(var(--text))',
        destructive: 'var(--destructive)'
		  },
      backgroundImage: {
        bgGradient: 'var(--bg-gradient-img)',
        primaryGradient: 'var(--primary-gradient)'
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
