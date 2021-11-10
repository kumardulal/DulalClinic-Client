// import Axios from "axios";
// import React, { useEffect, useState } from "react";
// import './AddPatient.css'


// import { withRouter, Link } from "react-router-dom";



// function DetailInfo(props) {

//   const id = props.id;
//   const date = props.date;

//   const [personalInfo, setPersonalInfo] = useState([]);
//   const [latestCheckUpInfo, setLatestCheckUpInfo] = useState([]);
//   const { history } = props;

//   const [BP, setBP] = useState("");
//   const [HR, setHR] = useState("");
//   const [RR, setRR] = useState("");
//   const [temperature, setTemperature] = useState("");
//   const [o2Sat, seto2Sat] = useState("");
//   const [weight, setWeight] = useState("");

//   const [chiefComplaint, setchiefComplaint] = useState("");
//   const [historyofpatientIllness, sethistoryofpatientIllness] = useState("");
//   const [generalAppearance, setgeneralAppearance] = useState("");

//   const [skin, setSkin] = useState("");
//   const [heent, setHeent] = useState("");
//   const [neck, setNeck] = useState("");
//   const [chest, setChest] = useState("");
//   const [CVS, setCVS] = useState("");
//   const [abdomen, setAbdomen] = useState("");
//   const [gut, setGut] = useState("");
//   const [extromities, setExtromities] = useState("");
//   const [neuro, setNeuro] = useState("");

//   const [admittingDiagnosis, setadmittingDiagnosis] = useState("");
//   const [treatment, setTreatment] = useState("");
//   const [dateFetch, setDateFetch] = useState(date);

//   const [dateList, setDateList] = useState([]);

//   const UpdateForm = () => {
//     Axios.put("http://localhost:3003/api/update/LatestCheckupInfo", {
//       Updateid: id,
//       UpdateDate: date,

//       UpdateBP: BP,
//       UpdateHR: HR,
//       UpdateRR: RR,
//       Updatetemperature: temperature,
//       Updateo2Sat: o2Sat,
//       Updateweight: weight,

//       UpdatechiefComplaint: chiefComplaint,
//       UpdatehistoryofpatientIllness: historyofpatientIllness,
//       UpdategeneralAppearance: generalAppearance,

//       Updateskin: skin,
//       Updateheent: heent,
//       Updateneck: neck,
//       Updatechest: chest,
//       UpdateCVS: CVS,
//       Updateabdomen: abdomen,
//       Updategut: gut,
//       Updateextromities: extromities,
//       Updateneuro: neuro,

//       UpdateadmittingDiagnosis: admittingDiagnosis,
//       Updatetreatment: treatment,
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           alert("success");
//           console.log(response);
//         } else if (response.status === 500) {
//           alert("something went wrong");
//           console.log(response);
//         } else {
//           console.log(response);
//         }
//       });
//   };



//   useEffect(() => {
//     Axios.get(`http://localhost:3003/api/get/PersonalInfo/Details/${id}`).then(
//       (response) => {
//         setPersonalInfo(response.data[0]);
//         //use state for personal info here ****
//       }
//     );
//   }, [id]);

//   useEffect(() => {
//     Axios.get(
//       `http://localhost:3003/api/get/CheckupInfo/Details/${id}/${dateFetch}`
//     ).then((response) => {
//       setLatestCheckUpInfo(response.data[0]);
//       setBP(response.data[0].BP);
//       setHR(response.data[0].HR);
//       setRR(response.data[0].RR);
//       setTemperature(response.data[0].temperature);
//       setWeight(response.data[0].weight);
//       seto2Sat(response.data[0].o2Sat);
//       setchiefComplaint(response.data[0].chiefComplaint);
//       sethistoryofpatientIllness(response.data[0].historyofpatientIllness);
//       setgeneralAppearance(response.data[0].generalAppearance);
//       setSkin(response.data[0].skin);
//       setHeent(response.data[0].heent);
//       setNeck(response.data[0].neck);
//       setChest(response.data[0].chest);
//       setCVS(response.data[0].CVS);
//       setAbdomen(response.data[0].abdomen);
//       setGut(response.data[0].gut);
//       setExtromities(response.data[0].extromities);
//       setNeuro(response.data[0].neuro);
//       setadmittingDiagnosis(response.data[0].admittingDiagnosis);
//       setTreatment(response.data[0].treatment);
//     });
//   }, [id, dateFetch]);

//   useEffect(() => {
//     Axios.get(`http://localhost:3003/api/get/dateList/${id}`).then(
//       (response) => {
//         setDateList(response.data);
//       }
//     );
//   }, [id]);



//   const clearFields = (date) => {
//     setDateFetch(date);
//     history.push(`/HistoryDetails/${id}/${date}`);
//     window.location.reload(false);
//   };

//   return (

//     <>
//       <div className="DetailInfo">
//         <div className="AddPatient">
//           <div className="main-container">
//             <div className="header-container">
//               <h1>RECORD OF Mr/Ms. {personalInfo.name}</h1>
//               <br></br>

//             </div>
           

//             <div className="personal-info">

//               ID : {personalInfo.id} <br></br>Name : {personalInfo.name}
//               <br></br> Gender : {personalInfo.gender}
//               <br></br> Address : {personalInfo.address}
//               <br></br> Date of Birth : {personalInfo.dateofBirth}
//               <br></br> Blood Type : {personalInfo.bloodType}

//             </div>
//             <div className="form-container">


//               <div className="grid-row">

//                 <div className="form-item">
//                   <label>Blood Pressure</label>
//                   <input
//                     type="text"

//                     defaultValue={latestCheckUpInfo.BP}
//                     placeholder="00/00"
//                     onChange={(e) => {
//                       setBP(e.target.value);
//                     }} />
//                 </div>
//                 <div className="form-item">
//                   <label>Heart Rate</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.HR}
//                     placeholder="BPM"
//                     onChange={(e) => {
//                       setHR(e.target.value);
//                     }} />
//                 </div>
//               </div>

//               <div className="grid-row">
//                 <div className="form-item">
//                   <label>Respiratory Rate</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.RR}
//                     placeholder="BPM"
//                     onChange={(e) => {
//                       setRR(e.target.value);
//                     }} />
//                 </div>
//                 <div className="form-item">
//                   <label>Temperature</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.temperature}
//                     placeholder="degree celcius"
//                     onChange={(e) => {
//                       setTemperature(e.target.value);
//                     }} />
//                 </div>
//               </div>

//               <div className="grid-row">
//                 <div className="form-item">
//                   <label>Body Weight</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.weight}
//                     placeholder="kg"
//                     onChange={(e) => {
//                       setWeight(e.target.value);
//                     }} />
//                 </div>
//                 <div className="form-item">
//                   <label>O2Sat</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.o2Sat}
//                     placeholder="BPM"
//                     onChange={(e) => {
//                       seto2Sat(e.target.value);
//                     }} />
//                 </div>
//               </div>


//               <div className="checkup-header-container">
//                 <h1>Complaint/History/Appearance</h1>
//               </div>

//               <div className="form-item">
//                 <label>Chief Complaint</label>
//                 <input
//                   type="text"
//                   defaultValue={latestCheckUpInfo.chiefComplaint}
//                   placeholder="Specify"
//                   onChange={(e) => {
//                     setchiefComplaint(e.target.value);
//                   }} />
//               </div>

//               <div className="form-item">
//                 <label>General Appearance</label>
//                 <input
//                   type="text"
//                   defaultValue={latestCheckUpInfo.generalAppearance}
//                   placeholder="Specify"
//                   onChange={(e) => {
//                     setgeneralAppearance(e.target.value);
//                   }} />
//               </div>

//               <div className="form-item">
//                 <label>History of Patient's Illness</label>
//                 <input
//                   type="text"
//                   defaultValue={latestCheckUpInfo.historyofpatientIllness}
//                   placeholder="Specify"
//                   onChange={(e) => {
//                     sethistoryofpatientIllness(e.target.value);
//                   }} />
//               </div>

//               <div className="checkup-header-container">
//                 <h1>Physical Examination [Yes/No(Describe)]</h1>
//               </div>

//               <div className="grid-row">
//                 <div className="form-item">
//                   <label>Skin</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.skin}
//                     placeholder="Skin"
//                     onChange={(e) => {
//                       setSkin(e.target.value);
//                     }} />
//                 </div>
//                 <div className="form-item">
//                   <label>Neck</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.neck}
//                     placeholder="Neck"
//                     onChange={(e) => {
//                       setNeck(e.target.value);
//                     }} />
//                 </div>
//               </div>

//               <div className="grid-row">
//                 <div className="form-item">
//                   <label>Heent</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.heent}
//                     placeholder="Heent"
//                     onChange={(e) => {
//                       setHeent(e.target.value);
//                     }} />
//                 </div>
//                 <div className="form-item">
//                   <label>Chest/Lungs</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.chest}
//                     placeholder="Chest/Lungs"
//                     onChange={(e) => {
//                       setChest(e.target.value);
//                     }} />
//                 </div>
//               </div>

//               <div className="grid-row">
//                 <div className="form-item">
//                   <label>Chorionic Villus Sampling</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.CVS}
//                     placeholder="CVS"
//                     onChange={(e) => {
//                       setCVS(e.target.value);
//                     }} />
//                 </div>
//                 <div className="form-item">
//                   <label>Abdomen</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.abdomen}
//                     placeholder="Abdomen"
//                     onChange={(e) => {
//                       setAbdomen(e.target.value);
//                     }} />
//                 </div>
//               </div>

//               <div className="grid-row">
//                 <div className="form-item">
//                   <label>Gut</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.gut}
//                     placeholder="Gut"
//                     onChange={(e) => {
//                       setGut(e.target.value);
//                     }} />
//                 </div>
//                 <div className="form-item">
//                   <label>Extremities</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.extromities}
//                     placeholder="Extremities"
//                     onChange={(e) => {
//                       setExtromities(e.target.value);
//                     }} />
//                 </div>
//               </div>

//               <div className="grid-row">
//                 <div className="form-item">
//                   <label>Neuro</label>
//                   <input
//                     type="text"
//                     defaultValue={latestCheckUpInfo.neuro}
//                     placeholder="Neuro"
//                     onChange={(e) => {
//                       setNeuro(e.target.value);
//                     }} />
//                 </div>
//               </div>

//               <div className="checkup-header-container">
//                 <h1>Admitting Diagnosis and Treatment</h1>
//               </div>

//               <div className="form-item">
//                 <label>Admitting Diagnosis</label>
//                 <textarea
//                   defaultValue={latestCheckUpInfo.admittingDiagnosis}
//                   placeholder="Admitting Diagnosis"
//                   onChange={(e) => {
//                     setadmittingDiagnosis(e.target.value);
//                   }} />
//               </div>

//               <div className="form-item">
//                 <label>Treatment</label>
//                 <textarea
//                   type="text"
//                   defaultValue={latestCheckUpInfo.treatment}
//                   placeholder="Treatment"
//                   onChange={(e) => {
//                     setTreatment(e.target.value);
//                   }} />
//               </div>



//               <>
//                 <div className="maka">
//                   <Link to="/PatientList">
//                     <div className="btn-container">

//                       <button
//                         onClick={() => {
//                           UpdateForm();
//                         }}>Save Entry</button>

//                     </div>

//                   </Link>

//                   <Link
//                     to={{
//                       pathname: `/followUp/${id}`,
//                     }} >
//                     <div className="followup-btn">

//                       <button>FOLLOW UP</button>

//                     </div>
//                   </Link>
//                 </div>
//               </>




//             </div>
//           </div>
//         </div>
//       </div>
//     </>
 
//   );
// }
// export default withRouter(DetailInfo);
