import React, { Component } from 'react';
import { render } from 'react-dom';

import Example from '../../src';

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
                <h1>react-form Demo</h1>
                <button onClick={this.handleShowSidebar}>Show sidebar</button>
                <Example active={this.state.sidebarActive} onClose={this.handleCloseSidebar}>
                    Sidebar content
                    Tempor sint adipisicing aliquip fugiat quis eu qui cillum nisi cillum. Ad ad amet aliquip mollit ut eu occaecat deserunt ullamco officia duis amet. Cupidatat reprehenderit voluptate mollit sit sunt sint id proident sunt ullamco cillum nostrud id proident. Est elit do commodo dolore sit. Et Lorem tempor ex eu sunt mollit magna aliqua consequat pariatur ullamco Lorem ullamco. Incididunt in excepteur est in aute qui commodo exercitation esse.

Laboris tempor commodo est cillum do deserunt qui cupidatat commodo mollit. Cillum nostrud laborum dolor ea voluptate dolor ullamco aliquip ea nulla. Eiusmod enim mollit aute velit magna in mollit adipisicing quis incididunt culpa dolor. Fugiat ipsum esse do velit ut fugiat veniam enim amet anim. Duis aliqua deserunt consectetur dolore amet do sint sit dolor ut sunt adipisicing. Veniam dolor ea magna adipisicing eu excepteur voluptate deserunt exercitation.

Elit culpa excepteur qui aliqua. Esse exercitation excepteur duis eiusmod ullamco. Commodo labore commodo cupidatat duis non minim duis aute nisi sunt sit est. Officia id sit duis ad do sint Lorem et non magna officia dolore.

Sit enim excepteur ipsum ipsum et consectetur sint commodo ut culpa. Adipisicing aute culpa veniam ut incididunt laboris id esse. Adipisicing anim voluptate voluptate officia do nostrud sint tempor magna. Cillum irure ipsum et duis duis ex mollit adipisicing excepteur aute. Aliquip ullamco duis exercitation occaecat exercitation mollit laborum esse. Ullamco pariatur consectetur do duis cupidatat deserunt aliqua.

Laboris sunt est proident excepteur esse qui aliquip magna consectetur non dolore commodo culpa. Nisi in deserunt commodo nisi tempor in ullamco minim quis ullamco sint culpa pariatur dolore. Ullamco qui ea veniam sunt magna fugiat dolor qui mollit laboris. Laboris ut mollit ullamco enim pariatur amet deserunt eu veniam irure reprehenderit eiusmod eiusmod ad. Eiusmod incididunt deserunt anim commodo incididunt. Ea quis culpa occaecat reprehenderit nulla dolore sit amet exercitation in mollit amet. Anim cillum aute occaecat cupidatat labore ullamco nisi.

Veniam voluptate elit cillum pariatur irure fugiat reprehenderit id quis officia commodo commodo ad. Occaecat culpa aliquip ullamco veniam Lorem. Laboris velit duis sint magna duis Lorem eiusmod excepteur aute deserunt nostrud commodo nisi.

Do adipisicing occaecat aliquip velit eiusmod aute commodo duis adipisicing. Occaecat sint nisi laborum ipsum ullamco duis tempor ex eiusmod dolor. Sit nisi et amet velit eu quis eu nisi velit. Cillum id consectetur veniam est est enim laborum commodo fugiat esse minim deserunt. Commodo eu velit aute magna enim id enim dolore dolore aliquip Lorem. Nostrud dolore Lorem ex qui Lorem aliquip.

Ullamco et sint sint voluptate sunt Lorem dolor ad ea sint deserunt nostrud officia. Eiusmod eu velit consequat nisi aute Lorem ipsum labore aliquip labore sunt reprehenderit mollit laborum. Ad in et ipsum amet ullamco eiusmod eu officia exercitation duis duis deserunt.

Et sint ad cillum culpa ut aliquip sint excepteur excepteur cillum. Sunt in in veniam excepteur est nisi id enim. Dolore duis reprehenderit qui eiusmod ex cupidatat reprehenderit veniam excepteur cupidatat tempor.
                </Example>
                <p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
<p>
                Laboris et voluptate cupidatat exercitation Lorem in aliquip duis aute ut ex nisi. Commodo nostrud aute velit adipisicing. Ipsum incididunt ea aliqua sunt id labore dolor laborum consectetur. Minim cillum culpa dolore ullamco nisi ex deserunt excepteur excepteur eu. Fugiat nisi dolor aliquip nulla et aute ad et commodo ut elit. Aliquip veniam nostrud est commodo officia magna sint magna proident. Duis esse aliqua esse excepteur consequat.
</p>
            </div>
        );
    }
}

render(<Demo />, document.querySelector('#demo'));