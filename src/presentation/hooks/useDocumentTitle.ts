import { useEffect, useState } from 'react';

export const useDocumentTitle = (newPageTitle: string) => {
  const [pageTitle, setPageTitle] = useState(document.title);

  useEffect(() => {
    setPageTitle(newPageTitle.length ? `ExtraSolar \u2022 ${pageTitle}` : 'ExtraSolar');
    document.title = pageTitle;
  }, [newPageTitle, pageTitle]);
};
