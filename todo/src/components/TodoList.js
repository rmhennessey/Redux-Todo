import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, setVisibilityFilter } from '../actions'

class TodoList extends React.Component {
    state = {
        newTodo:''
    };


    render() {
        return (
            <>
                <div className="todo-list">
                 {/* I am trying to pull from todoList at bottom of page */}
                    {this.props.todoList.map(todo => (
                        <h4 key={todo.index}>
                            {todo.value}
                            {todo.completed}
                        </h4>  
                    ))}
                </div>
            </>
        );
    }
}


const mapStateToProps = state => ({
    todoList: state.todos
    // I think I am getting todos from the REDUCERS index BUT I CANNOT MAP
});


export default connect(
    mapStateToProps, 
    { addTodo, toggleTodo }
)(TodoList);