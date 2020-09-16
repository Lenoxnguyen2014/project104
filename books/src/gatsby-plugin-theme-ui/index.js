export default {
  useCustomProperties: false,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#CFB53B',
    modes: {
      dark: {
        text: '#fff',
        background: '#7f7f7f',
        primary: '#CFB53B',
      }
    }
  },
  styles: {
    h1: {
      variant: 'text.heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2,
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    },
    a: {
      color: 'primary',
      '&:hover': {
        background: '#E6BE8A',
        color: '#000',
      }
    },
    buttons: {
      primary: {
        color: 'background',
        bg: 'primary',
        '&:hover': {
          bg: 'yellow',
        }
      }
    },
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    p: {
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
      padding: "1rem" 
    },
    h2: {
      variant: 'text.heading',
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },

  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  links: {
    nav: {
      px: 2,
      py: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    }
  },  

}