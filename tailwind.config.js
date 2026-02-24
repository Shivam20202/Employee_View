module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--bg-primary)",
          foreground: "var(--text-light)",
        },
        // Secondary Colors
        secondary: {
          background: "var(--bg-secondary)",
          foreground: "var(--text-secondary)",
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          light: "var(--text-light)",
        },
        // Background Colors
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          light: "var(--bg-light)",
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          light: "var(--border-light)",
        },
        // Component-specific colors
        sidebar: {
          background: "var(--sidebar-bg)",
        },
        header: {
          background: "var(--header-bg)",
        },
        button: {
          background: "var(--button-bg)",
          border: "var(--button-border)",
        },
        search: {
          text: "var(--search-text-color)",
          border: "var(--search-border)",
        },
        dropdown: {
          text: "var(--dropdown-text-color)",
          border: "var(--dropdown-border)",
        },
      },
      // Typography
      fontSize: {
        'xs': 'var(--font-size-sm)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
      },
      lineHeight: {
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
      },
      fontFamily: {
        'primary': ['var(--font-family-primary)', 'Inter', 'sans-serif'],
      },
      // Spacing
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
      },
      gap: {
        'xs': 'var(--gap-xs)',
        'sm': 'var(--gap-sm)', 
        'md': 'var(--gap-md)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
        '3xl': 'var(--gap-3xl)',
        '4xl': 'var(--gap-4xl)',
        '5xl': 'var(--gap-5xl)',
      },
      // Border Radius
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },
      // Border Width
      borderWidth: {
        'thin': 'var(--border-width-thin)',
      },
      // Layout
      width: {
        'component-sm': 'var(--width-percent-sm)',
        'component-md': 'var(--width-percent-md)', 
        'component-lg': 'var(--width-percent-lg)',
        'component-xl': 'var(--width-percent-xl)',
        'component-2xl': 'var(--width-percent-2xl)',
        'component-3xl': 'var(--width-percent-3xl)',
        'sidebar': 'var(--sidebar-width)',
        'search': 'var(--search-width)',
        'dropdown': 'var(--dropdown-width)',
      },
    },
  },
  plugins: []
};