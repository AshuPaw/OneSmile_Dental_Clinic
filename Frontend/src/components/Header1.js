import React from "react";
import img1 from "./images/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import style1 from "../App.css";
import Cookie from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header1() {
  const navigate = useNavigate();
  const myStyle = {
    // backgroundColor:"rgb(250,240,225)",
   // backgroundColor: "rgb(184,227,236)",
    background: 'linear-gradient(90deg, rgba(149,247,210,1) 27%, rgba(83,173,218,1) 94%)',
    //linear-gradient(0deg, rgba(238,214,249,1) 7%, rgba(140,230,249,1) 71%)
    padding: "10px",
    fontFamily: "Roboto Sans-Serif",
   
  
  };
  var isLoggedIn = false;
  if (window.sessionStorage.getItem("loginstore") == "1") {
    isLoggedIn = true;
  }

  var logouthandle = () => {
    window.sessionStorage.setItem("loginstore", "0");
    Cookie.remove("userlogin");
    Cookie.remove("book_s");
    Cookie.remove("loginbook")
    Cookie.remove("uid");
    Cookie.remove("usersetid");
    isLoggedIn = false;
    console.log(isLoggedIn);
    alert("hi");
    navigate("/loginpage");
    window.location.reload();
  };

  const handlelogin = () => {
  
    Cookie.set("loginbook", 1, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });
  };
  var handlebook = () => {
    Cookie.set("book_s", 2);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={myStyle}>
        <div class="container-fluid ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <a class="navbar-brand" href="#">
            <img src={img1} alt="" width="100px" height="80px" />
            {/* <span style={{ fontSize: '3.5rem', color: '#2c54a2', textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)' }} className="h1 b p-3">
              <i><b>OneSmile</b></i>
            </span> */}
          </a>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo03"
          >
            <div className="d-flex justify-content-center">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class=" h4 nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                <b>Home</b>    
                  </a>
                </li>
                <li class=" h4 nav-item ">
                  <a
                    className="nav-link active w-100 p-2"
                    href="#scrollspyHeading1"
                  >
                    {" "}
                   <b>About us</b> 
                  </a>
                </li>
                <li class=" h4 nav-item">
                  <Link
                    className="nav-link active w-100 p-2"
                    href="#"
                    to="/treatmentspage"
                  >
                <b>Treatments</b>    
                  </Link>{" "}
                </li>
                {isLoggedIn ? (
                  <li className="h4 nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                     <b>Details</b> 
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/myprofilepage">
                        <b>My Profile</b>  
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/UserAppointmentspage"
                        >
                       <b>My Appointments</b>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/UserExaminationpage"
                        >
                        <b>My Examinations </b>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/UserPaymentspage">
                       <b> My Payments</b>  
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Feedbackpage">
                       <b> My Feedback</b>  
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li class=" h4 nav-item ">
                    <a className="nav-link active" href="#scrollspyHeading2">
                     <b>Reviews</b> 
                    </a>
                  </li>
                )}

                {isLoggedIn ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white w-100 p-2"
                      to="/appointmentspage"
                    >
                      <button className="btn btn-primary" onClick={handlebook}>
                        Book an appointment
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white w-100 p-2"
                      to="/loginpage"
                    >
                      <button className="btn btn-primary " onClick={handlebook}>
                        Book an appointment
                      </button>
                    </Link>
                  </li>
                )}

                {isLoggedIn ? (
                  <li class="nav-item">
                    <Link className="nav-link active text-white w-100 p-2">
                      <button
                        className="btn btn-primary"
                        onClick={logouthandle}
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li class="nav-item">
                    <Link
                      className="nav-link active text-white w-100 p-2"
                      to="/loginpage"
                    >
                      <button className="btn btn-primary " onClick={handlelogin}>
                        Login
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
