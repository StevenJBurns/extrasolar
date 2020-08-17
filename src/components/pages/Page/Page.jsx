import React from 'react';
import { Container, makeStyles } from '@material-ui/core/';
import { useDocumentTitle } from 'hooks/useDocumentTitle';

const useStyles = makeStyles({
  container: {
    color: '#DDD',
    marginTop: '4rem',
  }
})

export const Page = props => {  
  const classes = useStyles();
  useDocumentTitle(props.title);

  return (
    <Container component="main" maxWidth="md" className={classes.container}>
      {props.children}
    </Container>
  );
};
