import React from 'react';

export const useDocumentTitle = pageTitle => {
  const [title, setTitle] = React.useState(document.title);

  React.useEffect(() => {
    pageTitle ? setTitle(`ExtraSolar \u2022 ${pageTitle}`) : setTitle('ExtraSolar');
    document.title = title;
  }, [title]);
}