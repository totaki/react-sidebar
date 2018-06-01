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

    render() {
        if (this.props.active) {
            document.body.style.overflow = 'hidden';

            return (
                <Wrapper>
                    <Blocker onClick={this.props.onClose} onTouchMove={e => e.preventDefault()}/>
                    <Panel>
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
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Sidebar;