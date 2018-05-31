import React from 'react';
import Sidebar from '../src/';

describe('Sidebar', () => {
    it('Should not renders by default', () => {
        const sidebar = shallow(<Sidebar />);
        
        expect(sidebar).toMatchSnapshot();
    });

    it('Should renders if active', () => {
        const sidebar = shallow(<Sidebar active={true}/>);

        expect(sidebar).toMatchSnapshot();
    });

    it('Should not renders if not active', () => {
        const sidebar = shallow(<Sidebar active={false}/>);

        expect(sidebar).toMatchSnapshot();
    });
});