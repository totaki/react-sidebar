import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${props => props.zIndex ? props.zIndex : '1000'};
    width: 100%;
    height: 100%;
    background-color: ${props => props.backgroundColor}
`;

const Blocker = props => {
    const theme = getThemeAsPlainTextByKeys(
        (props.theme && props.theme) || defaultTheme.blocker
    );

    return <Elem {...theme} {...props} />
}

export default Blocker;