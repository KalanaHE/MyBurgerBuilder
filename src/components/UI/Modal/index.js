import React from "react";
import "./style.css";
import Paper from "@material-ui/core/Paper";

const Modal = (props) => {
  return (
    <div>
      <Paper
        className="Modal"
        style={{
          transform: props.status ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        {props.children}
      </Paper>
    </div>
  );
};

export default Modal;
