import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { getThemeByKeys, innerMerge } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  width: 100vw;
  opacity: 0.3;
  background-color: ${props => get(props, 'backgroundColor', 'black')};
  opacity: 0;
  transition: opacity 1s;
  .active & {
    opacity: 1;
  }
`;

const Blocker = props => {

  const merged = innerMerge(
    {},
    defaultTheme.Sidebar.blocker,
    (props.theme && props.theme.Sidebar && props.theme.Sidebar.blocker) || {}
  );

  const theme = getThemeByKeys(merged);


  return <Elem {...theme} {...props} />;
};

export default Blocker;
