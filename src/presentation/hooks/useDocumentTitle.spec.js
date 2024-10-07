// import { render } from '@testing-library/react';
import { useDocumentTitle } from './useDocumentTitle';

describe('the useDocumentTitle custom hook', () => {
  it('returns a basic document title for falsey input values', () => {
    const falseyTitle = useDocumentTitle(0);
    expect(falseyTitle).toEqual('ExtraSolar');
  });
});
