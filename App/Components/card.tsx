import React, {ReactElement} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  title: string;
  url: string;
  onPress: () => void;
};

const Card = ({onPress, title, url}: Props): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.rssFeedContainer}>
        <Text style={styles.rssFeed}>{title}</Text>
        <Text>{url}</Text>
      </View>
      <View style={styles.rightIconContainer}>
        <Icon
          name="ios-arrow-forward-circle-outline"
          color={Colors.weeWhite}
          size={25}
        />
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
    width: '80%',
  },
  rssFeed: {
    fontWeight: 'bold',
  },
  rightIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
