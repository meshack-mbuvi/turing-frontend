import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./home";
import Navbar from "./navbar";
import Login from './auth/login';
import SignUp from './auth/signup'

export class Index extends React.Component {
    public render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path='/signup' component={SignUp} />
                </div>
            </Router>
        );
    }
}

export default Index as React.ComponentType<any>;
