import { Container, Typography } from '@mui/material';
import { useOnlineStatus } from '@presentation/hooks/useOnlineStatus';

export const HomeHeader = () => {
  const isOnline = useOnlineStatus();

  return (
    <Container
      maxWidth="md"
      component="header"
      sx={{
        padding: '1rem 0',
        color: isOnline ? '#DFDFDF' : 'darkred',
        backgroundColor: 'transparent',
        userSelect: 'none',
        cursor: 'default',
      }}
    >
      <Typography variant="h4">ExtraSolar</Typography>
      <Typography variant="subtitle1">Exoplanet Data Visualization</Typography>
    </Container>
  );
};
