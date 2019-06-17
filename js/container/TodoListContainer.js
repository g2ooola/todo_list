const {TodoStore, TodoAction, TodoList} = window.App

class TodoListContainer extends React.Component {
  static getStores() {
    return [ TodoStore ];
  }

  static calculateState(prevState) {
    return {
      todoItems: TodoStore.getState(),
    };
  }

  render() {
    return (
      <TodoList
        todoItems={this.state.todoItems}
        editItemFun={TodoAction.updateTodo}
        toggleItemFun={TodoAction.toggleTodo}
        deleteItemFun={TodoAction.deleteTodo}
      />
    );
  }
}

window.App.TodoListContainer = FluxUtils.Container.create(TodoListContainer);