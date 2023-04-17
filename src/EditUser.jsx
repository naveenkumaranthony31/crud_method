import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "./config";

function EditUser() {
  const params=useParams()
  const navigate=useNavigate()
    const formik = useFormik({
      initialValues: {
       name: "",
        position: "",
        office: "",
       age: "",
        startdate: "",
        salary: "",
      },
  
      validate: (values) => {
        let errors = {};
        if (values.name === "") {
          errors.name = "Please enter username";
        } 
        if (values.name.length<5){ 
          errors.name = "Please enter greater than 5";
        }
  
        if (values.Position === "") {
          errors.Position = "Please enter position";
        }
  
        return errors;
      },
  
      onSubmit: async(values) => {
       await axios.put(`${config.api}/users/${params.id}`,values)
      navigate("/portal/users")
      },
    });

useEffect(()=>{
  loadUser()
},[])

let loadUser=async()=>{
  try {
   let user= await axios.get(`http://localhost:3001/users/${params.id}`)
formik.setValues({
  name: user.data.name,
  position: user.data.position,
  office:user.data.office,
  age:user.data.age,
  startdate:user.data.startdate,
  salary: user.data.salary,
},

)
  } catch (error) {
    
  }
}


    return (
      <>
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label>Name</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                />
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              </div>
              <div className="col-lg-6">
                <label>Position</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.position}
                  onChange={formik.handleChange}
                  name="position"
                />
                <span style={{ color: "red" }}>{formik.errors.position}</span>
              </div>
              <div className="col-lg-6">
                <label>Office</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.office}
                  onChange={formik.handleChange}
                  name="office"
                />
              </div>
              <div className="col-lg-6">
                <label>Age</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  name="age"
                />
              </div>
              <div className="col-lg-6">
                <label>Start date</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.startdate}
                  onChange={formik.handleChange}
                  name="startdate"
                />
              </div>
              <div className="col-lg-6">
                <label>Salary</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.salary}
                  onChange={formik.handleChange}
                  name="salary"
                />
              </div>
              <div className="col-lg-6">
                <input
                  className="btn btn-primary mt-2 "
                  type={"Submit"}
                  value="Submit"
                  disabled={!formik.isValid}
                />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

export default EditUser;