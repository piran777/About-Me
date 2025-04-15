import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Divider, Stack } from '@mui/material';
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
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Piran Aminullah
            </Typography>
            <Typography variant="body2">
              Software Engineer
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Stack direction="column" spacing={1} alignItems="center">
              <Link component={RouterLink} to="/About-Me" color="inherit">Home</Link>
              <Link component={RouterLink} to="/About-Me/about" color="inherit">Experience</Link>
              <Link component={RouterLink} to="/About-Me/projects" color="inherit">Projects</Link>
              <Link component={RouterLink} to="/About-Me/contact" color="inherit">Contact</Link>
              <Link component={RouterLink} to="/About-Me/resume" color="inherit">Resume</Link>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton 
                component="a" 
                href="https://github.com/piran777" 
                target="_blank" 
                color="inherit"
                aria-label="GitHub"
                sx={{ mx: 1 }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://www.linkedin.com/in/piran-aminullah-a57221220/" 
                target="_blank" 
                color="inherit"
                aria-label="LinkedIn"
                sx={{ mx: 1 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                component={RouterLink} 
                to="/About-Me/contact" 
                color="inherit"
                aria-label="Email"
                sx={{ mx: 1 }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              London, Ontario, Canada
            </Typography>
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
