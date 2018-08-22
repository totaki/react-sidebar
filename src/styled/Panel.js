import React from "react";
import styled from "styled-components";

import { getThemeByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

function getPositionByLocation({ location, width }) {
  console.log('Location -> ', location);
  console.log('width -> ', width);
  switch (location) {

    case 'left':
      return `
        top: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-${width});
      `;
    default:
      return `
        top: 0;
        bottom: 0;
        right: 0;
        transform: translateX(${width});
      `;

  }
}

const Elem = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: ${props => props.width};
  align-items: start;
  background-color: ${props => props.backgroundColor};
  transition: 0.5s all;

  ${props => getPositionByLocation(props)}

  .active & {
    transform: translateX(0);
  }
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
