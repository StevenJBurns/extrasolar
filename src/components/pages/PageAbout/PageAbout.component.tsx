import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Divider, Link } from '@mui/material';
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
          <Link href="https://www.galvanize.com/boulder">Galvanize</Link> in
          Boulder, Colorado. The original version was just a collection of HTML
          pages strung together with a bit of jQuery. The code and design of the
          original were quite shoddy, but in the end I was somewhat proud just
          to get it working.
        </Typography>
        <Typography align="justify" paragraph></Typography>
        <Typography align="justify" paragraph>
          The project has evolved as I&apos;ve learned more about software
          development over the years. The core of the app is now written
          in&nbsp;
          <Link href="https://reactjs.org/">React</Link>, using&nbsp;
          <Link href="https://redux.js.org/">Redux</Link> for state management.
          Over time I have bolted on a slew of other components, libraries,
          patterns, principles and best practices as well. I am, by most
          standards, still not completely skilled in design or styling, but I
          like to think I&apos;ve picked up a few ideas from professional UX
          teammates and co-workers over the years. ExtraSolar and its features
          aren&apos;t terribly complicated but it is a project I revisit often
          to experiment.
        </Typography>
        <Typography align="justify" paragraph>
          The original (awful) version of the app is still hosted&nbsp;
          <Link href="http://stevenjburns-galvanize-q1-project.surge.sh">
            here
          </Link>
          , but changes to the NASA API broke the data fetching several years
          ago, something I may or may not fix in the future. I also keep the
          original repository&nbsp;
          <Link href="https://github.com/StevenJBurns/gschool-q1-project">
            here
          </Link>
          , as both a reminder of how <em>not</em> to write code and how much
          I&apos;ve learned.
        </Typography>
        <Typography align="justify" paragraph>
          The current source code is located&nbsp;
          <Link href="https://github.com/StevenJBurns/extrasolar">here</Link>
          &nbsp;and hosted straight from Github Pages.
        </Typography>
        <Divider />
      </Page>
      <PageFooter />
    </>
  );
};
