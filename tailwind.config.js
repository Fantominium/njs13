/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui:
  {
    themes: ["light", "dark", "coffee", "dim", "retro", "aqua", "emerald", "pastel",  {
      mytheme: {
          
        "primary": "#a5b4fc",
                  
        "primary-content": "#0f0916",
                  
        "secondary": "#1e9484",
                  
        "secondary-content": "#01100d",
                  
        "accent": "#008a74",
                  
        "accent-content": "#000705",
                  
        "neutral": "#78716c",
                  
        "neutral-content": "#e3e1e0",
                  
        "base-100": "#e4fffe",
                  
        "base-200": "#c6dedd",
                  
        "base-300": "#a9bebd",
                  
        "base-content": "#121616",
                  
        "info": "#005fde",
                  
        "info-content": "#cfe1fc",
                  
        "success": "#65a30d",
                  
        "success-content": "#030a00",
                  
        "warning": "#facc15",
                  
        "warning-content": "#150f00",
                  
        "error": "#da404a",
                  
        "error-content": "#110102",

      },
    }],
},
  plugins: [    
    require ("@tailwindcss/typography"),
    require("daisyui")
  ],
}
