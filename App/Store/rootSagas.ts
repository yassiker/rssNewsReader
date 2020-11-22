import {fork} from 'redux-saga/effects';
import FEEDAPI from '../Services/api';
import FeedSagas from './feedsStore/sagas';

const feedapi = FEEDAPI.create();

// start the daemons
export default function* root() {
  yield fork(FeedSagas(feedapi).watcher);
}
