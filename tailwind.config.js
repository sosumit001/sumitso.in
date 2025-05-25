const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        shrinkAndExpand: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        shrinkAndExpand: "shrinkAndExpand 0.4s ease-in-out",
      },
      boxShadow: {
        shadowSm: "var(--bg-shadow-sm)",
        shadowMd: "var(--bg-shadow-md)",
        shadowLg: "var(--bg-shadow-lg)",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "2.145rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        black: "var(--color-black)",
        grey: "var(--color-gray-800)",
        teal: "var(--color-teal)",
        tealBright: "var(--color-teal-bright)",
        titledCream: "var(--color-tinted-cream)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "var(--color-gray-800)",
            maxWidth: "100%",
            h1: {
              color: "var(--color-black)",
              fontWeight: "700",
              marginTop: "2em",
              marginBottom: "0.5em",
            },
            h2: {
              color: "var(--color-black)",
              fontWeight: "600",
              marginTop: "1.5em",
              marginBottom: "0.5em",
            },
            h3: {
              color: "var(--color-black)",
              fontWeight: "600",
              marginTop: "1.5em",
              marginBottom: "0.5em",
            },
            a: {
              color: "var(--color-teal-bright)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.2em 0.4em",
              borderRadius: "0.25em",
              fontWeight: "400",
            },
            pre: {
              backgroundColor: "#1e293b",
              color: "#f8fafc",
              borderRadius: "0.5em",
              padding: "1em",
              overflow: "auto",
              margin: "1.5em 0",
            },
            img: {
              borderRadius: "0.5em",
              marginTop: "1.5em",
              marginBottom: "1.5em",
              boxShadow: "var(--bg-shadow-sm)",
            },
            blockquote: {
              borderLeftColor: "var(--color-teal)",
              fontStyle: "italic",
              color: "var(--color-gray-800)",
              borderLeftWidth: "4px",
              paddingLeft: "1.5em",
              marginLeft: "0",
              marginRight: "0",
            },
            ul: {
              listStyleType: "disc",
              paddingLeft: "1.5em",
              marginTop: "1em",
              marginBottom: "1em",
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: "1.5em",
              marginTop: "1em",
              marginBottom: "1em",
            },
            li: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
            table: {
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            th: {
              borderBottom: "2px solid var(--color-tinted-cream)",
              padding: "0.75em",
              fontWeight: "600",
              textAlign: "left",
            },
            td: {
              borderBottom: "1px solid var(--color-tinted-cream)",
              padding: "0.75em",
              textAlign: "left",
            },
          },
        },
      }),
    },
  },
  plugins: [typography()],
};
