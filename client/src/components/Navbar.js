import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  useMediaQuery, 
  Container,
  useScrollTrigger,
  Slide
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const StyledNavLink = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  marginLeft: theme.spacing(1),
  fontWeight: active ? 600 : 500,
  fontSize: '0.9rem',
  position: 'relative',
  padding: '6px 14px',
  borderRadius: 8,
  transition: 'all 0.2s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: active ? '60%' : '0%',
    height: '2px',
    bottom: 2,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.25s ease',
    borderRadius: 1,
  },
  '&:hover': {
    backgroundColor: 'rgba(37, 99, 235, 0.06)',
  },
  '&:hover::after': {
    width: '60%',
  },
}));

const StyledSocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(0.5),
  transition: 'color 0.2s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(37, 99, 235, 0.06)',
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { name: 'Home', path: '/About-Me', icon: <HomeIcon /> },
    { name: 'Resume', path: '/About-Me/resume', icon: <ArticleIcon /> },
    { name: 'Projects', path: '/About-Me/projects', icon: <WorkIcon /> },
    { name: 'Contact', path: '/About-Me/contact', icon: <MailIcon /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawerContent = (
    <Box
      sx={{ width: 280, pt: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ px: 3, pb: 2, mb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
          Piran Aminullah
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Software Engineer
        </Typography>
      </Box>
      <List sx={{ px: 1 }}>
        {navLinks.map((link) => (
          <ListItem 
            button 
            component={Link} 
            to={link.path} 
            key={link.name}
            sx={{ 
              borderRadius: 2,
              mb: 0.5,
              backgroundColor: isActive(link.path) ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
              color: isActive(link.path) ? 'primary.main' : 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.06)',
              },
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', color: 'inherit' }}>
              {link.icon}
            </Box>
            <ListItemText 
              primary={link.name} 
              primaryTypographyProps={{ fontWeight: isActive(link.path) ? 600 : 500 }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
              <Typography 
                variant="h6" 
                component={Link}
                to="/About-Me"
                sx={{ 
                  fontWeight: 700, 
                  color: 'text.primary',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                Piran Aminullah
              </Typography>
              
              {isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StyledSocialIcon aria-label="github" href="https://github.com/piran777" target="_blank" size="small">
                    <GitHubIcon fontSize="small" />
                  </StyledSocialIcon>
                  <StyledSocialIcon aria-label="linkedin" href="https://www.linkedin.com/in/piran-aminullah-a57221220/" target="_blank" size="small">
                    <LinkedInIcon fontSize="small" />
                  </StyledSocialIcon>
                  <IconButton
                    edge="end"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ color: 'text.primary', ml: 0.5 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {navLinks.map((link) => (
                    <StyledNavLink
                      key={link.name}
                      component={Link}
                      to={link.path}
                      active={isActive(link.path) ? 1 : 0}
                    >
                      {link.name}
                    </StyledNavLink>
                  ))}
                  <Box sx={{ ml: 2, pl: 2, borderLeft: '1px solid', borderColor: 'divider', display: 'flex' }}>
                    <StyledSocialIcon aria-label="github" href="https://github.com/piran777" target="_blank" size="small">
                      <GitHubIcon fontSize="small" />
                    </StyledSocialIcon>
                    <StyledSocialIcon aria-label="linkedin" href="https://www.linkedin.com/in/piran-aminullah-a57221220/" target="_blank" size="small">
                      <LinkedInIcon fontSize="small" />
                    </StyledSocialIcon>
                  </Box>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
