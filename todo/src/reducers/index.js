import { ADD_TODO, TOGGLE_TODO } from '../actions'


const initialState = {
  title: 'This is the Todo List',
  todos: [
    {value: 'make a list', completed: false }
  ]
};

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
        todos: state.todos.map((todo, index) => {
        if (index === action.payload) {
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



  // SET_VISIBILITY_FILTER,
  // VisibilityFilters

// const { SHOW_ALL } = VisibilityFilters


// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }
