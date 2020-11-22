import Immutable from 'seamless-immutable';
import {createReducer} from 'reduxsauce';
import Actions from './actions';

export type Item = {};

const INITIAL_STATE = Immutable({
  feedEntries: undefined,
  fetching: false,
  error: false,
  feedUrl: null,
});

const getFeedsRequest = (state: any, action: any) => {
  return {...state, fetching: true, error: false, feedUrl: action.feedUrl};
};

const getFeedsSuccess = (state: any, action: any) => {
  return {
    ...state,
    feedEntries: action.feedEntries,
    fetching: false,
    error: false,
    // feedUrl: null,
  };
};

const getFeedsFailure = (state: any, action: any) => {
  return {
    ...state,
    error: action.error,
    fetching: false,
    // feedUrl: null,
  };
};

const ACTION_HANDLERS = {
  [Actions.GET_FEEDS_REQUEST]: getFeedsRequest,
  [Actions.GET_FEEDS_SUCCESS]: getFeedsSuccess,
  [Actions.GET_FEEDS_FAILURE]: getFeedsFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
