import React from 'react'
import img1 from '../components/images/logo1.png' 
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


export default function Aheader() {
  
  const navigate = useNavigate();
    const cookiename = Cookies.get('username');
    console.log(cookiename)
    const myStyle = {
      // backgroundColor:"rgb(250,240,225)",
     // backgroundColor: "rgb(184,227,236)",
      background: 'linear-gradient(90deg, rgba(149,247,210,1) 27%, rgba(83,173,218,1) 94%)',
      //linear-gradient(0deg, rgba(238,214,249,1) 7%, rgba(140,230,249,1) 71%)
      padding: "10px",
      fontFamily: "Roboto Sans-Serif",
    
    };
      function handlelogout(){
        Cookies.remove("Adminlog");
        //Window.sessionStorage.setItem("abc",false);
        navigate("/");
     sessionStorage.clear();
     window.location.reload();
        }
    return (

        <>
       <nav className="navbar navbar-expand-lg navbar-light" style={myStyle}>
      <div class="container-fluid ">
    
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <a class="navbar-brand" href="#">
          <img src={img1} alt="" width="100px" height="80px"/>
          {/* <span className="h2 p-3 ">OneSmile</span> */}
        </a>
    
        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <div className='d-flex justify-content-center'>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class=" h4 nav-item">
              <a class="nav-link active" aria-current="page" href="/"> <b>Home</b></a>
            </li>
            <li class=" h4 nav-item ">
            <a className="nav-link active w-100 p-2" href="#scrollspyHeading1"> <b>About us</b> 
            </a>
             </li>
             <li class=" h4 nav-item ">
            <a className="nav-link active w-100 p-2" href="/adminhomepage"><b>Admin Home</b> 
            </a>
            </li>
            <li class=" h4 nav-item ">
            <a className="nav-link active w-100 p-2" href="/Adddoctorspage"><b>Add Doctor</b> 
            </a>
            </li>           
            <li class=" h4 nav-item">
            <a className="nav-link active w-100 p-2" href="/treatmentspage">
                  <b>Treatments</b>  
                  </a>        </li>
            <li class=" h4 nav-item ">
            <a className="nav-link active" href="/showFeedbackpage">
             <b>Show Feedback</b> 
                  </a>
            </li>
    
            <li class="nav-item">
            <Link className="nav-link active text-white w-100 p-2"  >
                    <button className="btn btn-danger" onClick={handlelogout}>Logout</button>
                  </Link>
            </li>
    
          </ul>
    
          </div>

        </div>
      </div>
    </nav>
 
        </>
  )
}