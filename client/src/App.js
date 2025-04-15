import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider as ThemeUIProvider } from 'theme-ui';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

import './App.css';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    error: {
      main: theme.colors.error,
    },
    warning: {
      main: theme.colors.warning,
    },
    success: {
      main: theme.colors.success,
    },
    background: {
      default: theme.colors.background,
      paper: theme.colors.muted,
    },
    text: {
      primary: theme.colors.text,
      secondary: theme.colors.secondary,
    },
  },
  typography: {
    fontFamily: theme.fonts.body,
    h1: {
      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.heading,
    },
    h2: {
      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.heading,
    },
    h3: {
      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.heading,
    },
    h4: {
      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.heading,
    },
    h5: {
      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.heading,
    },
    h6: {
      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.heading,
    },
  },
  shape: {
    borderRadius: theme.radii.default,
  },
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
});

function App() {
  const location = useLocation();

  return (
    <ThemeUIProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/About-Me" element={<Home />} />
              <Route path="/About-Me/about" element={<About />} />
              <Route path="/About-Me/projects" element={<Projects />} />
              <Route path="/About-Me/contact" element={<Contact />} />
              <Route path="/About-Me/resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </MuiThemeProvider>
    </ThemeUIProvider>
  );
}

export default App;
