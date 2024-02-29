
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

export default function Enquirepage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleAction = () => {
    // Email Validation Regular Expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^[6-9]\d{9}$/;

    // Perform validations
    if (!name || !email || !contact || !message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!contactRegex.test(contact)) {
      alert('Please enter a valid contact number ');
      return;
    }

    // Make Axios POST request
    axios.post(`http://localhost:8087/Enquiry/addenquiry`, {
      name: name,
      email: email,
      mobile_no: contact,
      message: message
    })
    .then(response => {
      alert("Enquiry successfully Submitted");
      window.location.reload();
      console.log(response.data); // Handle successful response
    })
    .catch(error => {
      console.error('Error:', error); // Handle error
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
      <h1 className="h1 text-center m-4" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080' }}><b>Enquiry Form</b></h1>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', border: '1px solid #ccc', padding: '5px' }}>
          <img
            src='https://static.showit.co/1200/NVyu1HUlT1i7YcsOdIg2Sg/84619/fmc-dental-clinic-background.png'
            alt="Background"
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ flex: '1', border: '1px solid #ccc', paddingt: '10px',fontFamily: 'Roboto Sans-Serif', color: '#800080'}}>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1', textAlign: 'center', marginRight: '10px' }}>
                <h4><b>Your Name:</b></h4>
              </div>
              <div style={{ flex: '1' }}>
                <input id="name" type="text" style={{ width: '100%' }} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>

            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1', textAlign: 'center', marginRight: '10px' }}>
                <h4><b>Email:</b></h4>
              </div>
              <div style={{ flex: '1' }}>
                <input id="email" type="text" style={{ width: '100%' }} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1', textAlign: 'center', marginRight: '10px' }}>
                <h4><b>Contact:</b></h4>
              </div>
              <div style={{ flex: '1' }}>
                <input id="contact" type="text" style={{ width: '100%' }} onChange={(e) => setContact(e.target.value)} />
              </div>
            </div>

            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1', textAlign: 'center', marginRight: '10px' }}>
                <h4><b>Message:</b></h4>
              </div>
              <div style={{ flex: '1' }}>
                <textarea id="dat" style={{ width: '100%' }} onChange={(e) => setMessage(e.target.value)} />
              </div>
            </div>
            
            <div style={{ textAlign: 'center' , marginTop:'20px'}}>
              <button onClick={handleAction} type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}