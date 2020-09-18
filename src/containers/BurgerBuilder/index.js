import React, { Component } from "react";
import Aux from "../../hoc/Auxx";

import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 1.0,
  cheese: 5.0,
  meat: 4.0,
  bacon: 3.0,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  deleteIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients,
      };

      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;

      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
      this.updatePurchaseState(updatedIngredients);
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCanselHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        {this.state.purchasing ? (
          <Modal
            status={this.state.purchasing}
            modelClosed={this.purchaseCanselHandler}
          >
            <OrderSummary
              ingredients={this.state.ingredients}
              cancelpurchase={this.purchaseCanselHandler}
            />
          </Modal>
        ) : null}
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper style={{ height: "100%" }}>
              <Burger ingredients={this.state.ingredients} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper style={{ height: "100%" }}>
              <BuildControls
                ingredientRemoved={this.deleteIngredientHandler}
                ingredientAdded={this.addIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
              />
            </Paper>
          </Grid>
        </Grid>
      </Aux>
    );
  }
}

export default BurgerBuilder;
