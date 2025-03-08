import { Container, Typography } from '@mui/material';

export const HomeFooter = () => (
  <Container
    component="footer"
    maxWidth="md"
    sx={{
      color: '#DFDFDF',
      paddingBottom: '2rem',
      backgroundColor: 'transparent',
      textAlign: 'center',
      userSelect: 'none',
      cursor: 'default',
    }}
  >
    <Typography variant="body2">
      &copy;{new Date().getFullYear()} &bull; Steven J Burns
    </Typography>
  </Container>
);
