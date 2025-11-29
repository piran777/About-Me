import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Grid,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download as DownloadIcon } from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resumePdfPath = `${process.env.PUBLIC_URL}/Piran_Aminullah_cv.pdf`;

  return (
    <Box component="main" sx={{ py: 10 }}>
      <Container maxWidth="md">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 4 }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Experience
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            My professional journey and technical expertise
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            startIcon={<DownloadIcon />}
            href={resumePdfPath}
            download="Piran_Aminullah_cv.pdf"
            sx={{ mt: 2, mb: 6 }}
          >
            Download PDF
          </Button>
        </MotionBox>

        <MotionPaper 
          elevation={2} 
          sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Piran Aminullah
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              London, Ontario • piranaminullah@gmail.com
            </Typography>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Professional Experience
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            {/* hyperPad - Software Engineer */}
            <Box sx={{ mb: 4 }}>
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Software Engineer
                  </Typography>
                  <Typography variant="subtitle1">
                    hyperPad (Client: Financial Services Platform)
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    Jan 2025 – Current
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    London, ON
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 1, fontStyle: 'italic' }}>
                Full-stack engineer on enterprise financial platform serving 100,000+ investment professionals
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Developed comprehensive multi-language form system supporting 7 languages (English, French, Spanish, Portuguese, German, Italian, Japanese), enabling international platform expansion and eliminating manual translation workflows for platform administrators
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Built investment account visibility features and modernized legacy form components for regulated financial platform, directly impacting daily workflows of thousands of financial advisors
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Architected schema management system with custom Domain-Specific Language (DSL) for automated translations, reducing configuration overhead by 60% and accelerating feature deployment timelines
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Designed and implemented comprehensive testing infrastructure using Cucumber, RSpec, and Jest, ensuring 95%+ test coverage and robust functionality in compliance-critical financial environment
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Collaborated with cross-functional teams to deliver features in an Agile environment, participating in code reviews and maintaining high code quality standards
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Tech Stack:</strong> Ruby on Rails 7, React, TypeScript, PostgreSQL, Redis, AWS, Docker, Material-UI, Redux, GitLab, Okta
                </Typography>
              </Box>
            </Box>
            
            {/* hyperPad - Software Developer Internship */}
            <Box sx={{ mb: 4 }}>
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Software Developer Internship
                  </Typography>
                  <Typography variant="subtitle1">
                    hyperPad
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    Sept 2024 – Dec 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    London, ON
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Led the Ruby on Rails 6 to 7 migration for a production backend used by a major client, achieving zero downtime and improved performance
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Developed features for a React Native sports recommendation app, implementing AI-driven content suggestions and user engagement components
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Contributed to full-stack development across multiple client projects, building scalable backend logic and modern mobile features
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Tech Stack:</strong> Ruby on Rails 6/7, React Native, Node.js, TypeScript, AWS, Docker
                </Typography>
              </Box>
            </Box>
            
            {/* HiCoder */}
            <Box sx={{ mb: 4 }}>
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Software Engineer Internship
                  </Typography>
                  <Typography variant="subtitle1">
                    HiCoder Canada
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    Jun 2024 – Sept 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    (Remote)
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Led design and development of scalable Node.js backend services and responsive React frontends for client applications
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Built and implemented RESTful APIs facilitating efficient communication between server and client applications
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Diagnosed and resolved performance bottlenecks in Node.js applications, improving application response times by 40% and enhancing overall user experience
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Tech Stack:</strong> Node.js, Express, React, JavaScript, HTML, CSS, Material-UI
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Selected Projects
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            {/* Intelligent Traffic Management System */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Intelligent Traffic Management System
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <a href="https://github.com/piran777/Capstone" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  GitHub Repository →
                </a>
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Built ML traffic prediction system using random forest classifier to accurately forecast intersection congestion patterns and optimize route planning
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Developed Python heat map algorithm to identify high-traffic zones in London, Ontario, integrated with Google Maps API for real-time visualization
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Tech:</strong> Python, Pandas, Streamlit, Git
                </Typography>
              </Box>
            </Box>
            
            {/* ContentCraft */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                ContentCraft - Full-Stack Publishing Platform
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <a href="https://github.com/piran777/Full-Stack-Blogging-Platform" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  GitHub Repository →
                </a>
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Engineered comprehensive content management system with user authentication, role-based access control, and dynamic post creation/editing capabilities
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Implemented secure user registration, JWT authentication, and database-driven commenting system with content tagging functionality
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Built responsive frontend interface and RESTful API backend, enabling seamless content publishing and user interaction
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Tech:</strong> React, Node.js/Express, MongoDB, REST APIs
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Education
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container justifyContent="space-between" alignItems="flex-start">
              <Grid item>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Bachelor's of Engineering Science, Software Engineering
                </Typography>
                <Typography variant="subtitle1">
                  Western University
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Sept 2020 - Apr 2024
                </Typography>
                <Typography variant="body2" color="text.secondary" align="right">
                  London, ON
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{ mt: 1 }}>
              • Western Engineering Co-op/Internship Program
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Technical Skills
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Typography variant="body1" paragraph>
              <strong>Languages:</strong> JavaScript, TypeScript, Python, Ruby, Java, C/C++, C#
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Frontend:</strong> React.js, React Native, HTML/CSS, Material-UI, SCSS
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Backend:</strong> Node.js/Express, Ruby on Rails 6/7, Spring Boot, RESTful APIs
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Databases:</strong> MySQL, MongoDB, Redis
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>DevOps & Cloud:</strong> Docker, Kubernetes, AWS, GCP, GitLab
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Tools & Testing:</strong> Git, Cucumber, Selenium, RSpec, Jest, Jira/Confluence, Wireshark, Mininet, Honeybadger, Okta
            </Typography>
            <Typography variant="body1">
              <strong>Libraries:</strong> Pandas, Streamlit, i18n, Redux
            </Typography>
          </Box>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Resume;
