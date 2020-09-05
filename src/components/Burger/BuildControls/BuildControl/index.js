import React from "react";
import { Button } from "@material-ui/core";
import "./style.css";

const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <div>{props.label}</div>
      <Button variant="contained" color="secondary">
        Less
      </Button>
      <Button variant="contained" color="primary">
        More
      </Button>
    </div>
  );
};

export default BuildControl;
