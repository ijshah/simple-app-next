import { shallow } from 'enzyme'
import React from 'react'

import PageContain from './index'

describe('PageContain', () => {
  it('Welcome to Simple Page!', () => {
    const pageContain = shallow(<PageContain />);

    expect(pageContain.find('h1').text()).toEqual('Welcome to Simple Page!')
  })
})