import { renderHook } from '@testing-library/react-hooks';
import { useDocumentTitle } from './useDocumentTitle';

describe('useDocumentTitle', () => {
  it('should set the document title correctly when newPageTitle is provided', () => {
    const initialTitle = 'Initial Title';
    document.title = initialTitle;

    const { rerender } = renderHook(({ newPageTitle }) => useDocumentTitle(newPageTitle), {
      initialProps: { newPageTitle: 'Home' },
    });

    expect(document.title).toBe('ExtraSolar • Initial Title');

    // Rerender with a new title
    rerender({ newPageTitle: 'About' });
    expect(document.title).toBe('ExtraSolar • Initial Title');

    // Rerender with an empty string
    rerender({ newPageTitle: '' });
    expect(document.title).toBe('ExtraSolar');
  });

  it('should revert to default title if no title is provided', () => {
    document.title = 'Some Random Title';

    renderHook(() => useDocumentTitle(''));
    expect(document.title).toBe('ExtraSolar');
  });
});

