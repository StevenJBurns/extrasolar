import { vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDocumentTitle } from './useDocumentTitle.ts';

describe('useDocumentTitle', () => {
  beforeEach(() => {
    document.title = 'Initial Title';
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('sets document title to "ExtraSolar" when newPageTitle is empty', () => {
    const { unmount } = renderHook(() => useDocumentTitle(''));

    vi.runAllTimers();
    expect(document.title).toBe('ExtraSolar');
    unmount();
  });

  it('sets document title with newPageTitle when provided', () => {
    const { unmount } = renderHook(() => useDocumentTitle('Home'));

    vi.runAllTimers();
    expect(document.title).toBe('ExtraSolar • Home');
    unmount();
  });

  it('updates document title when newPageTitle changes', () => {
    const { rerender, unmount } = renderHook(({ title }) => useDocumentTitle(title), {
      initialProps: { title: 'Home' },
    });

    vi.runAllTimers();
    expect(document.title).toBe('ExtraSolar • Home');

    rerender({ title: 'About' });
    vi.runAllTimers();
    expect(document.title).toBe('ExtraSolar • About');
    unmount();
  });
});
