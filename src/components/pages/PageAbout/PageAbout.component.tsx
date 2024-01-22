import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Divider } from '@mui/material';
import { Page } from '../Page/Page.component';
import { PageHeader, PageFooter } from '..';
import { actionTypes } from 'state/actionTypes';
import AboutOGG from 'assets/audio/about.ogg';
import { styles } from './PageAbout.styles';

export const PageAbout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: AboutOGG });
  }, [dispatch]);

  return (
    <>
      <PageHeader />
      <Page css={styles.root}>
        <h1>About</h1>
        <Divider css={styles} />
        <Typography paragraph align="justify">
          Since 1992, over 3,500{' '}
          <a href="https://en.wikipedia.org/wiki/Exoplanet">
            extrasolar planets
          </a>{' '}
          have been observed through various means. Less than two dozen have
          been{' '}
          <a href="https://en.wikipedia.org/wiki/List_of_directly_imaged_exoplanets">
            directly imaged
          </a>{' '}
          but several thousand more have been catalogued by non-visual means. If
          complete, that data lends itself to creating an abstract picture of
          what these distant solar systems look like.
        </Typography>
        <Typography paragraph align="justify">
          The data in this project comes directly from NASA and IPAC at Caltech,
          the majority of which was collected by the{' '}
          <a href="https://en.wikipedia.org/wiki/Kepler_(spacecraft)">
            Kepler and K2
          </a>{' '}
          missions since being launched in 2009. NASA maintains a list of over
          5,000 potential stellar candidates for future observations.
        </Typography>
        <Typography paragraph align="justify">
          Scientists estimate there are roughly 100 billion exoplanets in our
          galaxy alone. Further extrapolation predicts there are 10 billion
          earth size planets, and of those 1 billion may lie in its host
          star&apos;s{' '}
          <a href="https://en.wikipedia.org/wiki/Circumstellar_habitable_zone">
            habitable zone
          </a>
          .
        </Typography>
        <Typography paragraph align="justify">
          Browse the project to see visual plots of the solar systems with valid
          data...{' '}
        </Typography>
        <Divider css={styles} />
        <Typography paragraph align="justify">
          ExtraSolar has evolved as I&apos;ve learned more about software
          development. The original version is{' '}
          <a href="http://stevenjburns-galvanize-q1-project.surge.sh">here</a>,
          my first major project as a student at{' '}
          <a href="https://www.galvanize.com/boulder">Galvanize</a> in Boulder,
          Colorado.
        </Typography>
        <Typography paragraph align="justify">
          Originally, this was a collection of chained HTML5 pages with a splash
          of jQuery and CSS3. Implementing HTML Canvas was an extremely daunting
          task especially as a new web development student. Overall I was very
          proud of just getting it all to work but I knew I could make it better
          as I learned more.
        </Typography>
        <Typography paragraph align="justify">
          While learning <a href="https://reactjs.org/">React</a>, I knew
          immediately the modern SPA approach would achieve the native-like
          look, feel and performance I envisioned. I continued on, tossing in{' '}
          <a href="https://redux.js.org/">Redux</a> to handle the volume of data
          and <a href="https://d3js.org/">D3js</a> for a simple layer of data
          presentation.
        </Typography>
        <Typography paragraph align="justify">
          The only future feature I would still like to add is 3D rendering most
          likely via <a href="https://threejs.org/">ThreeJS</a>.
        </Typography>
        <Typography paragraph align="justify">
          The current source code is{' '}
          <a href="https://github.com/StevenJBurns/extrasolar">here</a> and the
          live version is hosted straight from Github Pages.
        </Typography>
        <Divider css={styles} />
      </Page>
      <PageFooter />
    </>
  );
};
