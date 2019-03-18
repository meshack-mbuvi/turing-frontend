import * as React from "react";

interface IProps {
  location?: any;
  dispatch?: any;
  product?: any;
  productAttributes?: any;
}

export class NotFound extends React.Component<IProps> {
  public render() {
    return (
      <div className="container">
        <div className="row">That page does not exist</div>
      </div>
    );
  }
}

export default NotFound;
