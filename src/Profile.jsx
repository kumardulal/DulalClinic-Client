// import './App.css';
// import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import PatientList from './pages/PatientList';
// import AddPatientPersonalInfo from './pages/AddPatientPersonalInfo';
// import AddPatientCheckupData from './pages/AddPatientCheckupData';
// import DetailInfo from './pages/DetailInfo';
// import FollowUp from "./pages/followUp";
// import HistoryDetails from './pages/HistoryDetail';
// import SignIn from './pages/SignIn';

// function Profile() {
//   return (
//     <>
//       <div className="App">
//         <Router>
//           <Header />
//           <div className="inner-content">
//             <Sidebar />
//             <Switch>
//               <Route path="/Profile" exact component={PatientList} />
//               {/* <Route path="/PatientList" exact component={PatientList} /> */}
//               <Route path="/HistoryDetails/:id/:date" exact component={HistoryDetails} />
//               <Route path="/AddPatientPersonalInfo" exact component={AddPatientPersonalInfo} />
//               <Route path="/AddPatientCheckupData/:id" exact component={AddPatientCheckupData} /> 
//               <Route path="/DetailInfo/:id" exact component={DetailInfo} />
//               <Route path="/followUp/:id" exact component={FollowUp} />
//               <Route path="/SignIn" exact component={SignIn} />
     
//             </Switch>
//           </div>
//         </Router>
//       </div>
  
//     </>
//   );
// }

// export default Profile;