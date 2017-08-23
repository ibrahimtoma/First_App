import React from 'react';
import MenuItem from './SlideMenu';
export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };


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
                    <button type="submit" onClick={this.Menu}>Menu</button>
                    <MenuItem hash="Moved">Moved</MenuItem>
                    <MenuItem hash="Arrived">Arrived</MenuItem>
                    <MenuItem hash="Finished">Finished</MenuItem>
                    <MenuItem hash="Return">Return</MenuItem>
                </div>
                <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
            </div>
        );
    }

}
