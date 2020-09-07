import {
   GET_ADMIN
} from '../types';

export default (state,action) =>{
    switch(action.type) {
        case GET_ADMIN :
            return {
                ...state,
                admin:action.payload,
                isAuthenticated:true
            }
        default :
        return state
    }
}