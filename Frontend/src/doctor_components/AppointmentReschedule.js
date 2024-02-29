import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function AppointmentReschedule() {
  const navigate=useNavigate();
  useEffect(()=>{
    if(Cookies.get("Doctorlog")==null) {
      navigate("/loginpage");
    }

  })


  const [selectedDate, setSelectedDate] = useState(null);

  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  var getdate = useRef();
  var gettime = useRef();
  var appid = localStorage.getItem("appid");

  const handleReschedule = (date) => {
    console.log(getdate.current.value);
    console.log(gettime.current.value);
    setSelectedDate(date);
    
    setSelectedDate(date);
      const selectedDate = new Date(getdate.current.value);
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
      const selectedTime = gettime.current.value;
      const startTime = '10:00';
      const endTime = '20:00';
  
      if (selectedTime < startTime || selectedTime > endTime) {
        setTimeError('Please select a time between 10:00 AM and 8:00 PM');
        return;
      } else {
        setTimeError('');
      }
    axios
      .put("http://localhost:8087/appointments/updateappointment/" + appid, {
        date: getdate.current.value,
        time: gettime.current.value,
      })
      .then((response) => {
        alert("Resheduled");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <fieldset disabled>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label mt-3">
              <h4>Application Id</h4>
            </label>
            <input
              type="text"
              id="disabledTextInput"
              value={appid}
              className="form-control"
              placeholder="Application ID"
              style={{ width: "50%" }}
            />
          </div>
        </fieldset>
        <div>
          <h3>Select a Date</h3>
          <input type="date" className="hr me-3" ref={getdate} />
          {dateError && <p style={{ color: 'red' }}>{dateError}</p>}
        </div>
        <div className="time mt-3">
          <h3>Select Time</h3>
          <input type="time" ref={gettime} />
          {timeError && <p style={{ color: 'red' }}>{timeError}</p>}
        </div>
        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn btn-primary btn-w-5"
            onClick={handleReschedule}
          >
            Reschedule
          </button>
        </div>
      </div>
    </>
  );
}
