import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Blocker from '../styled/Blocker';
import Panel from '../styled/Panel';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: this.props.active ? this.props.active : true 
        }

        console.log(this.state);

        this.closeSidebar = this.closeSidebar.bind(this);
    }

    closeSidebar() {
        this.setState({ ...this.state, active: false });
    }

    render() {
        const { active } = this.state;

        if (active) {
            return (
                <Blocker onClick={this.closeSidebar}>
                    <Panel onClick={e => e.preventDefault()}>
                        <button onClick={this.closeSidebar}>Close</button>
                        {this.props.children}
                    </Panel>
                </Blocker>
            )
        } else {
            return (null);
        }
    }
}

Sidebar.propTypes = {
    active: PropTypes.bool
}

export default Sidebar;