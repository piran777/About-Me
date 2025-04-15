import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
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
  GitHub as GitHubIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Contact = () => {
  const theme = useTheme();

  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box component="main" sx={{ py: 10 }}>
      <Container maxWidth="md">
        <MotionBox 
          ref={titleRef}
          sx={{ mb: 5, textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', mb: 2 }}
          >
            I'm always interested in new opportunities, collaborations, or just a friendly chat.
            Feel free to connect with me through any of the channels below.
          </Typography>
        </MotionBox>

        <MotionPaper
          ref={contentRef}
          elevation={2}
          sx={{ 
            p: 5, 
            borderRadius: 2,
            maxWidth: 800,
            mx: 'auto',
            backgroundColor: theme.palette.background.paper
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ 
                      mr: 2.5, 
                      backgroundColor: 'primary.main', 
                      color: 'white',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <EmailIcon fontSize="medium" />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Email
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        piranaminullah@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ 
                      mr: 2.5, 
                      backgroundColor: 'primary.main', 
                      color: 'white',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <LocationIcon fontSize="medium" />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
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
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
                  Social Profiles
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="large"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/piran-aminullah-a57221220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ py: 1.5, mb: 2.5, justifyContent: 'flex-start', pl: 2 }}
                  >
                    LinkedIn Profile
                  </Button>
                  
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="large"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/piran777"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ py: 1.5, justifyContent: 'flex-start', pl: 2 }}
                  >
                    GitHub Profile
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, pt: 4, borderTop: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
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
