import React, {Component} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import NavigationService from '../Navigation/navigationServices';
import NavigationRouter from '../Navigation/navigationRouter';

class Root extends Component {
  renderApp() {
    return (
      <View style={rootStyle.applicationView}>
        <StatusBar barStyle="default" />
        <NavigationRouter
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }

  render() {
    return this.renderApp();
  }
}
const rootStyle = StyleSheet.create({
  applicationView: {
    flex: 1,
  },
});

export default Root;
