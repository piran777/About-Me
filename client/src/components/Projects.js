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
  GitHub as GitHubIcon,
  SmartToy as SmartToyIcon
} from '@mui/icons-material';

import trafficImage from '../Assets/TrafficAIProject.PNG';
import blog1 from '../Assets/blog-login.PNG';
import music1 from '../Assets/music-1.PNG'; 
import maze2 from '../Assets/Maze-Game-diag.PNG'; 
import topoolgy from '../Assets/topoolgy.png';
import gameXStudioImage from '../Assets/GameX-Studio.png';
import postmarkImage from '../Assets/postmark.png';
import autoStandupBotImage from '../Assets/auto-standup-bot.png';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const projects = [
  {
    id: 1,
    title: 'Auto Standup Bot',
    description: 'Atlassian Forge app that generates AI-powered daily standups from Jira and GitHub activity, delivered to Slack or Microsoft Teams.',
    image: autoStandupBotImage,
    details: [
      'Built and published an Atlassian Forge app that generates AI-powered daily standups from Jira and GitHub activity, delivering formatted updates to Slack or Microsoft Teams on schedule or on demand',
      'Implemented Slack OAuth 2.0 with automatic channel discovery and engineered a noise suppression system that filters Jira changelogs by user activity signals, eliminating irrelevant ticket updates'
    ],
    technologies: ['TypeScript', 'React', 'Atlassian Forge', 'Atlaskit', 'OpenAI API', 'Slack OAuth 2.0', 'GitHub API'],
    videoUrl: 'https://www.youtube.com/embed/ES-rX_oDP_c',
    githubUrl: 'https://github.com/piran777/stadup-writer',
    liveUrl: 'https://marketplace.atlassian.com/apps/542311656/auto-standup-bot'
  },
  {
    id: 2,
    title: 'Postmark - Unified Email Client',
    description: 'Unified email client aggregating Gmail and Outlook accounts into a single inbox with OAuth 2.0, real-time sync, and Gmail-inspired UI.',
    image: postmarkImage,
    details: [
      'Built a unified email client aggregating multiple Gmail and Outlook accounts into a single inbox, featuring OAuth 2.0 account linking, on-demand email sync, and thread-level conversation views',
      'Implemented multi-provider email synchronization using Google Gmail API and Microsoft Graph API with automatic token refresh, delta sync via Gmail History API, and robust error recovery',
      'Developed Gmail-inspired UI with keyboard navigation, real-time search, filter popovers, collapsible conversation threads, and dark/light mode theming'
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'NextAuth.js', 'Google APIs', 'Microsoft Graph API'],
    videoUrl: null,
    githubUrl: 'https://github.com/piran777/Postmark-'
  },
  {
    id: 3,
    title: 'GameX Studio - AI-Powered Game Development IDE',
    description: 'AI-powered IDE enabling Unity game development through natural language prompts with Python backend and React/Electron frontend.',
    image: gameXStudioImage,
    details: [
      'Architected AI-powered IDE enabling Unity game development through natural language prompts, with Python backend, React/Electron frontend, and Unity C# bridge for real-time engine manipulation and automated script generation',
      'Implemented multi-AI provider integration (GPT-4, Claude) with context-aware suggestions, intelligent debugging recommendations, and automated Unity scene management through natural language processing',
      'Developed comprehensive Unity Bridge system with real-time console integration, automated asset management, and seamless GameObject manipulation, transforming game development workflow efficiency'
    ],
    technologies: ['Python', 'React', 'Electron', 'Unity C#', 'GPT-4', 'Claude', 'Natural Language Processing'],
    videoUrl: null,
    githubUrl: 'https://github.com/piran777'
  },
  {
    id: 4,
    title: 'Intelligent Traffic Management System',
    description: 'ML traffic prediction system using random forest classifier to accurately forecast intersection congestion patterns.',
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
    id: 5,
    title: 'ContentCraft - Full-Stack Publishing Platform',
    description: 'Comprehensive content management system with user authentication, role-based access control, and dynamic post creation capabilities.',
    image: blog1,
    details: [
      'Engineered a comprehensive content management system with user authentication, role-based access control, and dynamic post creation/editing capabilities',
      'Implemented secure user registration, JWT authentication, and database-driven commenting system with content tagging functionality',
      'Built responsive frontend interface and RESTful API backend, enabling seamless content publishing and user interaction'
    ],
    technologies: ['JavaScript', 'React.js', 'Node.js/Express', 'Authentication Middleware', 'Database Integration', 'RESTful APIs'],
    videoUrl: null,
    githubUrl: 'https://github.com/piran777/Full-Stack-Blogging-Platform'
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleImageClick = (image, title) => {
    setSelectedImage({ src: image, alt: title });
    setImageDialogOpen(true);
  };

  const handleCloseImageDialog = () => {
    setImageDialogOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box component="main" sx={{ py: { xs: 10, md: 12 } }}>
      <Container maxWidth="lg">
        <MotionBox 
          ref={titleRef}
          sx={{ mb: 6, textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" component="h1" gutterBottom
            sx={{ fontWeight: 700 }}
          >
            My Projects
          </Typography>
          <Typography 
            variant="body1" color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            A showcase of my technical work and passion projects across various technologies and domains.
          </Typography>
        </MotionBox>

        <MotionBox
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3,
          }}>
            {projects.map((project, index) => (
              <MotionCard
                key={project.id}
                sx={{
                  height: 340,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                    borderColor: theme.palette.primary.main,
                  },
                }}
                onClick={() => handleOpenDialog(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {project.image ? (
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      height: 110, 
                      width: '100%', 
                      objectFit: 'cover',
                      objectPosition: project.id === 2 ? 'center top' : 'center center',
                    }}
                  />
                ) : (
                  <Box sx={{ 
                    height: 110, 
                    width: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.8)} 0%, ${alpha(theme.palette.secondary.main, 0.8)} 100%)`,
                  }}>
                    <SmartToyIcon sx={{ fontSize: 40, color: 'white', opacity: 0.9 }} />
                  </Box>
                )}
                <CardContent sx={{ flex: '1 1 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', px: 2, py: 2, minHeight: 0 }}>
                  <Typography
                    variant="h6" component="h2"
                    sx={{ 
                      fontWeight: 600, 
                      fontSize: '0.95rem', 
                      textAlign: 'center', 
                      lineHeight: 1.3,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      mb: 1,
                      minHeight: 42,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2" color="text.secondary"
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textAlign: 'center',
                      mb: 1.5,
                      fontSize: '0.83rem',
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.75, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: '0.72rem',
                          height: 24,
                          borderColor: theme.palette.divider,
                          color: theme.palette.text.secondary,
                        }}
                      />
                    ))}
                    {project.technologies.length > 2 && (
                      <Chip
                        label={`+${project.technologies.length - 2}`}
                        size="small"
                        sx={{
                          fontSize: '0.72rem',
                          height: 24,
                          backgroundColor: theme.palette.background.paper,
                          color: theme.palette.text.secondary,
                        }}
                      />
                    )}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0, mt: 'auto', justifyContent: 'center' }}>
                  <Button
                    size="small"
                    startIcon={<CodeIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDialog(project);
                    }}
                    sx={{ fontWeight: 500 }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </MotionCard>
            ))}
          </Box>
        </MotionBox>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        sx={{ 
          '& .MuiDialog-paper': { 
            borderRadius: 3,
            overflow: 'hidden',
          },
        }}
      >
        {selectedProject && (
          <>
            <Box sx={{ 
              position: 'relative', 
              height: 300, 
              overflow: 'hidden',
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
              cursor: selectedProject.image ? 'pointer' : 'default',
            }}>
              {selectedProject.image ? (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  onClick={() => handleImageClick(selectedProject.image, selectedProject.title)}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: selectedProject.id === 2 ? 'center top' : 'center center',
                  }}
                />
              ) : (
                <Box sx={{ 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                }}>
                  <SmartToyIcon sx={{ fontSize: 80, color: 'white', opacity: 0.9 }} />
                </Box>
              )}
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent sx={{ px: { xs: 3, md: 4 }, py: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                {selectedProject.title}
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                {selectedProject.description}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 2, fontWeight: 600 }}>
                Project Details
              </Typography>
              <List sx={{ pl: 2, mb: 3 }}>
                {selectedProject.details.map((detail, idx) => (
                  <ListItem key={idx} sx={{ display: 'list-item', py: 0.5 }}>
                    <ListItemText primary={detail} primaryTypographyProps={{ color: 'text.secondary', variant: 'body2' }} />
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
                    size="small"
                    sx={{ borderColor: theme.palette.divider }}
                  />
                ))}
              </Box>
              
              {selectedProject.videoUrl && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Demo Video
                  </Typography>
                  <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 2 }}>
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
            <DialogActions sx={{ px: 3, pb: 3, gap: 1 }}>
              {selectedProject.githubUrl && (
                <Button 
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  sx={{ borderColor: theme.palette.divider, color: theme.palette.text.primary }}
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
              <Button onClick={handleCloseDialog} sx={{ color: 'text.secondary' }}>
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Image Popup Dialog */}
      <Dialog
        open={imageDialogOpen}
        onClose={handleCloseImageDialog}
        maxWidth="lg"
        fullWidth
        sx={{ 
          '& .MuiDialog-paper': { 
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
          },
        }}
      >
        {selectedImage && (
          <Box sx={{ 
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '90vh', 
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            />
            <IconButton
              onClick={handleCloseImageDialog}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
