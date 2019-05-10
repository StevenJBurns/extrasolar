import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Switch, Route, withRouter } from 'react-router-dom';

/* necessary? TBD after Redux re-organization */
import { getStarsAsync } from "../../../redux/actions/data/stars";
import { getPlanetsAsync } from "../../../redux/actions/data/planets";
import { getLastDataFetch } from "../../../redux/actions/ui";

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
    props.getStarsAsync();
    props.getPlanetsAsync();
  }, []);

  React.useEffect(() => {
    console.log(props);
  }, [props.location])

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
  lastDataFetch: state.ui.lastDataFetch,
});

const mapDispatchToProps = dispatch => {
  return {
    getStarsAsync: () => dispatch(getStarsAsync()),
    getPlanetsAsync: () => dispatch(getPlanetsAsync()),
    getLastDataFetch: () => dispatch(getLastDataFetch()),
  };
};

/* withRouter is a HoC for Router use with Redux */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppMain));
