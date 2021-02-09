import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from '../NavigationItems';
import NavigationItem from './NavigationItem';

configure({adapter : new Adapter()});

describe('navigationItem', () => {
    it('it should render 2 navigation items', () => {
        const wrapper = shallow(<NavigationItems />);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
});