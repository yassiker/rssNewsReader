import {name as appName} from './app.json';
import React from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Root from './App/Containers/root';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './App/Store/store';

class RNBase extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate
            loading={<View style={styles.container} />}
            persistor={persistor}>
            <Root {...this.props} />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent(appName, () => RNBase);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
