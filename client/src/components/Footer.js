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
        backgroundColor: '#0f172a',
        color: 'rgba(255, 255, 255, 0.9)',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start" justifyContent="space-between" direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 1, mt: 0, color: '#fff' }}>
              Piran Aminullah
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Software Engineer
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, mt: 0, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
              {[
                { label: 'Home', to: '/About-Me' },
                { label: 'Resume', to: '/About-Me/resume' },
                { label: 'Projects', to: '/About-Me/projects' },
                { label: 'Contact', to: '/About-Me/contact' },
              ].map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.to}
                  underline="none"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, mt: 0, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 0.5 }}>
              <IconButton 
                component="a" 
                href="https://github.com/piran777" 
                target="_blank" 
                aria-label="GitHub"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.5)',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#fff', backgroundColor: 'rgba(255,255,255,0.08)' },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://www.linkedin.com/in/piran-aminullah-a57221220/" 
                target="_blank" 
                aria-label="LinkedIn"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.5)',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#fff', backgroundColor: 'rgba(255,255,255,0.08)' },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton 
                component={RouterLink} 
                to="/About-Me/contact" 
                aria-label="Email"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.5)',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#fff', backgroundColor: 'rgba(255,255,255,0.08)' },
                }}
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.08)' }} />
        
        <Typography variant="body2" align="center" sx={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.8rem' }}>
          &copy; {currentYear} Piran Aminullah
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
