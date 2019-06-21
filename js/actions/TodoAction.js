const {
  ActionType
} = window.App;

window.App.TodoAction = {
  createTodo(title) {
    // return action directly
    return {
      type: ActionType.CREATE_TODO,
      title
    };
  },
  loadTodos() {
    // using "thunk function" if you can not get action right now
    // for example : use ajax to get atcion return
    // Redux 使用 "applyMiddleware" function 來處理 thunk
    return (dispatch) => {
      fetch('./data/todo.json')
        .then((response) => response.json())
        .then((todos) => dispatch({
          type: ActionType.LOAD_TODOS_SUCCESS,
          todos
        }));
    };
  },
  updateTodo(id, title)     {
    return {
      type: ActionType.UPDATE_TODO,
      title,
      id
    }
  },
  toggleTodo(id, completed) {
    return {
      type: ActionType.TOGGLE_TODO,
      id,
      completed
    }
  },
  deleteTodo(id)            {
    return {
      type: ActionType.DELETE_TODO,
      id
    }
  }
};