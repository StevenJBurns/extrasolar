import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { actionTypes } from '../../../state/actions';
import { HomeHeader } from './HomeHeader/HomeHeader.component';
import { HomeFooter } from './HomeFooter/HomeFooter.component';
import { HomeNav } from './HomeNav/HomeNav.component';

import HomeBackground from '@assets/images/apollo.jpg';
import HomeOGG from '@assets/audio/home.ogg';

export const PageHome = () => {
  const dispatch = useDispatch();

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
        <HomeHeader />
        <HomeNav />
        <HomeFooter />
      </Container>
    </>
  );
};
