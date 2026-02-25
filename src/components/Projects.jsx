import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

const projects = [
  {
    title: 'LED Controller',
    description: 'Crafted a website to automatically adjust a strip of 150 LED lights using Express, Node.js, Python, and Vue.js. Embedded multiple functions, modifying the dynamic and static color settings. Created a series of API endpoints to modularize the back-end.',
    githubUrl: 'https://github.com/seethesaenz/led-controller'
  },
  {
    title: 'Multi-Threaded Hash Tree',
    description: 'Developed a multi-threaded program in C to efficiently compute the hash value of large files. Conducted an experimental study to determine the relationship between speedup and thread count, identifying the significance between thread count and file size.',
    githubUrl: 'https://github.com/seethesaenz/multi-threaded-hash-tree'
  },
  {
    title: 'Simple Shell',
    description: 'Orchestrated a command-line interface with advanced features such as command history and piping. Utilized efficient data structures and algorithms to improve performance and user experience. Tested and debugged the input to ensure the reliability and correctness of the program.',
    githubUrl: 'https://github.com/seethesaenz/simple-shell'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        {projects.map((project) => (
          <Card key={project.title} sx={{ marginBottom: '20px', padding: '20px', backgroundColor: '#907B6F', color: '#22252B' }}>
            <CardContent>
              <Typography variant="h5" component="div" className="centered-title">
                {project.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {project.description}
              </Typography>
              <Link href={project.githubUrl} color="#22252B" target="_blank" rel="noopener noreferrer">
                See More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
