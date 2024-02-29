import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Examinationdetails() {
  const [examinations, setexamination] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if(Cookies.get("Adminlog")==null) {
      navigate("/loginpage");
    }

    axios
      .get("http://localhost:8087/examinations/allexamination")
      .then((response) => {
        console.log(response.data);
        setexamination(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
          <div className="container" style={{ paddingTop:'10px',fontFamily: 'Roboto Sans-Serif', color: '#2c54a2' }}>
      <h2 style={{textAlign:'center'}}><b>Examination Details</b></h2>
        <div className="row">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">EID</th>
                <th scope="col">APPID</th>
                <th scope="col">TREATMENT NAME</th>
                <th scope="col">TREATMENT NOTES</th>
                <th scope="col">USERNAME</th>
                <th scope="col">FIRST NAME</th>
                <th scope="col">LAST NAME</th>
                <th scope="col">CHARGES</th>
              </tr>
            </thead>
            <tbody>
              {examinations.map((ex) => {
                return (
                  <tr>
                    <td>{ex.eid}</td>
                    <td>{ex.appointments.app_id}</td>
                    <td>{ex.treatment_name}</td>
                    <td>{ex.treatment_notes}</td>
                    <td>{ex.appointments.usertable.uname}</td>
                    <td>{ex.appointments.usertable.firstname}</td>
                    <td>{ex.appointments.usertable.lastname}</td>
                    <td>{ex.charges}</td>
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
