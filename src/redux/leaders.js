import * as actionTypes from "./actionTypes";

export const Leaders = (state = {
    isLoading: true,
    errormsg: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case actionTypes.ADD_LEADERS:
            return { ...state, isLoading: false, errormsg: null, leaders: action.payload };
        
        case actionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errormsg: null, leaders: [] };
        
        case actionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errormsg: action.payload, leaders: [] };
        
        default:
            return state;
    }
}