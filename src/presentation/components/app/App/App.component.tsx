import { Routes, Route } from 'react-router';
import { validRoutes } from '../../../config/validRoutes';
import { Container } from '@mui/material';
import { styles } from './App.styles';

export const App = () => {
  return (
    <Container sx={styles} maxWidth={false} disableGutters>
      <Routes>
        {validRoutes.map(route => (
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
