import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Containers/home';
import FeedScreen from '../Containers/feedScreen';
import navigationConstants from './navigationConstants';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={navigationConstants.APP_SCREEN}
        component={HomeScreen}
        options={{
          title: 'News Feeds',
        }}
      />
      <Stack.Screen
        name={navigationConstants.FEED_SCREEN}
        component={FeedScreen}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
