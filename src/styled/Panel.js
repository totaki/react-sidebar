import React from 'react';
import styled from 'styled-components';

import { getThemeByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

function getPositionByLocation(location) {
    switch(location) {
        case 'left':
            return `
                top: 0;
                bottom: 0;
                left: 0;
            `;
        default:
            return `
                top: 0;
                bottom: 0;
                right: 0;
            `;        
    }
}

const Elem = styled.div`
    position: absolute;
    width: ${props => props.width};
    background-color: ${props => props.backgroundColor};
    box-sizing: border-box;
    overflow-y: auto;

    ${props => getPositionByLocation(props.location)}
`;

const Panel = props => {
    const theme = getThemeByKeys(
        (props.theme && props.theme) || defaultTheme.panel
    );

    return <Elem {...theme} {...props} />
};

export default Panel;