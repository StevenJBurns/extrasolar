import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Bookmark } from '../Bookmark';
import { useStyles } from './BookmarkList.styles';

export type Props = {
  bookmarkList: Array<string> | [];
};

export const BookmarkList = (props: Props) => {
  const classes = useStyles();

  if (!props.bookmarkList.length)
    return (
      <Box flex={1} justifyContent="center" textAlign="center" color="#00dd00">
        <Typography variant="h4" className={classes.root}>
          No Bookmarked Solar Systems
        </Typography>
        <Typography variant="h6" className={classes.root}>
          Add solar systems to your bookmark list on the Systems Page
        </Typography>
      </Box>
    );

  return (
    <List>
      {props.bookmarkList.map(item => (
        <Bookmark key={item} bookmarkId={item} />
      ))}
    </List>
  );
};
