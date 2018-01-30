import React, { Component } from 'react';
import TodoItem from './TodoItem'

class ToDoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todoList.map((item,index)=><TodoItem key={index} text={item}/>)}
            </ul>
        )
    }
}

export default ToDoList;