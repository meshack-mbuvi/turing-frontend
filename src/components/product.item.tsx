import * as React from "react";

interface IProps {
    product_id: string;
    thumbnail?: string;
    name?: string;
    buyNow?: any;
    price?: any;
    quickView?: any
}

interface IState {
    isHovered?: boolean
}
export class ProductItem extends React.Component<IProps, IState>{

    public state = {
        isHovered: false
    };

    public handleHover = () => {
        const { isHovered } = this.state
        this.setState({
            isHovered: !isHovered
        });
    }
    public render() {
        const { thumbnail, price, name, product_id, buyNow, quickView } = this.props;
        const { isHovered } = this.state
        return (
            <div className="col-sm-12 col-md-4" onMouseEnter={(e: any) => this.handleHover()} onMouseLeave={(e: any) => this.handleHover()}>
                <div className="card mt-2">
                    <img className="card-img-top" src={thumbnail} alt="Card image cap" />
                    <div className="card-body text-center">
                        <p className="card-text">{name}</p>
                        <p className="card-text text-danger">£{price}</p>

                    </div>
                </div>
                <div className={`card mt-2` + (isHovered ? ' overlay' : ' hideOverlay')} >
                    <div className="card-body text-center center-block">
                        <button onClick={(e) => buyNow(e)} id={product_id} className="bg mt-2">Buy now</button>
                        <button onClick={(e) => quickView(e)} id={product_id} className="bg mt-2">Quick view</button>
                    </div>
                </div>
            </div>
        );
    }

};
