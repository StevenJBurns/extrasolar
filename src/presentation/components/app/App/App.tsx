import { Container, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import {
  PageHome,
  PageData,
  PageSystems,
  PageBookmarks,
  PageAbout,
  Page404,
} from '../../pages';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          flex: '1 0 auto',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          '& .MuiContainer-root': {
            px: 0,
            py: 0,
          },
        }}
      >
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/data" element={<PageData data={[]} />} />
          <Route path="/systems" element={<PageSystems />} />
          <Route path="/bookmarks" element={<PageBookmarks />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="*" element={<Page404 title="Page Not Found" />} />
        </Routes>
        {/* <AppSnackbar hasErrors={hasErrors} /> */}
      </Container>
    </>
  );
};
