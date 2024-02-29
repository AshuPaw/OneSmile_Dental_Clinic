import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Adddoctors() {
  useEffect(() => {
    if (Cookies.get("Adminlog") == null) {
      navigate("/loginpage");
    }
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const phno = useRef();
  const username = useRef();

  function handledoctor() {
    console.log(
      firstname.current.value +
        " " +
        lastname.current.value +
        " " +
        email.current.value
    );
    console.log(
      password.current.value +
        " " +
        phno.current.value +
        " " +
        username.current.value
    );
    const firstNameRegex = /^[a-zA-Z]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstNameRegex.test(firstname.current.value)) {
      setFirstNameError("First Name should only contain alphabets");
      return;
    } else {
      setFirstNameError("");
    }

    if (!firstNameRegex.test(lastname.current.value)) {
      setLastNameError("Last Name should only contain alphabets");
      return;
    } else {
      setLastNameError("");
    }

    if (!usernameRegex.test(username.current.value)) {
      setUserNameError(
        "Username can contain alphabets, numbers, and underscore only"
      );
      return;
    } else {
      setUserNameError("");
    }

    if (!passwordRegex.test(password.current.value)) {
      setPasswordError(
        "Password must be 8 to 15 characters long, contain at least one uppercase letter, one number, and one special character"
      );
      return;
    } else {
      setPasswordError("");
    }

    if (!mobileRegex.test(phno.current.value)) {
      setMobileError(
        "Mobile number should start from 6-9 and should be 10 digits"
      );
      return;
    } else {
      setMobileError("");
    }

    if (!emailRegex.test(email.current.value)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    axios
      .post("http://localhost:8087/user/adddoctor", {
        firstname: firstname.current.value,
        password: password.current.value,
        email: email.current.value,
        mobileno: phno.current.value,
        uname: username.current.value,
        lastname: lastname.current.value,
        question: selectedQuestion,
        answer: answer,
      })
      .then((response) => {
        console.log(response.data);
        alert("doctor added successfully");
        // navigate("/adminhomepage");
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .post(`http://localhost:8087/Mail/send/${email.current.value}`, {
        subject: "Login Credentials",
        
        message: `User Name: ${username.current.value}\nPassword: ${password.current.value}`
        
      })
      .then((response) => {
        console.log(response.data);
        alert("Login Details Sent successfully");
        navigate("/adminhomepage");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleQuestion = (event) => {
    setSelectedQuestion(event.target.value);
  };

  return (
    <>
      <form onSubmit={handledoctor}>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div className="td1">
                <div className="lbl">
                  First Name : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  ref={firstname}
                />
                <p className="text-danger">{firstNameError}</p>
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  User Name : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  ref={username}
                />
                <p className="text-danger">{userNameError}</p>
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Mobile number : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  ref={phno}
                />
                <p className="text-danger">{mobileError}</p>
              </div>
              <div className="td1 mt-3">
                <select
                  style={{ width: "85%" }}
                  id="questionSelect"
                  value={selectedQuestion}
                  onChange={handleQuestion}
                  required
                >
                  <option value="">Select Question</option>
                  <option value="What is your mother's maiden name?">
                    What is your mother's maiden name?
                  </option>
                  <option value="In what city were you born?">
                    In what city were you born?
                  </option>
                  <option value="What is the name of your first pet?">
                    What is the name of your first pet?
                  </option>
                  <option value="What is the model of your first car?">
                    What is the model of your first car?
                  </option>
                  <option value="What is the name of your favorite teacher from school?">
                    What is the name of your favorite teacher from school?
                  </option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div className="td1">
                <div className="lbl">
                  Last Name : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  ref={lastname}
                />
                <p className="text-danger">{lastNameError}</p>
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Password : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="password"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  ref={password}
                />
                <p className="text-danger">{passwordError}</p>
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Email id : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  ref={email}
                />
                <p className="text-danger">{emailError}</p>
              </div>
              <div className="td1 mt-3">
                <input
                  type="text"
                  id="typeAnswerX-2"
                  placeholder="Answer"
                  style={{ width: "85%" }}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="container text-center">
            <div className="col-md-12 my-2" style={{ marginRight: "80px" }}>
              <button type="submit" className="btn btn-primary btn-w-5 mt-3">
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
