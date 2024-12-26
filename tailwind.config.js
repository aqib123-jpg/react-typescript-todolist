const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust paths as needed
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", ...defaultTheme.fontFamily.sans], // Primary sans-serif fonts
        serif: ["Merriweather", "Georgia", "Times New Roman", ...defaultTheme.fontFamily.serif], // Serif fonts
        display: ["Oswald", "Arial", "Verdana", ...defaultTheme.fontFamily.sans], // Display fonts
        body: ["Open Sans", "Helvetica", "Tahoma", ...defaultTheme.fontFamily.sans], // Body fonts
        heading: ["Lora", "Georgia", "Palatino", ...defaultTheme.fontFamily.serif], // Heading fonts
        monospace: ["Courier New", "Monaco", "Consolas", "monospace"], // Monospace fonts
        handwriting: ["Dancing Script", "Cursive"], // Handwriting fonts
        futuristic: ["Orbitron", "sans-serif"], // Futuristic fonts
        cursive: ["Pacifico", "cursive"], // Cursive fonts
      },
    },
  },
  plugins: [],
};
