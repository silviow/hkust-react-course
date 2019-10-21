import * as actionTypes from "./actionTypes";
import { baseUrl } from '../storage/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
});

export const dishesFailed = (errormsg) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errormsg
});

export const addDishes = (dishes) => ({
    type: actionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errormsg) => ({
    type: actionTypes.COMMENTS_FAILED,
    payload: errormsg
});

export const addComments = (comments) => ({
    type: actionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: actionTypes.PROMOS_LOADING
});

export const promosFailed = (errormsg) => ({
    type: actionTypes.PROMOS_FAILED,
    payload: errormsg
});

export const addPromos = (promos) => ({
    type: actionTypes.ADD_PROMOS,
    payload: promos
});
