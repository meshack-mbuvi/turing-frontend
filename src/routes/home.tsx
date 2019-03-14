import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AllProducts } from 'src/actions/product.action';

import background from "../images/gamebegin.png"

const BASE_IMAGE_URL = `https://raw.githubusercontent.com/zandoan/turing-frontend/master/Images/product_images`

interface IProps {
    history?: any;
    products?: any;
    dispatch?: any;
}
export class Home extends React.Component<IProps> {
    public componentWillMount() {
        const { dispatch } = this.props;
        return dispatch(AllProducts())
    }

    public render() {
        const { products } = this.props
        const productItem = products.rows
            ? products.rows
                .sort(() => 0.5 - Math.random())
                .slice(0, 1) : ''

        return (
            <div className="container-fluid">
                <div className='row bg-image'>
                    <div className="col-sm-12 col-md-9 background d-flex align-middle center-block mt-md-0">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">Background and development</div>

                            <div className="col-sm-12 col-md-9 mt-4">
                                Convergent the dictates of the consumer: background and development
                            </div>
                            <div className="col-sm-12 col-md-12 mt-4">
                                <Link to='/allcategories' className="Call-to-Action">view all</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6" />
                </div>
                {productItem ? productItem.map((item: any, index: any) => {
                    return <div className="row m-auto" key={index}>

                        <div className="col-sm-12 col-md-5" >
                            <img src={`${BASE_IMAGE_URL}/${item.thumbnail}`} className='randomItemThumbnail mr-2 mt-4' />
                        </div>
                        <div className="col-sm-12 col-md-7 m-auto">
                            <div className="row">
                                <div className="Vera-Bradley col-sm-12 col-md-12 mt-4">
                                    {item.name}
                                </div>
                                <div className="Carry-the-day-in-sty col-sm-12 col-md-12 mt-4 mb-4">{item.description}
                                </div>
                                <div className="col-sm-12 col-md-12">
                                    <Link to='/allcategories' className="bg ">Shop now</Link>
                                </div>

                            </div>

                        </div>
                    </div>
                }) : ''}

                <div className="row">
                    <div className="col-sm-4" />
                    <div className="col-sm-12 col-md-12">
                        <div className="row">

                            <div className="col-md-12 mt-4">
                                <img src={background} className="Bitmap" />
                                <p className="text-center Let-the-Game-begin m-auto">Let the game begin</p>
                                <p className="m-auto Registration-is-on text-center">
                                    Registration is on - get ready for the Open
                            </p>
                                <div className="col-md-12 mt-5 text-center">
                                    <Link to='/signup' className="bg mt-5">Register</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ products }: any) => {
    return {
        products: products.products || null
    }
}

export default connect(
    mapStateToProps
)(Home);
