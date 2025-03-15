import { useEffect } from 'react';

export const useDocumentTitle = (newPageTitle: string) => {
  useEffect(() => {
    document.title = newPageTitle.length ? `ExtraSolar • ${newPageTitle}` : 'ExtraSolar';
  }, [newPageTitle]);
};
