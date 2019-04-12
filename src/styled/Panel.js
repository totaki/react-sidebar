import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { getThemeByKeys, innerMerge } from '../utils';
import defaultTheme from '../theme/defaultTheme';


const Elem = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: ${props => get(props, 'width', '1000px')};
  align-items: start;
  overflow: hidden;
  background-color: ${props => get(props, 'backgroundColor', 'black')};
  box-shadow: ${props => get(props, 'boxShadow', '')};
`;

const Panel = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Sidebar.panel,
    (props.theme && props.theme.Sidebar && props.theme.Sidebar.panel) || {}
  );

  const theme = getThemeByKeys(merged);

  return <Elem {...theme} {...props} />;

};

export default Panel;
