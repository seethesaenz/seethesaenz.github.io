import React from 'react';
import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import headshot from '../assets/headshot.jpg';

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <Card variant="outlined" sx={{ width: '100%', p: 1, backgroundColor: '#D4D8DB', color: '#22252B', borderColor: 'rgba(34, 37, 43, 0.16)' }}>
          <CardContent>
            <Box
              component="img"
              src={headshot}
              alt="Jackson Saenz headshot"
              sx={{
                width: { xs: 120, sm: 152 },
                height: { xs: 120, sm: 152 },
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid rgba(34, 37, 43, 0.22)',
                mb: 2,
                mx: 'auto',
              }}
            />
            <Typography variant="h3" component="h1" gutterBottom>
              Jackson Saenz
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 1.5 }}>
              Software Engineer
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 640, mx: 'auto', mb: 3 }}>
              I build modern full-stack distributed systems, as well as work on embedded systems.
            </Typography>
            <Box>
              <Stack direction="row" spacing={1.5} justifyContent="center">
                <Button variant="contained" color="primary" href="#timeline">
                  View Timeline
                </Button>
                <Button variant="outlined" color="inherit" href="#contact">
                  Contact
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Home;
