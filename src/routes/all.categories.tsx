import * as React from "react";
import { connect } from "react-redux";
import { AllProducts } from "src/actions/product.action";
import { ProductItem } from "src/components/product.item";
import { GetCategories } from '../actions/categories';
import { GetDepartments } from '../actions/departments';

const defaultUrl = `/products`;

const BASE_IMAGE_URL = `https://raw.githubusercontent.com/zandoan/turing-frontend/master/Images/product_images`

interface IProps {
    history?: any;
    products?: any;
    dispatch?: any;
    categories?: any;
    departments?: any
}
export class AllCategories extends React.Component<IProps> {
    public state = {
        currentPage: 1,
        lastPage: -1
    };
    public componentDidMount() {
        const { dispatch } = this.props;
        dispatch(AllProducts())
        dispatch(GetDepartments())
        return dispatch(GetCategories());
    }

    public buyNow = (e: any) => {
        e.preventDefault();
        const url = `/addtocart/${e.target.id}`;
        const { history } = this.props;
        history.push(url);
    };

    public quickView = (e: any) => {
        const url = `/products/${e.target.id}`;
        const { history } = this.props;
        return history.push(url);
    }

    public getByCategory = (e: any) => {
        const catId = e.target.id
        const url = `${defaultUrl}/inCategory/${catId}`

        const { dispatch } = this.props;
        return dispatch(AllProducts(url))
    }

    public getByDepartment = (e: any) => {
        const departmentId = e.target.id
        const url = `${defaultUrl}/inDepartment/${departmentId}`

        const { dispatch } = this.props;
        return dispatch(AllProducts(url))
    }

    public handlePageChange = (paginationUrl: any, page: any, e: any) => {
        let { currentPage } = this.state;

        const limit = 6;

        let localPaginationUrl = paginationUrl;
        if (e) {
            if (e.target.id === "paginationNext") {
                this.setState({ currentPage: currentPage += 1 });
            }
            if (e.target.id === "paginationPrevious") {
                this.setState({ currentPage: currentPage -= 1 });
            }
        }

        if (page) {
            this.setState({
                currentPage: page
            });
            localPaginationUrl = `${defaultUrl}?page=${page}?&limit=${limit}`;
        } else {
            AllProducts(localPaginationUrl);
        }
    };

    public renderPaginationButtons() {
        const { products } = this.props;
        const { currentPage } = this.state;
        const pageButtons = [];
        const prodCount = products.count.count ? products.count.count : products.count

        for (let pageNumber = 1; pageNumber <= Math.ceil(prodCount / 6); pageNumber += 1) {
            pageButtons.push(
                <button
                    id={pageNumber.toString()}
                    className={currentPage === pageNumber ? "btn m-auto pg-button active" : "btn"}
                    key={pageNumber}
                    type="button"
                    onClick={e => this.handlePageChange(null, pageNumber, e)}
                >
                    {pageNumber}
                </button>
            );
        }
        const lower = currentPage > 3 ? currentPage - 3 : 1;
        const upper = currentPage > 3 ? currentPage + 2 : currentPage;

        let buttonsToRender = pageButtons.slice(lower, upper);

        if (buttonsToRender.length < 4) {
            buttonsToRender = pageButtons.slice(0, 5);
        }

        return (
            <div className="d-flex justify-content-center mt-4 mb-4">

                <div>
                    <button
                        id="paginationPrevious"
                        className={"btn btn-light disabled"}
                        type="button"
                        onClick={e => this.handlePageChange(null, currentPage - 1, e)}
                    >
                        <i className="fa fa-angle-left"> Back</i>
                    </button>
                    {buttonsToRender.slice(0, 5)}
                    {buttonsToRender.slice(0, 5)[buttonsToRender.length - 1].props.id > pageButtons.length - 1 ? (
                        ""
                    ) : (
                            <span>...{pageButtons[pageButtons.length - 1]}</span>
                        )}
                    <button
                        id="paginationPrevious"
                        className={"btn btn-light disabled"}
                        type="button"
                        onClick={e => this.handlePageChange(null, currentPage + 1, e)}
                    >
                        Forward <i className="fa fa-angle-right" />
                    </button>
                </div>

            </div>
        );
    }

    public render() {
        const { products, categories, departments } = this.props;

        const randomItem = products.rows
            ? products.rows[Math.floor(Math.random() * products.rows.length)] : ''

        return (
            <div className="container-fluid">
                <div className="row mt-1">
                    <div className="col-sm-12 col-md-4">
                        <div className="text-danger ml-4">Shop by department</div>
                        {
                            departments ? departments.map((dep: any, index
                                : any) =>
                                <h5 className='cat ml-5' id={dep.department_id} key={index} onClick={(e) => this.getByDepartment(e)}>{dep.name}</h5>
                            ) : ''
                        }
                        <div className="text-danger ml-4">Shop by category</div>
                        {categories && categories.rows ? categories.rows.map((cat: any, index
                            : any) =>
                            <h5 className='cat ml-5' id={cat.category_id} key={index} onClick={(e) => this.getByCategory(e)}>{cat.name}</h5>
                        ) : ''}

                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 bg-img"><p className="text-center Let-the-Game-begin m-auto">New Trend</p>
                            </div>

                            <div className="col-sm-12 col-md-7 blue mt-2"><p className="text-center Let-the-Game-begin m-auto">Blue</p>
                            </div>

                            <div className="col-sm-12 col-md-5 orange mt-2"><p className="text-center Let-the-Game-begin m-auto">Orange</p>
                            </div>
                        </div>

                    </div>
                </div>

                {randomItem ? (
                    <div className="row mt-1">
                        <div className="col-sm-12 col-md-4 d-flex justify-content-center">
                            <img src={`${BASE_IMAGE_URL}/${randomItem.thumbnail}`} className='randomItemThumbnail mr-2 mt-4' />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <h3 className="mt-4">{randomItem.name} <span className="text-danger">£{randomItem.price}</span></h3>
                            <p className="text-muted">{randomItem.description}</p>
                            <button onClick={(e) => this.buyNow(e)} id={randomItem.product_id} className="bg mt-2">Add to cart</button>
                        </div>
                    </div>
                )
                    : ''
                }

                <div className="row mt-1">
                    <div className="col-sm-12 col-md-12">{products.rows && this.renderPaginationButtons()}</div>
                    <div className="col-sm-12 col-md-4" />
                    <div className="col-sm-12 col-md-8">
                        <div className="row mt-1">
                            {products.rows
                                ? products.rows
                                    .sort(() => 0.5 - Math.random())
                                    .slice(0, 6)
                                    .map((item: any) => {
                                        const thumbnail = `${BASE_IMAGE_URL}/${item.thumbnail}`;

                                        return (
                                            <ProductItem
                                                key={item.product_id}
                                                product_id={item.product_id}
                                                thumbnail={thumbnail}
                                                name={item.name}
                                                buyNow={this.buyNow}
                                                price={item.price}
                                                quickView={this.quickView}
                                            />
                                        );
                                    })
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products.products || null,
        categories: state.categories.categories || null,
        departments: state.departments.departments || null
    };
};

export default connect(mapStateToProps)(AllCategories);
