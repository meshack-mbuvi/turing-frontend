import * as React from "react";
import { Link } from 'react-router-dom';

interface IProps {
    product_id: string;
    thumbnail?: string;
    name?: string;
}
export const ProductItem: React.SFC<IProps> = ({
    product_id,
    name,
    thumbnail,
}) => {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card mt-2">
                <img className="card-img-top" src={thumbnail} alt="Card image cap" />
                <div className="card-body text-center">
                    <p className="card-text">{ name }</p>
                    <Link to='/' className="bg mt-2">Buy now</Link>
                </div>
            </div>
        </div>
    );
};
