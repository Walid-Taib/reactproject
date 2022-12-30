import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './form';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    ...createForms({
        feedback:InitialFeedback
    })
};

export const Reducer = (state = initialState, action) => {
    return state;
};