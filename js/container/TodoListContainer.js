const {TodoAction, TodoList} = window.App
const {connect} = ReactRedux

class TodoListContainer extends React.Component {
  render() {
    const {
      todoItems,
      updateTodo,
      toggleTodo,
      deleteTodo
    } = this.props
    return (
      <TodoList
        todoItems={todoItems}
        editItemFun={updateTodo}
        toggleItemFun={toggleTodo}
        deleteItemFun={deleteTodo}
      />
    );
  }
}

window.App.TodoListContainer = connect(
  (state) => ({todoItems: state.todos}),
  {
    updateTodo: TodoAction.updateTodo,
    toggleTodo: TodoAction.toggleTodo,
    deleteTodo: TodoAction.deleteTodo
  }
)(TodoListContainer);