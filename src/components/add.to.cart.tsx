import * as React from "react";

import { AddToShopping } from "../actions/shopping.cart";
import { Button } from "./atoms/button";
import { Form } from "./molecules/form";
import { GetProductAttributes } from "../actions/product.action";
import { connect } from "react-redux";
import { getProduct } from "../actions/product.action";

interface IProps {
  productAttributes?: any;
  dispatch?: any;
  location?: any;
  product?: any;
}

interface IState {
  error?: any;
}

export class AddToCart extends React.Component<IProps, IState> {
  public state = { error: "", Color: "", Size: "" };

  public componentDidMount() {
    const { location, dispatch } = this.props;
    const productId = location.pathname.split("/")[2];
    dispatch(getProduct(productId));
    dispatch(GetProductAttributes());
  }

  public handleOnChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  public handleSubmit = (e: any) => {
    e.preventDefault();

    const { Color, Size } = this.state;
    const attrValues: any = [];

    attrValues.push(Size);
    attrValues.push(Color);

    const cartId = localStorage.getItem("cart_id");
    const { dispatch, product } = this.props;

    if (attrValues.length < 2) {
      return this.setState({ error: "Please make sure to select attributes" });
    }

    const item = {
      product_id: product.product_id,
      cart_id: cartId,
      attributes: attrValues.toString(),
    };

    this.setState({ error: "" });
    dispatch(AddToShopping(item));
  };
  public render() {
    const { product, productAttributes } = this.props;
    const { error } = this.state;
    let attributeTypes: any = null;

    if (productAttributes) {
      attributeTypes = [
        ...new Set(
          productAttributes.map((attribute: any) => attribute.attribute_name)
        ),
      ];
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <a href="/allcategories">Back to shopping</a>
            <div className="card pb-4 card-full">
              <Form title="" handleSubmit={(e: any) => this.handleSubmit(e)}>
                <div className="row">
                  <div className="col-md-8 m-auto card- title">
                    {product.name}
                    <div className="mt-2">
                      <div className="card-subtitle text-muted">
                        {product.description}
                      </div>
                    </div>
                  </div>
                  {error ? (
                    <div className="col-md-8 m-auto text-danger">
                      <p>{error}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {attributeTypes
                    ? attributeTypes.map(
                        (
                          attributeType: React.ReactNode,
                          index: string | number | undefined
                        ) => {
                          return (
                            <div className="col-md-8 m-auto" key={index}>
                              <div className="form-group">
                                <label>{attributeType}</label>
                                <select
                                  className="form-control"
                                  onChange={e => this.handleOnChange(e)}
                                  id={
                                    attributeType
                                      ? attributeType.toString()
                                      : ""
                                  }
                                >
                                  <option value="0">
                                    Please select {attributeType}
                                  </option>
                                  {productAttributes.map(
                                    (attribute: any, index1: any) => {
                                      return attribute.attribute_name ===
                                        attributeType ? (
                                        <option
                                          value={
                                            attribute.attribute_value_value
                                          }
                                          key={index1}
                                        >
                                          {attribute.attribute_value}
                                        </option>
                                      ) : (
                                        ""
                                      );
                                    }
                                  )}
                                </select>
                              </div>
                            </div>
                          );
                        }
                      )
                    : ""}
                </div>

                <div className="form-group text-center">
                  <Button
                    type="submit"
                    value="Add to cart"
                    className="bg mb-4"
                  />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    product: state.products.products || null,
    productAttributes: state.productAttributes.productAttributes || null,
  };
};

export default connect(mapStateToProps)(AddToCart);
