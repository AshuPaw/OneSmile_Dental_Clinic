import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function AdminMedicalStore() {
  const [store, setstore] = useState([]);
  const [requisition, setrequisition] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if(Cookies.get("Adminlog")==null) {
      navigate("/loginpage");
    }
    axios
      .get("http://localhost:8087/store/allstore")
      .then((response) => {
        console.log(response.data);
        setstore(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8087/Requisition/allreq")
      .then((response) => {
        console.log(response.data);
        setrequisition(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updatestatus = (id,quantity,productid,storedata) => {
    alert("hi" + id);

    console.log(quantity);
    console.log(productid);
    console.log(storedata);

    var updatedqnt=storedata.quantity+quantity;
    console.log(updatedqnt);
    axios
      .put("http://localhost:8087/Requisition/updatereq/" + id, {
        status: "completed",
         Store:storedata,
        quantity:updatedqnt
      })
      .then((response) => {
        alert("requisition updated");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container mt-3" style={{ paddingTop:'10px',fontFamily: 'Roboto Sans-Serif', color: '#2c54a2' }}>
        <div className="row">
          <div className="d-flex flex-wrap">
            <div className="col-lg-6">
              <h2 style={{textAlign:'center'}}><b>Medicine Inventory</b></h2>
              <div className="table-responsive me-5">
                <table className="table mt-1">
                  <thead>
                    <tr>
                      <th scope="col">PRODUCT ID</th>
                      <th scope="col">PRODUCT NAME</th>
                      <th scope="col">QUANTITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.map((product) => {
                      return (
                        <tr>
                          <td>{product.productId}</td>
                          <td>{product.productName}</td>
                          <td>{product.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex">
              <div className="vr"></div>
            </div>
            <div className="col-lg-5 ms-5">
              <h2 style={{textAlign:'center'}}><b>Requisition Table</b></h2>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">REQ ID</th>
                      <th scope="col">PRODUCT NAME</th>
                      <th scope="col">QUANTITY</th>
                      <th scope="col">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requisition.map((req) => {
                      return (
                        <tr>
                          <td>{req.reqId}</td>
                          <td>{req.store.productName}</td>
                          <td>{req.quantity}</td>
                          <td>{req.status}</td>
                          <td style={{display:"none"}} >{req.store.productId}</td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-primary  "
                              onClick={() => {
                                if (req.status !== "completed") {
                                  updatestatus(req.reqId,req.quantity,req.store.productId,req.store);
                                }
                              }}
                              disabled={req.status === "completed"}
                            >
                              Accept
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
