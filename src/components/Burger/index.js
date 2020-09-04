import React from "react";
import "./styles.css";
import BurgerIngredients from "./BurgerIngredients";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredients key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
