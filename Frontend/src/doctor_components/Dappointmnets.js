import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
export default function Dappointmnets() {
  const navigate=useNavigate();
  
  const [Appointments, setAppointmnets] = useState([]);
  const [isCompleted,setcompleted]=useState(true);
  
  useEffect(() => {

    if(Cookies.get("Doctorlog")==null) {
      navigate("/loginpage");
    }
      axios.get("http://localhost:8087/appointments/getallappointments").then((response) => {
        console.log(response.data);
        console.log(response.data[0].status)
        setAppointmnets(response.data);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].status == 'completed') {

            setcompleted(false);
          }
        }
      }).catch((error) => {
        console.log(error);
      })


      console.log(isCompleted);
      

    }, []);
  
    const setDataToTotalStorage=(app_id, date,notes,time,firstName,lastName,uid) => {
      localStorage.setItem("appid", app_id);
      localStorage.setItem("date", date);
      localStorage.setItem("notes", notes);
      localStorage.setItem("time", time);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("userid", uid);
  
    };
  return (
    <>
    
    <div className='container'>
    <h1>Appointments</h1>
<div className='row'>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">appid</th>
        <th scope="col">Date</th>
        <th scope="col">notes</th>
        <th scope="col">time</th>
        <th scope="col">uid</th>
        <th scope="col">firstName</th>
        <th scope="col">lastName</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      
        {
        
        Appointments.map((Appointment) => {
            return (
              <tr>
                <td>{Appointment.app_id}</td>
                <td>{Appointment.date}</td>
                <td>{Appointment.notes}</td>
                <td>{Appointment.time}</td>
                <td>{Appointment.usertable.uid}</td>
                <td>{Appointment.usertable.firstname}</td>
                <td>{Appointment.usertable.lastname}</td>
                <td>{Appointment.status}</td>

                    <td>
                    <button className='btn btn-outline-primary' onClick={()=> {
                      setDataToTotalStorage(Appointment.app_id, Appointment.date, Appointment.notes, Appointment.time, Appointment.usertable.firstname, Appointment.usertable.lastname, Appointment.usertable.uid);
                    if (Appointment.status !== 'completed') {
                      navigate('/Examinationpage');
                    }

                    }}disabled={Appointment.status === 'completed'}>Attend </button>
                   </td>
                   
                    
                     <td>
                     <button className='btn btn-outline-primary' onClick={()=> {
                     setDataToTotalStorage(Appointment.app_id,Appointment.date,Appointment.notes,Appointment.time,Appointment.usertable.firstname,Appointment.usertable.lastname,Appointment.usertable.uid)
                     if (Appointment.status !== 'completed') {
                      navigate('/AppointmentReshedulepage');
                    }
                     }}disabled={Appointment.status === 'completed'}>Reschedule </button>
                    </td>
              </tr>
            )
          })
        }

     
    </tbody>
  </table>

</div>
</div>
    </>
  )
}
