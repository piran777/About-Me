import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  useTheme,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Email as EmailIcon, 
  LocationOn as LocationIcon, 
  LinkedIn as LinkedInIcon, 
  GitHub as GitHubIcon
} from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Contact = () => {
  const theme = useTheme();

  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box component="main" sx={{ py: { xs: 10, md: 12 } }}>
      <Container maxWidth="md">
        <MotionBox 
          ref={titleRef}
          sx={{ mb: 5, textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" component="h1" gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="body1" color="text.secondary"
            sx={{ maxWidth: 550, mx: 'auto' }}
          >
            I'm always interested in new opportunities, collaborations, or just a friendly chat.
            Feel free to connect with me through any of the channels below.
          </Typography>
        </MotionBox>

        <MotionPaper
          ref={contentRef}
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 5 },
            maxWidth: 800,
            mx: 'auto',
            backgroundColor: '#fff',
            border: `1px solid ${theme.palette.divider}`,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ 
                      mr: 2, 
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      color: theme.palette.primary.main,
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <EmailIcon fontSize="small" />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.25, fontSize: '0.8rem' }}>
                        Email
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        piranaminullah@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ 
                      mr: 2, 
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      color: theme.palette.primary.main,
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <LocationIcon fontSize="small" />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.25, fontSize: '0.8rem' }}>
                        Location
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        London, Ontario, Canada
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Social Profiles
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/piran-aminullah-a57221220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      py: 1.5, 
                      mb: 2, 
                      justifyContent: 'flex-start', 
                      pl: 2,
                      borderColor: theme.palette.divider,
                      color: theme.palette.text.primary,
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                      },
                    }}
                  >
                    LinkedIn Profile
                  </Button>
                  
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/piran777"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      py: 1.5, 
                      justifyContent: 'flex-start', 
                      pl: 2,
                      borderColor: theme.palette.divider,
                      color: theme.palette.text.primary,
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                      },
                    }}
                  >
                    GitHub Profile
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, pt: 4, borderTop: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'text.primary' }}>
              Thank you for your interest in my work!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I'm currently open to new opportunities and collaborations.
              Looking forward to connecting with you.
            </Typography>
          </Box>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Contact;
