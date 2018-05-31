import React from 'react';
import Sidebar from '../src/';

describe('Sidebar', () => {
    it('Should renders without problems', () => {
        const sidebar = shallow(<Sidebar active={true}/>);

        expect(sidebar).toMatchSnapshot();
    });
});