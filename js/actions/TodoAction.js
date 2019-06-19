const {
  ActionType
} = window.App;

window.App.TodoAction = {
  createTodo(title) {
    // 2. 與 Flux 的 Action Creator 不同的是直接回傳 action 物件，不會將它遞給 Dispatcher
    return {
      type: ActionType.CREATE_TODO,
      title
    };
  },
  loadTodos() {
    // 3. 當我們遇到非同步的行為時，因為無法立即回傳 action 物件，我們可以回傳其他形式的 action，
    //    如這裡是回傳 thunk 函數，thunk 是將表達式封裝起來為了延遲調用的函數；
    //    Redux 提供一種方法叫 applyMiddleware，讓你的 Store 接收到這類型的 action 可以做額外的處理，
    //    如這裡是當 Store 接到 thunk 時才調用，並把 dispatch 函數遞進去。
    //    PS. 我們將會在下一章介紹如何使用 middleware 處理這類型的 action。
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