import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
export default function DoctorMedicine() {
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');

    const [store, setstore] = useState([]);
    const [requisition, setrequisition] = useState([]);

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setSelectedQuantity(event.target.value);
    };

    useEffect(() => {

        
            if(Cookies.get("Doctorlog")==null) {
              navigate("/loginpage");
            }
        
         
        // Fetch medicine inventory data
        axios.get("http://localhost:8087/store/allstore")
            .then((response) => {
                console.log('Medicine Inventory Response:', response.data);
                setstore(response.data);
            })
            .catch((error) => {
                console.error('Error fetching medicine inventory:', error);
            });

        // Fetch requisition data
        axios.get("http://localhost:8087/Requisition/allreq")
            .then((response) => {
                setrequisition(response.data);
            })
            .catch((error) => {
                console.error('Error fetching requisition data:', error);
            });
    }, []);

    const handleRequisitionSubmit = () => {

        axios.post("http://localhost:8087/Requisition/addreq", {
            store:{productId:selectedProduct},
            quantity:selectedQuantity
    

    }).then(response => {
        console.log(response.data);
        
        alert("product added successfully");
        window.location.reload();
        
    }).catch((error) => {
        console.log(error);
    });
        
        
        
    };

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="d-flex flex-wrap">
                    <div className="col-lg-4">
                        <h2>Medicine Inventory</h2>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">PRODUCT ID</th>
                                        <th scope="col">PRODUCT NAME</th>
                                        <th scope="col">QUANTITY</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {store.map((product) => (
                                        <tr>
                                            <td>{product.productId}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* -------------------------------------------------------------------------------- */}
                    <div className="col-lg-4">
                        <div className="container ">
                            <h2 className='abc mb-4'>Requisition Form</h2>
                            <div className="mb-3 d-flex align-items-center">
                                <label htmlFor="productSelect" className="form-label me-3"> Product:</label>
                                <select
                                    className="form-select"
                                    id="productSelect"
                                    value={selectedProduct}
                                    onChange={handleProductChange}
                                >
                                    <option value="">Select a product</option>
                                    <option value="1">Aspirin</option>
                                    <option value="2">Morphine</option>
                                    <option value="3">Tetracaine</option>
                                    <option value="4">Amoxicillin</option>
                                    <option value="5 ">Penicillin V</option>
                                    <option value="6">Nystatin</option>
                                    <option value="7">Acyclovir</option>
                                    <option value="8">Desflurane</option>
                                    <option value="9">Diazepam</option>
                                    <option value="10">Cefazolin</option>
                                </select>
                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                <label htmlFor="quantitySelect" className="form-label me-3"> Quantity:</label>
                                <select
                                    className="form-select"
                                    id="quantitySelect"
                                    value={selectedQuantity}
                                    onChange={handleQuantityChange}
                                >
                                    <option value="">Select Quantity</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button className='btn btn-primary' onClick={handleRequisitionSubmit}>
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ms-">
                        <h2>Requisition Table</h2>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">REQUEST ID</th>
                                        <th scope="col">PRODUCT NAME</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">STATUS</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {requisition.map((req) => (
                                        <tr>
                                            <td>{req.reqId}</td>
                                            <td>{req.store.productName}</td>
                                            <td>{req.quantity}</td>
                                            <td>{req.status}</td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}