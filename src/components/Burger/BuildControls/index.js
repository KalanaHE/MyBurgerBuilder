import React from "react";
import BuildControl from "./BuildControl";
import "./style.css";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <Typography variant="h6" gutterBottom>
        Estimated Price: <strong>{props.price.toFixed(2)} LKR</strong>
      </Typography>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          added={() => props.ingredientAdded(ctrl.type)}
          deleted={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <Button
        disabled={!props.purchasable}
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        onClick={props.ordered}
      >
        ORDER NOW
      </Button>
    </div>
  );
};

export default BuildControls;
