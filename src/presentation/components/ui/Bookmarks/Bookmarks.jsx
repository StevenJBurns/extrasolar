import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../../../state/actionTypes';
import './Bookmarks.scss';

const dataz = [
  { id: 0, name: 'Mercury' },
  { id: 1, name: 'Venus' },
  { id: 2, name: 'Earth' },
  { id: 3, name: 'Mars' },
  { id: 4, name: 'Jupiter' },
  { id: 5, name: 'Saturn' },
  { id: 6, name: 'Uranus' },
  { id: 7, name: 'Neptune' },
  { id: 8, name: 'Pluto' },
];

export const Bookmarks = props => {
  const dispatch = useDispatch();

  const bookmarks = useSelector(state => state.ui.bookmarkedSolarSystems);

  const handleBookmarkToggle = e => {
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
          <li
            id={planet.id}
            key={planet.id}
            className="planet-item"
            onClick={e => handleBookmarkToggle(e)}
            >
            <span>{planet.name}</span>
            <button type="button" className="toggle-as-favorite">+</button>
          </li>
          )
        )}
      </ul>
      <section>
        <h3>FAVORITES</h3>
        <div>
          { bookmarks.map(planetId => (
            <span key={planetId}>{dataz[planetId].name} &bull; </span>
            )
          )}
        </div>
        <button type="button" onClick={resetFavorites}>Reset Favorites</button>
      </section>
    </div>
  )
};
