import React from 'react';
import ListItem from '@mui/material/ListItem';
import { styles } from './Bookmark.styles';

export type Props = {
  key: string;
  bookmarkId: string;
};

export const Bookmark = (props: Props) => {
  return (
    <ListItem key={props.key} css={styles}>
      {props.bookmarkId}
    </ListItem>
  );
};
