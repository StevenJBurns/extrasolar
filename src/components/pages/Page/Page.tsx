import { ReactNode } from 'react';
import { Container } from '@material-ui/core/';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { useStyles } from './Page.styles';

interface IProps {
  title: string;
  children: Array<ReactNode>;
}

export const Page = (props: IProps): ReactNode => {
  const classes = useStyles();
  useDocumentTitle(props.title);

  return (
    <Container component="main" maxWidth="md" classes={classes}>
      {props.children}
    </Container>
  );
};
