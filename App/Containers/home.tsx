import React, {ReactElement} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Card from '../Components/card';
import RssFeeds from './constants';
import navigationConstants from '../Navigation/navigationConstants';
import Actions from '../Store/feedsStore/actions';

type RssFeed = {
  name: string;
  url: string;
};

const {width, height} = Dimensions.get('window');

const Home = ({navigation}): ReactElement => {
  const dispatch = useDispatch();
  const renderRssFeeds = ({item, index}): ReactElement => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Card
          onPress={() => {
            dispatch(Actions.getFeedsRequest(item.url));
            navigation.navigate(navigationConstants.FEED_SCREEN);
          }}
          title={item.name}
          url={item.url}
          logo={item.logo}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.feedUrls}>
        <FlatList
          data={RssFeeds}
          renderItem={renderRssFeeds}
          keyExtractor={(item: RssFeed) => item.url}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
  },
  feedUrls: {
    position: 'absolute',
    height: height,
    width: width,
  },
  flatList: {
    flexGrow: 1,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 10,
  },
});

export default Home;
