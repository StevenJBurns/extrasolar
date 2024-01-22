import { ReactNode } from 'react';
import { Container } from '@mui/material';
import { useDocumentTitle } from 'presentation/hooks/useDocumentTitle';
import { styles } from './Page.styles';

type TProps = {
  children: NonNullable<ReactNode> & ReactNode;
  title?: string;
  css?: unknown;
};

export const Page = (props: TProps) => {
  useDocumentTitle(props.title ?? '');

  return (
    <Container component="main" maxWidth="md" css={styles}>
      {props.children}
    </Container>
  );
};
