import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'styled-components';

import Blocker from '../styled/Blocker';
import Panel from '../styled/Panel';
import Wrapper from '../styled/Wrapper';

class Sidebar extends Component {
  
  render() {
    const { active, theme } = this.props;

    const bothSidePanel = (
      <React.Fragment>
        <Panel theme={theme}>{this.props.children}</Panel>
        <Blocker onClick={this.props.onClose} theme={theme} />
        <Panel theme={theme}>{this.props.children}</Panel>
      </React.Fragment>
    );

    return (
      <Wrapper className={active ? 'active' : ''} theme={theme}>
        {bothSidePanel}
      </Wrapper>
    )
  }
}

Sidebar.propTypes = {
  theme: PropTypes.object,
  active: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withTheme(Sidebar);
