import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <Card sx={{ padding: '20px', backgroundColor: '#909E9F', color: '#22252B' }}>
          <CardContent>
            <Typography variant="h4" component="div">
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              Hello! I'm Jackson Saenz, a Computer Science student at the University of Texas at Dallas, graduating in December 2024. My academic journey has equipped me with a strong foundation in key areas such as Digital Logic and Computer Design, Database Systems, Data Structures and Algorithms Analysis, and Systems Programming.
            </Typography>
            <Typography variant="body1" paragraph>
              I am proficient in modern engineering workflows with JavaScript and TypeScript across React, Next.js, and Vite-based frontends, and Node.js/Express services on the backend. I work with PostgreSQL, REST APIs, Docker, GitHub Actions, and cloud deployment workflows, while still keeping strong fundamentals in Python and C/C++ for systems and performance-focused projects.
            </Typography>
            <Typography variant="body1" paragraph>
              Over the past few years, I have worked on several notable projects. For instance, I developed a web-based LED Controller using Express, Node.js, Python, and Vue.js that allows dynamic adjustment of LED lights through API endpoints. Another project involved creating a Multi-Threaded Hash Tree in C to compute hash values of large files efficiently. Additionally, I orchestrated a Simple Shell with advanced features like command history and piping, ensuring robust performance and user experience.
            </Typography>
            <Typography variant="body1" paragraph>
              Outside of my technical skills, I have practical experience working as a Plumber at Smart Plumbing, Inc., where I honed my problem-solving abilities and attention to detail by interpreting blueprints and repairing complex systems.
            </Typography>
            <Typography variant="body1" paragraph>
              I am an active member of the Association for Computing Machinery and have participated in HackUTD, a hackathon where I competed alongside 1.2k students to tackle challenges set by sponsors such as JPMorgan, Goldman Sachs, and Toyota.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
