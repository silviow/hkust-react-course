import * as actionTypes from "./actionTypes";
import { baseUrl } from '../storage/baseUrl';

export const addComment = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errormsg = new Error(error.message);
            throw errormsg;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {console.log('Post comments ' , error.message)
            alert('Your comment could not be posted \n' + error.message)
        })
};

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errormsg = new Error(error.message);
            throw errormsg;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
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
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errormsg = new Error(error.message);
            throw errormsg;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
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
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errormsg = new Error(error.message);
            throw errormsg;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
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

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errormsg = new Error(error.message);
            throw errormsg;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
    type: actionTypes.LEADERS_LOADING
});

export const leadersFailed = (errormsg) => ({
    type: actionTypes.LEADERS_FAILED,
    payload: errormsg
});

export const addLeaders = (leaders) => ({
    type: actionTypes.ADD_LEADERS,
    payload: leaders
});

export const postFeedback = (firstname, lastname, phone, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errormsg = new Error(error.message);
            throw errormsg;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {console.log('Post feedback ' , error.message)
            alert('Your feedback could not be posted \n' + error.message)
        })
};