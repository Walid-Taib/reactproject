import {combineReducers, createStore} from 'redux';
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
        })
    );

    return store;
}