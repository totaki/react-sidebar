import React from "react";
import styled from "styled-components";

import { getThemeByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${props => props.zIndex};
  visibility: hidden;
  transition: visibility 0.1s;

  &.active {
    visibility: visible;
  }
`;

const Wrapper = props => {

  const merged = innerMerge(
    {},
    defaultTheme.Sidebar.wrapper,
    (props.theme && props.theme.Sidebar && props.theme.Sidebar.wrapper) || {}
  );

  const theme = getThemeByKeys(merged);

  return <Elem {...theme} {...props} />;
};

export default Wrapper;
