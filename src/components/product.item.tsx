import * as React from "react";

interface IProps {
    product_id: string;
    thumbnail?: string;
    name?: string;
    buyNow?: any;
    price?: any
}
export const ProductItem: React.SFC<IProps> = ({
    product_id,
    name,
    thumbnail,
    buyNow, price
}) => {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card mt-2">
                <img className="card-img-top" src={thumbnail} alt="Card image cap" />
                <div className="card-body text-center">
                    <p className="card-text">{name}</p>
                    <p className="card-text text-danger">£{price}</p>
                    <button onClick={(e) => buyNow(e)} id={product_id} className="bg mt-2">Buy now</button>
                </div>
            </div>
        </div>
    );
};
