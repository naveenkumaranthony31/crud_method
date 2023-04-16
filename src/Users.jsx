import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);
  let loadData = async () => {
    setLoading(true)
    let user = await axios.get(
      "http://localhost:3001/users"
    );

    setUser(user.data);
    setLoading(false)
  };

  let userDelete=async(id) =>{
    try {
      await axios.delete(`http://localhost:3001/users/${id}`)
      loadData()
      window.alert("userDelete");
    } catch (error) {
      
    }
  }

  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/portal/Create"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create user
        </Link>
      </div>
{
  isLoading?<span>Loading...</span>: <div class="card shadow mb-4">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table
        class="table table-bordered"
        id="dataTable"
        width="100%"
        cellspacing="0"
      >
        <thead>
          <tr>
            <th>#Sl</th>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>age</th>
            <th>Start date</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
     
        <tbody>
          {user.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.position}</td>
                <td>{user.office}</td>
                <td>{user.age}</td>
                <td>{user.startdate}</td>
                <td>${user.salary}</td>
                <td>
                  <Link
                    to={`/portal/users/${user._id}`}
                    className="btn btn-sm btn-warning mr-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/portal/users/EditUser/${user._id}`}
                    className="btn btn-sm btn-primary mr-2 "
                  >
                    Edit
                  </Link>
                  <button onClick={()=>userDelete(user._id)} className="btn btn-sm btn-danger mt-2">
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
</div>
}
     
    </div>
  );
}
export default User;