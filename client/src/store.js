import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import PlayersReducer from './reducers/PlayersReducer';
import PlayerFormInfoReducer from './reducers/PlayerFormInfoReducer';

const reducers = combineReducers ({
    players: PlayersReducer,
    PlayerFormInfoReducer
});

const middleware = [thunk];
//React devtool extension   
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middleware)
))

export default store;