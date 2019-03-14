import * as React from 'react';
import { connect } from 'react-redux';

import { getProduct } from 'src/actions/product.action';
import { GetProductAttributes } from '../actions/product.action';
import { Button } from "../components/atoms/button"
import { Form } from "../components/molecules/form"

import { AddToShopping } from 'src/actions/shopping.cart';

const BASE_IMAGE_URL = `https://raw.githubusercontent.com/zandoan/turing-frontend/master/Images/product_images`

interface IProps {
    location?: any;
    dispatch?: any;
    product?: any;
    productAttributes?: any
}

export class ProductDetails extends React.Component<IProps> {
    public state = {
        value: 1,
        Color: '', Size: '', error: ''
    }
    public componentDidMount() {
        const { location, dispatch } = this.props;
        const productId = location.pathname.split('/')[2]
        dispatch(getProduct(productId));
        dispatch(GetProductAttributes(productId))
    }

    public changeQty = (e: any) => {
        const id = e.target.id;
        const { value } = this.state

        if (id === 'minus') {
            if (value === 1) {
                this.setState({
                    value
                })
            }
            else {
                this.setState({
                    value: value - 1
                })
            }
        }
        else {
            this.setState({
                value: value + 1
            })
        }
    }

    public selectColor = (e: any) => {
        this.setState({
            Color: e.target.id, error: ''
        })
    }
    public selectSize = (e: any) => {
        this.setState({
            Size: e.target.id, error: ''
        })
    }

    public handleSubmit = (e: any) => {
        e.preventDefault()

        const { Color, Size, value } = this.state;
        const attrValues: any = []

        if (Color && Size) {
            attrValues.push(Size)
            attrValues.push(Color)
        }

        const cartId = localStorage.getItem('cart_id')
        const { dispatch, product } = this.props;

        if (attrValues.length < 2) {
            this.setState({ error: 'Please make sure to select attributes' })
            return null
        }

        const item = {
            product_id: product.product_id,
            cart_id: cartId,
            attributes: attrValues.toString(), quantity: value
        }

        this.setState({ error: '' })
        return dispatch(AddToShopping(item))
    }

    public render() {
        const { product, productAttributes } = this.props;
        const { value, error } = this.state

        let attributeTypes = null

        if (productAttributes) {
            attributeTypes = [...new Set(productAttributes.map((attribute: any) => attribute.attribute_name))]
        }

        const thumbnail = `${BASE_IMAGE_URL}/${product.thumbnail}`

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="row">
                            <div className="mb-5 mt-2 col-md-12 center-block">
                                <img className="item-image" src={thumbnail} alt="" />
                            </div>

                            <div className="col-md-12 col-sm-12 center-block mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-3 col-sm-6 center-block">
                                        <img className="thumbnail" src={`${BASE_IMAGE_URL}/${product.image}`} alt="" />
                                    </div>
                                    <div className="col-md-3 col-sm-6 center-block">
                                        <img className="thumbnail" src={`${BASE_IMAGE_URL}/${product.image_2}`} alt="" />
                                    </div>

                                    <div className="col-md-3 col-sm-6 center-block">
                                        <img className="thumbnail" src={`${BASE_IMAGE_URL}/${product.image}`} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-12 col-md-8">
                        <Form title="" handleSubmit={(e: any) => this.handleSubmit(e)}>
                            <p>{product.description}</p>
                            <p className="card-text text-danger">
                                £{product.price}
                            </p>
                            <p className="card-text text-danger">{error ? error : ''}</p>

                            {
                                attributeTypes ? attributeTypes.map((attributeType, index) => {
                                    return <div className="form-group" key={index}>
                                        <p className="text-muted">{attributeType}</p>
                                        {productAttributes.map((attribute: any, index1: any) => {
                                            return attribute.attribute_name === attributeType ?
                                                <button id={attribute.attribute_value}
                                                    className={`${attribute.attribute_value}` + (attributeType === 'Color' ? ' btn btn-circle selected' : ' btn btn-rec  selected')}
                                                    key={index1}
                                                    onClick={attributeType === 'Color' ? ((e: any) => this.selectColor(e)) : ((e: any) => this.selectSize(e))}>
                                                    {attributeType === 'Color' ? '' : attribute.attribute_value}

                                                </button> : ''

                                        })}
                                    </div>
                                })
                                    : ''
                            }
                            <p className="text-muted">Quantity</p>
                            <button className="btn-round mr-1" onClick={(e) => { this.changeQty(e) }} id="minus">-</button>
                            <button className="btn-rec text-center black" id="qty" disabled={true}>{value}</button>

                            <button className="btn-round ml-1" onClick={(e: any) => this.changeQty(e)} id="add">+</button>

                            <div className="form-group mt-1">
                                <Button type="submit" value="Add to cart" className="bg mb-4 mt-4" />
                            </div>
                        </Form>

                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {

    return {
        product: state.products.products || null,
        productAttributes: state.productAttributes.productAttributes || null
    }
}

export default connect(
    mapStateToProps
)(ProductDetails)
