
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function EnquiryDetails() {
    const [enquiries, setEnquiries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(Cookies.get("Adminlog")==null) {
            navigate("/loginpage");
          }
        axios.get("http://localhost:8087/Enquiry/allEnquire")
            .then((response) => {
                console.log(response.data);
                setEnquiries(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const handleAction = (enqid, newStatus) => {
        axios.put(`http://localhost:8087/Enquiry/updateEnquiry/${enqid}`, {
            status: newStatus
        })
            .then((response) => {
                alert("Completed Enquiry");
                console.log(response.data);
                const updatedEnquiries = enquiries.map(enquiry => {
                    if (enquiry.enqid === enqid) {
                        return { ...enquiry, status: newStatus };
                    }
                    return enquiry;
                });
                setEnquiries(updatedEnquiries);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-3 mb-3" style={{ paddingTop:'10px',fontFamily: 'Roboto Sans-Serif', color: '#2c54a2' }}>
            <h2 style={{textAlign:'center'}}><b>Enquiry Details</b></h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Enquiry Id</th>
                        <th scope="col">Note</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile No</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {enquiries.map((enquiry) => (
                        <tr key={enquiry.enqid}>
                            <td>{enquiry.enqid}</td>
                            <td>{enquiry.message}</td>
                            <td>{enquiry.name}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.mobile_no}</td>
                            <td>{enquiry.status}</td>
                            <td>
                                {enquiry.status === 'Pending' ? (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleAction(enquiry.enqid, 'Completed')}
                                    >
                                        Attend
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary"
                                        disabled
                                    >
                                        Attend
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}