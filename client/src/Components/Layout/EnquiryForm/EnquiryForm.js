import React from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
    return (
        <div>
            <div className="container-contact100">
		<div className="wrap-contact100">
			<form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Send Us A Message
				</span>

				<label className="label-input100" for="first-name">Tell us your name *</label>
				<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type Your Name">
					<input id="name" className="input100" type="text" name="first-name" placeholder="Name" />
					
				</div>
				

				<label className="label-input100" for="email">Enter your email *</label>
				<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" />
					<span className="focus-input100"></span>
				</div>

				<label className="label-input100" for="phone">Enter phone number</label>
				<div className="wrap-input100">
					<input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +1 800 000000" />
					<span className="focus-input100"></span>
				</div>

                <label className="label-input100" for="date">Event Date</label>
				<div className="wrap-input100">
					<input id="date" className="input100" type="date" name="date" placeholder={new Date()} />
					<span className="focus-input100"></span>
				</div>
                
                <label className="label-input100" for="Event Venue">Event Venue</label>
				<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type Venue">
					<input id="Venue" className="input100" type="text" name="venue" placeholder="Enter Venue" />
					
				</div>

				<label className="label-input100" for="message">Event Discription </label>
				<div className="wrap-input100 validate-input" data-validate = "Description is required">
					<textarea id="description" className="input100" name="description" placeholder="Write a Event Description"></textarea>
					<span className="focus-input100"></span>
				</div>

				<div className="container-contact100-form-btn">
					<button className="contact100-form-btn">
						Send Message
					</button>
				</div>
			</form>

			<div className="contact100-more flex-col-c-m" >
				<div className="flex-w size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-map-marker"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
							Address
						</span>

						<span className="txt2">
							Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
						</span>
					</div>
				</div>

				<div className="dis-flex size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-phone-handset"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
							Lets Talk
						</span>

						<span className="txt3">
							+1 800 1236879
						</span>
					</div>
				</div>

				<div className="dis-flex size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-envelope"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
							General Support
						</span>

						<span className="txt3">
							contact@example.com
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    )
}

export default EnquiryForm
