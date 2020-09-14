import React, { useContext, useEffect } from 'react'
import EnquiryContext from '../../../../context/Enquiry/EnquiryContext'

const AdminPage = () => {
    const enquiryContext = useContext(EnquiryContext);
    const {getEnquiries,Enquiries} = enquiryContext;

    
    useEffect(() =>{
      getEnquiries()
    })
    return (
        <div className='' style={{marginTop:''}}>
           

                
            {
                Enquiries && Enquiries.map(enquiry =>(
                  <div>
                  <section class="ph3 ph5-ns pv5">
                  <article class="mw8 center br2 ba b--light-blue bg-lightest-blue">
                    <div class="dt-ns dt--fixed-ns">
                      <div class="pa3 pa4-ns dtc-ns v-mid">
                        <div>
                         <h2 class="fw4 blue mt0 mb3" style={{fontFamily:'serif'}}>
                         <span className='red'>Name:</span> {enquiry.name}
                         </h2>
                         <h2 class="fw4 blue mt0 mb3" style={{fontFamily:'serif'}}>
                         <span className='red'>Email:</span> {enquiry.email} 
                         </h2>
                         <h2 class="fw4 blue mt0 mb3" style={{fontFamily:'serif'}}>
                         <span className='red'>Phone:</span> {enquiry.phone}
                         </h2>
                         <h2 class="fw4 blue mt0 mb3" style={{fontFamily:'serif'}}>
                         <span className='red'>Event:</span> {enquiry.eventType}
                         </h2>
                         <h2 class="fw4 blue mt0 mb3" style={{fontFamily:'serif'}}>
                         <span className='red'>Event Date:</span> {enquiry.eventDate}
                         </h2>
                         <h2 class="fw4 blue mt0 mb3" style={{fontFamily:'serif'}}>
                         <span className='red'>Event Venue:</span> {enquiry.eventVenue}
                         </h2>
                          <h2 class="fw4 red mt0 mb3" style={{fontFamily:'serif'}}>Event Description :
                          <span class="black-70 measure lh-copy mv0">
                            {enquiry.eventDesc}
                          </span>
                          </h2>
                         
                        </div>
                      </div>
                      <div class="pa3 pa4-ns dtc-ns v-mid">
                        <a href="#"  class="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">
                            <label style={{fontFamily:'serif'}}>Respond</label></a>
                      </div>
                    </div>
                  </article>
                </section>

                  </div>

                   
                ))
            }
            </div>
        
    )
}

export default AdminPage
