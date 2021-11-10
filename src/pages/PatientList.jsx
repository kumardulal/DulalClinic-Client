import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./PatientList.css";
import { Link } from "react-router-dom";
import Colors from "../components/Colors";

export default function PatientList() {
  const [historyList, sethistoryList] = useState([]);
  const [historySearchList, setHistorySearchList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/api/get/HistoryList").then((response) => {
      sethistoryList(response.data);
    });
  }, []);

  const deleteHistory = (id) => {
    Axios.delete(`http://localhost:3003/api/delete/${id}`).then((response) => {
      if (response != null) {
        console.log("deleted");
        window.location.reload();
      } else {
        console.log("cannot delete");
      }
    });
  };

  const search = (searchText) => {
    let matches = historyList.filter((val) => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return val.name.match(regex) || val.address.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
      setHistorySearchList([]);
    }
    setHistorySearchList(matches);
  };
  return (
    <>
      <div className="patientlist-main-container">
        <div style={{ width: "240px" }}></div>
        <div style={{ width: "100%" }}>
          <div className="header-container">
            <h1>Patient List</h1>
          </div>
          {/* ***************HEre is Search container that i want to see after search************ */}

          <div className="search-container">
            <input
              style={{ textAlign: "center" }}
              type="text"
              placeholder="Search patient"
              onChange={(event) => {
                search(event.target.value);
              }}
            />

            {historySearchList.map((val) => {
              return (
                <div className="search-result-item" key={val.id}>
                  <div className="search-result-card">
                    <div className="id-container">ID: {val.id}</div>
                    <div className="name-container">Name: {val.name}</div>
                    <div className="dob-container">
                      <label>Date Of Birth: </label>
                      {val.dateofBirth}
                      <p> </p>
                      <label>Gender: </label>
                      {val.gender}
                      <p></p>
                      <label>Address: </label>
                      {val.address}
                    </div>
                    <p></p>
                    <label>BloodType: </label>
                    {val.bloodType}

                    <div className="doa-container">
                      <label>Date of Latest Admission: </label>
                      {val.dateOfLatestAdmission}
                    </div>

                    <div className="twobuttondelview">
                      <Link
                        to={{
                          pathname: `/HistoryDetails/${val.id}/${val.dateOfLatestAdmission}`,
                        }}
                      >
                        <div className="update-btn-container">
                          <button>View Details</button>
                        </div>
                      </Link>

                      <div className="update-btn-container">
                        <button
                          onClick={() => {
                            deleteHistory(val.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: Colors.secondary,
              }}
            ></div>
          </div>

          {/* Here  Starts  the content to show in PatientList **************************/}
          <div className="patient-containeritem">
            {historyList.map((val) => {
              return (
                <div className="search-result-item" key={val.id}>
                  <div className="patient-item-card">
                    <div className="id-container">ID: {val.id}</div>
                    <div className="name-container">Name: {val.name}</div>
                    <div className="dob-container">
                      <label>Date Of Birth: </label>
                      {val.dateofBirth}
                      <p> </p>
                      <label>Gender: </label>
                      {val.gender}
                      <p></p>
                      <label>Address: </label>
                      {val.address}
                    </div>
                    <p></p>
                    <label>BloodType: </label>
                    {val.bloodType}

                    <div className="doa-container">
                      <label>Date of Latest Admission: </label>
                      {val.dateOfLatestAdmission}
                    </div>
                    <div className="twobuttondelview">
                      <Link
                        to={{
                          pathname: `/HistoryDetails/${val.id}/${val.dateOfLatestAdmission}`,
                        }}
                      >
                        <div className="update-btn-container">
                          <button>View Details</button>
                        </div>
                      </Link>
                      <div className="update-btn-container">
                        <button
                          onClick={() => {
                            deleteHistory(val.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
