const _toggleTodoItem = (todos, id, completed) => {
  const idx = todos.findIndex((todo)=> todo.id == id)
  if (idx === -1) return todos;

  let newTodos = [...todos]
  newTodos[idx] = {...newTodos[idx], completed}
  return newTodos
};

const _createTodoItem = (todos, title) => {
  var   completed = false

  // get max id
  const lastItemIndex = todos.length - 1
  const id = lastItemIndex >= 0 ? todos[lastItemIndex].id + 1 : 0

  const newTodos = [...todos, {id, title, completed}]
  return newTodos
}

const _editTodoItem = (todos, id, title) => {
  const idx = todos.findIndex((todo)=> todo.id == id)
  if (idx === -1) return todos;

  let newTodos = [...todos]
  newTodos[idx] = {...newTodos[idx], title}
  console.log(newTodos)
  return newTodos
}

const _removeTodoItem = (todos, id) => {
  const idx = todos.findIndex((todo)=> todo.id == id)
  if (idx === -1) return todos;

  let newTodos = [...todos]
  newTodos.splice(idx, 1);
  return newTodos
};

const {ActionType} = window.App

window.App.reducers.todos = (state = [], action) => {
  switch (action.type) {
    case ActionType.LOAD_TODOS_SUCCESS:
      return action.todos;
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