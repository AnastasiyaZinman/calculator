import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class Button extends Component {
    render() {
        return (
            <button className={this.props.class} value={this.props.symbol}
                onClick={() => this.props.store.buttonClick(this.props.symbol)}>
                {this.props.symbol}
            </button>
        )
    }
}
export default Button;
