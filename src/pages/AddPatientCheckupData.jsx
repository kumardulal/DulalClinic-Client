import React, { useState } from 'react';
import './AddPatient.css'
import { Link } from "react-router-dom";
import Axios from "axios";
export default function AddPatientCheckupData({match}) {
    const patientId = match.params.id;

    const [chiefComplaint, setchiefComplaint] = useState("");
    const [historyofpatientIllness, sethistoryofpatientIllness] = useState("");
    const [generalAppearance, setgeneralAppearance] = useState("");

    const [BP, setBP] = useState("");
    const [HR, setHR] = useState("");
    const [RR, setRR] = useState("");
    const [temperature, setTemperature] = useState("");
    const [o2Sat, seto2Sat] = useState("");
    const [weight, setWeight] = useState("");

    const [skin, setSkin] = useState("");
    const [heent, setHeent] = useState("");
    const [neck, setNeck] = useState("");
    const [chest, setChest] = useState("");
    const [CVS, setCVS] = useState("");
    const [abdomen, setAbdomen] = useState("");
    const [gut, setGut] = useState("");
    const [extromities, setExtromities] = useState("");
    const [neuro, setNeuro] = useState("");

    const [admittingDiagnosis, setadmittingDiagnosis] = useState("");
    const [treatment, setTreatment] = useState("");



    const SubmitForm = () => {
        Axios.post('http://localhost:3003/api/PatientCheckUpInfo/insert', {

            patientId: patientId,
            BP: BP,
            HR: HR,
            RR: RR,
            temperature: temperature,
            o2Sat: o2Sat,
            weight: weight,
        
            chiefComplaint: chiefComplaint,
            historyofpatientIllness: historyofpatientIllness,
            generalAppearance: generalAppearance,

            skin: skin,
            heent: heent,
            neck: neck,
            chest: chest,
            CVS: CVS,
            abdomen: abdomen,
            gut: gut,
            extromities: extromities,
            neuro: neuro,

            admittingDiagnosis: admittingDiagnosis,
            treatment: treatment


        })


    };
    return (
        <>
            <div className="AddPatient">
                <div className="main-container">
                    <div className="header-container">
                        <h1>Checkup Data</h1>
                    </div>
                    <div className="form-container">

                        <div className="grid-row">
                            <div className="form-item">
                                <label>Blood Pressure</label>
                                <input 
                                type="text" 
                                placeholder="00/00"
                                onChange={(e) => {
                                setBP(e.target.value);
                                }} />
                            </div>
                            <div className="form-item">
                                <label>Heart Rate</label>
                                <input 
                                type="text" 
                                placeholder="BPM"
                                onChange={(e) => {
                                setHR(e.target.value);
                                }} />
                            </div>
                        </div>

                        <div className="grid-row">
                            <div className="form-item">
                                <label>Respiratory Rate</label>
                                <input
                                 type="text"
                                  placeholder="BPM"
                                  onChange={(e) => {
                                  setRR(e.target.value);
                                }} />
                            </div>
                            <div className="form-item">
                                <label>Temperature</label>
                                <input 
                                type="text" 
                                placeholder="degree celcius" 
                                onChange={(e) => {
                                    setTemperature(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="grid-row">
                            <div className="form-item">
                                <label>Body Weight</label>
                                <input 
                                type="text" 
                                placeholder="kg"
                                onChange={(e) => {
                                setWeight(e.target.value);
                                }} />
                            </div>
                            <div className="form-item">
                                <label>O2Sat</label>
                                <input
                                 type="text"
                                  placeholder="BPM"
                                  onChange={(e) => {
                                    seto2Sat(e.target.value);
                                }} />
                            </div>
                        </div>


                        <div className="checkup-header-container">
                            <h1>Complaint/History/Appearance</h1>
                        </div>

                        <div className="form-item">
                            <label>Chief Complaint</label>
                            <input
                             type="text"
                              placeholder="Specify"
                              onChange={(e) => {
                                setchiefComplaint(e.target.value);
                            }} />
                        </div>

                        <div className="form-item">
                            <label>General Appearance</label>
                            <input
                             type="text" 
                             placeholder="Specify"
                             onChange={(e) => {
                            setgeneralAppearance(e.target.value);
                            }}/>
                        </div>

                        <div className="form-item">
                            <label>History of Patient's Illness</label>
                            <input
                             type="text"
                              placeholder="Specify"
                              onChange={(e) => {
                             sethistoryofpatientIllness(e.target.value);
                            }} />
                        </div>

                        <div className="checkup-header-container">
                            <h1>Physical Examination [Yes/No(Describe)]</h1>
                        </div>

                        <div className="grid-row">
                            <div className="form-item">
                                <label>Skin</label>
                                <input 
                                type="text"
                                 placeholder="Skin"
                                 onChange={(e) => {
                                    setSkin(e.target.value);
                                }} />
                            </div>
                            <div className="form-item">
                                <label>Neck</label>
                                <input 
                                type="text"
                                 placeholder="Neck" 
                                 onChange={(e) => {
                                    setNeck(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="grid-row">
                            <div className="form-item">
                                <label>Heent</label>
                                <input
                                 type="text" 
                                 placeholder="Heent"
                                 onChange={(e) => {
                                 setHeent(e.target.value);
                                }} />
                            </div>
                            <div className="form-item">
                                <label>Chest/Lungs</label>
                                <input 
                                type="text" 
                                placeholder="Chest/Lungs"
                                onChange={(e) => {
                                setChest(e.target.value);
                                }} />
                            </div>
                        </div>

                        <div className="grid-row">
                            <div className="form-item">
                                <label>Chorionic Villus Sampling</label>
                                <input 
                                type="text" 
                                placeholder="CVS"
                                onChange={(e) => {
                                setCVS(e.target.value);
                                }} />
                            </div>
                            <div className="form-item">
                                <label>Abdomen</label>
                                <input
                                 type="text"
                                  placeholder="Abdomen" 
                                  onChange={(e) => {
                                    setAbdomen(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="grid-row">
                            <div className="form-item">
                                <label>Gut</label>
                                <input
                                 type="text"
                                  placeholder="Gut"
                                  onChange={(e) => {
                                  setGut(e.target.value);
                                }}  />
                            </div>
                            <div className="form-item">
                                <label>Extremities</label>
                                <input 
                                type="text"
                                 placeholder="Extremities" 
                                 onChange={(e) => {
                                setExtromities(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="grid-row">
                            <div className="form-item">
                                <label>Neuro</label>
                                <input 
                                type="text" 
                                placeholder="Neuro" 
                                onChange={(e) => {
                                setNeuro(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="checkup-header-container">
                            <h1>Admitting Diagnosis and Treatment</h1>
                        </div>

                        <div className="form-item">
                            <label>Admitting Diagnosis</label>
                            <textarea 
                            placeholder="Admitting Diagnosis" 
                            onChange={(e) => {
                            setadmittingDiagnosis(e.target.value);
                            }}/>
                        </div>

                        <div className="form-item">
                            <label>Treatment</label>
                            <textarea 
                            type="text"
                             placeholder="Treatment"
                             onChange={(e) => {
                            setTreatment(e.target.value);
                            }} />
                        </div>
                        <><Link to="/PatientList">     
                        <div className="btn-container">
                            <button
                              onClick={() => {
                              SubmitForm();
                            }}>Save Entry</button>
                        </div>
                        </Link></>


                    </div>
                </div>
            </div>
        </>
    )
}
