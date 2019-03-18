import * as React from "react";
import { connect } from 'react-redux'

// components
import { Form } from "../../components/molecules/form";
import { Input } from "../../components/atoms/input";
import { Button } from '../../components/atoms/button';

import { SignUpAction } from '../../actions/auth';

interface IProps {
    dispatch?: any;
    customer?: any
}

export class SignUp extends React.Component<IProps> {

    public state = {
        name: '', email: '', password: ''
    }

    public handleChange = (e: any): void => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    public handleSubmit = (e: any): void => {
        e.preventDefault();
        const userData = this.state;
        const { dispatch } = this.props;
        return dispatch(SignUpAction(userData))
    };

    public render() {
        const { customer } = this.props;
        console.log("user ", customer, this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <Form title="Sign up form" handleSubmit={this.handleSubmit}>
                            <div>
                                <Input className="form-control text-center" id="name" placeholder="Enter your full name" onChange={(e) => this.handleChange(e)} required={true} />
                            </div>

                            <div>
                                <Input className="form-control text-center" id="email" type="email" required={true} placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control text-center" id="password" placeholder="Password" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <div className="form-group text-center">
                                <Button type="submit" value="Submit" className="bg" />
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ customer }: any) => {
    return {
        customer: customer || null
    }
}

export default connect(mapStateToProps)(SignUp);
