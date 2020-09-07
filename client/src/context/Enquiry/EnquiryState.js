import React,{useReducer} from 'react';
import axios from 'axios';
import EnquiryContext from './EnquiryContext';
import EnquiryReducer from './EnquiryReducer';
import {
    SUBMIT_ENQUIRY,
    GET_ENQUIRIES
} from '../types'

const EnquiryState = (props) => {
    const initialState = {
        Enquiry : null,
        Enquiries:null
    }
    
    const [state, dispatch] = useReducer(EnquiryReducer, initialState)

    //on EnquirySubmitted

    const submitEnquiry = async (enquiry) => {
  
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
             const res = await axios.post('http://localhost:5000/api/addenquiries' , enquiry,config)
             console.log(res)
             if (res) {
                 alert('enquiry send')
             }
             dispatch({type:SUBMIT_ENQUIRY,payload:res.data})
        } catch (error) {
            if(error) {
                console.log(error)
            }
        }
       
    }

    //on getEnquiries

    const getEnquiries = async () => {
  
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
             const res = await axios.get('http://localhost:5000/api/getenquiries' ,config)
             console.log(res)
             
             dispatch({type:GET_ENQUIRIES,payload:res.data})
        } catch (error) {
            if(error) {
                console.log(error)
            }
        }
     
    }

    return (
         <EnquiryContext.Provider 
            value ={{
                Enquiry:state.Enquiry,
                Enquiries:state.Enquiries,
                submitEnquiry,
                getEnquiries
            }}
            >
                {props.children}
            </EnquiryContext.Provider>
    )

}

export default EnquiryState;