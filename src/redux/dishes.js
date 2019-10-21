import * as actionTypes from "./actionTypes";

export const Dishes = (state = {
    isLoading: true,
    errormsg: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case actionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errormsg: null, dishes: action.payload };
        case actionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errormsg: null, dishes: [] };
        case actionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errormsg: action.payload, dishes: [] };
        default:
            return state;
    }
}