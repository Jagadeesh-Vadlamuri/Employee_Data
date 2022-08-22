import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CensusData from "./Components/EmployeeData";
import CreateCensusData from "./Components/CreateEmployeeData";
import Home from "./Components/Home";
import { useFormik } from "formik";
import EditCensusData from "./Components/EditEmployeeData";

import Navbar from "./Components/Navbar";

const App = () => {
  const URL = "http://localhost:5000";
  const [details, setDetails] = useState([
    {
      fname: "",
      lname: "",
      email: "",
      password: "",
    },
  ]);
  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      age: "",
      designation: ""
    },
  });
  return (
    <BrowserRouter>
      <Navbar details={details} setDetails={setDetails} />
      <Routes>
        <Route
          path="/"
          element={<Home details={details} setDetails={setDetails} />}
        />
        <Route
          path="/createDetail"
          element={
            <CreateCensusData
              details={details}
              setDetails={setDetails}
              formik={formik}
            />
          }
        />
        <Route
          path="/getDetails"
          element={
            <CensusData
              details={details}
              setDetails={setDetails}
              formik={formik}
            />
          }
        />
        <Route
          path="/updateDetail"
          element={
            <EditCensusData
              details={details}
              setDetails={setDetails}
              formik={formik}
            />
          }
        />
        {/* <Route
          path="/signUp"
          element={<Signup details={details} setDetails={setDetails} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;