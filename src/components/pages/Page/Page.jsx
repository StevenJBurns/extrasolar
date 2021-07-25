import React from 'react';
import { Container } from '@material-ui/core/';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { useStyles } from './Page.styles';

export const Page = props => {
  const classes = useStyles();
  useDocumentTitle(props.title);

  return (
    <Container component="main" maxWidth="md" classes={classes}>
      {props.children}
    </Container>
  );
};
