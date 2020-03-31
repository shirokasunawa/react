import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import logger from 'redux-logger'
import { loadState } from './localStorage'

const persistedStore = loadState();


export default createStore(
    rootReducer,
    persistedStore,
    applyMiddleware(logger)
);

