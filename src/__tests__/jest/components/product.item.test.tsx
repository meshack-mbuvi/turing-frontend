import * as React from 'react';
import * as adapter from 'enzyme-adapter-react-16';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import { ProductItem } from '../../../components/product.item';

Enzyme.configure({ adapter: new adapter() })

const props = {
    product_id: '1',
    thumbnail: 'thumbanil',
    name: 'product',
    buyNow: jest.fn(),
    price: 100,
    quickView: jest.fn()
}

describe('<ProductItem /> component', () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<ProductItem {...props} />)
    })

    it('renders product item correctly', () => {
        expect(wrapper).to.be.length(1)
    })

    it('renders product items', () => {
        expect(wrapper.find('.items').find('.card-body').first().find('.card-text')).to.be.length(2)
    })

    it('displays product items buyNow button', () => {
        expect(wrapper.find('.items').find('.card-body').last().find('.bg')).to.be.length(2)
    })
})
