import * as rssParser from 'react-native-rss-parser';

const create = () => {
  const getFeeds = (feedUrl) => {
    return fetch(feedUrl)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        return rss;
      });
  };

  return {
    getFeeds,
  };
};

export default {
  create,
};
