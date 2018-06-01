import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.backgroundColor}
`;

const Blocker = props => {
    const theme = getThemeAsPlainTextByKeys(
        (props.theme && props.theme) || defaultTheme.blocker
    );

    return <Elem {...theme} {...props} />
}

export default Blocker;