import React from 'react';
import Container from '@material-ui/core/Container'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';

export const Page = props => {  
  useDocumentTitle(props.title);

  return (
    <Container component="main" maxWidth="lg" className={props.className}>
      {props.children}
    </Container>
  );
};
