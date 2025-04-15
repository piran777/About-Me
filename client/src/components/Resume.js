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

  const resumePdfPath = `${process.env.PUBLIC_URL}/Piran Aminullah Resume.pdf`;

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
            My Resume
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            View or download my professional resume
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            startIcon={<DownloadIcon />}
            href={resumePdfPath}
            download="Piran_Aminullah_Resume.pdf"
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
                    January 2025 - Current
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    London, ON
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Developed key features for a financial platform serving 100,000+ professionals through a contracting project, including improving linked account visibility and modernizing form components for enhanced usability.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Upgraded backend infrastructure by migrating a Ruby on Rails system to version 7, improving scalability and performance.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Led internationalization efforts, translating platform content into 7 languages for global accessibility.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Designed and implemented a schema management system, enhancing efficiency for administrators.
                </Typography>
                <Typography component="li" variant="body2">
                  Collaborated cross-functionally to roll out new features and automated tests, improving software reliability.
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                Technologies Used: Ruby on Rails 6/7, React.js, JavaScript, TypeScript, Cucumber rails, RSpec, Jest, ESBuild, Webpacker, Material-UI, Xcode, Docker, SCSS, HTML/CSS
              </Typography>
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
                    September 2024 - January 2025
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    London, ON
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Enhanced and maintained backend systems using Ruby on Rails and Node.js, focusing on upgrading legacy codebases to the latest frameworks and models to improve scalability and performance.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Delivered dynamic and responsive features for React.js and React Native applications, ensuring seamless user experiences across platforms.
                </Typography>
                <Typography component="li" variant="body2">
                  Led a development team in building multiple features, working directly with the client to gather requirements, incorporate feedback, and deliver tailored solutions on time and within scope.
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
                    HiCoder
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    June 2024 - September 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    Canada (Remote)
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Led the design and development of scalable server-side applications using Node.js, enhancing performance and reliability.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Developed the client side using crema/react.js, ensuring a seamless and responsive user experience.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Assisted in building and implementing RESTful APIs, facilitating efficient communication between server and client applications.
                </Typography>
                <Typography component="li" variant="body2">
                  Diagnosed and resolved critical performance issues, leading to significant improvements in application responsiveness and user experience.
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                Technologies Used: Node.js, Express.js, React.js, JavaScript, HTML, CSS, Crema (React UI Framework)
              </Typography>
            </Box>
            
            {/* PawmirPaintings LTD */}
            <Box>
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Web Developer Internship
                  </Typography>
                  <Typography variant="subtitle1">
                    PawmirPaintings LTD
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    April 2022 - September 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="right">
                    London, ON
                  </Typography>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph>
                  Collaborated with a diverse team of developers, actively contributing ideas and insights for website development.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Built the company's website through the integration of JavaScript, CSS, and HTML, leading to enhanced user interaction and navigation.
                </Typography>
                <Typography component="li" variant="body2">
                  Implemented a robust contact information section using Node.js/Express, addressing user issues promptly.
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                Technologies Used: Node.js, Express.js, JavaScript, HTML, CSS
              </Typography>
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
                  Bachelor of Engineering Science, Software Engineering
                </Typography>
                <Typography variant="subtitle1">
                  Western University
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary" align="right">
                  London, ON
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Completed comprehensive coursework in software development, algorithms, data structures, database systems, and software project management.
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Technical Skills
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Typography variant="body1" paragraph>
              <strong>Languages:</strong> JavaScript, TypeScript, Python, Ruby, Java, C#, C/C++, HTML, CSS
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Frameworks & Libraries:</strong> React.js, Node.js, Express.js, Ruby on Rails, Material-UI, Crema
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Testing:</strong> Jest, RSpec, Cucumber Rails
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Tools & Platforms:</strong> Git, Docker, Kubernetes, AWS, ESBuild, Webpacker, Xcode, Unity
            </Typography>
            <Typography variant="body1">
              <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL
            </Typography>
          </Box>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Resume;
