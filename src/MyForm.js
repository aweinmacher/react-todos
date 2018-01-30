// eslint-disable-next-line
import React, { Component } from 'react';


class MyForm extends Component {
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    id="txtTodo" 
                    onChange={this.props.onTextChange}
                    // ref={(input) => this.textInput = input} 
                    value={this.props.text} />
                <button type="button" onClick={this.props.onButtonClick}>{this.props.buttonText}</button>
            </form>
        );
    }
}

export default MyForm;

