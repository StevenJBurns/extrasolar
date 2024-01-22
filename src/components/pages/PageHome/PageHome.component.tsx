import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useOnlineStatus } from 'presentation/hooks/useOnlineStatus';
import { actionTypes } from '../../../state/actions';
import { PageFooter } from '../PageFooter/PageFooter.component';
import { styles } from './PageHome.styles';

import HomeBackground from 'assets/images/apollo.jpg';
import HomeOGG from 'assets/audio/home.ogg';

export const PageHome = () => {
  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();

  useEffect(() => {
    dispatch({
      type: actionTypes.ui.CHANGE_AUDIO_SOURCE,
      payload: HomeOGG,
    });
  }, [dispatch]);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
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
        }}
      >
        <header
          style={{ margin: '2rem', color: isOnline ? 'white' : 'darkred' }}
        >
          <h1>ExtraSolar</h1>
          <h2>Exoplanet Data Visualization</h2>
        </header>
        <nav style={{ flex: '1 0 auto' }}>
          <ul>
            <li>
              <Link to="./data">DATA</Link>
            </li>
            <li>
              <Link to="./systems">SOLAR SYSTEMS</Link>
            </li>
            <li>
              <Link to="./bookmarks">BOOKMARKS</Link>
            </li>
            <li>
              <Link to="./about">ABOUT</Link>
            </li>
          </ul>
        </nav>
        <PageFooter />
      </Container>
    </>
  );
};
