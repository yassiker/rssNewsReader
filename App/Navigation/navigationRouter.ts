import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import MyStack from './navigationController';

const InitStack = createSwitchNavigator({
  appStack: {
    screen: MyStack,
  },
});

const App = createAppContainer(InitStack);
export default App;
