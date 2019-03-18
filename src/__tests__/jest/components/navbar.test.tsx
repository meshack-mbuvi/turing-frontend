import * as React from 'react';
import { expect } from 'chai';
import * as Enzyme from 'enzyme';
import { mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';
import Navbar from '../../../routes/navbar';
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import localStorage from '../../localStorage'

Enzyme.configure({ adapter: new Adapter() })

const middleWare = [thunk]

let wrapper: any;
let store: any;

const initialState = {
    customer: [],
    dispatch: jest.fn(),
    shoppingCart: []
}

const mockStore = configureStore(middleWare)
beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
        value: localStorage,
        writable: true
    })
    store = mockStore(initialState);
    wrapper = mount(
        <Provider store={store}>
            <Router>
                <Navbar />
            </Router>
        </Provider>)
})

describe('<Navbar/> ', () => {

    it('renders the navbar links ', () => {
        expect(wrapper.find(Link).length).to.be.equal(7)
    })

})
