import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Cookie from "js-cookie";
import axios from "axios";
import { toast } from 'react-toastify';
export default function Login() 
{
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  const [getuser, setusers] = useState([]);
  const [userdata,setuserdata]=useState([]);
  const [statusCode, setStatusCode] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8087/user/alluser")
      .then((response) => {
        console.log(response.data);
        setusers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

var status=false;
  const handleLogin = () => {
    axios.post(`http://localhost:8087/user/authuser`, {
      uname: username.current.value,
      password:password.current.value
    })
    .then(response => {
      setuserdata(response.data)
      setStatusCode(response.status);
      //window.location.reload();
      console.log(response.status);
    })
    .catch(error => {
      setStatusCode(error.response.status);
      console.error(error.response.status); // Handle error
     // setStatusCode(response.status);// Handle successful response
    });

  }
    console.log(userdata);
    if(statusCode=="200" && userdata.role=="patient"){
      status=true;
      toast.success("Login successful");
          window.sessionStorage.setItem("abc", "1");
          window.sessionStorage.setItem("loginstore", "1");
        
          Cookie.set("usersetid", userdata.uid, {
            expires: 1,
            secure: true,
            sameSite: "strict",
          });
          
        
         
          Cookie.set("userlogin", username.current.value, {
            expires: 1,
            secure: true,
            sameSite: "strict",
          });
  
          if (Cookie.get("loginbook") == 1) {
            console.log("login" + Cookie.get("loginbook"));
            navigate("/");
          }
          if (Cookie.get("book_s") == 2) {
            console.log("login" + Cookie.get("book_s"));
            navigate("/appointmentspage");
          }

    }

    else if (statusCode=="200" && userdata.role=="doctor"){
      toast.success("Login successful");
      status=true;
          window.sessionStorage.setItem("abc", "2");
          Cookie.set("Doctorlog", username.current.value, {
            expires: 1,
            secure: true,
            sameSite: "strict",
          });
          navigate("/");
          window.location.reload();


    }
    else if(statusCode=="200" && userdata.role=="admin"){
      toast.success("Login successful");
      status=true;
          window.sessionStorage.setItem("abc", "3");
          Cookie.set("Adminlog", username.current.value, {
            expires: 1,
            secure: true,
            sameSite: "strict",
          });
        // Call notify with message
          navigate("/adminhomepage");
          window.location.reload();
      
    }
    else if(statusCode==404){
      toast.error("User not  found");
    }
    else if(statusCode==401){
      toast.error("unauthorized access");
    }

   

  //  if(status==false){
  //     alert("login faild");
  //   }
  

  

  return (
    <>
      <section
        className="container-fluid  bodycolor"
        style={{ position: "relative" }}
      >
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "#dd4b39" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="User name"
                      ref={username}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      ref={password}
                    />
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <a href="/ForgotPasswordpage">Click to Forgot password</a>
                   
                  </div>
                 
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <a href="/registerpage">
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                      style={{ marginLeft: "35px" }}
                    >
                      Register
                    </button>
                  </a>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
