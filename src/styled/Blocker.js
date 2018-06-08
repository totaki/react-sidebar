import React from 'react';
import styled from 'styled-components';

import { getThemeByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

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
    const theme = getThemeByKeys(
        (props.theme && props.theme.blocker) || defaultTheme.blocker
    );

    return <Elem {...theme} {...props} />
}

export default Blocker;