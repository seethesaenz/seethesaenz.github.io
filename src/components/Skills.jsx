import React from 'react';
import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'TypeScript', 'MUI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'GitHub Actions', 'Git', 'Figma'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <Card variant="outlined" sx={{ width: '100%', p: 1, backgroundColor: '#D0D6D9', color: '#22252B', borderColor: 'rgba(34, 37, 43, 0.16)' }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              Skills
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Focused on practical, production-ready web engineering.
            </Typography>
            <Stack spacing={2.5}>
              {skillGroups.map((group) => (
                <Stack key={group.title} spacing={1}>
                  <Typography variant="subtitle2" sx={{ letterSpacing: 0.4 }}>
                    {group.title}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {group.items.map((item) => (
                      <Chip key={item} label={item} size="small" />
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
