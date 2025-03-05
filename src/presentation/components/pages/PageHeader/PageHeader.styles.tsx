import { css } from '@emotion/react';

export const styles = css`
  root: {
    background: 'linear-gradient(290deg, goldenrod 40%, darkgoldenrod 40%)',
  },
  toolbar: {
    padding: '1rem 2vw',
    justifyContent: 'center',
  },
  header: {
    margin: '0.25rem 1rem',
    color: isOnline ? 'white' : 'darkred',
  },
  drawer: {
    paper: {},
  },
  drawerPaper: {
    width: '280px',
    backgroundColor: 'darkgoldenrod',
  },
  menuList: {
    backgroundColor: 'transparent',
  },
  menuItem: {
    padding: 0,
    justifyContent: 'center',
    lineHeight: '2rem',
  },
  link: {
    height: '2rem',
    width: '8rem',
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
`;
