import React from "react";
import styled from "styled-components";

import { getThemeByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";


const Elem = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: ${props => props.zIndex};
  visibility: hidden;
  transition: visibility 0.1s;

  &.active {
    visibility: visible;
  }
`;

const InternalWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
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
