import * as React from "react";

// components
import { Form } from "../../components/form";
import { Input } from "../../components/input";

export class SignUp extends React.Component {

    public state = {
        name: '', email: '', phone: '', country: '', city: '', address: ''
    }

    public handleChange = (e: any): void => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log('state ', this.state)
    }

    public handleLogin = (e: any): void => {
        e.preventDefault();
        console.log("called");
    };

    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <Form title="User login form" handleSubmit={this.handleLogin}>
                            <div>
                                <Input className="form-control" id="name" placeholder="Enter your full name" onChange={(e) => this.handleChange(e)} required={true} />
                            </div>

                            <div>
                                <Input className="form-control" id="email" type="email" required={true} placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <div>
                                <Input className="form-control" id="phone" required={true} placeholder="Enter your phone number" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <div>
                                <Input className="form-control" id="country" required={true} placeholder="Enter name of your country" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <div>
                                <Input className="form-control" id="city" required={true} placeholder="Enter name of your city" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <div>
                                <Input
                                    className="form-control"
                                    id="postalCode"
                                    required={true}
                                    placeholder="Enter name of your postal address code" onChange={(e) => this.handleChange(e)}
                                />
                            </div>

                            <div>
                                <Input className="form-control" id="card" required={true} placeholder="Enter your card number" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
