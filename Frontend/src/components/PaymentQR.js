import React, { useEffect } from "react";
import qrimg from "../components/images/paymentqr.jpeg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function PaymentQR() {
  const navigate = useNavigate();
  useEffect(() =>{

    if(Cookies.get("userlogin")==null) {
      navigate("/loginpage");
    }
  })
  return (
    <>
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "#dd4b39" }}
            >
            <img src={qrimg}></img>

            <h2 className="text-center mt-2" >Amount Payable: &#8377;{sessionStorage.getItem("paymentcharges")}</h2>
            
                
             {/* <div className="card-body p-5 text-center"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
