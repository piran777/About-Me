import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Grid,
  Divider,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download as DownloadIcon } from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Resume = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resumePdfPath = `${process.env.PUBLIC_URL}/Piran_Aminullah_cv.pdf`;

  const sectionTitleSx = { fontWeight: 600, color: 'text.primary', mb: 0.5 };
  const jobTitleSx = { fontWeight: 600, fontSize: '1.05rem' };
  const companySx = { color: 'text.secondary', fontWeight: 500 };
  const bulletSx = { color: 'text.secondary', lineHeight: 1.7 };
  const linkSx = { color: theme.palette.primary.main, textDecoration: 'none', fontWeight: 500, '&:hover': { textDecoration: 'underline' } };

  return (
    <Box component="main" sx={{ py: { xs: 10, md: 12 } }}>
      <Container maxWidth="md">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 5 }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Experience
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 500, mx: 'auto' }}>
            My professional journey and technical expertise
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            startIcon={<DownloadIcon />}
            href={resumePdfPath}
            download="Piran_Aminullah_cv.pdf"
            sx={{ mt: 1 }}
          >
            Download PDF
          </Button>
        </MotionBox>

        <MotionPaper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 5 }, 
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: '#fff',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Piran Aminullah
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              Software Engineer
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              London, Ontario &middot; piranaminullah@gmail.com
            </Typography>
          </Box>

          {/* Professional Experience */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" gutterBottom sx={sectionTitleSx}>
              Professional Experience
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            {/* hyperPad - Software Engineer */}
            <Box sx={{ mb: 4 }}>
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h6" sx={jobTitleSx}>
                    Software Engineer
                  </Typography>
                  <Typography variant="subtitle2" sx={companySx}>
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
              <Typography variant="body2" sx={{ mt: 1, mb: 1, fontStyle: 'italic', color: 'text.secondary' }}>
                Full-stack engineer on enterprise financial platform serving 100,000+ investment professionals
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Developed comprehensive multi-language form system supporting 7 languages (English, French, Spanish, Portuguese, German, Italian, Japanese), enabling international platform expansion and eliminating manual translation workflows for platform administrators
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Built investment account visibility features and modernized legacy form components for regulated financial platform, directly impacting daily workflows of thousands of financial advisors
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Architected schema management system with custom Domain-Specific Language (DSL) for automated translations, reducing configuration overhead by 60% and accelerating feature deployment timelines
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Designed and implemented comprehensive testing infrastructure using Cucumber, RSpec, and Jest, ensuring 95%+ test coverage and robust functionality in compliance-critical financial environment
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Collaborated with cross-functional teams to deliver features in an Agile environment, participating in code reviews and maintaining high code quality standards
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  <strong>Tech Stack:</strong> Ruby on Rails 7, React, TypeScript, PostgreSQL, Redis, AWS, Docker, Material-UI, Redux, GitLab, Okta
                </Typography>
              </Box>
            </Box>
            
            {/* hyperPad - Software Developer Internship */}
            <Box sx={{ mb: 4 }}>
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h6" sx={jobTitleSx}>
                    Software Developer Internship
                  </Typography>
                  <Typography variant="subtitle2" sx={companySx}>
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
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Led the Ruby on Rails 6 to 7 migration for a production backend used by a major client, achieving zero downtime and improved performance
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Developed features for a React Native sports recommendation app, implementing AI-driven content suggestions and user engagement components
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Contributed to full-stack development across multiple client projects, building scalable backend logic and modern mobile features
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  <strong>Tech Stack:</strong> Ruby on Rails 6/7, React Native, Node.js, TypeScript, AWS, Docker
                </Typography>
              </Box>
            </Box>
            
            {/* HiCoder */}
            <Box sx={{ mb: 4 }}>
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h6" sx={jobTitleSx}>
                    Software Engineer Internship
                  </Typography>
                  <Typography variant="subtitle2" sx={companySx}>
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
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Designed and shipped RESTful APIs facilitating efficient communication between server and client applications
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Diagnosed and resolved performance bottlenecks in Node.js applications, improving application response times by 40% and enhancing overall user experience
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  <strong>Tech Stack:</strong> Node.js, Express, React, JavaScript, HTML, CSS, Material-UI
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Engineering Projects */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" gutterBottom sx={sectionTitleSx}>
              Engineering Projects
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={jobTitleSx}>
                Auto Standup Bot - Atlassian Marketplace App
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Box component="a" href="https://marketplace.atlassian.com/apps/542311656/auto-standup-bot" target="_blank" rel="noopener noreferrer" sx={linkSx}>
                  Atlassian Marketplace &rarr;
                </Box>
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Published an Atlassian Forge app that generates AI-powered daily standups from Jira and GitHub activity, delivering formatted updates to Slack or Microsoft Teams on schedule or on demand
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Integrated Slack OAuth 2.0 with automatic channel discovery and engineered a noise suppression system that filters Jira changelogs by user activity signals, eliminating irrelevant ticket updates
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  <strong>Tech:</strong> TypeScript, React, Atlassian Forge, Atlaskit, OpenAI API, Slack OAuth 2.0, GitHub API
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={jobTitleSx}>
                Postmark - Unified Email Client
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Box component="a" href="https://github.com/piran777/Postmark-" target="_blank" rel="noopener noreferrer" sx={linkSx}>
                  GitHub Repository &rarr;
                </Box>
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Developed a unified email client aggregating multiple Gmail and Outlook accounts into a single inbox, featuring OAuth 2.0 account linking, on-demand email sync, and thread-level conversation views
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Implemented multi-provider email synchronization using Google Gmail API and Microsoft Graph API with automatic token refresh, delta sync via Gmail History API, and robust error recovery
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Built a Gmail-inspired UI with keyboard navigation, real-time search, filter popovers, collapsible conversation threads, and dark/light mode theming
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  <strong>Tech:</strong> Next.js, TypeScript, React, Prisma, PostgreSQL, Tailwind CSS, NextAuth.js, Google APIs
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={jobTitleSx}>
                Intelligent Traffic Management System
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Box component="a" href="https://github.com/piran777/Capstone" target="_blank" rel="noopener noreferrer" sx={linkSx}>
                  GitHub Repository &rarr;
                </Box>
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Trained a random forest classifier to forecast intersection congestion and optimize route planning, integrated with Google Maps API for real-time visualization
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  Authored a Python heatmap algorithm identifying high-traffic zones across London, Ontario
                </Typography>
                <Typography component="li" variant="body2" paragraph sx={bulletSx}>
                  <strong>Tech:</strong> Python, Pandas, Streamlit, Git
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Education */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" gutterBottom sx={sectionTitleSx}>
              Education
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container justifyContent="space-between" alignItems="flex-start">
              <Grid item>
                <Typography variant="h6" sx={jobTitleSx}>
                  Bachelor's of Engineering Science, Software Engineering
                </Typography>
                <Typography variant="subtitle2" sx={companySx}>
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
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              &bull; Western Engineering Co-op/Internship Program
            </Typography>
          </Box>
          
          {/* Technology */}
          <Box>
            <Typography variant="h5" gutterBottom sx={sectionTitleSx}>
              Technology
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            {[
              { label: 'Languages', value: 'JavaScript, TypeScript, Python, Ruby, Java, C#, C/C++' },
              { label: 'Frontend', value: 'React.js, React Native, HTML/CSS, Material-UI, SCSS, Next.js, Tailwind CSS' },
              { label: 'Backend', value: 'Node.js/Express, Ruby on Rails 6/7, Spring Boot, RESTful APIs, Prisma, NextAuth.js' },
              { label: 'Databases', value: 'MySQL, MongoDB, Redis, PostgreSQL' },
              { label: 'DevOps & Cloud', value: 'Docker, Kubernetes, AWS, GCP, GitLab, Vercel' },
              { label: 'Tools & Testing', value: 'Git, Cucumber, RSpec, Jest, Jira/Confluence, Okta, Forge' },
              { label: 'Libraries', value: 'OpenAI API, Pandas, i18n, Redux, Google APIs, Microsoft Graph API' },
            ].map((row, idx, arr) => (
              <Typography key={row.label} variant="body1" paragraph={idx < arr.length - 1} sx={{ color: 'text.secondary' }}>
                <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>{row.label}:</Box> {row.value}
              </Typography>
            ))}
          </Box>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Resume;
