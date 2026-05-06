import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        slate: "#344054",
        mist: "#F2F4F7",
        line: "#D0D5DD",
        field: "#667085",
        sand: "#F9F8F6",
        brass: "#A17C3A",
        pine: "#1E3A34"
      },
      boxShadow: {
        panel: "0 20px 45px -24px rgba(16, 24, 40, 0.25)"
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
