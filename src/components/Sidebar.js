import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Blocker from '../styled/Blocker';
import Panel from '../styled/Panel';
import Wrapper from '../styled/Wrapper';

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
                <Wrapper>
                    <Blocker onClick={this.closeSidebar} />
                    <Panel>
                        {this.props.children}
                    </Panel>
                </Wrapper>
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