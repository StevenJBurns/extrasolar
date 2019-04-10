import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from 'react-router-dom';

/* necessary? TBD after Redux re-organization */
import { fetchStars } from "../../../redux/actions/actionAsyncFetchStars.js";
import { fetchPlanets } from "../../../redux/actions/actionAsyncFetchPlanets.js";
import { getLastDataFetch } from "../../../redux/actions/index.js";

import {
  PageHome,
  PageData,
  PageSystems,
  PageAbout,
  Page404,
} from '../../pages';
import './AppMain.scss';

export const AppMain = props => {
  React.useEffect(() => {
    // console.log('AppMain Mounted');
    }, []
  );

  return (
    <main>
      <Switch>
        <Route exact path='/' render={() => <PageHome />} />
        <Route exact path='/data' render={() => <PageData />} />
        <Route exact path='/systems' render={() => <PageSystems />} />
        <Route exact path='/about' render={() => <PageAbout />} />
        <Route component={ Page404 } />
      </Switch>
    </main>
  );
};

const mapStateToProps = state => ({
  stars: state.data.stars,
  planets: state.data.planets,
});

const mapDispatchToProps = dispatch => {
  return {
    getLastDataFetch: () => dispatch(getLastDataFetch()),
    fetchStars: () => dispatch(fetchStars()),
    fetchPlanets: () => dispatch(fetchPlanets())
  };
};

/* withRouter is a HoC for Router use with Redux */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppMain));
