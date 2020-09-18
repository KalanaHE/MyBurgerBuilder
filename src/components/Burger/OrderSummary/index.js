import React from "react";

import Aux from "../../../hoc/Auxx";
import Button from "../../UI/Button";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delecious burger with following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkout?</p>
      <hr />
      <Button
        btnColor="secondary"
        clicked={props.cancelpurchase}
        btnName="Cancel"
      />
      <Button btnColor="primary" btnName="Continue" />
    </Aux>
  );
};

export default OrderSummary;
