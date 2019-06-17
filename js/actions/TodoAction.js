const {
  ActionType,
  AppDispatcher
} = window.App;

window.App.TodoAction = {
  createTodo(title) {
    // 1. 一個 Action Creator 函數做兩件事
    AppDispatcher.dispatch({         // a. 定義 action 物件，也就是 { type: ..., title: ... }
      type: ActionType.CREATE_TODO, // b. 將 action 物件傳遞給 Dispatcher，這裡用 .dispatch() 將 action 丟給 Dispacther
      title
    });
  },
  loadTodos() {
    // 2. 在非同步的狀態中，可以等待有 response 時，在丟 action 物件
    //
    //    註：同一個函數中，可以丟好幾個 action 物件，
    //    例如請求前丟一個，因為我們要將資料狀態改為 loading；
    //    請求成功或失敗，各丟不同的 action！
    console.log("--loadTodos")
    fetch('./data/todo.json')
      .then((response) => {console.log('ya'); return response.json()})
      .then((todos) => {console.log(todos); return AppDispatcher.dispatch({
        type: ActionType.LOAD_TODOS_SUCCESS,
        todos
      })});
  },
  updateTodo(id, title) {
    const action = {
      type: ActionType.UPDATE_TODO,
      title: title,
      id: id
    }
    AppDispatcher.dispatch(action);
  },
  toggleTodo(id, completed) {
    console.log("action toggle")
    const action = {
      type: ActionType.TOGGLE_TODO,
      id: id,
      completed: completed
    }
    AppDispatcher.dispatch(action);
  },
  deleteTodo(id) {
    const action = {
      type: ActionType.DELETE_TODO,
      id: id
    }
    AppDispatcher.dispatch(action);
  }
};