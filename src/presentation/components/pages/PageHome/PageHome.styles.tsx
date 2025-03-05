import { css } from '@emotion/react/macro';
import HomeBackground from 'assets/images/apollo.jpg';

const rootStyles = css({
  flex: '1 0 auto',
  display: 'flex',
  minHeight: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${HomeBackground})`,
  textShadow: '0 0 24px #BBB',
  color: '#DDD',
});

const headerStyles = css({
  margin: '1rem',
});

const navStyles = css({
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
});

const footerStyles = css({
  fontSize: 'initial',
});

export const styles = {
  root: rootStyles,
  header: headerStyles,
  footer: footerStyles,
  nav: navStyles,
};

// export const styles = css`
//   root: {
//     flex: '1 0 auto',
//     display: 'flex',
//     minHeight: '100%',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundImage: ${HomeBackground},
//     textShadow: '0 0 24px #BBB',
//     color: '#DDD',
//   },
//   header: {
//     margin: '1rem'
//   },
//   nav: {
//     flex: '1 0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     width: '100%',
//     '& ul': {
//       width: '100%',
//       padding: '0 2rem',
//       listStyle: 'none',
//     },
//     '& li': {
//       margin: '1.5vw 0',
//       textAlign: 'right',
//       fontWeight: 'bold',
//     },
//     '& a:link, a:visited': {
//       color: '#909090',
//       textDecoration: 'none',
//       transition: 'color 0.25s',
//     },
//     '& a:hover, a:active': {
//       color: '#E0E0E0',
//       textShadow: '0 0 12px #EEE',
//     },
//   },
//   footer: {
//     '& h4': {
//       fontSize: 'initial',
//     }
//   },
// `;
