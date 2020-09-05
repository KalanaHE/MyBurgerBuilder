import React from "react";
import { Button } from "@material-ui/core";
import "./style.css";
import Typography from "@material-ui/core/Typography";

const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <Typography variant="button" display="block" gutterBottom>
        {props.label}
      </Typography>
      <Button variant="contained" color="secondary">
        Less
      </Button>
      &nbsp;
      <Button variant="contained" color="primary">
        More
      </Button>
    </div>
  );
};

export default BuildControl;
