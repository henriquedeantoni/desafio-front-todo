/**  @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./src/pages/TodoPage.tsx",  // Inclua apenas a página específica onde você quer Tailwind CSS
    "./src/components/**/*.{js,ts,jsx,tsx}",    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

