import { deep } from '@theme-ui/presets';
import { merge } from 'theme-ui';

const theme = merge(deep, {
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#1976d2',
    secondary: '#5c6bc0',
    accent: '#f50057',
    muted: '#f5f5f5',
    light: '#e0e0e0',
    dark: '#263238',
    highlight: 'rgba(25, 118, 210, 0.1)',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
  },
  fonts: {
    body: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    monospace: 'Menlo, monospace',
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
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 1200,
    narrow: 800,
  },
  borders: {
    none: 'none',
    thin: '1px solid',
    medium: '2px solid',
  },
  radii: {
    none: 0,
    default: 4,
    medium: 8,
    large: 16,
    round: 9999,
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    large: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [5, 6],
      mt: 4,
      mb: 3,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4, 5],
      mt: 4,
      mb: 3,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [3, 4],
      mt: 4,
      mb: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [2, 3],
      mt: 4,
      mb: 3,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 'default',
      boxShadow: 'small',
      backgroundColor: 'background',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 'medium',
      },
    },
    project: {
      padding: 4,
      borderRadius: 'medium',
      boxShadow: 'medium',
      backgroundColor: 'background',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 'large',
      },
    },
    experience: {
      padding: 4,
      borderRadius: 'medium',
      boxShadow: 'small',
      backgroundColor: 'background',
      borderLeft: '4px solid',
      borderLeftColor: 'primary',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      '&:hover': {
        bg: 'primary',
      },
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      '&:hover': {
        bg: 'highlight',
      },
    },
    text: {
      color: 'primary',
      bg: 'transparent',
      '&:hover': {
        bg: 'highlight',
      },
    },
  },
  layout: {
    container: {
      maxWidth: 'container',
      px: [3, 4],
      mx: 'auto',
    },
    narrow: {
      maxWidth: 'narrow',
      px: [3, 4],
      mx: 'auto',
    },
  },
});

export default theme; 