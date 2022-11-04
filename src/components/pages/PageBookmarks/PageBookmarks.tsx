import React from 'react';
import { Page } from '../Page/Page';
import { BookmarkList } from './BookmarkList';
import { PageHeader, PageFooter } from '../.';
import { useStyles } from './PageBookmarks.styles';

export const PageBookmarks = (): JSX.Element => {
  // const classes = useStyles();

  return (
    <>
      <PageHeader />
      <Page>
        <BookmarkList bookmarkList={[]} />
      </Page>
      <PageFooter />
    </>
  );
};
