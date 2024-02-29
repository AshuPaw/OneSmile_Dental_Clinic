import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
export default function Payments() {
  const [payments, setpayments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if(Cookies.get("userlogin")==null) {
      navigate("/loginpage");
    }
    axios
      .get("http://localhost:8087/payments/getallpayments")
      .then((response) => {
        console.log(response.data);
        setpayments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1>Payments Details</h1>
        <div className="row">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">PAY ID</th> {/* FROM  PAYMENT TABLE ENTITY */}
                <th scope="col">UID</th>
                {/* //  FROM USERTABLE */}
                <th scope="col">EID</th>
                {/* //  FROM EXAMINATIONTABLE */}
                <th scope="col">CHARGES</th> 
                {/* // FROM PAYMENT TABLE ENTITY */}
                <th scope="col">STATUS</th>
                {/* // FROM  PAYMENT TABLE ENTITY */}
                <th scope="col">DATE</th>
                {/* // FROM EXAMINATION */}
              </tr>
            </thead>
            <tbody>
              {payments.map((pay) => {
                return (
                  <tr>
                    <td>{pay.payid}</td>
                    <td>{pay.usertable.uid}</td>
                    <td>{pay.examinations.eid}</td>
                    <td>{pay.examinations.charges}</td>
                    <td>{pay.status}</td>
                    <td>{pay.date}</td>
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