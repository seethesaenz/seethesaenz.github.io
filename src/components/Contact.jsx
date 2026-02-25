import React from 'react';
import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <Card variant="outlined" sx={{ width: '100%', p: 1, backgroundColor: '#4F5E59', color: '#E5E8EB', borderColor: 'rgba(229, 232, 235, 0.28)' }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Cheers :)
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Link href="mailto:saenzjack1@outlook.com" color="inherit" target="_blank" rel="noopener noreferrer">
                <EmailIcon sx={{ fontSize: 36 }} />
              </Link>
              <Link href="https://linkedin.com/in/saenzjack" color="inherit" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ fontSize: 36 }} />
              </Link>
              <Link href="https://github.com/seethesaenz" color="inherit" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: 36 }} />
              </Link>
            </Box>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
