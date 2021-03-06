//Action Types

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
//   }
  
  /*
   * action creators
   */

export const addTodo = value => {
    return { 
        type: ADD_TODO, 
        payload: value 
    }
  };
  
  export const toggleTodo = index => {
    return { 
        type: TOGGLE_TODO, 
        payload: index 
    }
  };
  
  // export const setVisibilityFilter = filter => {
  //   return { 
  //       type: SET_VISIBILITY_FILTER, 
  //       payload: filter 
  //   }
  // };