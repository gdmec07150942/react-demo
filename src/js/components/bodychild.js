import React from 'react';

export default class BodyChild extends React.Component {
    render() {
        return (
            <div>
                <p>请您输入您的年龄</p>
                <input type="text" onChange={this.props.handleChildValueChange}/>
            </div>
        );
    }
}