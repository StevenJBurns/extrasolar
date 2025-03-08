import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader, PageFooter } from '..';
import {
  Typography,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  // LinearProgress,
} from '@mui/material';
import { actionTypes } from '../../../state/actionTypes';
import { selectTotalStarCount } from '../../../state/selectors/selectTotalStarCount';
import { selectTotalPlanetCount } from '../../../state/selectors/selectTotalPlanetCount';
import { selectTopLargestStars } from '../../../state/selectors/selectTopLargestStars';
import { Page } from '../Page/Page.component';
import { CategoricalPlanetCountTable } from '../../tables/CategoricalPlanetCountTable/CategoricalPlanetCountTable';
// import { StarsPieChart } from '../../charts/StarsPieChart';
import { TopLargestStarsTable } from '../../tables/TopLargestStarsTable/TopLargestStarsTable';
import DataOGG from '@assets/audio/data.ogg';
import { styles } from './PageData.styles';

type TProps = {
  data: Array<unknown>;
};

export const PageData = (props: TProps) => {
  const dispatch = useDispatch();

  // const lastDataFetch = useSelector(state => state.ui.lastDataFetch);
  // const selectAllStars = useSelector(state => state.data.stars);
  const countStars = useSelector(selectTotalStarCount()) || [];
  const countPlanets = useSelector(selectTotalPlanetCount()) || [];
  const largestStars = useSelector(selectTopLargestStars()) || [];

  useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: DataOGG });
  }, [dispatch]);

  return (
    <>
      <PageHeader />
      {/* {selectAllStars.isFetching && <LinearProgress />} */}
      <Page {...props}>
        <Typography variant="h4">Data</Typography>
        <Divider sx={{ bgcolor: '#7d7d7d', mb: 2 }} />
        <Typography component={'p'} align="justify">
          Since 1992, over 3,500&nbsp;
          <a href="https://en.wikipedia.org/wiki/Exoplanet">
            extrasolar planets
          </a>
          &nbsp; have been observed by various means. Less than two dozen have
          been&nbsp;
          <a href="https://en.wikipedia.org/wiki/List_of_directly_imaged_exoplanets">
            directly imaged
          </a>
          &nbsp; but several thousand more have been catalogued by non-visual
          means. If complete, that data lends itself to creating an abstract
          picture of what these distant solar systems look like.
        </Typography>
        <Typography component={'p'} align="justify">
          The data in this project comes directly from NASA and IPAC at Caltech,
          the majority of which was collected by the&nbsp;
          <a href="https://en.wikipedia.org/wiki/Kepler_(spacecraft)">
            Kepler and K2
          </a>
          &nbsp; missions since being launched in 2009. NASA maintains a list of
          over 5,000 potential stellar candidates for future observations.
        </Typography>
        <Typography component={'p'} align="justify">
          Scientists estimate there are roughly 100 billion exoplanets in our
          galaxy alone. Further extrapolation predicts there are 10 billion
          earth size planets, and of those 1 billion may lie in its host
          star&apos;s&nbsp;
          <a href="https://en.wikipedia.org/wiki/Circumstellar_habitable_zone">
            habitable zone
          </a>
          .
        </Typography>
        <Typography component={'p'} align="justify">
          Browse the project to see visual plots of the solar systems with valid
          data...
        </Typography>
        <Typography component={'p'} align="justify">
          The available data from NASA comes from a SQL table view that combines
          star and planet data together. While this allows for compact and
          less-effort storage, the hierarchical or relationship of planets to
          stars is lost. Those relationships are rebuilt in JavaScript files of
          these web pages.
        </Typography>
        <Typography component={'p'} align="justify">
          Some exoplanet data is incomplete, as is the stellar data of their
          host stars. The aim of this simple web site is to visually plot and
          animate a rough estimation of the geometry and scale of these distant
          star systems. Without some of the variables, a section of stars and
          planets can not be plotted and therefore are not included in the
          snapshot of data used here.
        </Typography>
        <Typography component={'p'} align="justify">
          In cases where it makes sense, some data can be &apos;nudged&apos; to
          a default value. For example, if the oribital eccentricity of a planet
          is unknown, the value can be set to 0.0 (a perfect circle) for
          plotting purposes. While inaccurate, that estimated orbit will be
          highlighted as &apos;estimated&apos; when the planet&apos;s orbit is
          plotted on the Solar System page while still presenting an acceptable
          map of that solar system.{' '}
        </Typography>
        <Divider />
        <Typography variant="h5">Most Recent Data</Typography>
        <TableContainer component="section">
          <Table size="small">
            <TableHead css={styles}>
              <TableRow>
                <TableCell>
                  Last Data Fetch:{' '}
                  {/* {new Date(lastDataFetch).toLocaleString('en-US')} */}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell css={styles}>
                  Total Star Count: {countStars}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell css={styles}>
                  Total Planet Count: {countPlanets}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />
        <CategoricalPlanetCountTable />
        {/* <section id="section-chart-categorical" className="section-chart-container">
          <table>
            <caption>CATEGORICAL PLANET COUNTS</caption>
            <thead>
              <tr colSpan={2}>
                <th>Planet Count</th>
                <th># of Systems</th>
              </tr>
            </thead>
            <tbody>
              {
                catergoricalData.map(x => {
                  return (<tr key={x["planetCount"]}>
                    <td>{x["planetCount"]}</td>
                    <td>{x["count"]}</td>
                  </tr>)
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2}>Total Planets: {selectAllPlanets.isFetching ? <CircularProgress/> : countPlanets }</th>
              </tr>
            </tfoot>
          </table>
          { catergoricalData.length ? <BarChart planetData={ catergoricalData } /> : null }
          <Typography paragraph align='justify'>The ability to find exoplanets is obviously very limited given current technology and the vast distances to even the closest stars. Most solar systems have only been observed to have 1 single planet as shown in the table and chart above. Systems containing 7 and 8 planets have only been discovered once. Because of the large disparity in that data the chart plots the number of exo-systems containing X planets on an exponential Y scale. Scientists estimate the average exo system should contain several planets of varying sizes but discovering them will require advances in detection technology. </Typography>
        </section> */}
        <section id="section-chart-circumbinaries">
          {/* <StarsPieChart starData={selectAllStars.list || []} /> */}
        </section>
        <TopLargestStarsTable data={largestStars} />
        <Typography variant="h6">
          Largest Star: {largestStars.length || <CircularProgress />}
        </Typography>
        <Typography variant="h6">Heaviest Star:</Typography>
        <Typography variant="h6">Largest Planet:</Typography>
        <Typography variant="h6">Heaviest Planet:</Typography>
      </Page>
      <PageFooter />
    </>
  );
};
