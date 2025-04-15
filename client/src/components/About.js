import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Grid, 
  Tabs, 
  Tab, 
  Divider,
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
import hackwesternLogo from '../Assets/HackWestern8.png';
import trafficImage from '../Assets/TrafficAIProject.PNG';
import trafficImage2 from '../Assets/traffic2.PNG';
import musicAppImage from '../Assets/HackWestern8.png';
import blog1 from '../Assets/blog-login.PNG';
import blog2 from '../Assets/LoggedInBLog.PNG';
import blog3 from '../Assets/makingpostblog.PNG';
import blog4 from '../Assets/EditBlog.PNG';
import blog5 from '../Assets/EDIT2BLog.PNG';
import blog6 from '../Assets/edit3blog.PNG';
import blog7 from '../Assets/CommentBlog.PNG';
import music1 from '../Assets/music-1.PNG'; 
import music2 from '../Assets/music2.PNG'; 
import maze2 from '../Assets/Maze-Game-diag.PNG'; 
import maze3 from '../Assets/Maze-Game-Take hits.PNG'; 
import maze4 from '../Assets/mazegame-3.PNG'; 
import maze5 from '../Assets/maze-3.PNG';
import hicoderLogo from '../Assets/hicoder_logo.png'; 

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

const hyperPadLogo = `${process.env.PUBLIC_URL}/hyperpad_logo.jpg`;

const experiences = [
  {
    company: 'hyperPad',
    position: 'Junior Software Engineer',
    period: 'January 2025 - Current',
    location: 'London, ON',
    logo: hyperPadLogo,
    responsibilities: [
      'Developed key features for a financial platform serving 100,000+ professionals through a contracting project, including improving linked account visibility and modernizing form components for enhanced usability.',
      'Upgraded backend infrastructure by migrating a Ruby on Rails system to version 7, improving scalability and performance.',
      'Led internationalization efforts, translating platform content into 7 languages for global accessibility.',
      'Designed and implemented a schema management system, enhancing efficiency for administrators.',
      'Collaborated cross-functionally to roll out new features and automated tests, improving software reliability.'
    ],
    technologies: [
      'Ruby on Rails 6/7', 'React.js', 'JavaScript', 'TypeScript', 'Cucumber rails', 
      'RSpec', 'Jest', 'ESBuild', 'Webpacker', 'Material-UI', 'Xcode', 'Docker', 'SCSS', 'HTML/CSS'
    ]
  },
  {
    company: 'hyperPad',
    position: 'Software Developer Internship',
    period: 'September 2024 - January 2025',
    location: 'London, ON',
    logo: hyperPadLogo,
    responsibilities: [
      'Enhanced and maintained backend systems using Ruby on Rails and Node.js, focusing on upgrading legacy codebases to the latest frameworks and models to improve scalability and performance.',
      'Delivered dynamic and responsive features for React.js and React Native applications, ensuring seamless user experiences across platforms.',
      'Led a development team in building multiple features, working directly with the client to gather requirements, incorporate feedback, and deliver tailored solutions on time and within scope.'
    ],
    technologies: [
      'Ruby on Rails', 'Node.js', 'React.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML/CSS'
    ]
  },
  {
    company: 'HiCoder',
    position: 'Software Engineer Internship',
    period: 'June 2024 - September 2024',
    location: 'Canada (Remote)',
    logo: hicoderLogo,
    responsibilities: [
      'Led the design and development of scalable server-side applications using Node.js, enhancing performance and reliability.',
      'Developed the client side using crema/react.js, ensuring a seamless and responsive user experience.',
      'Assisted in building and implementing RESTful APIs, facilitating efficient communication between server and client applications.',
      'Diagnosed and resolved critical performance issues, leading to significant improvements in application responsiveness and user experience.'
    ],
    technologies: [
      'Node.js', 'Express.js', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Crema (React UI Framework)'
    ]
  },
  {
    company: 'PawmirPaintings LTD',
    position: 'Web Developer Internship',
    period: 'April 2022 - September 2023',
    location: 'London, ON',
    logo: pawmirLogo,
    responsibilities: [
      'Collaborated with a diverse team of developers, actively contributing ideas and insights for website development.',
      'Built the company\'s website through the integration of JavaScript, CSS, and HTML, leading to enhanced user interaction and navigation.',
      'Implemented a robust contact information section using Node.js/Express, addressing user issues promptly.'
    ],
    technologies: [
      'Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS'
    ]
  },
  {
    company: 'HackWestern 8 Hackathon',
    position: 'Participant',
    period: 'November 2021',
    location: 'London, ON',
    logo: hackwesternLogo,
    responsibilities: [
      'Participated in one of Canada\'s largest student-run hackathons competing against 341 participants in a team of 4.',
      'Learned from SWE reps of companies such as TELUS, Scotiabank, Sunlife, and participated in pre-event workshops to enhance our ability to create a strong project.',
      '48 hour time limit to create a project for the event and compete for awards and $19,350 in prizes sponsored by the companies present at Hackwestern 8.'
    ],
    technologies: [
      'React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'
    ]
  }
];

const projects = [
  {
    title: 'Traffic Density Predictor',
    description: 'An ML-powered tool to predict traffic patterns and optimize route planning',
    details: [
      'Engineered a machine learning model that predicts the traffic density at an intersection using a random forest classifier and to accurately forecast congestion patterns and optimize route planning.',
      'Developed an advanced heat map algorithm in Python to predict high-traffic areas in London, Ontario so that it can be placed on a google maps UI.',
    ],
    technologies: ['Python', 'Pandas', 'Streamlit', 'Git', 'Jira/Confluence'],
    images: [trafficImage, trafficImage2],
    videoUrl: 'https://www.youtube.com/embed/Xrf8B0IFcyI'
  },
  {
    title: 'MyBlog',
    description: 'A full-stack blogging platform with user authentication and CRUD operations',
    details: [
      'Designed the front-end using React, providing a responsive and user-friendly interface with a RESTful API using Node.js and Express for handling CRUD operations on blog posts in the back-end',
      'User authentication and authorization using JSON Web Tokens (JWT) is used for secure access to the platform.',
      'Used docker and kubernetes to dockerize the application in order to deploy it using GCP',
      'Created full documentation of the program which explains the code and functionality of the program in a ReadMe.',
    ],
    technologies: ['JavaScript', 'CSS', 'HTML', 'React.js', 'Node.js/Express', 'Docker', 'Kubernetes', 'JWT'],
    images: [blog1, blog2],
    videoUrl: null
  },
  {
    title: 'Maze World',
    description: 'A 2D maze game with multiple levels built in Unity',
    details: [
      'Made a 2D maze game with 3 levels using Unity and C# to create the levels for the game and to give movement and actions to the characters within the game using the C# scripts',
      'Had different enemy types in each level with AOE detection/shooting, target tracking and different characters which use different abilities in the game.',
    ],
    technologies: ['C#', 'Unity'],
    images: [maze2],
    videoUrl: 'https://www.youtube.com/embed/ZxHu8RLDSTE'
  },
  {
    title: 'MyMusicPlayer',
    description: 'A music streaming app with playlist management and YouTube integration',
    details: [
      'Audio streaming app that can create, update, and delete playlists by adding songs and playing them directly from youtube for logged in users.',
      'Search by artists, albums, or songs names to find the track and add it to a playlist or to remove it from an existing one',
      'Account creation, verification, deletion, deactivation, and authentication with JWT is integrated. Users that are logged in with an account have more features than guests that have no account.',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'CSS', 'HTML', 'MySQL', 'AWS', 'JWT'],
    images: [music1, music2],
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
