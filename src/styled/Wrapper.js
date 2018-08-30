import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { getThemeByKeys, innerMerge } from '../utils';
import defaultTheme from '../theme/defaultTheme';


const getTranslateXByLocation = (props) => {
  const location = get(props, 'theme.Sidebar.panel.location', 'left');
  const width = get(props, 'theme.Sidebar.panel.width', '1500px');

  return location === 'left' ? `${width}` : `-${width}`;
}

const getWidth = (props) => {
  const width = get(props, 'theme.Sidebar.panel.width', '1500px');

  return `calc(100% + ${width} + ${width})`;
};

const Elem = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  z-index: ${props => get(props, 'zIndex', '1000')};
  visibility: hidden;
  transition: visibility 0.3s;
  
  &.active {
    visibility: visible;
  }
`;

const InternalWrapper = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  width: ${getWidth};

  transition: 0.5s all;
  left: -${props => get(props, 'theme.Sidebar.panel.width', '1500px')};

  &.active {
    transform: translateX(${getTranslateXByLocation});
`;

const Wrapper = props => {

  const merged = innerMerge(
    {},
    defaultTheme.Sidebar.wrapper,
    (props.theme && props.theme.Sidebar && props.theme.Sidebar.wrapper) || {}
  );

  const theme = getThemeByKeys(merged);
  return (
    <Elem {...theme} {...props}>
      <InternalWrapper {...theme} {...props} />
    </Elem>
  );
};

export default Wrapper;
