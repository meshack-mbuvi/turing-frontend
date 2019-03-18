import * as React from "react";
import { connect } from "react-redux";

// components
import { Form } from "../../components/molecules/form";
import Label from "../../components/atoms/label";
import { Input } from "../../components/atoms/input";
import { LoginAction } from "../../actions/auth";
import { Button } from "../../components/atoms/button";

interface IProps {
    dispatch?: any;
    customer?: any;
    history?: any;
}
export class Login extends React.Component<IProps> {
    public state = {
        email: "",
        password: ""
    };

    public handleChange = (e: any): void => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    public handleLogin = (e: any): void => {
        e.preventDefault();
        const userData = this.state;
        const { dispatch } = this.props;
        return dispatch(LoginAction(userData));
    };
    public render() {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
            this.props.history.push("/");
            return null;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <Form title="User login form" handleSubmit={this.handleLogin}>
                            <div>
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    className="form-control text-center"
                                    id="email"
                                    type="email"
                                    required={true}
                                    placeholder="Enter email"
                                    onChange={e => this.handleChange(e)}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control text-center"
                                    id="password"
                                    placeholder="Password"
                                    onChange={e => this.handleChange(e)}
                                />
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
    };
};

export default connect(mapStateToProps)(Login);
