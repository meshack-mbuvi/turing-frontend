import * as React from "react";

// components
import { Form } from '../../components/form';
import Label from '../../components/label'
import { Input } from 'src/components/input';
export class Login extends React.Component {

    public handleSignup = (e: any) => {
        e.preventDefault()
        console.log('called')
    }
    public render() {
        return <div className="container">
            <div className="row">
                <div className='col-md-3' />
                <div className='col-md-6'>
                    <Form title='User login form' handleSubmit={this.handleSignup}>
                        <div>
                            <Label htmlFor="email">Email address</Label>
                            <Input className="form-control" id="email" type="email" required={true} placeholder="Enter email" />

                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </div>
            </div>
        </div>;
    }
}

export default Login;
