const { ActionType, AppDispatcher } = window.App;

const CHANGE_EVENT = 'CHANGE';

const _emitter = new EventEmitter();

// 1. 管理 todos 資料
let _todos = [];

// // 2. 將原本放在 TodoApp 中的業務邏輯，放到 Store 中；
// //    或者你也可以開一支 utils/TodoUtils.js 另外放！
// const _createTodo = (todos, title) => { /* 略 */ };
// const _updateTodo = (todos, id, title) => { /* 略 */ };
// const _toggleTodo = (todos, id, completed) => { /* 略 */ };
// const _deleteTodo = (todos, id) => { /* 略 */ };

const _toggleTodoItem = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};

const _createTodoItem = (todos, title) => {
  var   completed = false

  // get max id
  const lastItemIndex = todos.length - 1
  const id = lastItemIndex >= 0 ? todos[lastItemIndex].id + 1 : 0

  todos.push({id, title, completed})
  return todos
}

const _editTodoItem = (todos, id, newTitle) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.title = newTitle;
  return todos;
}

const _removeTodoItem = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};

window.App.TodoStore = {
  // 6. 回傳 todos 陣列
  getAll() {
    return _todos;
  },

  // 3. 提供註冊改變事件的 API，並回傳註銷函數
  addChangeListener(callback) {
    _emitter.on(CHANGE_EVENT, callback);
    return () => _emitter.removeListener(CHANGE_EVENT, callback);
  },

  // 4. 向 AppDispatcher 註冊 callback，並根據 action.type 改變 todos
  //
  //    註：register() 會回傳 token，可以用在當 Store 有依賴關係，必須調整 dispatch 順序時。
  //    例：Dispatcher.waitFor([ token1, token2 ])
  dispatchToken: AppDispatcher.register((action) => {
    console.log(action.type)
    switch (action.type) {
      case ActionType.LOAD_TODOS_SUCCESS:
        _todos = action.todos;
        _emitter.emit(CHANGE_EVENT); // 5. 當資料改變，必須觸發事件
        break;
      case ActionType.CREATE_TODO:
        _todos = _createTodoItem(_todos, action.title);
        _emitter.emit(CHANGE_EVENT);
        break;
      case ActionType.UPDATE_TODO:
        _todos = _editTodoItem(_todos, action.id, action.title);
        _emitter.emit(CHANGE_EVENT)
        break;
      case ActionType.TOGGLE_TODO:
        _todos = _toggleTodoItem(_todos, action.id, action.completed);
        _emitter.emit(CHANGE_EVENT)
        break;
      case ActionType.DELETE_TODO:
        _todos = _removeTodoItem(_todos, action.id);
        _emitter.emit(CHANGE_EVENT)
        break;
    }
  })
};