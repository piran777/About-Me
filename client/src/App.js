import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

const muiTheme = createTheme({
  palette: {
    primary: { main: theme.colors.primary },
    secondary: { main: theme.colors.secondary },
    error: { main: theme.colors.error },
    warning: { main: theme.colors.warning },
    success: { main: theme.colors.success },
    background: {
      default: theme.colors.background,
      paper: theme.colors.backgroundAlt,
    },
    text: {
      primary: theme.colors.text,
      secondary: theme.colors.textSecondary,
    },
    divider: theme.colors.border,
  },
  typography: {
    fontFamily: theme.fonts.body,
    h1: { fontFamily: theme.fonts.heading, fontWeight: 700, letterSpacing: '-0.025em' },
    h2: { fontFamily: theme.fonts.heading, fontWeight: 700, letterSpacing: '-0.025em' },
    h3: { fontFamily: theme.fonts.heading, fontWeight: 600, letterSpacing: '-0.02em' },
    h4: { fontFamily: theme.fonts.heading, fontWeight: 600, letterSpacing: '-0.015em' },
    h5: { fontFamily: theme.fonts.heading, fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontFamily: theme.fonts.heading, fontWeight: 600, letterSpacing: '-0.005em' },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.6 },
  },
  shape: { borderRadius: 12 },
  shadows: [
    'none',
    theme.shadows.small,
    theme.shadows.small,
    theme.shadows.small,
    theme.shadows.medium,
    theme.shadows.medium,
    theme.shadows.medium,
    theme.shadows.medium,
    theme.shadows.large,
    theme.shadows.large,
    theme.shadows.large,
    theme.shadows.large,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
    theme.shadows.xl,
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '12px 28px',
          fontSize: '1rem',
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
          },
        },
        outlinedPrimary: {
          borderColor: theme.colors.border,
          color: theme.colors.text,
          '&:hover': {
            borderColor: theme.colors.primary,
            backgroundColor: 'rgba(37, 99, 235, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${theme.colors.border}`,
          boxShadow: 'none',
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.colors.border,
        },
      },
    },
  },
});

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/About-Me" element={<Home />} />
            <Route path="/About-Me/projects" element={<Projects />} />
            <Route path="/About-Me/contact" element={<Contact />} />
            <Route path="/About-Me/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
