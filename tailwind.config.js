module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      sm: { max: '640px' },
      // => @media (min-width: 640px) { ... }

      md: { max: '768px' },
      // => @media (min-width: 768px) { ... }

      lg: { max: '1042px' },
      // => @media (min-width: 1024px) { ... }

      laptop: '1042px',
      // => @media (min-width: 1024px) { ... }

      xl: { max: '1280px' },
      // => @media (min-width: 1280px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/img/melanie-weidmann.jpg')",
        'bid-pattern': "url('./assets/img/purple-background.jpg')"
        
      },
    },
    container: {
      center: true,
    },
    colors: {
      'c-blue': '#725BDA',
      'c-white': '#ffffff',
      'c-black': '#000',
      'c-input': '#2a2d3a',
    },
  },
  plugins: [],
};
