const { List, Record } = Immutable;

const TodoRecord = Record({
  id: undefined,
  title: undefined,
  completed: false
});

const _findIdxById = (todos, id) => {
  return todos.findIndex((todo) => todo.id === id)
}

const _getNewId = (todos) => {
  const lastItemIndex = todos.length - 1
  const newId = lastItemIndex >= 0 ? todos[lastItemIndex].id + 1 : 0
  return newId
}

const _initTodoItem = (todos) => {
  let list = new List()
  todos.forEach((todo) => {
    const newRecord = new TodoRecord({
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    })
    list = list.push(newRecord)
  })
  return list
}

const _toggleTodoItem = (todos, id, completed) => {
  return todos.setIn([_findIdxById(todos, id), 'completed'], completed)
};

const _createTodoItem = (todos, title) => {
  return todos.push(new TodoRecord({
    id: _getNewId(todos),
    title,
    completed: false
  }))
}

const _editTodoItem = (todos, id, title) => {
  return todos.setIn([_findIdxById(todos, id), 'title'], title)
}

const _removeTodoItem = (todos, id) => {
  return todos.delete(_findIdxById(todos, id))
};

const {ActionType} = window.App

window.App.reducers.todos = (state = new List(), action) => {
  switch (action.type) {
    case ActionType.LOAD_TODOS_SUCCESS:
      return _initTodoItem(action.todos);
    case ActionType.CREATE_TODO:
      return _createTodoItem(state, action.title);
    case ActionType.UPDATE_TODO:
      return _editTodoItem(state, action.id, action.title);
    case ActionType.TOGGLE_TODO:
      return _toggleTodoItem(state, action.id, action.completed);
    case ActionType.DELETE_TODO:
      return _removeTodoItem(state, action.id);
    default:
      return state;
  }
};