import { Container } from '@mui/material';
import { Routes, Route } from 'react-router';
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
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        flex: '1 0 auto',
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Routes>
        <Route index element={<PageHome />} />
        <Route path="data" element={<PageData data={[]} />} />
        <Route path="systems" element={<PageSystems />} />
        <Route path="bookmarks" element={<PageBookmarks />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="*" element={<Page404 title="Page Not Found" />} />
      </Routes>
      {/* <AppSnackbar hasErrors={hasErrors} /> */}
    </Container>
  );
};
