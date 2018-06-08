import React from 'react';
import styled from 'styled-components';

import { getThemeByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

function getPositionByLocation({ location, width }) {
    switch(location) {
        case 'left':
            return `
                top: 0;
                bottom: 0;
                left: -${width};

                .active & {
                    left: 0;
                }
            `;
        default:
            return `
                top: 0;
                bottom: 0;
                right: -${width};

                .active & {
                    right: 0;
                }
            `;        
    }
}

const Elem = styled.div`
    position: absolute;
    width: ${props => props.width};
    background-color: ${props => props.backgroundColor};
    box-sizing: border-box;
    overflow-y: auto;
    transition: 0.5s all;

    ${props => getPositionByLocation(props)}
`;

const Panel = props => {
    const theme = getThemeByKeys(
        (props.theme && props.theme.panel) || defaultTheme.panel
    );

    return <Elem {...theme} {...props} />
};

export default Panel;