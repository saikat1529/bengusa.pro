module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
                osw: ['var(--font-oswald)', 'sans-serif'], // for titles/headings
                rob: ['var(--font-roboto)', 'sans-serif'],     // for paragraph text
                ply: ['var(--font-playwrite)', 'sans-serif'],     // for paragraph text
            },
      animation: {
        "loop-scroll": "loop-scrool 50s linear infinite",
        'scroll-up': 'scrollUp 20s linear infinite',

      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to : { transform: 'translateX(-100%)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [],
}


