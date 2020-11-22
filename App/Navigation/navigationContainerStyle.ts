import {Platform} from 'react-native';

export default {
  container: {
    flex: 1,
  },
  navBar: {
    borderBottomWidth: 0,
    // borderColor: Colors.weeShadow,
  },
  title: {
    // color: Colors.weeGreen,
  },
  logo: {
    ...Platform.select({
      ios: {
        height: 35,
        resizeMode: 'cover',
      },
      android: {
        height: 35,
        resizeMode: 'stretch',
      },
    }),
    width: 35,
    resizeMode: 'cover',
    marginTop: 5,
  },

  rightIcon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  iconCard: {
    ...Platform.select({
      ios: {
        marginTop: 35,
      },
      android: {
        marginTop: 10,
      },
    }),
    width: 52,
    height: 40,
    resizeMode: 'contain',
  },
  leftButton: {
    // tintColor: Colors.weeGreen,
  },
  rightButton: {
    // color: Colors.weeGreen,
  },
  rightButtonStyle: {
    width: 100,
    height: 42,
    paddingTop: 0,
    marginTop: 0,
    top: 6,
  },
  tabBarStyle: {
    // borderTopColor: Colors.transparent,
    // backgroundColor: Colors.weeWhite,
    // height: Metrics.iphonex ? 60 : 70,
  },
  tabBarIconStyle: {
    width: '90%',
    alignItems: 'center',
  },
};
