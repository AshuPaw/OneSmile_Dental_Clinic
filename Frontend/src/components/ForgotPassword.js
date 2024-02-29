import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [getuser, setusers] = useState([]);

  const handleQuestion = (event) => {
    setSelectedQuestion(event.target.value);
  };
  console.log(getuser)
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

  let emailFound = false;
  const handleFormSubmit = (event) => {
event.preventDefault();
    
var counter=0;

for (let i = 0; i < getuser.length; i++) {
  if (
    getuser[i].email === email &&
    selectedQuestion === getuser[i].question &&
    answer === getuser[i].answer
  ) {
    counter = 0; // Reset counter if credentials match
    break; // Exit loop early since we found a match
  } else {
    counter++;
  }
}
    // for(let i=0 ; i<getuser.length ; i++) {

    //   if(getuser[i].email!==email||selectedQuestion!==getuser[i].question||answer!==getuser[i].answer){
    //     counter++;
    //   }
    
    //   // console.log(getuser[i].email);
    //   // if(getuser[i].email!==email){
    //   // counter++;
    //   // console.log(counter);
    //   // }
    //   // if(selectedQuestion!==getuser[i].question){
    //   //   console.log(selectedQuestion);
    //   //   counter++;
    //   //   console.log(counter);
    //   // }
    //   // if(answer!==getuser[i].answer){
    //   //   console.log(answer);
    //   //   counter++;
    //   //   console.log(counter);
    //   // }
    // }

    console.log(counter);

    if (counter === 0) {
      axios.put('http://localhost:8087/user/updateuserpass/'+email, {
        password:newPassword
      })
      .then((response) => {
        
        alert("Password Changed")
        navigate("/loginpage")
        
        
      })
      .catch((error) => {
        console.log(error);
      });



        
    }
  
    
  };

  

  return (
    <>
      <section className="container-fluid vh-100 bodycolor" style={{ position: 'relative' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "#dd4b39" }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Forgot Password</h3>
                  <form>
                    <div className="form-outline mb-4">
                      <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <select
                        className="form-select"
                        id="questionSelect"
                        value={selectedQuestion}
                        onChange={handleQuestion}
                      >
                        <option value="">Select Question</option>
                        <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                        <option value="In what city were you born?">In what city were you born?</option>
                        <option value="What is the name of your first pet?<">What is the name of your first pet?</option>
                        <option value="What is the model of your first car?">What is the model of your first car?</option>
                        <option value="What is the name of your favorite teacher from school?">What is the name of your favorite teacher from school?</option>
                      </select>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="typeAnswerX-2" className="form-control form-control-lg" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <ToastContainer />
                    <div className="container mb-3">
                      <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleFormSubmit}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}