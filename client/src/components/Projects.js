import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  useTheme,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { alpha } from '@mui/material/styles';
import { 
  Close as CloseIcon, 
  Code as CodeIcon,
  Visibility as VisibilityIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';

import trafficImage from '../Assets/TrafficAIProject.PNG';
import blog1 from '../Assets/blog-login.PNG';
import music1 from '../Assets/music-1.PNG'; 
import maze2 from '../Assets/Maze-Game-diag.PNG'; 
import topoolgy from '../Assets/topoolgy.png';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const projects = [
  {
    id: 1,
    title: 'Intelligent Traffic Management System',
    description: 'ML traffic prediction system for intersections. Uses random forest, heat maps, and Google Maps API integration.',
    image: trafficImage,
    details: [
      'Built ML traffic prediction system using random forest classifier to accurately forecast intersection congestion patterns and optimize route planning.',
      'Developed Python heat map algorithm to identify high-traffic zones in London, Ontario, integrated with Google Maps API for real-time visualization.'
    ],
    technologies: ['Python', 'Pandas', 'Streamlit', 'Git', 'Jira/Confluence'],
    videoUrl: null,
    githubUrl: 'https://github.com/piran777/Capstone'
  },
  {
    id: 2,
    title: 'ContentCraft - Full-Stack Publishing Platform',
    description: 'Full-stack content platform with user auth. Role-based access, dynamic posts, and secure editing features.',
    image: blog1,
    details: [
      'Engineered a comprehensive content management system with user authentication, role-based access control, and dynamic post creation/editing capabilities.',
      'Implemented secure user registration, JWT authentication, and database-driven commenting system with content tagging functionality.',
      'Built responsive frontend interface and RESTful API backend, enabling seamless content publishing and user interaction.'
    ],
    technologies: ['JavaScript', 'React.js', 'Node.js/Express', 'Authentication Middleware', 'Database Integration', 'RESTful APIs'],
    videoUrl: null,
    githubUrl: 'https://github.com/piran777/Full-Stack-Blogging-Platform'
  },
  {
    id: 3,
    title: 'NetSim - Network Protocol Analysis & Simulation',
    description: 'Network protocol analysis and simulation. Multi-host Mininet, deep packet analysis, and Python tools.',
    image: topoolgy,
    details: [
      'Designed and implemented a multi-host network topology using Mininet with three hosts and one switch for comprehensive protocol testing.',
      'Developed UDP/TCP communication protocols and performed deep packet analysis using Wireshark for network optimization.',
      'Created Python-based network simulation tools to analyze traffic patterns and protocol efficiency in controlled environments.'
    ],
    technologies: ['Python', 'Wireshark', 'Mininet', 'Network Programming', 'Protocol Analysis', 'Systems Programming'],
    videoUrl: null,
    githubUrl: 'https://github.com/piran777/UDP-TCP-Networking'
  },
  {
    id: 4,
    title: 'Maze World',
    description: '2D maze game with multiple levels built in Unity. Features enemy types, AOE detection, and unique abilities.',
    image: maze2,
    details: [
      'Made a 2D maze game with 3 levels using Unity and C# to create the levels for the game and to give movement and actions to the characters within the game using the C# scripts',
      'Had different enemy types in each level with AOE detection/shooting, target tracking and different characters which use different abilities in the game.'
    ],
    technologies: ['C#', 'Unity'],
    videoUrl: 'https://www.youtube.com/embed/ZxHu8RLDSTE',
    githubUrl: 'https://github.com/piran777'
  },
  {
    id: 5,
    title: 'MyMusicPlayer',
    description: 'Music streaming app with playlist management. User authentication, search, and playlist editing features.',
    image: music1,
    details: [
      'Audio streaming app that can create, update, and delete playlists by adding songs for logged in users.',
      'Search by artists, albums, or songs names to find the track and add it to a playlist or to remove it from an existing one.',
      'Account creation, verification, deletion, deactivation, and authentication with JWT is integrated. Users that are logged in with an account have more features than guests that have no account.'
    ],
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'AWS', 'JWT'],
    videoUrl: null,
    githubUrl: 'https://github.com/piran777'
  }
];

const Projects = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box component="main" sx={{ py: 10 }}>
      <Container maxWidth="lg">
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
            My Projects
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            A showcase of my technical work and passion projects across various technologies and domains.
          </Typography>
        </MotionBox>

        <MotionBox
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 4,
          }}>
            {projects.map((project, index) => (
              <MotionCard
                key={project.id}
                sx={{
                  height: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  boxShadow: theme.shadows.small,
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows.medium
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ height: 100, width: '100%', objectFit: 'cover' }}
                />
                <CardContent sx={{ flex: '1 1 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', px: 1, py: 1, minHeight: 0 }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: 600, fontSize: '1rem', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', mb: 0.5 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textAlign: 'center',
                      minHeight: 36,
                      maxHeight: 36,
                      mb: 1
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5, height: 24, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Box
                        key={tech}
                        sx={{
                          px: 1,
                          py: 0.25,
                          fontSize: '0.75rem',
                          borderRadius: '999px',
                          background: theme.palette.grey[200],
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                          mr: 0.5,
                          whiteSpace: 'nowrap',
                          lineHeight: 1.5
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                    {project.technologies.length > 2 && (
                      <Box
                        sx={{
                          px: 1,
                          py: 0.25,
                          fontSize: '0.75rem',
                          borderRadius: '999px',
                          background: theme.palette.grey[300],
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                          lineHeight: 1.5
                        }}
                      >
                        {`+${project.technologies.length - 2}`}
                      </Box>
                    )}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0, mt: 'auto', justifyContent: 'center' }}>
                  <Button
                    size="small"
                    startIcon={<CodeIcon />}
                    onClick={() => handleOpenDialog(project)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </MotionCard>
            ))}
          </Box>
        </MotionBox>
      </Container>

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
                src={selectedProject.image} 
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
              {selectedProject.githubUrl && (
                <Button 
                  variant="outlined" 
                  color="primary" 
                  startIcon={<GitHubIcon />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                >
                  View Source
                </Button>
              )}
              {selectedProject.liveUrl && (
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<VisibilityIcon />}
                  href={selectedProject.liveUrl}
                  target="_blank"
                >
                  Live Demo
                </Button>
              )}
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

export default Projects;
