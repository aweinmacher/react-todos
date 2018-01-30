import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyForm from './MyForm'
import ToDoList from './ToDoList'

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "enjoy the moment", 
            todoList: ['be happy', 'hug my friends', 'run along the sea']
        };
       this.onButtonClick = this.onButtonClick.bind(this);
       this.onTextChange = this.onTextChange.bind(this);
    }
    onButtonClick(){
        // var todo = this.myForm.textInput.value; 
        var todo = this.state.text;
        // setState is asyncronous, so we use callback
        this.setState((state, props) => {
            return { todoList: this.state.todoList.concat([todo]),
                     text : "" }
        });
    }
    onTextChange(e){
        // it's important to use var value, as otherwise it gives an error
        let value =  e.target.value;
        this.setState((state, props) => {
            return { text: value }
        });
    }
    render() {
        return (
            <div>
                {/* <h1>{this.state.text}</h1> */}
                <MyForm 
                onTextChange={this.onTextChange} 
                onButtonClick={this.onButtonClick} 
                buttonText={this.props.buttonText}
                text={this.state.text}
                //ref={(form)=>this.myForm = form}
                />
                <ToDoList todoList={this.state.todoList} />
            </div>
        )
    }
}

Todos.propTypes = {
    buttonText: PropTypes.string.isRequired
};

export default Todos;