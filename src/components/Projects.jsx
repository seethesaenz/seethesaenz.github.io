import React from 'react';
import { Card, CardContent, Chip, Link, Stack, Typography } from '@mui/material';

const projects = [
  {
    title: 'Multi-Threaded Hash Tree',
    summary: 'C implementation of a parallel hash-tree pipeline for large-file verification.',
    impact: 'Benchmarked speedup by thread count to identify practical performance ceilings.',
    tech: ['C', 'POSIX Threads', 'Systems Programming'],
    githubUrl: 'https://github.com/seethesaenz/multi-threaded-hash-tree'
  },
  {
    title: 'Simple Shell',
    summary: 'Command-line shell supporting history, pipes, and robust process execution.',
    impact: 'Improved command throughput and usability with predictable parsing behavior.',
    tech: ['C', 'Unix', 'Shell Parsing'],
    githubUrl: 'https://github.com/seethesaenz/simple-shell'
  },
  {
    title: 'Prospective Homebuyer Portal',
    summary: 'Hackathon web app that guides first-time buyers through mortgage workflow concepts and qualification context.',
    impact: 'Combined AI-assisted guidance, CSV-driven dashboard visualizations, and Q&A support into a single product demo.',
    tech: ['Vue', 'JavaScript', 'Python', 'Scikit-learn'],
    githubUrl: 'https://github.com/seethesaenz/UTDHackathon'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          Projects
        </Typography>
        {projects.map((project) => (
          <Card key={project.title} variant="outlined" sx={{ width: '100%', mb: 2, p: 1, backgroundColor: '#D7CCC5', color: '#22252B', borderColor: 'rgba(34, 37, 43, 0.16)' }}>
            <CardContent>
              <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {project.summary}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                <strong>Impact:</strong> {project.impact}
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                {project.tech.map((item) => (
                  <Chip key={item} size="small" label={item} />
                ))}
              </Stack>
              <Link href={project.githubUrl} color="inherit" target="_blank" rel="noopener noreferrer">
                View code
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
