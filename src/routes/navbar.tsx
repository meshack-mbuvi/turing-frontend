import * as React from "react";
import { Link } from "react-router-dom";

// components
import { connect } from "react-redux";
import { GetItemsInShoppingCart } from "../actions/shopping.cart";

interface IProps {
  customer?: any;
  dispatch?: any;
  shoppingCart?: any;
}

export class Navbar extends React.Component<IProps> {
  public componentWillMount() {
    const { dispatch } = this.props;
    const cartId = localStorage.getItem("cart_id");

    if (cartId) {
      return dispatch(GetItemsInShoppingCart(cartId));
    }
  }

  public render() {
    const { shoppingCart } = this.props;
    const accessToken = localStorage.getItem("accessToken");

    return (
      <div>
        {accessToken ? (
          ""
        ) : (
          <div className="navbar-nav mt-2 pull-right">
            <p>
              Hi!{" "}
              <a href="/login" className="text-red">
                {" "}
                Sign in
              </a>{" "}
              or
              <a href="/signup" className="m-auto text-red">
                {" "}
                Register
              </a>
            </p>
          </div>
        )}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand ml-4" href="/">
            SHOPMATE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainNavBar"
            aria-controls="mainNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNavBar">
            <div className="navbar-nav nav-item nav-link">
              <Link to="/checkout">Checkout</Link>
            </div>
            <div className="navbar-nav nav-item nav-link ml-auto">
              <Link to="/shoppingcart">
                <i className="btn fa fa-shopping-cart mr-4">
                  <span className="badge badge-notify ">
                    {shoppingCart.shoppingCart
                      ? shoppingCart.shoppingCart.length
                      : 0}
                  </span>
                </i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    customer: state.customer || null,
    shoppingCart: state.shoppingCart || null,
  };
};

export default connect(mapStateToProps)(Navbar);
