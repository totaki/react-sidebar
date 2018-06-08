import React from 'react';
import styled from 'styled-components';

import { getThemeByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

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
    const theme = getThemeByKeys(
        (props.theme && props.theme.wrapper) || defaultTheme.wrapper
    );

    return <Elem {...theme} {...props} />
};

export default Wrapper;
