import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${props => props.zIndex}
`;

const Panel = props => {
    const theme = getThemeAsPlainTextByKeys(
        (props.theme && props.theme) || defaultTheme.wrapper
    );

    return <Elem {...theme} {...props} />
};

export default Panel;
