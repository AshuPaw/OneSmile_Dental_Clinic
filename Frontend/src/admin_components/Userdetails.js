import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Userdetails() {
  const [users, setuser] = useState([]);
  const navigate = useNavigate();
  const apiUrl = "http://localhost:8087/user";
  useEffect(() => {
    if (Cookies.get("Adminlog") == null) {
      navigate("/loginpage");
    }
    axios
      .get(`${apiUrl}/alluser`)
      .then((response) => {
        console.log(response.data);
        setuser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onDelete = (uid) => {
    // Make a DELETE request to your API endpoint to delete the user with the given UID
    axios.delete(`${apiUrl}/deleteUser/${uid}`)
      .then((response) => {
        // Update the state to reflect the changes
        setuser(users.filter(user => user.uid !== uid));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const columnDefs = ["uid",
    "firstname",
    "lastname",
    "uname",
    "email",
    "mobileno",
    "role",
  ]
  return (
    <>
    <div className='container' style={{ paddingTop: '10px', fontFamily: 'Roboto Sans-Serif', color: '#2c54a2' }}>
        <h2 style={{ textAlign: 'center' }}><b>User Details</b></h2>
        <div className="row">
          <table class="table table-striped">
            <thead>
              <tr>
              {columnDefs.map((item)=>(
                    
                <th scope="col" style={{textTransform:'capitalize'}}>{item}</th>
                    ))}
                    <th scope="col">ACTION</th>
                {/* <th scope="col">UID</th>
                <th scope="col">FIRSTNAME</th>
                <th scope="col">LASTNAME</th>
                <th scope="col">UNAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">MOBILENO</th>
                <th scope="col">PASSWORD</th>
                <th scope="col">ROLE</th>
                <th scope="col">ACTION</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    {columnDefs.map((item)=>(
                    <td>{user[item]}</td>
                    ))}
                    {/* <td>{user.uid}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.uname}</td>
                    <td>{user.email}</td>
                    <td>{user.mobileno}</td>
                    <td>{user.password}</td>
                    <td>{user.role}</td> */}
                    <td className={user.role=='admin' && 'notAllowed'}>
                      <button
                      className="btn btn-danger"
                        onClick={() => onDelete(user.uid)}
                       disabled={user.role=='admin'}
                      >
                        Delete
                      </button>
                    </td>
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
