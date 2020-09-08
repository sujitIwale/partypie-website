import React,{useReducer} from 'react';
import axios from 'axios';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import {
    GET_ADMIN
} from '../types'

const AdminState = (props) => {
    const initialState = {
        admin:null,
        isAuthenticated:false
    }
    
    const [state, dispatch] = useReducer(AdminReducer, initialState)

    //on EnquirySubmitted

    const getAdmin = async (admin) => {
  
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
             const res = await axios.post('http://localhost:5000/api/auth' , admin,config)
             console.log(res)
             if (res) {
                 alert('enquiry send')
             }
             dispatch({type:GET_ADMIN,payload:admin})
        } catch (error) {
            if(error) {
                console.log(error)
            }
        }
       
    }

    return (
         <AdminContext.Provider 
            value ={{
                isAuthenticated:state.isAuthenticated,
                getAdmin
            }}
            >
                {props.children}
            </AdminContext.Provider>
    )

}

export default AdminState;