import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducers from './actions'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(saga)

export default store