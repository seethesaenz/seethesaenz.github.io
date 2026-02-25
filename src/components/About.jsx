import React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <Card variant="outlined" sx={{ width: '100%', p: 1, backgroundColor: '#C2CCCF', color: '#22252B', borderColor: 'rgba(34, 37, 43, 0.16)' }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Hi, my name is Jackson Saenz, a software engineer who is working full-stack at the Autonomy Research Institute.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              My focus is full-stack product work, building interfaces, designing APIs, and ensuring seamless user experiences.
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2"><strong>Focus:</strong> Full-stack web applications</Typography>
              <Typography variant="body2"><strong>Based in:</strong> Corpus Christi, Texas</Typography>
              <Typography variant="body2"><strong>Interests:</strong> Full-stack, APIs, user experience</Typography>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
