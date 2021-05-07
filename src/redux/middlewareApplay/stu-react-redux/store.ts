import { applyMiddleware, createStore } from 'redux'
import saga from './saga'
import reducer from './actions'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(saga)

export default store