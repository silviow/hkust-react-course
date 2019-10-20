import { DISHES } from '../storage/dishes';
import { LEADERS } from '../storage/leaders';
import { COMMENTS } from '../storage/comments';
import { PROMOTIONS } from '../storage/promotions';

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    comments: COMMENTS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};