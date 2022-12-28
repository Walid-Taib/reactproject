import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { comments } from './comments';
import { dishes } from './dishes';
import { leaders } from './leaders';
import { promotions } from './promotions';

import { Reducer, initialState } from './Reducer'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:dishes,
            leaders:leaders,
            comments:comments,
            promotions:promotions
        }),applyMiddleware(thunk,logger)
    );

    return store;
}