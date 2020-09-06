import React from "react";
import { Button } from "@material-ui/core";

const ButtonElement = (props) => {
  return (
    <>
      <Button
        variant="contained"
        color={props.btnColor}
        onClick={props.clicked}
      >
        {props.btnName}
      </Button>
    </>
  );
};

export default ButtonElement;
