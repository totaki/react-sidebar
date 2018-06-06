import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Blocker from '../styled/Blocker';
import Panel from '../styled/Panel';
import Wrapper from '../styled/Wrapper';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.bodyOverflowOriginal = document.body.style.overflow;
    }

    componentWillUnmount() {
        document.body.style.overflow = this.bodyOverflowOriginal;
    }

    render() {
        const { active, theme } = this.props;

        if (active) {
            document.body.style.overflow = 'hidden';

            return (
                <Wrapper theme={theme}>
                    <Blocker onClick={this.props.onClose} theme={theme}/>
                    <Panel theme={theme}>
                        {this.props.children}
                    </Panel>
                </Wrapper>
            );
        } else {
            document.body.style.overflow = this.bodyOverflowOriginal;
            return (null);
        }
    }
}

Sidebar.propTypes = {
    theme: PropTypes.object,
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Sidebar;