import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Email as EmailIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start" justifyContent="space-between" direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1, mt: 0 }}>
              Piran Aminullah
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Software Engineer
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1, mt: 0 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 1 }}>
              <Link component={RouterLink} to="/About-Me" color="inherit" underline="hover" sx={{ fontWeight: 500, fontSize: '1rem', px: 1, transition: 'color 0.2s', '&:hover': { color: 'secondary.main' } }}>Home</Link>
              <Link component={RouterLink} to="/About-Me/resume" color="inherit" underline="hover" sx={{ fontWeight: 500, fontSize: '1rem', px: 1, transition: 'color 0.2s', '&:hover': { color: 'secondary.main' } }}>Resume</Link>
              <Link component={RouterLink} to="/About-Me/projects" color="inherit" underline="hover" sx={{ fontWeight: 500, fontSize: '1rem', px: 1, transition: 'color 0.2s', '&:hover': { color: 'secondary.main' } }}>Projects</Link>
              <Link component={RouterLink} to="/About-Me/contact" color="inherit" underline="hover" sx={{ fontWeight: 500, fontSize: '1rem', px: 1, transition: 'color 0.2s', '&:hover': { color: 'secondary.main' } }}>Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1, mt: 0 }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
              <IconButton 
                component="a" 
                href="https://github.com/piran777" 
                target="_blank" 
                color="inherit"
                aria-label="GitHub"
                sx={{ mx: 0.5, p: 1, transition: 'background 0.2s', '&:hover': { background: 'rgba(255,255,255,0.08)' } }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://www.linkedin.com/in/piran-aminullah-a57221220/" 
                target="_blank" 
                color="inherit"
                aria-label="LinkedIn"
                sx={{ mx: 0.5, p: 1, transition: 'background 0.2s', '&:hover': { background: 'rgba(255,255,255,0.08)' } }}
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>
              <IconButton 
                component={RouterLink} 
                to="/About-Me/contact" 
                color="inherit"
                aria-label="Email"
                sx={{ mx: 0.5, p: 1, transition: 'background 0.2s', '&:hover': { background: 'rgba(255,255,255,0.08)' } }}
              >
                <EmailIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Typography variant="body2" align="center">
          © {currentYear} Piran Aminullah. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
