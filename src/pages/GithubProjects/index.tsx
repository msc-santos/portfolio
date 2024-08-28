import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography, IconButton, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/msc-santos/repos');
      const data = await response.json();
      const selectedRepos = data.filter((repo: any) => 
        ["system-cache", "microsservice-project", "exercicios", "benchmark-medium", "desafio_cnab", "generate_qrcode"].includes(repo.name)
      );

      setRepos(selectedRepos);
    };

    fetchRepos();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" style={{ color: '#fff' }}>
        My Top GitHub Projects
      </Typography>

    
    <Grid container spacing={4} justifyContent="center">
      {repos.map((repo: any) => (
        <Grid item key={repo.id} xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#333', color: '#fff' }}>
            <CardHeader
              avatar={<GitHubIcon style={{ color: '#fff' }} />}
              title={<Typography variant="h6" style={{ color: '#fff' }}>{repo.name}</Typography>}
              subheader={<Typography variant="subtitle1" style={{ color: '#ccc' }}>{repo.owner.login}</Typography>}
            />
            <CardContent>
              <Typography variant="body2" style={{ color: '#ccc' }}>
                {repo.description || 'No description available'}
              </Typography>
              <IconButton>
                <StarIcon style={{ color: '#ffd700' }} />
              </IconButton>
              <Typography variant="body2" style={{ color: '#ffd700', display: 'inline' }}>
                {repo.stargazers_count} Stars
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default GitHubProjects;
