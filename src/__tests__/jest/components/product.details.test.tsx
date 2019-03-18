import * as React from 'react';
import { mount } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ProductDetails from '../../../routes/product.details'
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() })

const middleWare = [thunk]
const mockStore = configureStore(middleWare);

let store: any;
let wrapper: any;

const initialState = {
    customer: [],
    shoppingCart: [],
    products: {
        products: [
            {
                "product_id": 1,
                "name": "Arc d'Triomphe",
                "description": "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
                "price": "14.99",
                "discounted_price": "0.00",
                "thumbnail": "arc-d-triomphe-thumbnail.gif"
            }]

    },
    productAttributes: {
        productAttributes: [
            {
                "attribute_name": "Color",
                "attribute_value_id": 6,
                "attribute_value": "White"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 7,
                "attribute_value": "Black"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 8,
                "attribute_value": "Red"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 9,
                "attribute_value": "Orange"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 10,
                "attribute_value": "Yellow"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 11,
                "attribute_value": "Green"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 12,
                "attribute_value": "Blue"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 13,
                "attribute_value": "Indigo"
            },
            {
                "attribute_name": "Color",
                "attribute_value_id": 14,
                "attribute_value": "Purple"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 1,
                "attribute_value": "S"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 2,
                "attribute_value": "M"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 3,
                "attribute_value": "L"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 4,
                "attribute_value": "XL"
            },
            {
                "attribute_name": "Size",
                "attribute_value_id": 5,
                "attribute_value": "XXL"
            }
        ]
    }

}

const props = {
    location: { pathname: 'https://products/1' }
}

beforeAll(() => {
    store = mockStore(initialState);
    wrapper = mount(
        <Provider store={store}>
            <Router >
                <ProductDetails {...props} />
            </Router>
        </Provider>)
})
describe('<ProductDetails />', () => {
    it('renders product details', () => {
        expect(wrapper.find('.item-image')).to.be.length(1)
    })

    it('renders product thumbnails', () => {
        expect(wrapper.find('.thumbnail')).to.be.length(3)
    })

    it('displays attribute for color white', () => {
        expect(wrapper.find('#White')).to.be.length(1)
    })

    it('displays button to change quantity', () => {
        expect(wrapper.find('#minus').simulate('click'));
        expect(wrapper.find('#add').simulate('click'));
        expect(wrapper.find('#minus').simulate('click'));
    })

    it('simulate adding item to shopping cart', () => {
        expect(wrapper.find('Form').simulate('submit'));
    })

    it('simulate select product properties and add item to shopping cart', () => {
        wrapper.find('#White').simulate('click');
        wrapper.find('#M').simulate('click');
        expect(wrapper.find('Form').simulate('submit'))
    })
})
