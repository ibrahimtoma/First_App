import React from 'react';
import MenuItem from './SlideMenu';
export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    };

    show() {
        this.setState({visible: true});
        document.addEventListener("click", this.hide.bind(this));
    }

    hide() {
        this.setState({visible: false});
        document.removeEventListener("click", this.hide.bind(this));
    }

    render() {
        return (
            <div className="menu">
                <div>
                    <Menu ref="right" alignment="right">
                        <MenuItem hash="first-page">First Page</MenuItem>
                        <MenuItem hash="second-page">Second Page</MenuItem>
                        <MenuItem hash="third-page">Third Page</MenuItem>
                    </Menu>
                </div>
                <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
            </div>
        );
    }
}
