import React from 'react';
import { Page } from '../Page/Page.component.tsx';
import { BookmarkList } from './BookmarkList/index.ts';
import { PageHeader, PageFooter } from '../index.ts';
import { styles } from './Bookmarks.styles.ts';
import { Box } from '@mui/material';

export const Bookmarks = () => (
  <Box css={styles}>
    <PageHeader />
    <Page>
      <BookmarkList bookmarkList={[]} />
    </Page>
    <PageFooter />
  </Box>
);
