import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Popup from "./Popup";
import "./Popup.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const EditEmployeeData = ({formik}) => {
    const URL = "http://localhost:5000";
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const bad = async() => {
        try{
           await axios.put(`${URL}/updateDetail/${formik.values._id}`, formik.values).then((res)=>{
            console.log(res.data)
          })
          togglePopup()
          
        } catch(err){
          console.log(err)
        }
      }

    const handleUpdate = (e) => {
        e.preventDefault();
        bad();
        formik.values.name= ""
        formik.values.location = ""
        formik.values.age = ""
        formik.values.designation= ""
        
    }
  return (
    <div className="container">
      <h1 className="text-center" style={{borderRadius:'1px', color: 'black', padding: '5px', margin: 5}}>Update User details</h1>
      <div className="d-flex justify-content-between align-items-start" style={{marginTop: 20}}>
      <p style={{backgroundColor: 'white', color: 'white'}}>..........</p>
        <form onSubmit={formik.handleSubmit} style={{border: '5px solid black', borderRadius: '20px', padding: '20px'}}>
          <div className="row g-3 align-items-center mt-2">
            <div className="col-auto">
              <label htmlFor="name" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Name</b>
              </label>
              <input
                type="text"
                id="name"
                className="form-control border-primary"
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
              <label htmlFor="age" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Location</b>
              </label>
              <input
                type="text"
                id="location"
                className="form-control border-primary"
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
                className="form-control border-primary"
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
                className="form-control border-primary"
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
            <button className="btn btn-dark text-light" onClick={(e)=>handleUpdate(e)}>Update</button>
           
          </div>
          {isOpen && (
            <Popup
              style={{ width: 30, height: 20 }}
              content={
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <h2 className="text-dark">
                    <b>Details have been updated</b>{" "}
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
  )
}

export default EditEmployeeData;