import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Navbar from "./navbar";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import Products from "./all.categories";
import AddToCart from "../components/add.to.cart";
import ShoppingCart from "../components/shopping.cart";
import ProductDetails from "./product.details";
import Checkout from "./checkout";
import NotFound from "./not.found";

export class Index extends React.Component {
  public render() {
    return (
      <Router>
        <div className="index">
          <Navbar />

          <Switch>
            <Route path="/" exact={true} component={Products} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/addtocart/:id" component={AddToCart} />
            <Route path="/shoppingcart" component={ShoppingCart} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/checkout" component={Checkout} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Index as React.ComponentType<any>;
