import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Grid, 
  Chip,
  Avatar,

} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pawmirLogo from '../Assets/PawmirPaintingLTD.PNG';
import hicoderLogo from '../Assets/hicoder_logo.png';
import zenexLogo from '../Assets/zeenxlogo.png'; 

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const hyperPadLogo = `${process.env.PUBLIC_URL}/hyperpad_logo.jpg`;

const experiences = [
  {
    company: 'hyperPad',
    position: 'Junior Software Engineer',
    period: 'Jan 2025 – Present',
    location: 'London, ON',
    logo: hyperPadLogo,
    type: 'current',
    responsibilities: [
      'Architected and developed core features for a major financial platform serving 100,000+ professionals through contracting work, including complex investment account visibility algorithms and form component modernization',
      'Led full-stack development of a comprehensive schema management and translation system, enabling dynamic form generation and multi-language support across 7 languages using i18n integration',
      'Designed and implemented Domain-Specific Language (DSL) processors for automated schema translations, significantly improving administrator efficiency and reducing manual configuration overhead',
      'Developed comprehensive test suites using Cucumber, RSpec, and Jest, ensuring robust UI functionality and backend reliability in a regulated financial environment'
    ],
    technologies: [
      'Ruby on Rails 7', 'React.js', 'JavaScript', 'TypeScript', 'i18n', 'Cucumber', 'RSpec', 'Jest', 'Material-UI', 'Docker', 'AWS'
    ]
  },
  {
    company: 'Zenex Digital Solutions',
    position: 'Freelance Software Engineer',
    period: 'Jan 2025 – Present',
    location: 'London, ON',
    logo: zenexLogo,
    type: 'current',
    responsibilities: [
      'Developed custom websites and web applications for small to medium-sized businesses, focusing on responsive design and user experience optimization to drive client engagement and conversions',
      'Built and maintained e-commerce platforms using modern web technologies, implementing secure payment processing and inventory management systems for local Ontario businesses',
      'Designed and implemented SEO-optimized websites with clean code architecture, improving client search engine rankings and online visibility through technical SEO best practices',
      'Collaborated directly with clients to gather requirements, provide technical consultation, and deliver cost-effective digital solutions tailored to their specific business needs and budgets'
    ],
    technologies: [
      'ReactJS', 'NodeJS/Express', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SCSS', 'MaterialUI', 'SEO', 'E-commerce'
    ]
  },
  {
    company: 'hyperPad',
    position: 'Software Developer Internship',
    period: 'Sept 2024 – Jan 2025',
    location: 'London, ON',
    logo: hyperPadLogo,
    responsibilities: [
      'Spearheaded backend infrastructure upgrades, migrating Ruby on Rails systems from version 6 to 7 while maintaining production stability for high-traffic financial applications',
      'Enhanced and maintained backend systems using Ruby on Rails and Node.js, focusing on upgrading legacy codebases to improve scalability and performance',
      'Delivered dynamic and responsive features for React.js and React Native applications, ensuring seamless user experiences across platforms',
      'Gained foundational experience in full-stack development and client management, preparing for advanced financial platform contracting work'
    ],
    technologies: [
      'Ruby on Rails', 'Node.js', 'React.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML/CSS'
    ]
  },
  {
    company: 'HiCoder Canada',
    position: 'Software Engineer Internship',
    period: 'Jun 2024 – Sept 2024',
    location: 'Remote',
    logo: hicoderLogo,
    responsibilities: [
      'Led design and development of scalable server-side applications using Node.js, enhancing performance and reliability, while developing responsive client-side features using React.js',
      'Assisted in building and implementing RESTful APIs, facilitating efficient communication between server and client applications',
      'Diagnosed and resolved critical performance issues, leading to significant improvements in application responsiveness and user experience'
    ],
    technologies: [
      'Node.js', 'Express.js', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Material UI'
    ]
  },
  {
    company: 'PawmirPaintings LTD',
    position: 'Web Developer Internship',
    period: 'Apr 2022 - Sept 2023',
    location: 'London, ON',
    logo: pawmirLogo,
    responsibilities: [
      'Built the company\'s complete website from scratch using modern JavaScript, CSS, and HTML, implementing responsive design principles and interactive features that significantly enhanced user engagement and navigation experience',
      'Developed and integrated a comprehensive contact management system using Node.js and Express.js backend, enabling efficient customer communication and prompt resolution of user inquiries and service requests',
      'Collaborated with the design team to implement custom UI components and optimize website performance, resulting in improved loading times and enhanced user experience across all device types',
      'Maintained and updated website content management systems, ensuring consistent branding and seamless functionality while supporting the company\'s digital marketing initiatives'
    ],
    technologies: [
      'Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'UI/UX'
    ]
  }
];

const Experience = () => {
  
  // Intersection observer hooks
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <MotionBox 
          ref={titleRef}
          sx={{ 
            mb: 8, 
            textAlign: 'center',
            position: 'relative'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #1976d2 0%, #5c6bc0 50%, #1976d2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 100%',
              animation: 'gradient-shift 4s ease-in-out infinite',
              '@keyframes gradient-shift': {
                '0%, 100%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' }
              }
            }}
          >
            Work Experience
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary"
            sx={{ 
              maxWidth: 900, 
              mx: 'auto',
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
              mt: 2
            }}
          >
            My professional journey across software development, web technologies, and engineering.
          </Typography>
          
          {/* Decorative element */}
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: -1
          }} />
        </MotionBox>

        {/* Work Experience */}
        <MotionBox
          ref={experienceRef}
          initial={{ opacity: 0, y: 30 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {experiences.map((experience, index) => (
              <Grid item xs={12} key={index}>
                <MotionCard 
                  sx={{ 
                    p: 0,
                    borderRadius: { xs: '16px', md: '20px' },
                    backgroundColor: experience.type === 'current' 
                      ? '#f8f9ff'
                      : '#ffffff',
                    border: experience.type === 'current' 
                      ? '1px solid rgba(25, 118, 210, 0.2)'
                      : '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: experience.type === 'current'
                      ? '0 20px 40px rgba(25, 118, 210, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)'
                      : '0 10px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    minHeight: 'auto',
                    '&:hover': {
                      transform: { xs: 'translateY(-4px)', md: 'translateY(-8px) scale(1.02)' },
                      boxShadow: experience.type === 'current'
                        ? '0 25px 50px rgba(25, 118, 210, 0.15), 0 12px 24px rgba(0, 0, 0, 0.15)'
                        : '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)',
                    },
                    '&::before': experience.type === 'current' ? {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #1976d2 0%, #5c6bc0 50%, #1976d2 100%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s ease-in-out infinite',
                      '@keyframes shimmer': {
                        '0%': { backgroundPosition: '-200% 0' },
                        '100%': { backgroundPosition: '200% 0' }
                      }
                    } : {}
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box sx={{ p: { xs: 3, md: 4 } }}>
                    {/* Mobile-first layout */}
                    <Box sx={{ 
                      display: 'flex', 
                      gap: 2, 
                      alignItems: 'flex-start',
                      mb: 3
                    }}>
                      <Box sx={{ flexShrink: 0 }}>
                        <Avatar 
                          src={experience.logo} 
                          alt={`${experience.company} logo`}
                          variant="rounded"
                          sx={{ 
                            width: { xs: 50, md: 90 }, 
                            height: { xs: 50, md: 90 },
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                            backgroundColor: 'white',
                            p: { xs: 1, md: 1.5 },
                            border: '2px solid rgba(255, 255, 255, 0.8)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography 
                          variant="h4" 
                          gutterBottom 
                          sx={{ 
                            fontWeight: 700, 
                            color: experience.type === 'current' ? 'primary.main' : 'text.primary',
                            fontSize: { xs: '1.3rem', md: '1.8rem' },
                            lineHeight: 1.2,
                            mb: 1
                          }}
                        >
                          {experience.position}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            color: 'text.primary',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            mb: 2
                          }}
                        >
                          {experience.company}
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          gap: 1,
                          flexWrap: 'wrap',
                          mb: 2
                        }}>
                          <Chip 
                            label={experience.location}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              borderColor: 'primary.light',
                              color: 'primary.main',
                              fontWeight: 500,
                              fontSize: { xs: '0.7rem', md: '0.75rem' }
                            }}
                          />
                          <Chip 
                            label={experience.period}
                            size="small"
                            variant={experience.type === 'current' ? 'filled' : 'outlined'}
                            color={experience.type === 'current' ? 'primary' : 'default'}
                            sx={{ 
                              fontWeight: 500,
                              fontSize: { xs: '0.7rem', md: '0.75rem' },
                              ...(experience.type === 'current' && {
                                background: 'linear-gradient(45deg, #1976d2 30%, #5c6bc0 90%)',
                                color: 'white'
                              })
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                        
                    {/* Responsibilities Section */}
                    <Box sx={{ mb: 3 }}>
                      <Box component="ul" sx={{ 
                        pl: 0, 
                        m: 0, 
                        listStyle: 'none',
                        '& li': {
                          position: 'relative',
                          paddingLeft: '1.5rem',
                          marginBottom: { xs: '0.8rem', md: '1rem' },
                          lineHeight: 1.6,
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                          color: 'text.secondary',
                          '&::before': {
                            content: '"▸"',
                            position: 'absolute',
                            left: 0,
                            color: experience.type === 'current' ? 'primary.main' : 'secondary.main',
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', md: '1.1rem' }
                          }
                        }
                      }}>
                        {experience.responsibilities.map((responsibility, idx) => (
                          <Typography component="li" key={idx} variant="body1">
                            {responsibility}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                        
                    {/* Technologies Section */}
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 700,
                          color: 'text.primary',
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          mb: 2
                        }}
                      >
                        Technologies & Skills
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, md: 1 } }}>
                        {experience.technologies.map(tech => (
                          <Chip 
                            key={tech} 
                            label={tech} 
                            size="small" 
                            variant="filled"
                            sx={{ 
                              background: experience.type === 'current' 
                                ? 'linear-gradient(45deg, rgba(25, 118, 210, 0.1) 0%, rgba(92, 107, 192, 0.1) 100%)'
                                : 'rgba(0, 0, 0, 0.05)',
                              color: experience.type === 'current' ? 'primary.main' : 'text.secondary',
                              border: experience.type === 'current' ? '1px solid rgba(25, 118, 210, 0.2)' : '1px solid transparent',
                              fontWeight: 500,
                              fontSize: { xs: '0.7rem', md: '0.75rem' },
                              height: { xs: '24px', md: '28px' },
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Experience;