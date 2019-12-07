import React from 'react';
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';

export const Page = props => {  
  useDocumentTitle(props.title);

  return(
    <main>
      {props.children}
    </main>
  );
};
