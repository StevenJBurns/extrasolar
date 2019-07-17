import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../../redux/actionTypes';
import './Bookmarks.scss';

const dataz = [
  { id: 1, name: 'Mercury' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },
  { id: 4, name: 'Mars' },
  { id: 5, name: 'Jupiter' },
  { id: 6, name: 'Saturn' },
  { id: 7, name: 'Uranus' },
  { id: 8, name: 'Neptune' },
  { id: 9, name: 'Pluto' },
];

export const Bookmarks = props => {
  const dispatch = useDispatch();

  const handleBookmarkToggle = e => {
    console.log(e.currentTarget);
    
    dispatch({
      type: actionTypes.ui.BOOKMARKS_TOGGLE_SOLARSYSTEM,
      payload: +e.currentTarget.id,
    })
  };

  const resetFavorites = () => dispatch({ type: actionTypes.ui.BOOKMARKS_DELETE_ALL });

  return (
    <div>
      <ul className="ul-planet-list">
        { dataz.map(planet => (
          <li key={planet.id} id={planet.id} className="planet-item" onClick={e => handleBookmarkToggle(e)}>
            <span>{planet.name}</span>
            <button type="button" className="toggle-as-favorite">+</button>
          </li>)
        )}
      </ul>
      <section>
        <h3>FAVORITES</h3>
        { useSelector(state => state.ui.bookmarkedSolarSystems).map(item => (<span key={item}>{item}</span>))}
        <button type="button" onClick={resetFavorites}>Reset Favorites</button>
      </section>
    </div>
  )
};
