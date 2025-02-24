import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import logger from 'redux-logger';
import { call } from 'redux-saga/effects';
import * as reducers from './reducers';
import rootSaga from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const usedMiddleware = [logger, thunk, sagaMiddleware, routerMiddleware(history)];
const routerReducer = connectRouter(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(...usedMiddleware))
);

// autoRestart saga when any exception in any saga
function autoRestart(generator) {
  return function* autoRestarting(...args) {
    while (true) {
      try {
        yield call(generator, ...args);
      } catch (e) {
        console.error(`Unhandled error in '${generator.name}'`, e);
      }
    }
  };
}

const mySaga = autoRestart(rootSaga);
sagaMiddleware.run(mySaga);
export { store, history };
