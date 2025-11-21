import React from 'react';
import { Box, Container, Typography, Grid, Card, Avatar, Chip, Button, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import profileImage from '../Assets/1711219373283.jpg';
import westernLogo from '../Assets/Western-University-Logo.png';

const skills = [
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'Ruby', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'C/C++', category: 'language' },
  { name: 'C#', category: 'language' },
  { name: 'React.js', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'Material-UI', category: 'frontend' },
  { name: 'SCSS', category: 'frontend' },
  { name: 'Node.js/Express', category: 'backend' },
  { name: 'Ruby on Rails 6/7', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'AWS', category: 'cloud' },
  { name: 'GCP', category: 'cloud' },
  { name: 'GitLab', category: 'tool' },
  { name: 'Git', category: 'tool' },
  { name: 'Cucumber', category: 'testing' },
  { name: 'Selenium', category: 'testing' },
  { name: 'RSpec', category: 'testing' },
  { name: 'Jest', category: 'testing' },
  { name: 'Jira/Confluence', category: 'tool' },
  { name: 'Wireshark', category: 'tool' },
  { name: 'Mininet', category: 'tool' },
  { name: 'Honeybadger', category: 'tool' },
  { name: 'Okta', category: 'tool' },
  { name: 'Pandas', category: 'library' },
  { name: 'Streamlit', category: 'library' },
  { name: 'i18n', category: 'library' },
  { name: 'Redux', category: 'library' },
];

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionChip = motion(Chip);

const Home = () => {
  const theme = useTheme();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="main" sx={{ pb: 8 }}>
      <Box 
        ref={heroRef}
        sx={{ 
          py: { xs: 10, md: 15 },
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <MotionGrid item xs={12} md={6}
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <MotionTypography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                sx={{ fontWeight: 700, color: 'primary.main' }}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Piran Aminullah
              </MotionTypography>

              <MotionTypography 
                variant="h4" 
                gutterBottom
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Software Engineer
              </MotionTypography>

              <MotionTypography 
                variant="body1" 
                paragraph
                sx={{ fontSize: '1.1rem', maxWidth: 600 }}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Building innovative solutions for complex problems. Passionate about creating efficient, 
                user-friendly applications and scalable systems that make a difference.
              </MotionTypography>

              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button 
                  component={Link} 
                  to="/About-Me/contact" 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Contact Me
                </Button>
                <Button 
                  component={Link} 
                  to="/About-Me/resume" 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                >
                  View Resume
                </Button>
              </Stack>
            </MotionGrid>

            <MotionGrid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Avatar 
                src={profileImage} 
                alt="Piran Aminullah" 
                sx={{ 
                  width: { xs: 250, md: 300 }, 
                  height: { xs: 250, md: 300 },
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: theme.shadows.large
                }} 
              />
            </MotionGrid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 6, md: 10 } }} ref={aboutRef}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
          >
            About Me
          </Typography>

          <Card variant="outlined" sx={{ p: 4, borderRadius: 2, mb: 6, boxShadow: theme.shadows.small }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem' }}>
              Hi there! I'm Piran, a Software Engineer with a passion for creating innovative solutions. 
              I recently graduated with my Bachelor's of Engineering Science in Software Engineering from Western University 
              and completed the Western Engineering Co-op/Internship Program.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem' }}>
              I specialize in full-stack development, working with technologies like React.js, React Native, Ruby on Rails 6/7, Node.js, 
              and modern cloud platforms. My experience spans from architecting core features for major financial platforms 
              serving 100,000+ professionals to building comprehensive schema management systems with multi-language support 
              across 7 languages using i18n integration.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem' }}>
              I have hands-on experience with Domain-Specific Language (DSL) processors, comprehensive testing frameworks 
              including Cucumber, RSpec, and Jest, and cloud technologies like Docker, Kubernetes, AWS, and GCP.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.05rem' }}>
              Beyond coding, I enjoy exploring new technologies, machine learning projects, and building solutions that 
              make a positive impact. I'm always excited to take on new challenges and collaborate on innovative projects.
            </Typography>
          </Card>

          <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
            Current Role
          </Typography>
          <Card sx={{ p: 3, mb: 5, borderLeft: '4px solid', borderLeftColor: 'primary.main', boxShadow: theme.shadows.small }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
              Junior Software Engineer at hyperPad
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Jan 2025 - Current • London, ON
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2" paragraph>
                Architected and developed core features for a major financial platform serving 100,000+ professionals through contracting work, including complex investment account visibility algorithms and form component modernization.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Led full-stack development of a comprehensive schema management and translation system, enabling dynamic form generation and multi-language support across 7 languages using i18n integration.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Designed and implemented Domain-Specific Language (DSL) processors for automated schema translations, significantly improving administrator efficiency and reducing manual configuration overhead.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Developed comprehensive test suites using Cucumber, RSpec, and Jest, ensuring robust UI functionality and backend reliability in a regulated financial environment.
              </Typography>
            </Box>
          </Card>
        </MotionBox>
      </Container>

      <Box sx={{ 
        py: { xs: 6, md: 8 }, 
        backgroundColor: 'background.paper' 
      }} ref={skillsRef}>
        <Container>
          <MotionTypography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {skills.map((skill, index) => (
                <MotionChip
                  key={skill.name}
                  label={skill.name}
                  variant="filled"
                  sx={{
                    m: 0.5,
                    fontSize: '1rem',
                    backgroundColor: '#f5f5f5',
                    color: '#222',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
                />
              ))}
            </Box>
          </MotionBox>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 6, md: 8 } }} ref={educationRef}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Education
          </Typography>

          <Card sx={{ 
            p: 4, 
            borderRadius: 2, 
            boxShadow: theme.shadows.small,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
          }}>
            <Box sx={{ 
              width: { xs: '100%', sm: '30%' }, 
              display: 'flex', 
              justifyContent: 'center',
              mb: { xs: 3, sm: 0 }
            }}>
              <img 
                src={westernLogo} 
                alt="Western University" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: 120 
                }} 
              />
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '70%' }, pl: { xs: 0, sm: 4 } }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Bachelor's of Engineering Science
              </Typography>
              <Typography variant="h6" gutterBottom>
                Software Engineering
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Western University, London, ON
              </Typography>
              <Typography variant="body1">
                Graduated April 2024. Completed comprehensive coursework including Data Structures and Algorithms, 
                Databases, Networking, Software Engineering Design, Software Project and Process Management, 
                Software Design, Computer Information Security, Data Science/Machine Learning, Digital Logic Systems, 
                Microprocessors/Microcomputers, Operating Systems, Artificial Intelligence I & II, and Cloud Computing.
              </Typography>
            </Box>
          </Card>
        </MotionBox>
      </Container>

      <Box sx={{ 
        py: { xs: 6, md: 10 }, 
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.9)} 0%, ${alpha(theme.palette.secondary.main, 0.9)} 100%)`,
        color: 'white',
        textAlign: 'center'
      }}>
        <Container>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Interested in working together?
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
            I'm always open to discussing new projects, opportunities, and collaborations.
          </Typography>
          <Button 
            component={Link}
            to="/About-Me/contact"
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{ 
              color: 'white',
              borderColor: 'white',
              px: 4,
              py: 1.5,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              }
            }}
          >
            Let's Connect
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
