import React from "react";
import Aux from "../../hoc/Auxx";
import { Container } from "@material-ui/core";

const Layout = (props) => (
  <Aux>
    <div>toolbar , side drawer , backdrop</div>
    <Container maxWidth="sm">
      <main>{props.children}</main>
    </Container>
  </Aux>
);

export default Layout;
