import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Show_feedback() {
  const [getfeedback, setfeedback] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("Adminlog") == null) {
      navigate("/loginpage");
    }
    axios
      .get("http://localhost:8087/feedback/allfeedback")
      .then((response) => {
        console.log(response.data);
        setfeedback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
          <div className='container' style={{ paddingTop: '10px', fontFamily: 'Roboto Sans-Serif', color: '#2c54a2' }}>

        <h2 style={{textAlign:"center"}}><b>Feedback Details</b></h2>
        <div className="row">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">FEEDBACK ID</th>
                <th scope="col">FEEDBACK RATING</th>
                <th scope="col">FEEDBACK MESSAGE</th>
                <th scope="col">USERID</th>
                <th scope="col">FIRSTNAME</th>
                <th scope="col">LASTNAME</th>
              </tr>
            </thead>
            <tbody>
              {getfeedback.map((feed) => {
                return (
                  <tr>
                    <td>{feed.fid}</td>
                    <td>{feed.ratings}</td>
                    <td>{feed.message}</td>
                    <td>{feed.usertable.uid}</td>
                    <td>{feed.usertable.firstname}</td>
                    <td>{feed.usertable.lastname}</td>
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
