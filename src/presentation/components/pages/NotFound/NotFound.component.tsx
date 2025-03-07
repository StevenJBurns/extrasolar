import { Container } from '@mui/material';
import { Page } from '../Page/Page.component.tsx';
import { PageHeader, PageFooter } from '../index.ts';
import { styles } from './NotFound.styles.tsx';

export const NotFound = () => {
  return (
    <Container sx={styles} maxWidth={false} disableGutters>
      <PageHeader />
      <Page>
        <h1>Not Found</h1>
        <h2>Error 404</h2>
      </Page>
      <PageFooter />
    </Container>
  );
};
