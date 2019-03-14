import * as React from "react";
import { connect } from "react-redux";
import { AllProducts } from "src/actions/product.action";
import { GetItemsInShoppingCart, RemoveItemFromShopping } from "../actions/shopping.cart";

const BASE_IMAGE_URL = `https://raw.githubusercontent.com/zandoan/turing-frontend/master/Images/product_images`

interface IProps {
    dispatch?: any;
    shoppingCart?: any;
    products?: any;
}
export class ShoppingCart extends React.Component<IProps> {
    public componentDidMount() {
        const { dispatch } = this.props;
        dispatch(AllProducts());
        const cartId = localStorage.getItem("cart_id");

        if (cartId) {
            return dispatch(GetItemsInShoppingCart(cartId));
        }
    }

    public removeFromCart = (e: any) => {
        const { dispatch } = this.props;
        return dispatch(RemoveItemFromShopping(e.target.id));
    };
    public render() {
        const { shoppingCart, products } = this.props;
        const items: any = [];
        if (products.rows) {
            shoppingCart.forEach((product: any) => {
                products.rows.forEach((item: any) => {
                    if (item.name === product.name) {
                        const prod = { ...item, ...product };
                        items.push(prod);
                    }
                });
            });
        }

        return (
            <div className="container">
                <div className="table-responsive-sm">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Size</th>
                                <th scope="col">Color</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items
                                ? items.map((item: any, index: any) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <img src={`${BASE_IMAGE_URL}/${item.thumbnail}`} className="card-img-top" alt="product thumbnail" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5 className="text-muted">{item.name}</h5>
                                                        <i className="fa fa-remove" onClick={e => this.removeFromCart(e)}>
                                                            <span className="text-dark" id={item.item_id}>
                                                                {" "}
                                                                Remove
                              </span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>{item.attributes.split(",")[0]}</td>
                                            <td>{item.attributes.split(",")[1]}</td>
                                            <td>{item.quantity}</td>
                                            <td>£{item.price}</td>
                                        </tr>
                                    );
                                })
                                : ""}
                        </tbody>
                        <tfoot>
                            <tr className="table-secondary mr-4">
                                <td colSpan={5} scope="row">
                                    <div className="d-flex justify-content-between">
                                        <a href="/allcategories" className="btn back-to-shop ">
                                            <i className="fa fa-angle-left" /> Back to shop
                                        </a>
                                        <a href="/checkout" className="btn bg mr-4">
                                            Checkout <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products.products || null,
        productAttributes: state.productAttributes.productAttributes || null,
        shoppingCart: state.shoppingCart.shoppingCart || null
    };
};

export default connect(mapStateToProps)(ShoppingCart);
