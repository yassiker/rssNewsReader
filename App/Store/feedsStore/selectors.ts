import {createSelector} from 'reselect';

const selectDomain = () => (state: any) => (state ? state.feeds : []);

export const selectFetchedFeedEntries = () =>
  createSelector(selectDomain(), (store) => {
    return store ? store.feedEntries : [];
  });
