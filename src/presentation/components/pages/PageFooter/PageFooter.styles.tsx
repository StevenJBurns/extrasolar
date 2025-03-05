import { css } from '@emotion/react';

export const styles = css({
  footer: {
    width: '100%',
    padding: '0.75rem 0',
    color: '#DFDFDF',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  h4: {
    margin: '0.25rem',
    cursor: 'default',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  fontAwesomeLogo: {
    margin: 8,
  },
  sjbLogo: {
    margin: 4,
  },
  sjbLogoCircle: {
    fill: '#DFDFDF',
    transition: 'fill 0.5s',
  },
  sjbLogoPolygon: {
    fill: '#DFDFDF',
    transition: 'fill 0.5s',
  },
  'sjbLogo:hover': {
    fill: 'goldenrod',
  },
});
