import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "./config";
function Create() {
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
        errors.Name = "Please enter username";
      }
      if (values.name.length < 5) {
        errors.Name = "Please enter greater than 5";
      }

      if (values.position === "") {
        errors.Position = "Please enter position";
      }

      return errors;
    },

    onSubmit: async (values) => {
    let user = await axios.post(`${config.api}/userspost`,values)
      navigate("/portal/users")
    },
  });
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
                value={formik.values.Name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.Name}</span>
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
export default Create;
