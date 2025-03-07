import { Routes, Route } from 'react-router';
import { routes } from '../../../config/routes';
import { Container } from '@mui/material';
import { styles } from './App.styles';

export const App = () => {
  return (
    <Container sx={styles} maxWidth={false} disableGutters>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
            index={route.index}
          />
        ))}
      </Routes>
      {/* <AppSnackbar hasErrors={hasErrors} /> */}
    </Container>
  );
};
