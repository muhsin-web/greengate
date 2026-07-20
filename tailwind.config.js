/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          accent: {
            green: "var(--color-primary-ascent)",
            light: "var(--color-ascent)",
            lighter: "var(--color-ascent-light)",
          },
          foreground: "var(--color-bg)",
          text: "var(--color-primary-text)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          text: "var(--color-secondary-text)",
          textlight: "var(--color-secondary-textlight)",
        },
        accent: "var(--color-accent)",
        border: {
          stroke: "var(--color-stroke)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          bg: "var(--color-error-bg)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          bg: "var(--color-success-bg)",
        },
      },
      fontFamily: {
        sans: ["BricolageGrotesque-Regular"],
        "sans-medium": ["BricolageGrotesque-Medium"],
        "sans-semibold": ["BricolageGrotesque-SemiBold"],
        "sans-bold": ["BricolageGrotesque-Bold"],
        "sans-extrabold": ["BricolageGrotesque-ExtraBold"],
        "sans-light": ["BricolageGrotesque-Light"],
        "sans-extralight": ["BricolageGrotesque-ExtraLight"],
      },
    },
  },
  plugins: [],
};
