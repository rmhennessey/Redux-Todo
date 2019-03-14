import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, setVisibilityFilter } from '../actions'

class TodoList extends React.Component {
    state = {
        newTodo:''
    };


  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  toggleTodo = index => {
    this.props.toggleTodo(index);
  };


    render() {
        return (
            <>
                <div className="todo-list">
                    <h3>This is not working</h3>
                 {/* I am trying to pull from todoList at bottom of page */}
                    {this.props.todoList.map((todo, index) => (
                        <h4 key={index} onClick={()=> this.toggleTodo(index)} >
                            {todo.value}
                            {todo.completed}
                        </h4>  
                    ))}
                    <input
                        type="text"
                        name="newTodo"
                        value={this.state.newTodo}
                        onChange={this.handleChanges}
                        placeholder="Add new task"
                        />
                    <button onClick={this.addTodo}>Add Task</button>
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