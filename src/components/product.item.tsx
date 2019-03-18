import * as React from 'react';

interface IProps {
 product_id: string;
 thumbnail?: string;
 name?: string;
 buyNow?: any;
 price?: any;
}

interface IState {
 isHovered?: boolean;
}
export class ProductItem extends React.Component<IProps, IState> {
 public state = {
  isHovered: false
 };

 public handleHover = () => {
  const { isHovered } = this.state;
  this.setState({
   isHovered: !isHovered
  });
 };
 public render() {
  const { thumbnail, price, name, product_id, buyNow } = this.props;
  const { isHovered } = this.state;
  return (
   <div
    className="col-sm-12 col-md-3 m-auto items"
    onMouseEnter={(e: any) => this.handleHover()}
    onMouseLeave={(e: any) => this.handleHover()}
   >
    <div className="card mt-2">
     <img className="card-img-top" src={thumbnail} alt="Card image cap" />
     <div className="card-body text-center">
      <p className="card-text">{name}</p>
      <p className="card-text text-danger">£{price}</p>
     </div>
    </div>
    <div className={`card mt-2` + (isHovered ? ' overlay' : ' hideOverlay')}>
     <div className="card-body text-center center-block row">
      <div className="col-md-12">
       <button onClick={e => buyNow(e)} id={product_id} className="bg">
        Buy now
       </button>
      </div>
     </div>
    </div>
   </div>
  );
 }
}
