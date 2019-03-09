import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AllProducts } from 'src/actions/product.action';
import { ProductItem } from 'src/components/product.item';

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
      const { products } = this.props;

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
                                <Link to='/' className="Call-to-Action">view all</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6" />
                </div>
                <div className="row mt-4">
                    <div className="col-sm-12 col-md-4" />
                    <div className="col-sm-12 col-md-8">
                        <div className="row mt-4">
                            {products.rows ? (
                                products.rows.sort((() => .5 - Math.random())).slice(0, 6)
                                    .map((item: any) => {
                                        const thumbnail = `static/product_images/${item.thumbnail}`

                                        return <ProductItem key={item.product_id} product_id={item.product_id} thumbnail={thumbnail} name={item.name} />
                                    })) : ""}

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
