import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import HomePage from "./home";
import Navbar from "./navbar";
import Login from './auth/login';
import SignUp from './auth/signup'
import AllCategories from './all.categories'
import AddToCart from 'src/components/add.to.cart';
import ShoppingCart from '../components/shopping.cart';
import ProductDetails from './product.details';
import Checkout from './checkout';

export class Index extends React.Component {
    public render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path='/allcategories' component={AllCategories} />
                    <Route path="/login" component={Login} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/addtocart/:id' component={AddToCart} />
                    <Route path='/shoppingcart' component={ShoppingCart} />
                    <Route path='/products/:id' component={ProductDetails} />
                    <Route path='/checkout' component={Checkout} />
                </div>
            </Router>
        );
    }
}

export default Index as React.ComponentType<any>;
