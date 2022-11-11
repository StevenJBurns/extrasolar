import { makeStyles } from '@mui/styles';
import HomeBackground from 'assets/images/apollo.jpg';

export const useStyles = makeStyles(() => ({
  root: {
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
  },
  header: {
    margin: '1rem'
  },
  nav: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    '& ul': {
      width: '100%',
      padding: '0 2rem',
      listStyle: 'none',
    },
    '& li': {
      margin: '1.5vw 0',
      textAlign: 'right',
      fontWeight: 'bold',
    },
    '& a:link, a:visited': {
      color: '#909090',
      textDecoration: 'none',
      transition: 'color 0.25s',
    },
    '& a:hover, a:active': {
      color: '#E0E0E0',
      textShadow: '0 0 12px #EEE',
    },
  },
  footer: {
    '& h4': {
      fontSize: 'initial',
    }
  },
}));
