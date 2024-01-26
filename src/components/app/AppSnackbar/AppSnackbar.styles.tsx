import { css } from '@emotion/react';
// import type { IProps } from './AppSnackbar.component';

export const styles = css`
  root: {
    background: (props: IProps) => props.hasErrors ? '#770000' : '#007700',
    color: '#DDDDDD',
}`;
