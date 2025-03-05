import { forwardRef } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { Container, List, ListItem, ListItemText } from '@mui/material';

type ListItemLinkProps = {
  to: string;
  primary: string;
};

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  },
);

const ListItemLink = (props: ListItemLinkProps) => {
  const { to, primary } = props;

  return (
    <li>
      <ListItem component={Link} to={to}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export const HomeNav = () => (
  <Container
    component="nav"
    maxWidth="md"
    sx={{
      flex: '1 0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      userSelect: 'none',
      width: '100%',
    }}
  >
    <List
      sx={{
        '& .MuiListItemText-primary': {
          color: '#AAA',
          textAlign: 'end',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'color 0.25s',
          '&:hover, &:active': {
            color: '#EEE',
            textShadow: '0 0 12px #EEE',
            cursor: 'pointer',
          },
        },
      }}
    >
      <ListItemLink to="./data" primary="Data" />
      <ListItemLink to="./systems" primary="Solar Systems" />
      <ListItemLink to="./bookmarks" primary="Bookmarks" />
      <ListItemLink to="./about" primary="About" />
    </List>
  </Container>
);
