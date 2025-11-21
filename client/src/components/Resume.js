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
            
            {/* hyperPad - Junior Software Engineer */}
            <Box sx={{ mb: 4 }}>
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Junior Software Engineer
                  </Typography>
                  <Typography variant="subtitle1">
                    hyperPad
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    Jan 2025 – Present
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    London, ON
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Architected and developed core features for a major financial platform serving 100,000+ professionals through contracting work, including complex investment account visibility algorithms and form component modernization
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Led full-stack development of a comprehensive schema management and translation system, enabling dynamic form generation and multi-language support across 7 languages using i18n integration
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Designed and implemented Domain-Specific Language (DSL) processors for automated schema translations, significantly improving administrator efficiency and reducing manual configuration overhead
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Developed comprehensive test suites using Cucumber, RSpec, and Jest, ensuring robust UI functionality and backend reliability in a regulated financial environment
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Technologies Used:</strong> Ruby on Rails 6/7, React.js, JavaScript, TypeScript, i18n, GitLab, Cucumber, RSpec, Jest, Material-UI, Docker, AWS, Redux, Redis, Honeybadger, Okta
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
                    Sept 2024 – Jan 2025
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    London, ON
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Spearheaded backend infrastructure upgrades, migrating Ruby on Rails systems from version 6 to 7 while maintaining production stability for high-traffic financial applications
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Enhanced and maintained backend systems using Ruby on Rails and Node.js, focusing on upgrading legacy codebases to improve scalability and performance
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Delivered dynamic and responsive features for React.js and React Native applications, ensuring seamless user experiences across platforms
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Technologies Used:</strong> Ruby on Rails 6/7, React.js, React Native, Node.js, JavaScript, TypeScript, i18n, GitLab, Cucumber, RSpec, Jest, Material-UI, Docker, AWS, Redux, Redis
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
                    Remote
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Led design and development of scalable server-side applications using Node.js, enhancing performance and reliability, while developing responsive client-side features using React.js
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Assisted in building and implementing RESTful APIs, facilitating efficient communication between server and client applications
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Diagnosed and resolved performance bottlenecks in Node.js applications, improving application responsiveness and user experience
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Technologies Used:</strong> Node.js, Express.js, React.js, JavaScript, HTML, CSS, Material UI/ThemeUI
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
                Python, Pandas, Streamlit, Git, Jira/Confluence
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Built ML traffic prediction system using random forest classifier to accurately forecast intersection congestion patterns and optimize route planning
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Developed Python heat map algorithm to identify high-traffic zones in London, Ontario, integrated with Google Maps API for real-time visualization
                </Typography>
              </Box>
            </Box>
            
            {/* ContentCraft */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                ContentCraft - Full-Stack Publishing Platform
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                JavaScript, React.js, Node.js/Express, RESTful APIs
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Engineered a comprehensive content management system with user authentication, role-based access control, and dynamic post creation/editing capabilities
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Implemented secure user registration, JWT authentication, and database-driven commenting system with content tagging functionality
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Built responsive frontend interface and RESTful API backend, enabling seamless content publishing and user interaction
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
                  Sept 2020 – Apr 2024
                </Typography>
                <Typography variant="body2" color="text.secondary" align="right">
                  London, ON
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Western Engineering Co-op/Internship Program</strong>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Course Work:</strong> Data Structures and Algorithms, Databases, Networking, Software Engineering Design, Software Project and Process Management, Software Design, Computer Information Security, Data Science/Machine Learning, Digital Logic Systems, Microprocessors/Microcomputers, Operating Systems, Artificial Intelligence I & II, Cloud Computing
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
