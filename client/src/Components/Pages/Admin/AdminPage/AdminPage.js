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
        <div className='' style={{marginTop:'200px'}}>
            <input type='submit' className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer'
                value='See the enquiries' onClick={seeEnquiries} />

                
            {
                Enquiries && Enquiries.map(enquiry =>(
                  <div className='flex'>
                  <div class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <div class="pa2 ph3-ns pb3-ns">
                      <div class="dt w-100 mt1">
                        <div class="dtc">
                          <h1 class="f5 f4-ns mv0">{enquiry.eventType} </h1>
                        </div>
                      </div>
                     Name: <h2 className='black'>{enquiry.name}</h2>
                     Email: <h2 className='black'>{enquiry.email}</h2>
                     Phone: <h2 className='black'>{enquiry.phone}</h2>
                     Date: <h2 className='black'>{enquiry.eventDate}</h2>
                     Venue: <h2 className='black'>{enquiry.eventVenue}</h2>
                     Description:<br/>
                      <p class="f6 lh-copy measure mt2 mid-gray">
                        {enquiry.eventDesc}
                      </p>
                    </div>
                  </div>
                  </div>

                   
                ))
            }
            </div>
        
    )
}

export default AdminPage
