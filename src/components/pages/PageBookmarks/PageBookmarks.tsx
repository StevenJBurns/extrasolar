import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Page } from '../Page/Page';

export const PageBookmarks = () => {
  const dispatch = useDispatch();

  const [bookmarkList, setBookmarkList] = React.useState([]);

  if (!bookmarkList || !bookmarkList.length)
    return (<h1>No Bookmarked Solar Systems</h1>);

  return (
    <Page>
      <List>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      </List>
    </Page>
  )
}