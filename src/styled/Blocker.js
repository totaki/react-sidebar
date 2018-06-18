import React from "react";
import styled from "styled-components";

import { getThemeByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
