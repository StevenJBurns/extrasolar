import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Bookmark } from '../Bookmark';
import { styles } from './BookmarkList.styles';

export type TProps = {
  bookmarkList: Array<string> | [],
};

export const BookmarkList = (props: TProps) => {
  if (!props.bookmarkList.length)
    return (
      <Box flex={1} justifyContent="center" textAlign="center" color="#00dd00">
        <Typography variant="h4" css={styles}>
          No Bookmarked Solar Systems
        </Typography>
        <Typography variant="h6" css={styles}>
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
