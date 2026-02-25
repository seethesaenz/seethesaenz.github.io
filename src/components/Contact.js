import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <Card sx={{ padding: '20px', backgroundColor: '#3E4E4C', color: '#E5E8EB' }}>
          <CardContent>
            <Typography variant="h4" component="div" className="centered-title">
              Contact Me
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
              <Link href="mailto:saenzjack1@icloud.com" color="inherit" target="_blank" rel="noopener noreferrer">
                <EmailIcon sx={{ fontSize: 40 }} />
              </Link>
              <Link href="https://linkedin.com/in/saenzjack" color="inherit" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </Link>
              <Link href="https://github.com/seethesaenz" color="inherit" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: 40 }} />
              </Link>
            </Box>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
