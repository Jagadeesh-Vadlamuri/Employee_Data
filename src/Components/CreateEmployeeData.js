import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import "./Popup.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const CreateEmployeeData = () => {
    const URL = "http://localhost:5000";
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      age: "",
      designation: ""
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${URL}/createDetail`, values).then((res) => {
          console.log(res.data);
        });
        values.name = "";
        values.location = "";
        values.age = "";
        values.designation = "";
    
        togglePopup();
      } catch (err) {
        console.log(err);
      }
    },
    validate: (values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "Name is Required";
        }
        if (!values.location) {
          errors.location = "Location is Required";
        }
        if (!values.age) {
          errors.age = "Age is Required";
        }
        if (!values.designation) {
          errors.designation = "Designation is Required";
        }
        return errors;
      }
  });
  return (
    <div className="container">
      <h1 className="text-center" style={{color: 'black', padding: '5px', margin: 5}}>Create User details</h1>
      <div className="d-flex justify-content-between align-items-start" style={{marginTop: 20}}>
          <p style={{backgroundColor: 'white', color: 'white'}}>..........</p>
        <form onSubmit={formik.handleSubmit} style={{border: '1px solid black', borderRadius: '20px', padding: '20px'}}>
          <div className="row g-3 align-items-center mt-2">
            <div className="col-auto">
              <label htmlFor="name" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Name</b>
              </label>
              <input
                type="text"
                id="name"
                className="form-control border-dark"
                placeholder="Enter your name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name ? (
                    <div style={{ color: "white" }}>{formik.errors.name}</div>
                  ) : null}
            </div>
            <div className="col-auto">
              <label htmlFor="location" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Location</b>
              </label>
              <input
                type="text"
                id="location"
                className="form-control border-dark"
                placeholder="Enter your location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
              {formik.errors.location ? (
                    <div style={{ color: "white" }}>{formik.errors.location}</div>
                  ) : null}
            </div>
          </div>

          <div className="row g-3 align-items-center mt-2">
            <div className="col-auto">
              <label htmlFor="age" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Age</b>
              </label>
              <input
                type="text"
                id="age"
                className="form-control border-dark"
                placeholder="Enter your age"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
              {formik.errors.age ? (
                    <div style={{ color: "white" }}>{formik.errors.age}</div>
                  ) : null}
            </div>
            <div className="col-auto">
              <label htmlFor="designation" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Designation</b>
              </label>
              <input
                type="text"
                id="designation"
                className="form-control border-dark"
                placeholder="Enter your designation"
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
              />
              {formik.errors.designation ? (
                    <div style={{ color: "white" }}>{formik.errors.designation}</div>
                  ) : null}
            </div>
          </div>
          
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <button className="btn btn-dark text-light">Submit</button>
            {/* <Link
              to="/censusData"
              className="btn btn-light my-3"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Census Details
            </Link> */}
          </div>
          {isOpen && (
            <Popup
              style={{ width: 30, height: 20 }}
              content={
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <h2 className="text-dark">
                    <b>Details have been created</b>{" "}
                    <DoneOutlineIcon style={{ fontSize: 60, color: "black" }} />
                  </h2>
                  <div className="mt-3">
                    <button
                      className="btn btn-dark mt-4"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Close
                    </button>
                    <Link
                      to="/getDetails"
                      className="btn btn-light mt-4 mx-2"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Employee Details
                    </Link>
                  </div>
                </div>
              }
            />
          )}
        </form>
        <Link to="/getDetails" className="btn btn-light" style={{backgroundColor: 'black', color: 'white'}}>Employee Details</Link>
      </div>
    </div>
  );
};

export default CreateEmployeeData;