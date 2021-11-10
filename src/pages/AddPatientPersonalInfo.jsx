import "./AddPatient.css";
import React, { useState } from "react";

import Axios from "axios";
export default function AddPatientPersonalInfo(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");
  const [address, setAddress] = useState("");
  const [bloodType, setBloodType] = useState("");

  const { history } = props;

  const Next = () => {
    Axios.post("http://localhost:3003/api/PatientPersonalInfo/insert", {
      name: name,
      gender: gender,
      dateofBirth: dateofBirth,
      address: address,
      bloodType: bloodType,
    }).then((response) => {
      history.push(`/AddPatientCheckupData/${response.data.insertId}`);
    });
  };
  return (
    <>
      <div className="AddPatient">
        <div className="main-container">
          <div className="header-container">
            <h1>Patient Personal Information</h1>
          </div>
          <div className="form-container">
            <div className="form-item">
              <label>Name</label>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <label>Gender</label>
              <input
                type="text"
                placeholder="Specify gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Date of Birth</label>
                <input
                  type="date"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setdateofBirth(e.target.value);
                  }}
                />
              </div>

              <div className="form-item">
                <label>Blood Type</label>
                <input
                  type="text"
                  placeholder="Specify Blood Type"
                  onChange={(e) => {
                    setBloodType(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-item">
              <label>Address</label>
              <input
                type="text"
                placeholder="House number, street, city"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="btn-container">
            <button
              onClick={() => {
                Next();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
