import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
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
import blog2 from '../Assets/LoggedInBLog.PNG';
import music1 from '../Assets/music-1.PNG'; 
import maze2 from '../Assets/Maze-Game-diag.PNG'; 

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const projects = [
  {
    id: 1,
    title: 'Traffic Density Predictor',
    description: 'An ML-powered tool to predict traffic patterns and optimize route planning',
    image: trafficImage,
    details: [
      'Engineered a machine learning model that predicts the traffic density at an intersection using a random forest classifier and to accurately forecast congestion patterns and optimize route planning.',
      'Developed an advanced heat map algorithm in Python to predict high-traffic areas in London, Ontario so that it can be placed on a google maps UI.',
    ],
    technologies: ['Python', 'Pandas', 'Streamlit', 'Git', 'Jira/Confluence'],
    videoUrl: 'https://www.youtube.com/embed/Xrf8B0IFcyI',
    githubUrl: 'https://github.com/piran777'
  },
  {
    id: 2,
    title: 'MyBlog',
    description: 'A full-stack blogging platform with user authentication and CRUD operations',
    image: blog1,
    details: [
      'Designed the front-end using React, providing a responsive and user-friendly interface with a RESTful API using Node.js and Express for handling CRUD operations on blog posts in the back-end',
      'User authentication and authorization using JSON Web Tokens (JWT) is used for secure access to the platform.',
      'Used docker and kubernetes to dockerize the application in order to deploy it using GCP',
      'Created full documentation of the program which explains the code and functionality of the program in a ReadMe.',
    ],
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Docker', 'Kubernetes', 'JWT'],
    videoUrl: null,
    githubUrl: 'https://github.com/piran777'
  },
  {
    id: 3,
    title: 'Maze World',
    description: 'A 2D maze game with multiple levels built in Unity',
    image: maze2,
    details: [
      'Made a 2D maze game with 3 levels using Unity and C# to create the levels for the game and to give movement and actions to the characters within the game using the C# scripts',
      'Had different enemy types in each level with AOE detection/shooting, target tracking and different characters which use different abilities in the game.',
    ],
    technologies: ['C#', 'Unity'],
    videoUrl: 'https://www.youtube.com/embed/ZxHu8RLDSTE',
    githubUrl: 'https://github.com/piran777'
  },
  {
    id: 4,
    title: 'MyMusicPlayer',
    description: 'A music streaming app with playlist management and YouTube integration',
    image: music1,
    details: [
      'Audio streaming app that can create, update, and delete playlists by adding songs and playing them directly from youtube for logged in users.',
      'Search by artists, albums, or songs names to find the track and add it to a playlist or to remove it from an existing one',
      'Account creation, verification, deletion, deactivation, and authentication with JWT is integrated. Users that are logged in with an account have more features than guests that have no account.',
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
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={6} key={project.id}>
                <MotionCard 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: theme.shadows.small,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
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
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Chip 
                          key={tech} 
                          label={tech} 
                          size="small" 
                          variant="outlined"
                          color="primary"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      ))}
                      {project.technologies.length > 4 && (
                        <Chip 
                          label={`+${project.technologies.length - 4}`} 
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      )}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      size="small" 
                      startIcon={<CodeIcon />}
                      onClick={() => handleOpenDialog(project)}
                    >
                      Learn More
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        size="small" 
                        startIcon={<GitHubIcon />}
                        href={project.githubUrl}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    )}
                  </CardActions>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
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
