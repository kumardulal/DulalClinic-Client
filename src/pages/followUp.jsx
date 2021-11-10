import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./followup.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function FollowUp({ match, history }) {
  const patientId = match.params.id;

  const [mainInfo, setMainInfo] = useState([]);

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

  const Submit = () => {
    Axios.post("http://localhost:3003/api/PatientCheckUpinfo/insert", {
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
      treatment: treatment,
    }).then((response) => {
      if (response.status === 200) {
        history.push(`/PatientList`);
        alert(
          `FollowUp Created successfully for- ${mainInfo.name} || New DateTime Enrolled: ${response.data} `
        );
      } else {
        alert("Didnot recieve the resonse from server");
      }
    });
  };

  useEffect(() => {
    Axios.get(
      `http://localhost:3003/api/get/PersonalInfo/Details/${patientId}`
    ).then((response) => {
      setMainInfo(response.data[0]);
    });
  });

  return (
    <div className="FollowUp">
      {/* buttons of the enrolled dates are from here wrapdate  component call*/}
      <div style={{ width: "80%" }}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "28px",
            backgroundColor: "WindowFrame",
            padding: "10px",
          }}
        >
          RECORD OF Mr/Ms. {mainInfo.name}
        </div>
        <br></br>

        <div style={styles.profileInfo}>
          <div className="patientPersonalInfo">
            <h4 style={{ margin: "7px", fontSize: "18px" }}>
              ID : {mainInfo.id} <br></br>Name : {mainInfo.name}
              <br></br> Gender : {mainInfo.gender}
              <br></br> Address : {mainInfo.address}
              <br></br> Date of Birth : {mainInfo.dateofBirth}
              <br></br> Blood Type : {mainInfo.bloodType}
            </h4>
          </div>
        </div>

        <div>
          {/* <h4>Date Of Admission:{mainInfo.dateOfAdmission}</h4> */}

          <Button variant="contained" color="primary" size="small">
            <h4>Date Of Admission:</h4> {mainInfo.dateOfAdmission}
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
                  <div style={styles.contLebelbigger}>
                    {" "}
                    Management/Treatment
                  </div>
                  <TextField
                    style={styles.biggertextfield}
                    label=""
                    variant="outlined"
                    multiline
                    onChange={(e) => {
                      setadmittingDiagnosis(e.target.value);
                    }}
                  />
                </div>
                {/* here is particition */}
                <div style={styles.secondContainer}>
                  <div style={styles.contLebelbigger}>
                    {" "}
                    Management/Treatment
                  </div>
                  <TextField
                    style={styles.biggertextfield}
                    label=""
                    variant="outlined"
                    multiline
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
                  Submit();
                }}
              >
                UPDATE FollowUp
              </Button>
            </div>
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

export default FollowUp;
