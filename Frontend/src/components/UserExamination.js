
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
export default function UserExamination() {
  const navigate=useNavigate();
  const [exam, setExaminations] = useState([]);
  const uid=Cookies.get("usersetid");
    console.log(uid);

  useEffect(() => {
    if(Cookies.get("userlogin")==null) {
      navigate("/loginpage");
    }
    axios
      .get("http://localhost:8087/examinations/allexamination")
      .then((response) => {
        console.log(response.data);
        setExaminations(response.data); // Set fetched data to state
      })
      .catch((error) => {
        console.error("Error fetching examinations:", error);
      });

    console.log(exam);
  }, []);

  return (
    <div className="container mt-3">
      <h3>Examinations Details</h3>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">EID</th>
              <th scope="col">TREATMENT NAME</th>
              <th scope="col">TREATMENT NOTES</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            {exam.map((ex) => {
              if (ex.appointments.usertable.uid == uid) {
                return (
                  <tr>
                    <td>{ex.eid}</td>
                    <td>{ex.treatment_name}</td>
                    <td>{ex.treatment_notes}</td>
                    <td>{ex.appointments.usertable.firstname}</td>
                    <td>{ex.appointments.usertable.lastname}</td>
                    <td>{ex.charges}</td>
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