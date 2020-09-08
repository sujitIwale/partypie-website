import React, { useContext } from 'react'
import EnquiryContext from '../../../../context/Enquiry/EnquiryContext'

const AdminPage = () => {
    const enquiryContext = useContext(EnquiryContext);
    const {getEnquiries,Enquiries} = enquiryContext;

    const seeEnquiries = (e) => { 
          e.preventDefault()
         getEnquiries()
         console.log('hello')
    }
    return (
        <div className='measure center pa4 black-80' style={{marginTop:'200px'}}>
            <input type='submit' className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer'
                value='See the enquiries' onClick={seeEnquiries} />
                
            {
                Enquiries && Enquiries.map(enquiry =>(
                    <p>{enquiry.name}</p>
                ))
            }
        </div>
    )
}

export default AdminPage
