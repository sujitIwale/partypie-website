import React, { useContext, useState } from "react";
import "./EnquiryForm.css";
import EnquiryContext from "../../../context/Enquiry/EnquiryContext";

const EnquiryForm = () => {
  const enquiryContext = useContext(EnquiryContext);

  const { submitEnquiry } = enquiryContext;

  const [Enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    eventDesc: "",
    eventVenue: "",
  });
  const onChange = (e) => {
    setEnquiry({ ...Enquiry, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitEnquiry(Enquiry);
  };
  return (
    <div>
      <div className='container-contact100'>
        <div className='wrap-contact100'>
          <form className='contact100-form validate-form'>
            <span className='contact100-form-title'>
              Send Us Your Information..
            </span>

            <label className='label-input100' htmlFor='first-name'>
              Tell us your name.. *
            </label>
            <div
              className='wrap-input100 validate-input'
              data-validate='Type Your Name'
            >
              <input
                id='name'
                className='input100 w-100 '
                type='text'
                name='name'
                required
                placeholder='Eg. John Doe'
                onChange={onChange}
              />
              <span className='focus-input100'></span>
            </div>

            <label className='label-input100' htmlFor='email'>
              Tell Us Your Email.. *
            </label>
            <div
              className='wrap-input100 validate-input'
              data-validate='Valid email is required: ex@abc.xyz'
            >
              <input
                id='email'
                className='input100 w-100 '
                type='email'
                name='email'
                required
                placeholder='Eg. example@email.com'
                onChange={onChange}
              />
              <span className='focus-input100'></span>
            </div>

            <label className='label-input100' htmlFor='phone'>
              Tell Us Your Phone Number.. *
            </label>
            <div className='wrap-input100'>
              <input
                id='phone'
                className='input100 w-100'
                type='text'
                name='phone'
                required
                placeholder='It Should Be 10 Characters. '
                onChange={onChange}
              />
              <span className='focus-input100'></span>
            </div>

            <label className='label-input100' htmlFor='date'>
              When's The Event..
            </label>
            <div className='wrap-input100'>
              <input
                id='date'
                className='input100 w-100'
                type='date'
                name='eventDate'
                onChange={onChange}
              />
              <span className='focus-input100'></span>
            </div>

            <label className='label-input100' htmlFor='phone'>
              What's The Event..
            </label>
            <div className='wrap-input100'>
              <input
                id='text'
                className='input100 w-100'
                type='text'
                name='eventType'
                placeholder='Eg. Birthday'
                onChange={onChange}
              />
              <span className='focus-input100'></span>
            </div>

            <label className='label-input100' htmlFor='Event Venue'>
              Where's The Event..
            </label>
            <div
              className='wrap-input100 validate-input'
              data-validate='Type Venue'
            >
              <input
                id='Venue'
                className='input100 w-100 '
                type='text'
                name='eventVenue'
                placeholder=" If It's Not Decided , Leave it Empty."
                onChange={onChange}
              />
              <span className='focus-input100'></span>
            </div>

            <label className='label-input100' htmlFor='message'>
              Could You Tell Us More About The Event..
            </label>
            <div
              className='wrap-input100 validate-input'
              data-validate='Description is required'
            >
              <textarea
                id='description'
                className='input100 w-100'
                name='eventDesc'
                placeholder='Write a Event Description'
                onChange={onChange}
              ></textarea>
              <span className='focus-input100'></span>
            </div>

            <div className='container-contact100-form-btn'>
              <button className='contact100-form-btn' onClick={onSubmit}>
                Send Message
              </button>
            </div>
          </form>

          <div className='contact100-more bflex-col-c-m '>
            <header className='tc ph4 bg-white pa5-ns pa2 ma5-ns ml2 mr2 mt0 mb2 br4 ttc'>
              <h1
                className='f2 f2-m f1-l fw2 black-90 mv3'
                style={{ fontFamily: "Lobster" }}
              >
                Want to know more about us
              </h1>
              <h2 className='f3 f4-m f3-l fw2 black-50 mt0 lh-copy'>
                Contact Us -
              </h2>
              <h2 className='f3 f4-m f3-l fw2 black-50 mt0 lh-copy'>
                Mail us{" "}
                <a href='mailto:partypiecrew@gmail.com' className='blue'>
                  here
                </a>
                .
              </h2>
              <h2 className='f3 f4-m f3-l fw2 black-50 mt0 lh-copy'>Or</h2>
              <h2 className='f3 f4-m f3-l fw2 black-50 mt0 lh-copy'>
                call us on 9082348446.
              </h2>
              <h2 className='f3 f4-m f3-l fw2 black-50 mt0 lh-copy'>
                For working with us mail your resume on Same Email .
              </h2>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
