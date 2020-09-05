import React from "react";
import BuildControl from "./BuildControl";
import "./style.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      {controls.map((ctrl) => (
        <BuildControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

export default BuildControls;
