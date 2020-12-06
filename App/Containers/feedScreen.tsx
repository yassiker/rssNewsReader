import React, {ReactElement, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {selectFetchedFeedEntries} from '../Store/feedsStore/selectors';

const FeedScreen = ({navigation}): ReactElement => {
  const feedEntries = useSelector(selectFetchedFeedEntries());
  const [sortedfeeds, sortfeeds] = useState(feedEntries?.items);

  useEffect(() => {
    navigation.setOptions({
      title: `${feedEntries?.title} (${feedEntries?.items?.length})`,
    });

    const sortedActivities = feedEntries?.items.sort(
      (a, b) =>
        new Date(b.published).getTime() - new Date(a.published).getTime(),
    );

    sortfeeds(sortedActivities);
  }, [sortfeeds, feedEntries, navigation]);

  const openFeedItem = ({links}) => {
    Linking.canOpenURL(links[0]?.url).then((supported) => {
      if (supported) {
        Linking.openURL(links[0].url);
      } else {
        Alert.alert(`The url cannot be opened: ${links[0].url}`);
      }
    });
  };

  const renderFeedItems = ({item, index}): ReactElement => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.itemContainer}
        onPress={() => openFeedItem(item)}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionName}>Title</Text>
          <Text>{item.title}</Text>
        </View>
        {item.description && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionName}>Description</Text>
            <Text>{item.description}</Text>
          </View>
        )}

        {item.published && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionName}>Published</Text>
            <Text>{item.published}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.feedEntries}>
        <FlatList
          data={sortedfeeds}
          renderItem={renderFeedItems}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
          contentContainerStyle={styles.listContentContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flexGrow: 1,
  },
  itemContainer: {
    margin: 10,
    flex: 1,
    borderRadius: 15,
    padding: 20,
    backgroundColor: Colors.white,
  },
  feedEntries: {
    flex: 1,
  },
  listContentContainer: {
    paddingBottom: 20,
  },
  sectionContainer: {
    paddingBottom: 5,
  },
  sectionName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleImage: {
    height: 100,
    width: 100,
  },
});

export default FeedScreen;
