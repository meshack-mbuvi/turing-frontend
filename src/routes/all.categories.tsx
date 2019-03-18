import * as React from "react";
import { connect } from "react-redux";
import { AllProducts } from "../actions/product.action";
import { ProductItem } from "../components/product.item";
import { GetCategories } from "../actions/categories";
import { GetDepartments } from "../actions/departments";

const defaultUrl = `/products`;

const BASE_IMAGE_URL = `https://raw.githubusercontent.com/zandoan/turing-frontend/master/Images/product_images`;

interface IProps {
  history?: any;
  products?: any;
  dispatch?: any;
  categories?: any;
  departments?: any;
}
export class AllCategories extends React.Component<IProps> {
  public state = {
    currentPage: 1,
    lastPage: -1,
  };

  public componentDidMount() {
    this.getAllProducts();
  }

  public getAllProducts = () => {
    const { dispatch } = this.props;
    dispatch(AllProducts());
    dispatch(GetDepartments());
    return dispatch(GetCategories());
  };

  public buyNow = (e: any) => {
    e.preventDefault();
    const url = `/products/${e.target.id}`;
    const { history } = this.props;
    return history.push(url);
  };

  public getByCategory = (e: any) => {
    const catId = e.target.id;
    const url = `${defaultUrl}/inCategory/${catId}`;

    const { dispatch } = this.props;
    return dispatch(AllProducts(url));
  };

  public getByDepartment = (e: any) => {
    const departmentId = e.target.id;
    const url = `${defaultUrl}/inDepartment/${departmentId}`;

    const { dispatch } = this.props;
    return dispatch(AllProducts(url));
  };

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
        currentPage: page,
      });
      localPaginationUrl = `${defaultUrl}?page=${page}?&limit=${limit}`;
    } else {
      AllProducts(localPaginationUrl);
    }
  };

  public renderPaginationButtons() {
    const {
      products: { rows: products },
    } = this.props;
    const { currentPage } = this.state;
    const pageButtons = [];

    for (
      let pageNumber = 1;
      pageNumber <= Math.ceil(products.length / 6);
      pageNumber += 1
    ) {
      pageButtons.push(
        <button
          id={`p` + pageNumber.toString()}
          className={
            `pageButtons` +
            (currentPage === pageNumber
              ? " btn circle m-auto pg-button active"
              : " btn circle")
          }
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
        <div id="paginationButtons">
          <button
            id="paginationPrevious"
            className={"btn btn-light disabled"}
            type="button"
            onClick={e => this.handlePageChange(null, currentPage - 1, e)}
          >
            <i className="fa fa-angle-left"> Back</i>
          </button>
          {buttonsToRender.slice(0, 5)}
          {buttonsToRender.slice(0, 5)[buttonsToRender.length - 1].props.id >
          pageButtons.length - 1 ? (
            ""
          ) : (
            <span>...{pageButtons[pageButtons.length - 1]}</span>
          )}
          <button
            id="paginationNext"
            className={"btn btn-light disabled"}
            type="button"
            onClick={e => this.handlePageChange(null, currentPage + 1, e)}
          >
            Next <i className="fa fa-angle-right" />
          </button>
        </div>
      </div>
    );
  }

  public render() {
    const { products, categories, departments } = this.props;

    return (
      <div className="container-fluid">
        <div className="row mt-1">
          <div className="col-sm-12 col-md-3 left">
            <ul className="ml-0">
              Filter by:
              <li className="filter ml-4" onClick={e => this.getAllProducts()}>
                All
              </li>
              <li className="filter ml-4">
                Department
                <ul>
                  {departments &&
                    departments.map((dep: any, index: any) => (
                      <li
                        className="filter ml-2"
                        id={dep.department_id}
                        key={index}
                        onClick={e => this.getByDepartment(e)}
                      >
                        <i className="fa fa-angle-right mr-2" />
                        {dep.name}
                      </li>
                    ))}
                </ul>
              </li>
              <li className="filter ml-4">
                Category
                <ul>
                  {categories &&
                    categories.rows &&
                    categories.rows.map((cat: any, index: any) => (
                      <li
                        className="filter ml-2"
                        id={cat.category_id}
                        key={index}
                        onClick={e => this.getByCategory(e)}
                      >
                        <i className="fa fa-angle-right mr-2" />
                        {cat.name}
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-9">
            <div className="row">
              <div className="col-sm-12 col-md-12 bg-img mb-4 mr-4">
                <p className="text-center Let-the-Game-begin m-auto">
                  New Trend
                </p>
              </div>

              <div className="col-sm-12 col-md-12 m-auto">
                <div className="row mt-1 products">
                  {products &&
                    products.rows &&
                    products.rows
                      .sort(() => 0.5 - Math.random())
                      .slice(0, 8)
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
                          />
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 mr-0 pagination justify-content-center">
          <div className="col-sm-12 col-md-12">
            {products && products.rows && this.renderPaginationButtons()}
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
    departments: state.departments.departments || null,
  };
};

export default connect(mapStateToProps)(AllCategories);
