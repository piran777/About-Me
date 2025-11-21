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
import PersonIcon from '@mui/icons-material/Person';
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
  color: 'white',
  marginLeft: theme.spacing(2),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: active ? '100%' : '0%',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.secondary.main,
    transition: 'width 0.3s ease-in-out'
  },
  '&:hover::after': {
    width: '100%'
  }
}));

const StyledSocialIcon = styled(IconButton)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem 
            button 
            component={Link} 
            to={link.path} 
            key={link.name}
            sx={{ 
              backgroundColor: isActive(link.path) ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
              borderLeft: isActive(link.path) ? '4px solid #1976d2' : '4px solid transparent'
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              {link.icon}
            </Box>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="primary" elevation={2}>
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                Piran Aminullah
              </Typography>
              
              {isMobile ? (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StyledSocialIcon aria-label="github" href="https://github.com/piran777" target="_blank" size="small">
                      <GitHubIcon />
                    </StyledSocialIcon>
                    <StyledSocialIcon aria-label="linkedin" href="https://www.linkedin.com/in/piran-aminullah-a57221220/" target="_blank" size="small">
                      <LinkedInIcon />
                    </StyledSocialIcon>
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer(true)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {navLinks.map((link) => (
                    <StyledNavLink
                      key={link.name}
                      component={Link}
                      to={link.path}
                      active={isActive(link.path) ? 1 : 0}
                      startIcon={link.icon}
                    >
                      {link.name}
                    </StyledNavLink>
                  ))}
                  <Box sx={{ ml: 2, display: 'flex' }}>
                    <StyledSocialIcon aria-label="github" href="https://github.com/piran777" target="_blank" size="small">
                      <GitHubIcon />
                    </StyledSocialIcon>
                    <StyledSocialIcon aria-label="linkedin" href="https://www.linkedin.com/in/piran-aminullah-a57221220/" target="_blank" size="small">
                      <LinkedInIcon />
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
