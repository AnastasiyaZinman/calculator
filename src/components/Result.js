import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class Result extends Component {
    render() {
        return (
            <div className="screen">
            {this.props.store.value}
            </div>
        );
    }
}
export default Result;

