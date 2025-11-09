export default {
  darkMode: ["class"],
  content: ["./client/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        '3xs': '320px',  // very small phones (iPhone SE, older Androids)
        '2xs': '375px',  // small phones (iPhone 12 mini, Pixel 4a)
        'xs': '475px',
        'sm': "640px",
        'md': "768px",
        'lg': "1024px",
        'xl': "1260px",
        "2xl": "1400px",
        '3xl': '2000px',
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // IOTC Real Asset brand colors
        'iotc-primary': '#0B2442',
        'iotc-dark': '#021123',
        'iotc-gold': '#B89B7A',
        'iotc-section': '#0D2846',
        'iotc-text': '#1E1E1E',
        'iotc-gray': '#555',
        'iotc-light-gray': '#777',
        'iotc-card-bg': '#F6F8FB',
        'iotc-blue-bg': '#052a82ff',
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'sf-pro-text': ['SF Pro Text', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'poppins': ['Poppins', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'noto': ['Noto Sans', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'dm-sans': ['DM Sans', '-apple-system', 'Roboto', 'Helvetica'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        fadeDown: "fadeDown 0.5s ease-out",
        fadeUp: "fadeUp 0.3s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        '3xs': '320px',  // very small phones (iPhone SE, older Androids)
        '2xs': '375px',  // small phones (iPhone 12 mini, Pixel 4a)
        'xs': '475px',  // slightly larger phones before sm (640px)
        // existing defaults continue...
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2000px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};