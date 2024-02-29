import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Register() {
  const navigate = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');
 
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const phno = useRef();
  const username = useRef();
  const [username_db, setusers] = useState([]);
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: ''
  });
 
  useEffect(() => {
    axios.get("http://localhost:8087/user/alluser").then((response) => {
      console.log(response.data);
      setusers(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  
  const handleQuestion = (event) => {
    setSelectedQuestion(event.target.value);
  };

  const handleregistration = (event) => {
    event.preventDefault(); // Prevent the default form submission

       // Validate First Name and Last Name
       const nameRegex = /^[a-zA-Z]+$/;
       if (!nameRegex.test(firstname.current.value)) {
         setErrors(prevErrors => ({ ...prevErrors, firstName: 'Please enter a valid first name' }));
         return;
       } else {
         setErrors(prevErrors => ({ ...prevErrors, firstName: '' }));
       }
   
       if (!nameRegex.test(lastname.current.value)) {
         setErrors(prevErrors => ({ ...prevErrors, lastName: 'Please enter a valid last name' }));
         return;
       } else {
         setErrors(prevErrors => ({ ...prevErrors, lastName: '' }));
       }
   
       // Validate Email, Contact, Username, Password, Security Question, and Answer (Existing Validations)
       if (!email.current.value || !phno.current.value || !username.current.value || !password.current.value || !selectedQuestion || !answer) {
         setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required', phoneNumber: 'Phone number is required', username: 'Username is required', password: 'Password is required' }));
         return;
       } else {
         setErrors(prevErrors => ({ ...prevErrors, email: '', phoneNumber: '', username: '', password: '' }));
       }
   
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email.current.value)) {
         setErrors(prevErrors => ({ ...prevErrors, email: 'Please enter a valid email address' }));
         return;
       } else {
         setErrors(prevErrors => ({ ...prevErrors, email: '' }));
       }
   
       const contactRegex = /^[6-9]\d{9}$/;
       if (!contactRegex.test(phno.current.value)) {
         setErrors(prevErrors => ({ ...prevErrors, phoneNumber: 'Please enter a valid 10-digit contact number' }));
         return;
       } else {
         setErrors(prevErrors => ({ ...prevErrors, phoneNumber: '' }));
       }
   
       const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
       if (!usernameRegex.test(username.current.value)) {
         setErrors(prevErrors => ({ ...prevErrors, username: 'Username can only contain only letters, numbers, & underscore(_)' }));
         return;
       } else {
         setErrors(prevErrors => ({ ...prevErrors, username: '' }));
       }
   
       const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
       if (!passwordRegex.test(password.current.value)) {
         setErrors(prevErrors => ({ ...prevErrors, password: 'Password should contain at least 8 characters and including at least one uppercase letter, one number, and one special character' }));
         return;
       } else {
         setErrors(prevErrors => ({ ...prevErrors, password: '' }));
       }
   
       const isUsernameExists = username_db.some(user => user.uname === username.current.value);
       if (isUsernameExists) {
         setErrors(prevErrors => ({ ...prevErrors, username: 'Please use a different username. Username already exists.' }));
         return;
       } else {
         setErrors(prevErrors => ({ ...prevErrors, username: '' }));
       }

    var userstatus=false;
    if(username_db.length<=0){
      userstatus=true;
    }

    for (let i = 0; i < username_db.length; i++) {
      if (username_db[i].uname === username.current.value) {
        alert("please use differnt username username already exist");
        userstatus=false;
        break;
      } else {
        alert("user match");
        userstatus=true;
        break;
      }
    }   
if(userstatus){

    axios
      .post('http://localhost:8087/user/adduser', {
        firstname: firstname.current.value,
        password: password.current.value,
        email: email.current.value,
        mobileno: phno.current.value,
        uname: username.current.value,
        lastname: lastname.current.value,
        answer: answer,
        question: selectedQuestion,
      })
      .then((response) => {
        console.log(response.data);
        toast.success('Registration Success');
        navigate('/loginpage');
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div>
      <section className="container-fluid  bodycolor">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Register Yourself</h3>

                  <form onSubmit={handleregistration}>
                    <div className="form-outline mb-4">
                      <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="First-Name" ref={firstname} required />
                      <div className="text-danger">{errors.firstName}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Last-Name" ref={lastname} required />
                      <div className="text-danger">{errors.lastName}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Contact Number"  ref={phno} required />
                      <div className="text-danger">{errors.phoneNumber}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email-Id" ref={email} required />
                      <div className="text-danger">{errors.email}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Username" ref={username} required />
                      <div className="text-danger">{errors.username}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password" ref={password} required />
                      <div className="text-danger">{errors.password}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <select
                        className="form-select"
                        id="questionSelect"
                        value={selectedQuestion}
                        onChange={handleQuestion}
                        required
                      >
                        <option value="">Select Question</option>
                        <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                        <option value="In what city were you born?">In what city were you born?</option>
                        <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                        <option value="What is the model of your first car?">What is the model of your first car?</option>
                        <option value="What is the name of your favorite teacher from school?">What is the name of your favorite teacher from school?</option>
                      </select>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="typeAnswerX-2" className="form-control form-control-lg" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
                    </div>

                    <button className="btn btn-primary btn-lg btn-block" type="submit" style={{ margin: 'auto' }}>
                      Register
                    </button>
                  </form>

                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
