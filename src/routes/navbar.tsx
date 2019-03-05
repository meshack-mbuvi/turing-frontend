import * as React from "react";
import { Link } from "react-router-dom";

// components
import { connect } from "react-redux";

interface IProps {
    user?: any;
    dispatch?: any;
}

export class Navbar extends React.Component<IProps> {
    public render() {
        const { user } = this.props
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-default">
                    <a className="navbar-brand ml-4" href="/">SHOPMATE</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end mr-5" id="mainNavBar">
                        <div className="navbar-nav nav-item nav-link">
                            <Link to="/women">
                                Women
                            </Link>
                        </div>
                        <div className="navbar-nav nav-item nav-link">
                            <Link to="/men">
                                Men
                            </Link>
                        </div>
                        <div className="navbar-nav nav-item nav-link">
                            <Link to="/kids">
                                Kids
                            </Link>
                        </div>
                        <div className="navbar-nav nav-item nav-link">
                            <Link to="/shoes">
                                Shoes
                            </Link>
                        </div>
                        <div className="navbar-nav nav-item nav-link">
                            <Link to="/brands">
                                Brands
                            </Link>
                        </div>
                        {user && user.isAuthenticated ? '' :
                            (<div className="navbar-nav">
                                <div className="nav-item nav-link">
                                    <Link to="/login">
                                        Login
                            </Link>
                                </div>
                                <div className="nav-item nav-link">
                                    <Link to="/signup">
                                        Signup
                            </Link>
                                </div></div>)}
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (userReducer: any) => {
    return {
        user: userReducer.user || null
    }
}

export default connect(mapStateToProps)(Navbar);
