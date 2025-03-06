import { ReactNode } from 'react';
import { Container } from '@mui/material';
// import { useDocumentTitle } from '@presentation/hooks/useDocumentTitle';
// import { styles } from './Page.styles';

type TProps = {
  children: NonNullable<ReactNode> & ReactNode;
  title?: string;
};

export const Page = (props: TProps) => {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{ mt: '2rem', p: '2rem', color: '#D0D0DF' }}
    >
      {props.children}
    </Container>
  );
};
