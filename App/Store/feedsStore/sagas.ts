import {take, put, call} from 'redux-saga/effects';
import Actions from './actions';

export default (api: any) => {
  function* worker(feedUrl: string) {
    try {
      const response = yield call(api.getFeeds, feedUrl);
      yield put(Actions.getFeedsSuccess(response));
    } catch (error) {
      yield put(Actions.getFeedsFailure(true));
    }
  }

  function* watcher() {
    while (true) {
      const {feedUrl} = yield take(Actions.GET_FEEDS_REQUEST);
      yield call(worker, feedUrl);
    }
  }

  return {
    watcher,
    worker,
  };
};
