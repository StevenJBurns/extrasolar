import { createSelector } from 'reselect';

export const selectLastDataFetch = () => createSelector(
  [state => state.ui.lastDataFetch],
  lastDataFetch => lastDataFetch || 'Last Fetch Unknown'
);
