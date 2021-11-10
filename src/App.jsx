import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PatientList from "./pages/PatientList";
import AddPatientPersonalInfo from "./pages/AddPatientPersonalInfo";
import AddPatientCheckupData from "./pages/AddPatientCheckupData";
import DetailInfo from "./pages/DetailInfo";
import FollowUp from "./pages/followUp";
import HistoryDetails from "./pages/HistoryDetail";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <div className="inner-content">
            <Sidebar />
            <Switch>
              <Route path="/" exact component={SignIn} />
              <ProtectedRoute
                path="/PatientList/"
                exact
                component={PatientList}
              />
              <Route
                path="/AddPatientPersonalInfo"
                exact
                component={AddPatientPersonalInfo}
              />
              <ProtectedRoute
                path="/HistoryDetails/:id/:date"
                exact
                component={HistoryDetails}
              />
              <Route
                path="/AddPatientCheckupData/:id"
                exact
                component={AddPatientCheckupData}
              />
              <ProtectedRoute
                path="/DetailInfo/:id"
                exact
                component={DetailInfo}
              />
              <Route path="/followUp/:id" exact component={FollowUp} />

              <ProtectedRoute
                path="*"
                component={() => "404 NOT FOUND. TRY A EXISTING  ADDRESS"}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
