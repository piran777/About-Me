import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Grid, 
  Tabs, 
  Tab, 
  Chip,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
  useTheme,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions
} from '@mui/material';
import { motion } from 'framer-motion';
import { Close as CloseIcon } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import './About.css';
import pawmirLogo from '../Assets/PawmirPaintingLTD.PNG';
import trafficImage from '../Assets/TrafficAIProject.PNG';
import trafficImage2 from '../Assets/traffic2.PNG';
import blog1 from '../Assets/blog-login.PNG';
import blog2 from '../Assets/LoggedInBLog.PNG';
import music1 from '../Assets/music-1.PNG'; 
import maze2 from '../Assets/Maze-Game-diag.PNG'; 
import hicoderLogo from '../Assets/hicoder_logo.png'; 

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const hyperPadLogo = `${process.env.PUBLIC_URL}/hyperpad_logo.jpg`;

const experiences = [
  {
    company: 'hyperPad',
    position: 'Junior Software Engineer',
    period: 'Jan 2025 - Current',
    location: 'London, ON',
    logo: hyperPadLogo,
    responsibilities: [
      'Architected and developed core features for a major financial platform serving 100,000+ professionals through contracting work, including complex investment account visibility algorithms and form component modernization.',
      'Led full-stack development of a comprehensive schema management and translation system, enabling dynamic form generation and multi-language support across 7 languages using i18n integration.',
      'Designed and implemented Domain-Specific Language (DSL) processors for automated schema translations, significantly improving administrator efficiency and reducing manual configuration overhead.',
      'Developed comprehensive test suites using Cucumber, RSpec, and Jest, ensuring robust UI functionality and backend reliability in a regulated financial environment.'
    ],
    technologies: [
      'Ruby on Rails 6/7', 'React.js', 'JavaScript', 'TypeScript', 'i18n', 'GitLab', 'Cucumber', 'RSpec', 'Jest', 'Material-UI', 'Docker', 'AWS', 'Redux', 'Redis'
    ]
  },
  {
    company: 'hyperPad',
    position: 'Software Developer Internship',
    period: 'Sept 2024 - Jan 2025',
    location: 'London, ON',
    logo: hyperPadLogo,
    responsibilities: [
      'Spearheaded backend infrastructure upgrades, migrating Ruby on Rails systems from version 6 to 7 while maintaining production stability for high-traffic financial applications.',
      'Enhanced and maintained backend systems using Ruby on Rails and Node.js, focusing on upgrading legacy codebases to improve scalability and performance.',
      'Delivered dynamic and responsive features for React.js and React Native applications, ensuring seamless user experiences across platforms.',
      'Gained foundational experience in full-stack development and client management, preparing for advanced financial platform contracting work.'
    ],
    technologies: [
      'Ruby on Rails', 'Node.js', 'React.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML/CSS'
    ]
  },
  {
    company: 'HiCoder',
    position: 'Software Engineer Internship',
    period: 'Jun 2024 - Sept 2024',
    location: 'Canada (Remote)',
    logo: hicoderLogo,
    responsibilities: [
      'Led design and development of scalable server-side applications using Node.js, enhancing performance and reliability, while developing responsive client-side features using React.js.',
      'Assisted in building and implementing RESTful APIs, facilitating efficient communication between server and client applications.',
      'Diagnosed and resolved critical performance issues, leading to significant improvements in application responsiveness and user experience.'
    ],
    technologies: [
      'Node.js', 'Express.js', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Material UI/ThemeUI'
    ]
  },
  {
    company: 'PawmirPaintings LTD',
    position: 'Web Developer Internship',
    period: 'Apr 2022 - Sept 2023',
    location: 'London, ON',
    logo: pawmirLogo,
    responsibilities: [
      'Built the company\'s website through the integration of JavaScript, CSS, and HTML, leading to enhanced user interaction and navigation.',
      'Implemented a robust contact information section using Node.js/Express, addressing user issues promptly.'
    ],
    technologies: [
      'Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS'
    ]
  }
];

const projects = [
  {
    title: 'Intelligent Traffic Management System',
    description: 'Built ML traffic prediction system using random forest classifier to accurately forecast intersection congestion patterns and optimize route planning.',
    details: [
      'Built ML traffic prediction system using random forest classifier to accurately forecast intersection congestion patterns and optimize route planning.',
      'Developed Python heat map algorithm to identify high-traffic zones in London, Ontario, integrated with Google Maps API for real-time visualization.'
    ],
    technologies: ['Python', 'Pandas', 'Streamlit', 'Git', 'Jira/Confluence'],
    images: [trafficImage, trafficImage2],
    videoUrl: null
  },
  {
    title: 'ContentCraft - Full-Stack Publishing Platform',
    description: 'Engineered a comprehensive content management system with user authentication, role-based access control, and dynamic post creation/editing capabilities.',
    details: [
      'Engineered a comprehensive content management system with user authentication, role-based access control, and dynamic post creation/editing capabilities.',
      'Implemented secure user registration, JWT authentication, and database-driven commenting system with content tagging functionality.',
      'Built responsive frontend interface and RESTful API backend, enabling seamless content publishing and user interaction.'
    ],
    technologies: ['JavaScript', 'React.js', 'Node.js/Express', 'Authentication Middleware', 'Database Integration', 'RESTful APIs'],
    images: [blog1, blog2],
    videoUrl: null
  },
  {
    title: 'NetSim - Network Protocol Analysis & Simulation',
    description: 'Designed and implemented a multi-host network topology using Mininet with three hosts and one switch for comprehensive protocol testing.',
    details: [
      'Designed and implemented a multi-host network topology using Mininet with three hosts and one switch for comprehensive protocol testing.',
      'Developed UDP/TCP communication protocols and performed deep packet analysis using Wireshark for network optimization.',
      'Created Python-based network simulation tools to analyze traffic patterns and protocol efficiency in controlled environments.'
    ],
    technologies: ['Python', 'Wireshark', 'Mininet', 'Network Programming', 'Protocol Analysis', 'Systems Programming'],
    images: [maze2],
    videoUrl: null
  },
  {
    title: 'Maze World',
    description: 'A 2D maze game with multiple levels built in Unity',
    details: [
      'Made a 2D maze game with 3 levels using Unity and C# to create the levels for the game and to give movement and actions to the characters within the game using the C# scripts',
      'Had different enemy types in each level with AOE detection/shooting, target tracking and different characters which use different abilities in the game.'
    ],
    technologies: ['C#', 'Unity'],
    images: [maze2],
    videoUrl: 'https://www.youtube.com/embed/ZxHu8RLDSTE'
  },
  {
    title: 'MyMusicPlayer',
    description: 'A music streaming app with playlist management and user authentication.',
    details: [
      'Audio streaming app that can create, update, and delete playlists by adding songs for logged in users.',
      'Search by artists, albums, or songs names to find the track and add it to a playlist or to remove it from an existing one.',
      'Account creation, verification, deletion, deactivation, and authentication with JWT is integrated. Users that are logged in with an account have more features than guests that have no account.'
    ],
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'AWS', 'JWT'],
    images: [music1],
    videoUrl: null
  }
];

const About = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Intersection observer hooks
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <MotionBox 
          ref={titleRef}
          sx={{ mb: 6, textAlign: 'center' }}
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
            Experience & Projects
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            My professional journey and portfolio of work across software development,
            web technologies, and computer science.
          </Typography>
        </MotionBox>

        {/* Tabs */}
        <Box sx={{ mb: 6 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={{ 
              mb: 4,
              '& .MuiTab-root': { 
                fontSize: '1rem',
                fontWeight: 500,
                px: 3
              }
            }}
          >
            <Tab label="Work Experience" />
            <Tab label="Projects" />
          </Tabs>

          {/* Work Experience Tab */}
          {tabValue === 0 && (
            <MotionBox
              ref={experienceRef}
              initial={{ opacity: 0, y: 30 }}
              animate={experienceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Grid container spacing={4}>
                {experiences.map((experience, index) => (
                  <Grid item xs={12} key={index}>
                    <MotionCard 
                      sx={{ 
                        p: 3, 
                        boxShadow: theme.shadows.small,
                        borderLeft: '4px solid',
                        borderLeftColor: 'primary.main',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: theme.shadows.medium
                        }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                          <Avatar 
                            src={experience.logo} 
                            alt={`${experience.company} logo`}
                            variant="rounded"
                            sx={{ 
                              width: 80, 
                              height: 80,
                              boxShadow: theme.shadows.small,
                              backgroundColor: 'white',
                              p: 1
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                          <Box>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                              {experience.position}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                              <Typography variant="subtitle1" sx={{ mr: 1, fontWeight: 500 }}>
                                {experience.company}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                                • {experience.location}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                • {experience.period}
                              </Typography>
                            </Box>
                            
                            <List sx={{ pl: 2 }}>
                              {experience.responsibilities.map((responsibility, idx) => (
                                <ListItem key={idx} sx={{ display: 'list-item', py: 0.5 }}>
                                  <ListItemText primary={responsibility} />
                                </ListItem>
                              ))}
                            </List>
                            
                            <Box sx={{ mt: 2 }}>
                              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                                Technologies Used:
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {experience.technologies.map(tech => (
                                  <Chip 
                                    key={tech} 
                                    label={tech} 
                                    size="small" 
                                    variant="outlined"
                                    sx={{ mb: 1 }}
                                  />
                                ))}
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </MotionCard>
                  </Grid>
                ))}
              </Grid>
            </MotionBox>
          )}

          {/* Projects Tab */}
          {tabValue === 1 && (
            <MotionBox
              ref={projectsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Grid container spacing={3}>
                {projects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <MotionCard 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        boxShadow: theme.shadows.small,
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: theme.shadows.medium
                        }
                      }}
                      onClick={() => handleProjectClick(project)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Box sx={{ height: 200, overflow: 'hidden' }}>
                        <img 
                          src={project.images[0]} 
                          alt={project.title}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'scale(1.05)'
                            }
                          }}
                        />
                      </Box>
                      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ color: 'text.secondary', flexGrow: 1 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Chip 
                              key={tech} 
                              label={tech} 
                              size="small" 
                              variant="outlined"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip 
                              label={`+${project.technologies.length - 3}`} 
                              size="small"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          )}
                        </Box>
                      </Box>
                    </MotionCard>
                  </Grid>
                ))}
              </Grid>
            </MotionBox>
          )}
        </Box>
      </Container>

      {/* Project Details Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        sx={{ 
          '& .MuiDialog-paper': { 
            borderRadius: 2,
            overflow: 'hidden'
          }
        }}
      >
        {selectedProject && (
          <>
            <Box sx={{ 
              position: 'relative', 
              height: 300, 
              overflow: 'hidden',
              backgroundColor: alpha(theme.palette.primary.main, 0.1)
            }}>
              <img 
                src={selectedProject.images[0]} 
                alt={selectedProject.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                }}
              />
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent sx={{ px: 4, py: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                {selectedProject.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {selectedProject.description}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 2, fontWeight: 600 }}>
                Project Details
              </Typography>
              <List sx={{ pl: 2, mb: 3 }}>
                {selectedProject.details.map((detail, idx) => (
                  <ListItem key={idx} sx={{ display: 'list-item', py: 0.5 }}>
                    <ListItemText primary={detail} />
                  </ListItem>
                ))}
              </List>
              
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {selectedProject.technologies.map(tech => (
                  <Chip 
                    key={tech} 
                    label={tech} 
                    variant="outlined"
                    color="primary"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Box>
              
              {selectedProject.videoUrl && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Demo Video
                  </Typography>
                  <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 1 }}>
                    <iframe
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      src={selectedProject.videoUrl}
                      title={`${selectedProject.title} Demo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Box>
                </Box>
              )}
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 3 }}>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default About;
