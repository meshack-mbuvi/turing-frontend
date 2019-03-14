import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AllProducts } from 'src/actions/product.action';

import background from "../images/gamebegin.png"

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
                <div className="row m-auto">
                    <div className="col-sm-12 col-md-5" />
                    <div className="col-sm-12 col-md-7 m-auto">
                        <div className="row">
                            <div className="Vera-Bradley col-sm-12 col-md-12 mt-4">
                                Vera Bradley
                                </div>
                            <div className="Carry-the-day-in-sty col-sm-12 col-md-12 mt-4 mb-4">Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enough perfectly placed pockets to keep smaller items organized and easy to find.
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <Link to='/' className="bg ">Shop now</Link>
                            </div>

                        </div>

                    </div>
                    To be updated soon
              </div>
                <div className="row">
                    <div className="col-sm-4" />
                    <div className="col-sm-12 col-md-7">
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
                    To be updated soon
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
