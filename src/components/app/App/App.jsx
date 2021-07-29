import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getStarsThunk, getPlanetsThunk } from 'state/actions/data';
import { PageHeader, PageFooter } from 'components/pages';
import {
  PageHome,
  PageData,
  PageSolarSystems,
  PageBookmarks,
  PageAbout,
  Page404
} from 'components/pages';
import CanvasComponent from "components/canvas/CanvasComponent";
import './App.scss';

const HomeOGG = React.lazy(() => import('assets/audio/home.ogg'));
const DataOGG = React.lazy(() => import('assets/audio/data.ogg'));
const SolarSystemsOGG = React.lazy(() => import('assets/audio/solarsystems.ogg'));
const AboutOGG = React.lazy(() => import('assets/audio/about.ogg'));

export const App = () => {
  const dispatch = useDispatch();
  const stars = useSelector(state => state.data.stars.list);
  
  const { length } = stars;

  React.useEffect(() => {
    console.log(stars);
  }, [stars, length]);

  React.useEffect(() => {
    dispatch(getStarsThunk());
    dispatch(getPlanetsThunk());
  }, [dispatch]);
  
  return (
    <Switch>
      <Route exact path='/'>
        <PageHome title="Home" audioSource={HomeOGG} />
      </Route>
      <Route exact path='/data'>
        <PageHeader />
        <PageData title="Data" audioSource={DataOGG} />
        <PageFooter />
      </Route>
      <Route exact path='/systems'>
        <PageHeader />
        <CanvasComponent selectedSolarSystem={{}} />
        <PageSolarSystems title="Solar Systems" audioSource={SolarSystemsOGG} />
        <PageFooter />
      </Route>
      <Route exact path='/bookmarks'>
        <PageHeader />
        <PageBookmarks title="Bookmarks" audioSource={AboutOGG} />
        <PageFooter />
      </Route>
      <Route exact path='/about'>
        <PageHeader />
        <PageAbout title="About" audioSource={AboutOGG} />
        <PageFooter />
      </Route>
      <Route>
        <PageHeader />
        <Page404 title="Page Not Found"/>
        <PageFooter />
      </Route>
    </Switch>
  );
};
