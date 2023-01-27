import * as Actiontypes from './ActionTypes'
export const promotions=(state={isLoading:true, promotions:[], errmess:null} ,action)=>{
    switch(action.type){
        case Actiontypes.ADD_PROMOS:
            return {...state,isLoading:false,errmess:null,promotions:action.payload}
        case Actiontypes.PROMOS_LOADING:
            return {...state,isLoading:true,errmess:null, promotins:[]};
        case Actiontypes.PROMOS_FAILED:
            return {...state,isLoading:false ,errmess:action.payload}
        default: return state

    }
}