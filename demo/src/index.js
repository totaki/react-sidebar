import React, { Component } from 'react';
import { render } from 'react-dom';

import Sidebar from '../../src';

const sidebarTheme = {
  Sidebar: {
    panel: {
      width: "500px",
      backgroundColor: '#FFFFFF',
      location: 'right',
    },
  },
}

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = { sidebarActive: false };

    this.handleShowSidebar = this.handleShowSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  handleShowSidebar() {
    this.setState({ sidebarActive: true });
  }

  handleCloseSidebar() {
    this.setState({ sidebarActive: false });
  }

  render() {
    return (
      <div>
        <h1>react-sidebar Demo</h1>
        <button onClick={this.handleShowSidebar}>Show sidebar</button>
        <Sidebar
          active={this.state.sidebarActive}
          onClose={this.handleCloseSidebar}
          theme={sidebarTheme}
        >
          Sidebar content
          <p>Tempor sint adipisicing aliquip fugiat quis eu qui cillum nisi cillum. Ad ad amet aliquip mollit ut eu occaecat deserunt ullamco officia duis amet. Cupidatat reprehenderit voluptate mollit sit sunt sint id proident sunt ullamco cillum nostrud id proident. Est elit do commodo dolore sit. Et Lorem tempor ex eu sunt mollit magna aliqua consequat pariatur ullamco Lorem ullamco. Incididunt in excepteur est in aute qui commodo exercitation esse.</p>
          <p>Tempor sint adipisicing aliquip fugiat quis eu qui cillum nisi cillum. Ad ad amet aliquip mollit ut eu occaecat deserunt ullamco officia duis amet. Cupidatat reprehenderit voluptate mollit sit sunt sint id proident sunt ullamco cillum nostrud id proident. Est elit do commodo dolore sit. Et Lorem tempor ex eu sunt mollit magna aliqua consequat pariatur ullamco Lorem ullamco. Incididunt in excepteur est in aute qui commodo exercitation esse.</p>
          <p>Tempor sint adipisicing aliquip fugiat quis eu qui cillum nisi cillum. Ad ad amet aliquip mollit ut eu occaecat deserunt ullamco officia duis amet. Cupidatat reprehenderit voluptate mollit sit sunt sint id proident sunt ullamco cillum nostrud id proident. Est elit do commodo dolore sit. Et Lorem tempor ex eu sunt mollit magna aliqua consequat pariatur ullamco Lorem ullamco. Incididunt in excepteur est in aute qui commodo exercitation esse.</p>
          <p>Tempor sint adipisicing aliquip fugiat quis eu qui cillum nisi cillum. Ad ad amet aliquip mollit ut eu occaecat deserunt ullamco officia duis amet. Cupidatat reprehenderit voluptate mollit sit sunt sint id proident sunt ullamco cillum nostrud id proident. Est elit do commodo dolore sit. Et Lorem tempor ex eu sunt mollit magna aliqua consequat pariatur ullamco Lorem ullamco. Incididunt in excepteur est in aute qui commodo exercitation esse.</p>
          <p>Tempor sint adipisicing aliquip fugiat quis eu qui cillum nisi cillum. Ad ad amet aliquip mollit ut eu occaecat deserunt ullamco officia duis amet. Cupidatat reprehenderit voluptate mollit sit sunt sint id proident sunt ullamco cillum nostrud id proident. Est elit do commodo dolore sit. Et Lorem tempor ex eu sunt mollit magna aliqua consequat pariatur ullamco Lorem ullamco. Incididunt in excepteur est in aute qui commodo exercitation esse.</p>
          <p>Tempor sint adipisicing aliquip fugiat quis eu qui cillum nisi cillum. Ad ad amet aliquip mollit ut eu occaecat deserunt ullamco officia duis amet. Cupidatat reprehenderit voluptate mollit sit sunt sint id proident sunt ullamco cillum nostrud id proident. Est elit do commodo dolore sit. Et Lorem tempor ex eu sunt mollit magna aliqua consequat pariatur ullamco Lorem ullamco. Incididunt in excepteur est in aute qui commodo exercitation esse.</p>
          <p>Tempor sint adipisicing aliquip fugiat quis eu qui cillum nisi cillum. Ad ad amet aliquip mollit ut eu occaecat deserunt ullamco officia duis amet. Cupidatat reprehenderit voluptate mollit sit sunt sint id proident sunt ullamco cillum nostrud id proident. Est elit do commodo dolore sit. Et Lorem tempor ex eu sunt mollit magna aliqua consequat pariatur ullamco Lorem ullamco. Incididunt in excepteur est in aute qui commodo exercitation esse.</p>
        </Sidebar>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
        <p>Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.</p>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
