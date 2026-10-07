/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: '#F6F4F9',
          'bg-subtle': '#EFEBF6',
          'bg-alt': '#EDE8F5',
          surface: '#FFFFFF',
          'surface-alt': '#FAF8FC',
          card: '#FFFFFF',
          'card-hover': '#FAF8FC',
          primary: '#7C4DFF',
          'primary-hover': '#6A3AE6',
          'primary-light': '#EDE7FB',
          'primary-dark': '#481FA0',
          'text-title': 'var(--text-title, #181426)',
          'text-body': 'var(--text-body, #4F4963)',
          'text-muted': 'var(--text-muted, #857E9A)',
          'text-light': '#ABA5BF',
          border: '#E2DCED',
          'border-subtle': '#EDE8F5',
          'badge-purple': '#EDE7FB',
          'badge-blue': '#E1F1FD',
          'badge-teal': '#E0F6F2',
          'badge-peach': '#FEEBE4',
          'badge-pink': '#FCE7F3',
          'badge-amber': '#FEF3C7',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pastel-sm': '0 2px 8px rgba(124, 77, 255, 0.05)',
        'pastel-md': '0 8px 24px rgba(124, 77, 255, 0.08)',
        'pastel-lg': '0 16px 40px rgba(124, 77, 255, 0.12)',
        'pastel-card': '0 4px 20px rgba(24, 20, 38, 0.04)',
        'pastel-card-hover': '0 14px 36px rgba(124, 77, 255, 0.12)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
};
