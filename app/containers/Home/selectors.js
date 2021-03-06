/**
 * Home selectors
 */
import { createSelector } from 'reselect';

const selectHome = () => state => state.get('home');

const selectUsername = () => createSelector(
  selectHome(),
  homeState => homeState.get('userName')
);

export {
  selectUsername,
};
