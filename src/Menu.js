import React from 'react';

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
                <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
            </div>
        );
    }
}
