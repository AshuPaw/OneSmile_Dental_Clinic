import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Examination() {

  const[getpendingpay,setpendingpay]=useState('');
    
  useEffect(() => {
    if(Cookies.get("Doctorlog")==null) {
      navigate("/loginpage");
    }

    axios
      .get("http://localhost:8087/examinations/pendingcharges/"+pendingpayuid)
      .then((response) => {
        console.log(response.data);
        setpendingpay(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const [examinationCharges, setExaminationCharges] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [selectedProductid, setSelectedProduct] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");

  var firstName = localStorage.getItem("firstName");
  var lastName = localStorage.getItem("lastName");
  var app_id = localStorage.getItem("appid");
 
  const [Tname, settname] = useState("OTHER");
  var Tnotes = useRef();

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    console.log(firstName);
    console.log(lastName);
    console.log(app_id);
    console.log(Tnotes.current.value);
    console.log(examinationCharges);
    console.log(Tname);

    axios
      .post("http://localhost:8087/examinations/addexamination", {
        treatment_name: Tname,
        treatment_notes: Tnotes.current.value,
        charges: examinationCharges,
        appointments: { app_id: app_id },
        paymentstatus:selectedOption
      })
      .then((response) => {
        
        console.log(response.data);
      
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(selectedProductid);
    console.log(selectedQuantity);

    handlestore();
  };
 
  const handlestore = () => {
    axios
      .put("http://localhost:8087/store/updateqnt/" + selectedProductid, {
        quantity: selectedQuantity,
      })
      .then((response) => {
        alert("medicine updated");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/Dappointmnetspage");
  };


  const [selectedOption, setSelectedOption] = useState("pending")  
  function onValueChange(event){
   
    setSelectedOption(event.target.value)
    console.log(event.target.value);
     }
  var pendingpayuid=localStorage.getItem("userid");


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div class="row mt-3">
            <div class="col-6">
              <div className="td1">
                <div className="lbl">
                  First Name : <span className="red">*</span>
                </div>
              </div>

              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  value={localStorage.getItem("firstName")}
                  readOnly={true}
                />
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Treatment : <span className="red">*</span>
                </div>
              </div>
              <div className="td1" style={{ width: "85%" }}>
                <select
                  class="form-select "
                  aria-label="Default select example"
                  onChange={(event) => settname(event.target.value)}
                >
                  <option selected>Select Treatment</option>
                  <option value="Dental Impalts">Dental Implants</option>
                  <option value="Root Canal">Root Canal Theraphy</option>
                  <option value="Kids dentistry">Kids dentistry</option>
                  <option value="Gums Theraphy">Gums Theraphy</option>
                </select>
              </div>

              <div className="td1 mt-3">
                <label htmlFor="productSelect" className="form-label">
                  {" "}
                  Product:
                </label>
                <select
                  className="form-select w-auto"
                  id="productSelect"
                  value={selectedProductid}
                  onChange={handleProductChange}
                >
                  <option value="">Select a product</option>
                  <option value="1">Aspirin</option>
                  <option value="2">Morphine</option>
                  <option value="3">Tetracaine</option>
                  <option value="4">Amoxicillin</option>
                  <option value="5">Penicillin V</option>
                  <option value="6">Nystatin</option>
                  <option value="7">Acyclovir</option>
                  <option value="8">Desflurane</option>
                  <option value="9">Diazepam</option>
                  <option value="10">Cefazolin</option>
                </select>
              </div>
              <div className="td1 mt-3">
                <label htmlFor="quantitySelect" className="form-label me-3">
                  {" "}
                  Quantity:
                </label>
                <select
                  className="form-select w-auto"
                  id="quantitySelect"
                  value={selectedQuantity}
                  onChange={handleQuantityChange}
                >
                  <option value="">Select Quantity</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Examination Charges : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  onChange={(e) => setExaminationCharges(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div className="td1">
                <div className="lbl">
                  Last Name : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  className="input_fd"
                  style={{ width: "85%" }}
                  value={lastName}
                  readOnly={true}
                />
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Application Id : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  value={app_id}
                  readOnly={true}
                />
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Treatment Notes : <span className="red">*</span>
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  style={{ width: "85%", height: "150%" }}
                  className="form-control"
                  id="floatingTextarea"
                  ref={Tnotes}
                  required
                ></textarea>
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="completed"
                  onChange={onValueChange}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Payment Completed
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={selectedOption === "pending"}
                  value="pending"
                  onChange={onValueChange}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Payment Pending
                </label>
                </div>
                <div className="td1 mt-3">
                <div className="lb1">
                  
                  Pending Charges : <span className="red">*</span>
                </div>
              
              <div className="td1">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  value={getpendingpay}
                  readOnly
                />
              </div>
                

                
              </div>
            </div>
          </div>
          <div class="text-center mt-5 me-5 pe-5 ">
            <button type="submit" class="btn btn-success btn-w-5">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
