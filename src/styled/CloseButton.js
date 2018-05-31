import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
    position: absolute;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    top: ${props => props.top};
    right: ${props => props.right};
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border};
`;

const CloseButton = props => {
    const theme = getThemeAsPlainTextByKeys(
        (props.theme && props.theme) || defaultTheme.panel.closeButton
    );

    return <Elem {...theme} {...props} />;
};

export default CloseButton;
