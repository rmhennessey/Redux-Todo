// import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO } from './actions'

  // SET_VISIBILITY_FILTER,
  // VisibilityFilters

// const { SHOW_ALL } = VisibilityFilters

const initialState = {
  title: 'This is the Todo List',
  todos: [
    {value: 'make a list', index=0,  completed: false}
  ]
};

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
    // This newTodo should be coming over from the TodoList
      const newTodo = {
        value: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
        };
  
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
        if (todo.index === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    };
    default:
      return state;
  }
}


export default reducer;