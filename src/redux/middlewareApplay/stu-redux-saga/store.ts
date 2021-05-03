import { applyMiddleware, combineReducers, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducer
  }),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

export default store