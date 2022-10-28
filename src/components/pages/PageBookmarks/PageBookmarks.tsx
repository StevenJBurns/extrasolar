import React from 'react';
import { Page } from '../Page/Page';
import { BookmarkList } from './BookmarkList';
import { useStyles } from './PageBookmarks.styles';

export const PageBookmarks = (): JSX.Element => {
  // const classes = useStyles();

  return (
    <Page>
      <BookmarkList bookmarkList={[]} />
    </Page>
  )
}