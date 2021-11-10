import React from "react";
import "./HistoryDetail.css";
import DetailInfo from "./DetailInfo";

import { withRouter, Route } from "react-router-dom";

function HistoryDetails({ match }) {
  const id = match.params.id;
  const date = match.params.date;

  return (
    <>
      <Route>
        <div className="HistoryDetails">
          <div style={{ marginLeft: "200px" }} />
          <DetailInfo id={id} date={date} />
        </div>
      </Route>
    </>
  );
}

export default withRouter(HistoryDetails);
