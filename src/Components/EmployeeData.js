import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Popup2 from "./Popup2";
import "./Popup2.css";
import DeleteIcon from '@mui/icons-material/Delete';

const EmployeeData = ({ formik, details, setDetails }) => {
    const URL = "http://localhost:5000";
  // const [details, setDetails] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios.get(`${URL}/getDetails`).then(
      (res) => {
        setDetails(res.data);
      },
      [timer]
    );
  });

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/deleteDetail/${id}`).then((res) => {
      console.log(res.data);
      setTimer(timer + 1);
      togglePopup()
    });
  };

  const handleEdit = async (id) => {
    await axios.get(`${URL}/getDetail/${id}`).then((res) => {
      formik.setValues(res.data);
    });
  };

  return (
    <div className="container-fluid">
      {/* <div
        className="navbar d-flex justify-content-around align-items-center"
        style={{
          border: "1px solid black",
          padding: "15px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Link to="/" className="btn btn-warning">
          Home
        </Link>
        <h2>
          <b>CENSUS DATA</b>
        </h2>
        <Link to="/createCensusData" className="btn btn-warning">
          Create User
        </Link>
      </div> */}

      <table className="table table-bordered table-striped table-hover my-4" >
        <thead className="bg-dark text-light">
          <tr className="text-center">
            <th>Name</th>
            <th>Location</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Modification</th>
          </tr>
        </thead>

        <tbody>
          {details.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <div className="d-flex justify-content-center align-items-center">
                  <Link
                    onClick={() => handleEdit(item._id)}
                    className="btn btn-success"
                    to="/updateDetail"
                  >
                    Edit
                  </Link>
                  <td
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger mx-2"
                  >
                    Delete
                  </td>
                </div>
              </tr>
            );
          })}
        </tbody>
        {isOpen && (
            <Popup2
              style={{ width: 40, height: 50 }}
              content={
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <h2 className="text-dark">
                    <b>User has been deleted</b>{" "}
                    <DeleteIcon style={{ fontSize: 35, color: "red" }} />
                  </h2>
                  <div className="mt-3">
                    <button
                      className="btn btn-dark mt-4"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Close
                    </button>
                    
                  </div>
                </div>
              }
            />
          )}
      </table>
    </div>
  );
};

export default EmployeeData;