import Images from '../assets/Images';

const rssFeeds = [
  {
    name: 'BBC news',
    url: 'http://feeds.bbci.co.uk/news/world/rss.xml',
    logo: Images.bbcLogo,
  },
  {
    name: 'Global Issues RSS Feed',
    url: 'https://www.globalissues.org/news/feed',
    logo: Images.globalLogo,
  },
  {
    name: 'Al Jazeera RSS Feed',
    url: 'https://www.aljazeera.com/xml/rss/all.xml',
    logo: Images.alJazeeraLogo,
  },
  {
    name: 'Yahoo News - World RSS Feed',
    url: 'https://www.yahoo.com/news/rss/world',
    logo: Images.yahooLogo,
  },
  {
    name: 'Reddit - World News RSS Feed',
    url: 'https://www.reddit.com/r/worldnews/.rss',
    logo: Images.redditLogo,
  },
  {
    name: 'CNN - World RSS Feed',
    url: 'http://rss.cnn.com/rss/edition_world.rss',
    logo: Images.cnnLogo,
  },
];

export default rssFeeds;
