import React, {ReactElement} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

type Props = {
  title: string;
  url: string;
  logo?: any;
  onPress: () => void;
};

const Card = ({onPress, title, url, logo}: Props): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.rssFeedContainer}>
        <Text style={styles.rssFeed}>{title}</Text>
        <Text>{url}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rssFeedContainer: {
    // width: '80%',
    flex: 0.8,
  },
  rssFeed: {
    fontWeight: 'bold',
  },
  rightIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {height: 50, width: 50},
  imageContainer: {flex: 0.1},
});
