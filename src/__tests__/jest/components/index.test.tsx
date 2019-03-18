import * as React from 'react';
import { expect } from 'chai';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Index from '../../../routes/index'

Enzyme.configure({ adapter: new Adapter() })

describe('<Index/>', () => {
    const wrapper = shallow(<Index />)

    it('renders index component correctly', () => {
        expect(wrapper.find('.index')).to.be.length(1)
    })
})
