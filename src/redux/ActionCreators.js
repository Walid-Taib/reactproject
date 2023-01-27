import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
export const addComment=(dishId,rating,author,comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});


export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));   }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});









export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});



export const fetchleader=()=>(dispatch)=>{
    dispatch(leadersloading(true));
    setTimeout(() => {
        return fetch(baseUrl+'promotions')
        .then(response=>response.json())
        .then(leaders=>dispatch(addleaders(leaders)))
    }, 2000);

}


export const leadersfailed=(errmess)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:errmess
})

export const leadersloading=()=>({
    type:ActionTypes.LEADERS_LOADING
})

export const addleaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
})

export const fetchpromo=()=>(dispatch)=>{
    dispatch(promoloading(true))
    setTimeout(() => {
        return fetch(baseUrl+'dishes')
        .then(response=>response.json())
        .then(promotions=>dispatch(addpromotions(promotions)))
    }, 2000);
}


export const promofailed=(errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
})
export const promoloading=()=>({
    type:ActionTypes.PROMOS_LOADING,
})
export const addpromotions=(promotions)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promotions
})