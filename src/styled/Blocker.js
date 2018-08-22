import React from "react";
import styled from "styled-components";

import { getThemeByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  width: 
  ${props => props.theme && props.theme.Sidebar && props.theme.Sidebar.panel && props.theme.Sidebar.panel.width 
    ? `calc(100% - ${props.theme.Sidebar.panel.width})`
    : '100%'};
  background: red;
  opacity: 0.3;
  background-color: ${props => props.backgroundColor};
  opacity: 0;

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
