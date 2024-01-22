import React from 'react';
import { Page } from '../Page/Page.component';
import { BookmarkList } from './BookmarkList';
import { PageHeader, PageFooter } from '..';
import { styles } from './PageBookmarks.styles';
import { Box } from '@mui/material';

export const PageBookmarks = (): JSX.Element => (
  <Box css={styles}>
    <PageHeader />
    <Page>
      <BookmarkList bookmarkList={[]} />
    </Page>
    <PageFooter />
  </Box>
);
