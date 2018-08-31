import React from 'react';
import Sidebar from '../src/';

describe('Sidebar', () => {
    it('Should renders if active', () => {
      const sidebar = mount(
        <Sidebar theme={{}} active={true} onClose={jest.fn()}/>
      );
      expect(sidebar).toMatchSnapshot();
    });

    it('Should not renders if not active', () => {
      const sidebar = mount(
        <Sidebar theme={{}} active={false} onClose={jest.fn()}/>
      );
      expect(sidebar).toMatchSnapshot();
    });

    it('should render left and right panels at the same time', () => {
      const sidebar = mount(
        <Sidebar theme={{}} active={true} onClose={jest.fn()}/>
      );
      expect(sidebar.find('Panel').length).toEqual(2);
    });

    it('should render child at left panel', () => {
      const ChildrenComponent = () => <div>Test</div>
      const sidebar = mount(
        <Sidebar theme={{}} active={true} onClose={jest.fn()}>
          <ChildrenComponent />
        </Sidebar>
      );

      expect(sidebar.find('Panel').at(0).find('ChildrenComponent').length).toEqual(1);
    });

    it('should render child at right panel', () => {
      const ChildrenComponent = () => <div>Test</div>
      const sidebar = mount(
        <Sidebar theme={{}} active={true} onClose={jest.fn()}>
          <ChildrenComponent />
        </Sidebar>
      );

      expect(sidebar.find('Panel').at(1).find('ChildrenComponent').length).toEqual(1);
    });

    it('should call onClose', () => {
      const onClose = jest.fn();
      const sidebar = mount(
        <Sidebar
          theme={{}}
          active={true}
          onClose={onClose}
        />);
      sidebar.find('Blocker').simulate('click');
      expect(onClose).toHaveBeenCalledTimes(1);
    });
});