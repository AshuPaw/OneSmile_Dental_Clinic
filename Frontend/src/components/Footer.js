

import React from "react";

export default function Footer() {
  return (
    
    <div className="container-fluid footer mb-3 text-start border border-dark-subtle position-relative bottom-0  " style={{ background: 'linear-gradient(90deg, rgba(149,247,210,1) 27%, rgba(83,173,218,1) 94%)', fontFamily: 'Roboto Sans-Serif'}}>
      <div className="row">
        <div className="col-md-4">
          <br />
          <iframe
            title="Google Map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.265936900495!2d73.88949387101917!3d18.471609432264017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb1025acaf39%3A0xeac4ba5e15e2507d!2sOne%20Smile!5e0!3m2!1sen!2sin!4v1703692051157!5m2!1sen!2sin"
            width="100%"
            height="250 px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-lg-4">
              <br />
              <p>
                <h3 className="text" style={{color:'#2c54a2'}}><b>Our Address</b></h3>
                <h5>One Smile Shop no. 13, Opel Acom, NIBM Rd, opposite Kool Homes, Kondhwa, Pune, Maharashtra 411048</h5>
              </p>
            </div>
            <div className="col-lg-4">
              <br />
              <h3 className="text" style={{color:'#2c54a2'}}><b>Opening Hours</b></h3>
              <p>
                <h5>
                  <b>Monday: </b>
                  10.00 am to 7.00 pm<br />
                  <b>Tuesday: </b>
                  10.00 am to 7.00 pm<br />
                  <b>Wednesday: </b>
                  10.00 am to 7.00 pm<br />
                  <b>Thursday: </b>
                  10.00 am to 7.00 pm<br />
                  <b>Friday: </b>
                  Closed<br />
                  <b>Saturday: </b>
                  10.00 am to 1.00 pm<br />
                  <b>Sunday: </b>
                  10.00 am to 1.00 pm
                </h5>
              </p>
            </div>
            <div className="col-lg-4">
              <br />
              <h3 className="text" style={{color:'#2c54a2'}}><b>Contact Details</b></h3>
              <p>
                <h5>
                  <b>Phone Number: </b><br />
                  +91 9892781987<br />
                  <b>Email Id: </b><br />
                  reception.tdb@gmail.com<br />
                  <b>WhatsApp Number: </b><br />
                  +91 9892781987
                </h5>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*CopyRight*/}
      <div className="container-fluid footer text-center text-bg-secondary mt-3 p-3 "> &copy; One Smile 2024 </div>
    </div>
  );
}

