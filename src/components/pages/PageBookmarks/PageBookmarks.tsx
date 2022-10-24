import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Page } from '../Page/Page';
import { BookmarkList } from './BookmarkList';
import { useStyles } from './PageBookmarks.styles';

export const PageBookmarks = () => {
  const classes = useStyles();

  return (
    <Page>
      <BookmarkList bookmarkList={[]} />
    </Page>
  )
}