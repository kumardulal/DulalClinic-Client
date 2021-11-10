import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./HistoryDetail.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withRouter, Link } from "react-router-dom";

function DetailInfo(props) {
  const id = props.id;
  const date = props.date;

  const [personalInfo, setPersonalInfo] = useState([]);
  const [latestCheckUpInfo, setLatestCheckUpInfo] = useState([]);
  const { history } = props;

  const [BP, setBP] = useState("");
  const [HR, setHR] = useState("");
  const [RR, setRR] = useState("");
  const [temperature, setTemperature] = useState("");
  const [o2Sat, seto2Sat] = useState("");
  const [weight, setWeight] = useState("");

  const [chiefComplaint, setchiefComplaint] = useState("");
  const [historyofpatientIllness, sethistoryofpatientIllness] = useState("");
  const [generalAppearance, setgeneralAppearance] = useState("");

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
  const [dateFetch, setDateFetch] = useState(date);

  const [dateList, setDateList] = useState([]);

  const UpdateForm = () => {
    Axios.put("http://localhost:3003/api/update/LatestCheckupInfo", {
      Updateid: id,
      UpdateDate: date,

      UpdateBP: BP,
      UpdateHR: HR,
      UpdateRR: RR,
      Updatetemperature: temperature,
      Updateo2Sat: o2Sat,
      Updateweight: weight,

      UpdatechiefComplaint: chiefComplaint,
      UpdatehistoryofpatientIllness: historyofpatientIllness,
      UpdategeneralAppearance: generalAppearance,

      Updateskin: skin,
      Updateheent: heent,
      Updateneck: neck,
      Updatechest: chest,
      UpdateCVS: CVS,
      Updateabdomen: abdomen,
      Updategut: gut,
      Updateextromities: extromities,
      Updateneuro: neuro,

      UpdateadmittingDiagnosis: admittingDiagnosis,
      Updatetreatment: treatment,
    }).then((response) => {
      if (response.status === 200) {
        window.location.reload();
        alert("Data update successfull");
      } else if (response.status === 500) {
        alert("something went wrong");
      } else {
        console.log(response);
      }
    });
  };

  useEffect(() => {
    Axios.get(`http://localhost:3003/api/get/PersonalInfo/Details/${id}`).then(
      (response) => {
        setPersonalInfo(response.data[0]);
        //use state for personal info here ****
      }
    );
  }, [id]);

  useEffect(() => {
    Axios.get(
      `http://localhost:3003/api/get/CheckupInfo/Details/${id}/${dateFetch}`
    ).then((response) => {
      setLatestCheckUpInfo(response.data[0]);
      setBP(response.data[0].BP);
      setHR(response.data[0].HR);
      setRR(response.data[0].RR);
      setTemperature(response.data[0].temperature);
      setWeight(response.data[0].weight);
      seto2Sat(response.data[0].o2Sat);
      setchiefComplaint(response.data[0].chiefComplaint);
      sethistoryofpatientIllness(response.data[0].historyofpatientIllness);
      setgeneralAppearance(response.data[0].generalAppearance);
      setSkin(response.data[0].skin);
      setHeent(response.data[0].heent);
      setNeck(response.data[0].neck);
      setChest(response.data[0].chest);
      setCVS(response.data[0].CVS);
      setAbdomen(response.data[0].abdomen);
      setGut(response.data[0].gut);
      setExtromities(response.data[0].extromities);
      setNeuro(response.data[0].neuro);
      setadmittingDiagnosis(response.data[0].admittingDiagnosis);
      setTreatment(response.data[0].treatment);
    });
  }, [id, dateFetch]);

  useEffect(() => {
    Axios.get(`http://localhost:3003/api/get/dateList/${id}`).then(
      (response) => {
        setDateList(response.data);
      }
    );
  }, [id]);

  const clearFields = (date) => {
    setDateFetch(date);
    history.push(`/HistoryDetails/${id}/${date}`);
    window.location.reload(false);
  };

  return (
    <div className="DetailInfo">
      {/* buttons of the enrolled dates are from here wrapdate  component call*/}

      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "28px",
          backgroundColor: "Menu",
          padding: "10px",
        }}
      >
        RECORD OF Mr/Ms. {personalInfo.name}
      </div>
      <br></br>

      <div className="DateForms">
        <div className="titlecheckupdate">PREVIOUS CHECKUPS</div>
        {dateList.map((val) => {
          return (
            <div className="date-list-container" key={val.dateOfAdmission}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  clearFields(val.dateOfAdmission);
                }}
              >
                {val.dateOfAdmission}
              </Button>
            </div>
          );
        })}
      </div>

      <div style={styles.profileInfo}>
        <div className="patientPersonalInfo">
          <h4 style={{ margin: "10pxf" }}>
            ID : {personalInfo.id} <br></br>Name : {personalInfo.name}
            <br></br> Gender : {personalInfo.gender}
            <br></br> Address : {personalInfo.address}
            <br></br> Date of Birth : {personalInfo.dateofBirth}
            <br></br> Blood Type : {personalInfo.bloodType}
          </h4>
        </div>
      </div>

      <div>
        {/* <h4>Date Of Admission:{latestCheckUpInfo.dateOfAdmission}</h4> */}

        <Button variant="contained" color="primary" size="small">
          <h4>Date Of Admission:</h4> {latestCheckUpInfo.dateOfAdmission}
        </Button>

        <div className="patientCheckInfo">
          {/* //Vitals********************************************* */}

          <div style={styles.container}>
            <div style={styles.blocktitle}>Patient Vitals</div>
            <div style={styles.wrappersecondarycont}>
              {/* Latest CheckUp info */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>BP</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.BP}
                  onChange={(e) => {
                    setBP(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>HR</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.HR}
                  onChange={(e) => {
                    setHR(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>RR</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.RR}
                  onChange={(e) => {
                    setRR(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Temperature</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.temperature}
                  onChange={(e) => {
                    setTemperature(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Weight</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>O2Sat</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.o2Sat}
                  onChange={(e) => {
                    seto2Sat(e.target.value);
                  }}
                />
              </div>
            </div>

            <div style={styles.marginline1}></div>
          </div>

          {/* ********************************chiff complaint and history ********************************************* */}

          <div style={styles.container}>
            <div style={styles.blocktitle}>chiff complaint and history </div>
            <div style={styles.wrappersecondarycont}>
              {/* Latest CheckUp info */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebelbigger}>chiff complaint</div>
                <TextField
                  style={styles.biggertextfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.chiefComplaint}
                  onChange={(e) => {
                    setchiefComplaint(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebelbigger}>
                  History of Patient Illness
                </div>
                <TextField
                  style={styles.biggertextfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.historyofpatientIllness}
                  onChange={(e) => {
                    sethistoryofpatientIllness(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebelbigger}>general Appearance</div>
                <TextField
                  style={styles.biggertextfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.generalAppearance}
                  onChange={(e) => {
                    setgeneralAppearance(e.target.value);
                  }}
                />
              </div>
            </div>
            <div style={styles.marginline1}></div>
          </div>

          {/* ///////////////////////////// */}

          {/* Physical Examination ************************************************************** */}

          <div style={styles.container}>
            <div style={styles.blocktitle}>Physical Examination </div>
            <div style={styles.wrappersecondarycont}>
              {/* Latest CheckUp info */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Skin</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.skin}
                  onChange={(e) => {
                    setSkin(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Neck</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.neck}
                  onChange={(e) => {
                    setNeck(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Heent</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.heent}
                  onChange={(e) => {
                    setHeent(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Chest</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.chest}
                  onChange={(e) => {
                    setChest(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>CVS</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.CVS}
                  onChange={(e) => {
                    setCVS(e.target.value);
                  }}
                />
              </div>
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Abdomen</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.abdomen}
                  onChange={(e) => {
                    setAbdomen(e.target.value);
                  }}
                />
              </div>

              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Gut</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.gut}
                  onChange={(e) => {
                    setGut(e.target.value);
                  }}
                />
              </div>
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Extromities</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.extromities}
                  onChange={(e) => {
                    setExtromities(e.target.value);
                  }}
                />
              </div>
              <div style={styles.secondContainer}>
                <div style={styles.contLebel}>Neuro</div>
                <TextField
                  style={styles.textfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.neuro}
                  onChange={(e) => {
                    setNeuro(e.target.value);
                  }}
                />
              </div>
            </div>
            <div style={styles.marginline1}></div>
          </div>

          {/* /////////////////////////////// */}
          {/* ************************************************* Admitting Diagnosis */}
          <div style={styles.container}>
            <div style={styles.blocktitle}> Diagnosis And Treatment</div>
            <div style={styles.wrappersecondarycont}>
              {/* Latest CheckUp info */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebelbigger}> Management/Treatment</div>
                <TextField
                  style={styles.biggertextfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.admittingDiagnosis}
                  onChange={(e) => {
                    setadmittingDiagnosis(e.target.value);
                  }}
                />
              </div>
              {/* here is particition */}
              <div style={styles.secondContainer}>
                <div style={styles.contLebelbigger}> Management/Treatment</div>
                <TextField
                  style={styles.biggertextfield}
                  label=""
                  variant="outlined"
                  multiline
                  defaultValue={latestCheckUpInfo.treatment}
                  onChange={(e) => {
                    setTreatment(e.target.value);
                  }}
                />
              </div>
            </div>

            <div style={styles.marginline1}></div>
          </div>
          {/* ///next update */}

          <div style={styles.updatefolowup}>
            <Button
              style={{ height: "60px" }}
              className="updatebtn"
              type="update"
              variant="contained"
              color="secondary"
              onClick={() => {
                UpdateForm();
              }}
            >
              UPDATE CHANGES
            </Button>

            <Link
              to={{
                pathname: `/followUp/${id}`,
              }}
            >
              <Button
                style={{ height: "60px" }}
                className="followupbtn"
                size="large"
                type="update"
                variant="contained"
                color="primary"
              >
                FOLLOW UP ENTRY
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "solid 2px grey",
  },
  blocktitle: {
    fontSize: "25px",
    backgroundColor: "white",
    padding: "15px",
    margin: "10px",
    fontWeight: "bold",
  },
  profileInfo: {
    display: "flex",
    justifyContent: "start",
    marginLeft: "20px",
  },
  secondContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "10px",
  },
  contLebel: {
    width: "300px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    height: "35px",
  },
  contLebelbigger: {
    width: "350px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    height: "35px",
  },
  wrappersecondarycont: {
    display: "flex",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: "0033.333333%",
  },
  textfield: { width: "300px" },
  biggertextfield: {
    width: "350px",
  },
  marginline1: {
    width: "95%",
    backgroundColor: "dark",
    height: "3px",
    margin: "5px",
  },

  updatefolowup: {
    width: "100%",
    height: "150px",
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  //container item is the text input
};
export default withRouter(DetailInfo);
