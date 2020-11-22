const GET_FEEDS_REQUEST = 'GET_FEEDS_REQUEST';
const GET_FEEDS_SUCCESS = 'GET_FEEDS_SUCCESS';
const GET_FEEDS_FAILURE = 'GET_FEEDS_FAILURE';

const getFeedsRequest = (feedUrl: string) => ({
  type: GET_FEEDS_REQUEST,
  feedUrl,
});

const getFeedsSuccess = (feedEntries: any) => ({
  type: GET_FEEDS_SUCCESS,
  feedEntries,
});

const getFeedsFailure = (error: boolean) => ({
  type: GET_FEEDS_FAILURE,
  error,
});

export default {
  // Types
  GET_FEEDS_REQUEST,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_FAILURE,

  // Actions
  getFeedsRequest,
  getFeedsSuccess,
  getFeedsFailure,
};
