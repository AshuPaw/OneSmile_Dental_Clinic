
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function UserAppointments() {
    //  const uid = window.localStorage.getItem("setuser");
    //  console.log(uid);

    const uid=Cookies.get("usersetid");
    console.log(uid);
    
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if(Cookies.get("userlogin")==null) {
            navigate("/loginpage");
          }
        axios
            .get("http://localhost:8087/appointments/getallappointments")
            .then((response) => {
                console.log(response.data);
                setAppointments(response.data); // Set fetched data to state
            })
            .catch((error) => {
                console.error("Error fetching appointments:", error);
            });
           
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
        <div className="container mt-3">
            <h3>Appointment Details</h3>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Appointment Id</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Action</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((ex) => {
                            if (ex.usertable.uid == uid) {
                                return (
                                    <tr>
                                        <td>{ex.app_id}</td>
                                        <td>{ex.date}</td>
                                        <td>{ex.time}</td>
                                        <td>{ex.notes}</td>
                                        <td>{ex.status}</td>
                                        <button className='btn btn-outline-primary' onClick={()=> {
                                            setDataToTotalStorage(ex.app_id);
                                                if (ex.status !== 'completed') {
                                                 navigate('/UserReschedulepage');
                                                   }
                                                 }}disabled={ex.status === 'completed'}>Reschedule </button>
                                       
                                    </tr>
                                );
                            } else {
                                return null; // If uid doesn't match, render nothing
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}