import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Appointmentsdetails() {
  const [appointments, setappointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(Cookies.get("Adminlog")==null) {
      navigate("/loginpage");
    }
    axios
      .get("http://localhost:8087/appointments/getallappointments")
      .then((response) => {
        console.log(response.data);
        setappointments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container" style={{ paddingTop:'10px',fontFamily: 'Roboto Sans-Serif', color: '#2c54a2' }}>
      <h2 style={{textAlign:'center'}}><b>Appointment Details</b></h2>
        <div className="row">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">APP ID</th>
                <th scope="col">DATE</th>
                <th scope="col">APPOINTMENTS NOTES</th>
                <th scope="col">STATUS</th>
                <th scope="col">TIME</th>
                <th scope="col">UID</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((app) => {
                return (
                  <tr>
                    <td>{app.app_id}</td>
                    <td>{app.date}</td>
                    <td>{app.notes}</td>
                    <td>{app.status}</td>
                    <td>{app.time}</td>
                    <td>{app.usertable.uid}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

