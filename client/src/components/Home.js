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
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js/Express', category: 'backend' },
  { name: 'Ruby on Rails 6/7', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'Prisma', category: 'backend' },
  { name: 'NextAuth.js', category: 'backend' },
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'AWS', category: 'cloud' },
  { name: 'GCP', category: 'cloud' },
  { name: 'GitLab', category: 'tool' },
  { name: 'Vercel', category: 'tool' },
  { name: 'Git', category: 'tool' },
  { name: 'Cucumber', category: 'testing' },
  { name: 'RSpec', category: 'testing' },
  { name: 'Jest', category: 'testing' },
  { name: 'Jira/Confluence', category: 'tool' },
  { name: 'Okta', category: 'tool' },
  { name: 'Forge', category: 'tool' },
  { name: 'OpenAI API', category: 'library' },
  { name: 'Pandas', category: 'library' },
  { name: 'i18n', category: 'library' },
  { name: 'Redux', category: 'library' },
  { name: 'Google APIs', category: 'library' },
  { name: 'Microsoft Graph API', category: 'library' },
];

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionChip = motion(Chip);

const Home = () => {
  const theme = useTheme();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box component="main" sx={{ pb: 0 }}>
      {/* Hero */}
      <Box 
        ref={heroRef}
        sx={{ 
          py: { xs: 12, md: 16 },
          background: `linear-gradient(160deg, ${alpha(theme.palette.primary.main, 0.04)} 0%, ${alpha(theme.palette.secondary.main, 0.06)} 50%, ${alpha('#0ea5e9', 0.04)} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <MotionGrid item xs={12} md={7}
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <MotionTypography 
                variant="body2"
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 2,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Software Engineer
              </MotionTypography>

              <MotionTypography 
                variant="h2" 
                component="h1" 
                sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Piran Aminullah
              </MotionTypography>

              <MotionTypography 
                variant="body1" 
                sx={{ fontSize: '1.15rem', maxWidth: 540, color: 'text.secondary', lineHeight: 1.8, mb: 4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Building innovative solutions for complex problems. Passionate about creating efficient, 
                user-friendly applications and scalable systems that make a difference.
              </MotionTypography>

              <Stack direction="row" spacing={2}>
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

            <MotionGrid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Avatar 
                src={profileImage} 
                alt="Piran Aminullah" 
                sx={{ 
                  width: { xs: 240, md: 280 }, 
                  height: { xs: 240, md: 280 },
                  border: '3px solid',
                  borderColor: 'divider',
                  boxShadow: theme.shadows[8],
                }} 
              />
            </MotionGrid>
          </Grid>
        </Container>
      </Box>

      {/* About */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }} ref={aboutRef}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Typography 
            variant="h3" component="h2" align="center" gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            About Me
          </Typography>
          <Typography 
            variant="body1" align="center" color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}
          >
            A quick look at who I am and what I bring to the table.
          </Typography>

          <Card sx={{ p: { xs: 3, md: 5 }, mb: 6, backgroundColor: '#fff' }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', color: 'text.secondary' }}>
              Hi there! I'm Piran, a Software Engineer with a passion for creating innovative solutions. 
              I recently graduated with my Bachelor's of Engineering Science in Software Engineering from Western University 
              and completed the Western Engineering Co-op/Internship Program.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', color: 'text.secondary' }}>
              I specialize in full-stack development, working with technologies like React.js, React Native, Ruby on Rails 6/7, Node.js, 
              and modern cloud platforms. My experience spans from architecting core features for major financial platforms 
              serving 100,000+ professionals to building comprehensive schema management systems with multi-language support 
              across 7 languages using i18n integration.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', color: 'text.secondary' }}>
              I have hands-on experience with Domain-Specific Language (DSL) processors, comprehensive testing frameworks 
              including Cucumber, RSpec, and Jest, and cloud technologies like Docker, Kubernetes, AWS, and GCP.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.05rem', color: 'text.secondary' }}>
              Beyond coding, I enjoy exploring new technologies, machine learning projects, and building solutions that 
              make a positive impact. I'm always excited to take on new challenges and collaborate on innovative projects.
            </Typography>
          </Card>

          <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
            Current Role
          </Typography>
          <Card sx={{ 
            p: { xs: 3, md: 4 }, 
            mb: 5, 
            borderLeft: '3px solid', 
            borderLeftColor: 'primary.main', 
            backgroundColor: '#fff',
          }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
              Software Engineer at hyperPad
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mt: 0.5 }}>
              Jan 2025 - Current &middot; London, ON
            </Typography>
            <Box component="ul" sx={{ pl: 2, mt: 2 }}>
              <Typography component="li" variant="body2" paragraph sx={{ color: 'text.secondary' }}>
                Architected and developed core features for a major financial platform serving 100,000+ professionals through contracting work, including complex investment account visibility algorithms and form component modernization.
              </Typography>
              <Typography component="li" variant="body2" paragraph sx={{ color: 'text.secondary' }}>
                Led full-stack development of a comprehensive schema management and translation system, enabling dynamic form generation and multi-language support across 7 languages using i18n integration.
              </Typography>
              <Typography component="li" variant="body2" paragraph sx={{ color: 'text.secondary' }}>
                Designed and implemented Domain-Specific Language (DSL) processors for automated schema translations, significantly improving administrator efficiency and reducing manual configuration overhead.
              </Typography>
              <Typography component="li" variant="body2" sx={{ color: 'text.secondary' }}>
                Developed comprehensive test suites using Cucumber, RSpec, and Jest, ensuring robust UI functionality and backend reliability in a regulated financial environment.
              </Typography>
            </Box>
          </Card>
        </MotionBox>
      </Container>

      {/* Skills */}
      <Box sx={{ 
        py: { xs: 8, md: 10 }, 
        backgroundColor: theme.palette.background.paper,
      }} ref={skillsRef}>
        <Container maxWidth="lg">
          <MotionTypography 
            variant="h3" component="h2" align="center" gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </MotionTypography>
          <MotionTypography 
            variant="body1" align="center" color="text.secondary"
            sx={{ maxWidth: 500, mx: 'auto', mb: 5 }}
            initial={{ opacity: 0, y: 15 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies and tools I work with regularly.
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', maxWidth: 900, mx: 'auto' }}>
              {skills.map((skill, index) => (
                <MotionChip
                  key={skill.name}
                  label={skill.name}
                  variant="outlined"
                  sx={{
                    fontSize: '0.88rem',
                    backgroundColor: '#fff',
                    borderColor: theme.palette.divider,
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    py: 2.5,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.04),
                      color: theme.palette.primary.main,
                    },
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.15 + index * 0.02 }}
                />
              ))}
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* Education */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }} ref={educationRef}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Typography 
            variant="h3" component="h2" align="center" gutterBottom
            sx={{ fontWeight: 700, mb: 5 }}
          >
            Education
          </Typography>

          <Card sx={{ 
            p: { xs: 3, md: 5 }, 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
            <Box sx={{ 
              width: { xs: '100%', sm: '25%' }, 
              display: 'flex', 
              justifyContent: 'center',
              mb: { xs: 3, sm: 0 },
            }}>
              <img 
                src={westernLogo} 
                alt="Western University" 
                style={{ maxWidth: '100%', maxHeight: 110 }} 
              />
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '75%' }, pl: { xs: 0, sm: 5 } }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Bachelor's of Engineering Science
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary', fontWeight: 500 }}>
                Software Engineering
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Western University, London, ON &middot; Graduated April 2024
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
                Completed comprehensive coursework including Data Structures and Algorithms, 
                Databases, Networking, Software Engineering Design, Software Project and Process Management, 
                Software Design, Computer Information Security, Data Science/Machine Learning, Digital Logic Systems, 
                Microprocessors/Microcomputers, Operating Systems, Artificial Intelligence I & II, and Cloud Computing.
              </Typography>
            </Box>
          </Card>
        </MotionBox>
      </Container>

      {/* CTA */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white',
        textAlign: 'center',
      }}>
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Interested in working together?
          </Typography>
          <Typography variant="body1" paragraph sx={{ opacity: 0.85, mb: 4 }}>
            I'm always open to discussing new projects, opportunities, and collaborations.
          </Typography>
          <Button 
            component={Link}
            to="/About-Me/contact"
            variant="contained" 
            size="large"
            sx={{ 
              color: theme.palette.primary.main,
              backgroundColor: '#fff',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              },
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
