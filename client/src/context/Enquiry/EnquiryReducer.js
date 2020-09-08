import {
    SUBMIT_ENQUIRY,
    GET_ENQUIRIES
} from '../types';

export default (state,action) =>{
    switch(action.type) {
        case SUBMIT_ENQUIRY :
            return {
                ...state,
                Enquiry:action.payload
            }
        case GET_ENQUIRIES :
            return {
                ...state,
                Enquiries:action.payload
            }
        default :
        return state
    }
}