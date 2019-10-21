import * as actionTypes from "./actionTypes";

export const Promotions = (state = {
        isLoading: true,
        errormsg: null,
        dishes: []
    }, action) => {
        switch (action.type) {
            case actionTypes.ADD_PROMOS:
                return { ...state, isLoading: false, errormsg: null, promotions: action.payload };
                
            case actionTypes.PROMOS_LOADING:
                return { ...state, isLoading: true, errormsg: null, promotions: [] };
                
            case actionTypes.PROMOS_FAILED:
                return { ...state, isLoading: false, errormsg: action.payload, promotions: [] };
                
            default: 
                return state;
        }
    }