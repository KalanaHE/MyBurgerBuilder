import React from "react";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import Aux from "../../../hoc/Auxx";
import BackDrop from "../Backdrop";

const Modal = (props) => {
  return (
    <Aux>
      <BackDrop show={props.status} clicked={props.modelClosed} />
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
    </Aux>
  );
};

export default Modal;
