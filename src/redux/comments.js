import { COMMENTS } from "../shared/comments";
import * as ActionTypes from './ActionTypes';
export const comments=(state=COMMENTS,actions)=>{
    switch(actions.type){
        case ActionTypes.ADD_COMMENT:
            var comment=actions.payload;
            comment.id=state.length
            return state.concat(comment);
        default:
            return state;
    }
}