import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {
    location?: any;
    dispatch?: any;
    product?: any;
    productAttributes?: any
}

export class Checkout extends React.Component<IProps> {

    public render() {
        return (
            <div className="container">
                <div className="row">
                    This page is under development
                </div>
            </div>
        )
    }
}

export default connect(
)(Checkout)
