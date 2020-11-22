import R from 'ramda';

import {applyMiddleware, createStore, compose} from 'redux';

import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import sagas from './rootSagas';

/* ------------- CONFIGS ------------- */
// const ENABLE_AUTO_LOGIN = true;

/* ------------- Redux Configuration ------------- */
const middleware = [];
// tells for which REDUCERS we want to store data to the persistence store
const persistWhitelist = [];
// if (ENABLE_AUTO_LOGIN) {
//   persistWhitelist.push('eMoneyLogin');
// }

// tells for which REDUCERS we do NOT want to have the Immutuable-Transform-Filter aplied
const immutableBlacklist = [];

/* ------------- Sagas Middleware ------------- */

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

/* ------------- Logger Middleware ------------- */

const SAGA_LOGGING_BLACKLIST = [
  // 'persist/REHYDRATE',
];

/* ------------- Assemble Store ------------- */

const rootPersistConfig = {
  key: 'root',
  version: 0.1,
  storage: AsyncStorage,
  whitelist: persistWhitelist,
};

const persistentReducer = persistReducer(rootPersistConfig, rootReducer);

let tempStore;
if (__DEV__) {
  const showReduxInConsole = true;
  if (showReduxInConsole) {
    const logger = createLogger({
      predicate: (getState, {type}) =>
        R.not(R.contains(type, SAGA_LOGGING_BLACKLIST)),
    });
    middleware.push(logger);
  }

  const composeEnhancers =
    (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) ||
    compose;
  if (composeEnhancers) {
    const enhancer = composeEnhancers(applyMiddleware(...middleware));
    tempStore = createStore(persistentReducer, enhancer);
  } else {
    tempStore = createStore(persistentReducer, applyMiddleware(...middleware));
  }
} else {
  tempStore = createStore(persistentReducer, applyMiddleware(...middleware));
}
sagaMiddleware.run(sagas);
export const store = tempStore;

const pStore = persistStore(store);

export const persistor = pStore;
