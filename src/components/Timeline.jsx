import React, { useEffect, useRef } from 'react';
import { Card, CardContent, Chip, Link, Stack, Typography } from '@mui/material';

const timelineEvents = [
  {
    date: '2023-2024',
    title: 'Built Core Portfolio Projects',
    description: 'Developed key portfolio projects including Multi-Threaded Hash Tree, Simple Shell, and a hackathon Homebuyer Portal.',
    tags: ['Projects', 'Engineering'],
    link: '#projects',
    linkLabel: 'See projects',
  },
  {
    date: 'December 2024',
    title: 'Graduated College',
    description: 'Completed B.S. in Computer Science at The University of Texas at Dallas.',
    tags: ['Education'],
  },
  {
    date: 'June 2025',
    title: 'Software Application Developer I at ARI',
    description: 'Started working as a Software Application Developer I at ARI, building and maintaining production software systems.',
    tags: ['Career'],
  },
  {
    date: 'January 2026',
    title: 'Started M.S. in Computer Science at TAMU-CC',
    description: 'Began an M.S. in Computer Science at Texas A&M University-Corpus Christi while continuing to build practical systems.',
    tags: ['Education', 'Graduate School'],
  },
];

const Timeline = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline">
      <div className="container">
        <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
          Timeline
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 680, color: 'text.secondary' }}>
          Key milestones from project work to career and graduate school.
        </Typography>

        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <article
              key={`${event.date}-${event.title}`}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <span className="timeline-dot" />
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: '#D9D6CC',
                  borderColor: 'rgba(34, 37, 43, 0.16)',
                }}
              >
                <CardContent>
                  <Typography variant="overline" sx={{ letterSpacing: 0.6 }}>
                    {event.date}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ mt: 0.5, mb: 1 }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {event.description}
                  </Typography>

                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: event.link ? 1.5 : 0 }}>
                    {event.tags.map((tag) => (
                      <Chip key={tag} size="small" label={tag} />
                    ))}
                  </Stack>

                  {event.link ? (
                    <Link href={event.link} color="inherit">
                      {event.linkLabel}
                    </Link>
                  ) : null}
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
