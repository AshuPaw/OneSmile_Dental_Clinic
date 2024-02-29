import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function AllPayments() {
  const navigate = useNavigate();
  const [payments, setpayments] = useState([]);

  useEffect(() => {
    if(Cookies.get("Adminlog")==null) {
      navigate("/loginpage");
    }

    axios
      .get("http://localhost:8087/payments/allpayments")
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
        <div className="container" style={{ paddingTop:'10px',fontFamily: 'Roboto Sans-Serif' }}>
        <h2 style={{textAlign:'center', color: '#2c54a2'}}><b>Payment Details</b></h2>
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
                    <td>{pay.paymentId}</td>
                    <td>{pay.examinations.appointments.usertable.uid}</td>
                    <td>{pay.examinations.eid}</td>
                    <td>{pay.examinations.charges}</td>
                    <td>{pay.payStatus}</td>
                    <td>{pay.examinations.appointments.date}</td>
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