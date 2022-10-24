import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from './Bookmark.styles';

export type Props = {
  key: string,
  bookmarkId: string,
};

export const Bookmark = (props: Props) => {
  const classes = useStyles();

  return (
    <ListItem key={props.key}>
      {props.bookmarkId}
    </ListItem>
  )
};
