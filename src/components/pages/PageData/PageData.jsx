import React from 'react';
import { useDispatch, useSelector } from "react-redux";
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
  LinearProgress,
} from '@material-ui/core';
import { actionTypes } from 'state/actionTypes';
import { selectTotalStarCount } from 'state/selectors/selectTotalStarCount';
import { selectTotalPlanetCount } from 'state/selectors/selectTotalPlanetCount';
import { selectTopLargestStars } from 'state/selectors/selectTopLargestStars';
import { Page } from '../Page/Page';
import { CategoricalPlanetCountTable} from '../../tables/CategoricalPlanetCountTable';
import { StarsPieChart } from "../../charts/StarsPieChart";
import { TopLargestStarsTable } from '../../tables/TopLargestStarsTable';
import DataOGG from 'assets/audio/data.ogg';
import { useStyles } from './PageData.styles';
// import "./PageData.scss";

// const useStyles = makeStyles({
//   tableHead: {
//     backgroundColor: '#777777',
//   },
//   tableCell: {
//     backgroundColor: '#999999',
//   },
// });

export const PageData = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const lastDataFetch = useSelector(state => state.ui.lastDataFetch);
  const selectAllStars = useSelector(state => state.data.stars);
  const countStars = useSelector(selectTotalStarCount()) || [];
  const countPlanets = useSelector(selectTotalPlanetCount()) || [];
  const largestStars = useSelector(selectTopLargestStars()) || [];

  React.useEffect(() => {
    dispatch({type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: DataOGG});
  }, [dispatch]);

  return (
    <>
      { selectAllStars.isFetching && <LinearProgress /> }
      <Page {...props} classes={classes}>
        <Typography variant='h5'>DATA</Typography>
        <Typography paragraph align='justify'>The available data from NASA comes from a SQL table view that combines star and planet data together. While this allows for compact and less-effort storage, the hierarchical or relationship of planets to stars is lost. Those relationships are rebuilt in JavaScript files of these web pages.</Typography>
        <Typography paragraph align='justify'>Some exoplanet data is incomplete, as is the stellar data of their host stars. The aim of this simple web site is to visually plot and animate a rough estimation of the geometry and scale of these distant star systems. Without some of the variables, a section of stars and planets can not be plotted and therefore are not included in the snapshot of data used here.</Typography>
        <Typography paragraph align='justify'>In cases where it makes sense, some data can be &apos;nudged&apos; to a default value.  For example, if the oribital eccentricity of a planet is unknown, the value can be set to 0.0 (a perfect circle) for plotting purposes.  While inaccurate, that estimated orbit will be highlighted as &apos;estimated&apos; when the planet&apos;s orbit is plotted on the Solar System page while still presenting an acceptable map of that solar system. </Typography>
        <Divider />
        <Typography variant='h5'>Most Recent Data</Typography>
        <TableContainer component="section">
          <Table size="small">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell>Last Data Fetch: {new Date(lastDataFetch).toLocaleString("en-US")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableCell}>Total Star Count: {countStars}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCell}>Total Planet Count: {countPlanets}</TableCell>
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
          <StarsPieChart starData={selectAllStars.list || []} />
        </section>
        <TopLargestStarsTable data={largestStars} />
        <Typography variant='h6'>Largest Star: {largestStars.length || <CircularProgress />}</Typography>
        <Typography variant='h6'>Heaviest Star:</Typography>
        <Typography variant='h6'>Largest Planet:</Typography>
        <Typography variant='h6'>Heaviest Planet:</Typography>
      </Page>
    </>
  );
};
