import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import Cookies from 'js-cookie';
export default function Sidebar() {
    const logout=()=>{

        Cookies.remove("user");
        }
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className="">
                        <ul className="sidebar-items-container">
                            <li className="sidebar-item">
                                <Link to='/AddPatientPersonalInfo' className="sidebar-link">
                                    <i className="fa fa-plus" aria-hidden="true" /> <p>Add Patient</p>
                                 </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/PatientList' className="sidebar-link">
                                    <i className="fas fa-clipboard-list" /> <p>Patient List</p>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/AddPatientCheckupData' className="sidebar-link">
                                    <i className="fas fa-pills" /> <p>Medicine About</p>
                                </Link>
                            </li>
                    
                        </ul>
                        <Link to="/"> 
                        <button className="getout" onClick={logout}>LogOut</button>
                        </Link>
                       
                      
                    </div>
                </div>
            </div>
        </>
    )
}
