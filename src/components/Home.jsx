import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <Card sx={{ padding: '20px', backgroundColor: '#D4D8DB', color: '#22252B' }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Welcome to My Portfolio
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Hello! I'm Jackson Saenz, a Computer Science student at the University of Texas at Dallas. Check out my projects and learn more about me!
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Home;
