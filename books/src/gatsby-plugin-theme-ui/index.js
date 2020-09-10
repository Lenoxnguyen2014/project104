export default {
  useCustomProperties: false,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#CFB53B',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#FFDF00',
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
      fontSize: [3, 4, 5]
    },
    a: {
      color: 'primary',
      '&:hover': {
        bg: 'dark',
      },
    },
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    p: {
      fontSize: [2, 3],
      padding: "1rem" 
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 5],
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
}