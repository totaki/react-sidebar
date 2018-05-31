import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Blocker from '../styled/Blocker';
import Panel from '../styled/Panel';
import CloseButton from '../styled/CloseButton';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: this.props.active 
        };

        this.closeSidebar = this.closeSidebar.bind(this);
    }

    closeSidebar(e) {
        this.setState({ ...this.state, active: false });
    }

    render() {
        const { active } = this.state;

        if (active) {
            return (
                <Blocker onClick={this.closeSidebar}>
                    <Panel onClick={e => e.stopPropagation()}>
                        <CloseButton onClick={this.closeSidebar}>Close</CloseButton>
                        {this.props.children}
                    </Panel>
                </Blocker>
            );
        } else {
            return (null);
        }
    }
}

Sidebar.propTypes = {
    active: PropTypes.bool
};

Sidebar.defaultProps = {
    active: false
};

export default Sidebar;