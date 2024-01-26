import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Divider } from '@mui/material';
import { Page } from '../Page/Page.component';
import { PageHeader, PageFooter } from '..';
import { actionTypes } from 'state/actionTypes';
import AboutOGG from 'assets/audio/about.ogg';
// import { styles } from './PageAbout.styles';

export const PageAbout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: AboutOGG });
  }, [dispatch]);

  return (
    <>
      <PageHeader />
      <Page>
        <Typography variant="h4">About</Typography>
        <Divider sx={{ bgcolor: '#7d7d7d', mb: 2 }} />
        <Typography align="justify" paragraph>
          ExtraSolar began as my first major project as a student at&nbsp;
          <a href="https://www.galvanize.com/boulder">Galvanize</a> in Boulder,
          Colorado. The original version was merely a collection of HTML pages
          chained together with a bit of jQuery. The code and design of the
          original were quite shoddy, but in the end I was somewhat proud just
          to get it working.
        </Typography>
        <Typography align="justify" paragraph></Typography>
        <Typography align="justify" paragraph>
          Of course, the project has evolved as I&apos;ve learned more about
          software development over the years. The core of the app is now
          written in&nbsp;
          <a href="https://reactjs.org/">React</a>, using&nbsp;
          <a href="https://redux.js.org/">Redux</a> for state management. Over
          time I have bolted on a slew of other components, libraries, patterns,
          principles and best practices as well. I am, by most standards, still
          not completely skilled in design or styling, but I like to think
          I&apos;ve picked up a few ideas from professional UX teammates and
          co-workers over the years. ExtraSolar and its features aren&apos;t
          terribly complicated but it is a project I revisit often to
          experiment.
        </Typography>
        <Typography align="justify" paragraph>
          The original (awful) version of the app is still hosted&nbsp;
          <a href="http://stevenjburns-galvanize-q1-project.surge.sh">here</a>,
          but changes to the NASA API broke the data fetching several years ago,
          something I may or may not fix in the future. I also keep the original
          repository here, as both a reminder of how <em>not</em> to write code
          and how much I&apos;ve learned.
        </Typography>
        <Typography align="justify" paragraph>
          The current source code is located&nbsp;
          <a href="https://github.com/StevenJBurns/extrasolar">here</a> and
          hosted straight from Github Pages.
        </Typography>
        <Divider />
      </Page>
      <PageFooter />
    </>
  );
};
