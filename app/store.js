import { createStore, applyMiddleware } from 'redux';
import mainReducer from 'reducers/mainReducer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import createImmutableCheck from 'redux-immutable-state-invariant';

const logger = createLogger();
const immutableCheck = createImmutableCheck();

const devMiddleware = [thunk, logger, immutableCheck];
const prodMiddleware = [thunk];
const myMiddleware = !PRODUCTION ? devMiddleware : prodMiddleware;

const store = createStore(
    mainReducer,
    applyMiddleware(...myMiddleware)
);

export default store;