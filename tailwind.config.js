/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui:
  {
    themes: ["light", "dark", "coffee", "winter", {
      mytheme: {
        "primary": "#a6fcdc",
        "secondary": "#f9dd75",
        "accent": "#37c697",
        "neutral": "#291d34",
        "base-100": "#38455c",
        "info": "#7cc3f3",
        "success": "#0d733c",
        "warning": "#f4d32f",
        "error": "#e33566",
      }
    }],
},
  plugins: [    
    require ("@tailwindcss/typography"),
    require("daisyui")
  ],
}
