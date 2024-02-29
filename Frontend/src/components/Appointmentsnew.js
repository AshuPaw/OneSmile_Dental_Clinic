import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { wait } from "@testing-library/user-event/dist/utils";

export default function Appointmentsnew() {
  const [getcode,setstatuscode]=useState('');
  const navigate = useNavigate();
  const backgroundImage =
    "https://png.pngtree.com/back_origin_pic/04/54/70/2cd697ae026b76105a4503dcc7dd7c31.jpg";

  const [getuser, setuser] = useState([]);
  const [getuserid, setuserid] = useState();
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  useEffect(() => {
    if(Cookies.get("userlogin")==null) {
      navigate("/loginpage");
    }

    axios
      .get("http://localhost:8087/user/alluser")
      .then((response) => {
        console.log(response.data);
        setuser(response.data);
        console.log(response.data.length);

        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].uname === Cookies.get("userlogin")) {
            setuserid(response.data[i].uid);
            console.log(response.data[i].uid);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(getuserid);
  }, []);

  var appdate = useRef();
  var apptime = useRef();
  var msg = useRef();

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };

  const getMaxDate = () => {
    const today = new Date();
    today.setMonth(today.getMonth() + 2);
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };

  const handlebooking = (e) => {
    e.preventDefault(); //for chrome browser

    // Date Validation
    const selectedDate = new Date(appdate.current.value);
    const currentDate = new Date();
    const maxDate = new Date();
    maxDate.setMonth(currentDate.getMonth() + 2);

    if (selectedDate < currentDate || selectedDate > maxDate) {
      setDateError('Please select a date within the next 2 months');
      return;
    } else {
      setDateError('');
    }

    // Time Validation
    const selectedTime = apptime.current.value;
    const startTime = '10:00';
    const endTime = '20:00';

    if (selectedTime < startTime || selectedTime > endTime) {
      setTimeError('Please select a time between 10:00 AM and 8:00 PM');
      return;
    } else {
      setTimeError('');
    }
    axios
      .post("http://localhost:8087/appointments/addappointment", {
        date: appdate.current.value,
        time: apptime.current.value,
        notes: msg.current.value,
        usertable: { uid: getuserid },
      })
      .then((response) => {
        console.log(response.data);
        setstatuscode(response.status);
 
      
       
      })
      .catch((error) => {
        console.log(error);
        setstatuscode(error.response.status);
      });
      console.log(getcode);
    


      
  };
  if (getcode=="409") {
   toast.error("please select different  date or time ");
   setTimeout(function() {
     window.location.reload();
   
   }, 5000);
  } 
  if (getcode=="200"){
   toast.success("Appointments booked successfully");
   setTimeout(function() {
     window.location.reload();
   
   }, 5000);
  
  }

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div
      className="container-fluid"
      style={{
        margin: "10px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        height: "500px",
        overflow: "hidden",
      }}
    >
      <div
        className="blur-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          filter: "blur(1px)",
        }}
      ></div>
      <div className="row">
        <div
          className="col-md-6 offset-md-3 transperent"
          style={{ backgroundColor: "light-blue" }}
        >
          <div className="col-12">
            <h3
              className="fw-normal text-secondary fs-4 text-uppercase mb-4"
              style={{ textAlign: "center", color: "black" }}
            >
              Book Appointment
            </h3>
          </div>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  placeholder="Enter Date"
                  ref={appdate}
                  required
                  min={getCurrentDate()}
                  max={getMaxDate()}
                />
                {dateError && <p style={{ color: 'red' }}>{dateError}</p>}
              </div>
              <div className="col-md-6">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  className="form-control"
                  placeholder="Enter Time"
                  ref={apptime}
                  required
                />
                {timeError && <p style={{ color: 'red' }}>{timeError}</p>}
              </div>
              <div className="col-12">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Message"
                  ref={msg}
                ></textarea>
              </div>
              <div className="col-md-6">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Username"
                  value={Cookies.get("userlogin")}
                  readOnly
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="userid">UserID</label>
                <input
                  type="text"
                  id="userid"
                  className="form-control"
                  value={getuserid}
                  readOnly
                />
              </div>
              <div className="col-12 mt-5">
                <button
                  type="submit"
                  className="btn btn-primary float-end"
                  onClick={handlebooking}
                >
                  Book Appointment
                </button>
                <button
                  type="button"
                  className="btn btn-danger float-end me-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
