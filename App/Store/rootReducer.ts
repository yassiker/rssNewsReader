import {combineReducers} from 'redux';
import FeedsReducer from './feedsStore/reducers';

export default combineReducers({
  feeds: FeedsReducer,
});
