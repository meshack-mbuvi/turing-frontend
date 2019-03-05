import * as React from "react";
import { connect } from "react-redux";

interface IProps {
    history?: any;
    user?: any;
    twits?: any;
    dispatch?: any;
}
export class Home extends React.Component<IProps> {

    public render() {
        return (
            <div className="container-fluid">
                <div className='row bg'>m
                </div>
                <div className="row">
                    To be updated soon
              </div>

            </div>
        );
    }
}

export default connect(
    null
)(Home);
