import * as actionTypes from "./actionTypes";

export const Comments = (state = {
        errorMsg: null,
        comments: []
    }, action) => {
        switch(action.type) {
            case actionTypes.ADD_COMMENT:
                let comment = action.payload;
                comment.id = state.comments.length;
                comment.date = new Date().toISOString();
                return {...state, comments: state.comments.concat(comment)};
    
            case actionTypes.ADD_COMMENTS:
                return { ...state, isLoading: false, errormsg: null, comments: action.payload };
            
            case actionTypes.COMMENTS_FAILED:
                return { ...state, isLoading: false, errormsg: action.payload, comments: [] };
                    
            default: 
                return state;
        }
    }