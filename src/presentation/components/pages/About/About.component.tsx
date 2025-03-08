import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, Divider, Link } from '@mui/material';
import { Page } from '../Page/Page.component.tsx';
import { PageHeader, PageFooter } from '../index.ts';
import { actionTypes } from '../../../state/actionTypes/index.js';
import { containerStyles, dividerStyles } from './About.styles';
import AboutOGG from '@assets/audio/about.ogg';

export const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: AboutOGG });
  }, [dispatch]);

  return (
    <Container sx={containerStyles} maxWidth={false}>
      <PageHeader />
      <Page>
        <Typography variant="h4">About</Typography>
        <Divider sx={{ bgcolor: '#7d7d7d', mb: 2 }} />
        <Typography align="justify" component={'p'}>
          ExtraSolar began as my first student project at&nbsp;
          <Link href="https://www.galvanize.com">Galvanize</Link> in Boulder,
          Colorado. The original version was a collection of HTML pages strung
          together with a bit of <Link href="https://jquery.com/">jQuery</Link>.
          The code and design were quite shoddy but in the end I was proud it
          mostly worked.
        </Typography>
        <Typography align="justify" component={'p'}>
          The first (and awful) version of the app is still hosted&nbsp;
          <Link href="http://stevenjburns-galvanize-q1-project.surge.sh">
            here
          </Link>
          . Several years ago, changes to the NASA API broke the data fetching
          which is something I probably will not fix in this older version. I
          keep the original source code repository&nbsp;
          <Link href="https://github.com/StevenJBurns/gschool-q1-project">
            here
          </Link>
          , as a reminder of how how much I&apos;ve learned and how&nbsp;
          <em>not</em> to write code.
        </Typography>
        <Typography align="justify" component={'p'}>
          This has become an eternal side-project I often revisit to modernize
          and experiment. The core is now built around&nbsp;
          <Link href="https://reactjs.org/">React</Link> and&nbsp;
          <Link href="https://redux.js.org/">Redux</Link>, along side other
          components, libraries, and tools. When the NASA API was updated I was
          also compelled to create a bare-bones proxy server (source code&nbsp;
          <Link href="https://github.com/StevenJBurns/extrasolar-proxy-server">
            here
          </Link>
          ) to keep the application functional. The client&apos;s current source
          code is located&nbsp;
          <Link href="https://github.com/StevenJBurns/extrasolar">here</Link>
          &nbsp;and is hosted straight from Github Pages.
        </Typography>
        <Divider sx={dividerStyles} />
      </Page>
      <PageFooter />
    </Container>
  );
};
