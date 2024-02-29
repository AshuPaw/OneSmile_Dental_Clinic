import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Adminhome() {
  const navigate = useNavigate();
  const imageStyle = {
    filter: 'blur(2px)',
    width: '100%',
    height: '200px', 
    objectFit: 'cover',
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
  };

  const cardTitleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };

  
    useEffect(() => {
      // if(Cookies.get("Adminlog")==null) {
      //   navigate("/loginpage");
      // }
  });
   
 
  

  return (

    <div className='container'>


   
    <div className=" row row-cols-1 row-cols-md-2 g-6">
      
      <div className="col" >
        <div className="card mt-2" style={cardStyle}>
          <Link to="/AdminMedicalStorepage">
            <img
              src="https://uniquekiosk.com/wp-content/uploads/2020/08/39-10-1536x877.jpg"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h4 className="card-title" style={{color:"white" }}><b>Medicine Store</b></h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card mt-2" style={cardStyle}>
          <Link to="/Userdetailspage">
            <img
              src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
              className="card-img-top"
              alt="User Details"
              style={imageStyle}
              width={"auto"}
            />
            <div style={cardTitleStyle}>
              <h4 className="card-title" style={{color:"white"}}><b>User Details</b></h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card mt-2" style={cardStyle}>
          <Link to="/Appointmentdetailspage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/91NlxA%2BwxyL.jpg"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h4 className="card-title" style={{color:"white" }}><b>Appointment Details</b></h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card mt-2" style={cardStyle}>
          <Link to="/Examinationdetailspage">
            <img
              src="https://deangelisfamilydentistry.com/wp-content/uploads/when-your-child-should-have-their-first-dental-appointment-1.jpeg"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h4 className="card-title" style={{color:"white"}}><b>Examination Details</b></h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card mt-2" style={cardStyle}>
          <Link to="/Allpaymentspage">
            <img
              src="https://www.cambodiacreative.com/wp-content/uploads/2019/06/cambodia-online-payment-getway-ecommerce-website-design-768x436.jpg?08257c&08257c"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h4 className="card-title"style={{color:"white" }}><b>Payment Details</b></h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card mt-2 mb-2" style={cardStyle}>
          <Link to="/EnquiryDetailspage">
            <img
              src="https://www.freeiconspng.com/uploads/inquiry-icon-png-25.png"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h4 className="card-title"style={{color:"white" }}><b>Enquiry Details</b></h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}