const {TodoStore, TodoHeader} = window.App

class TodoListContainer extends React.Component {
  constructor(props, context) {
    this.state = {
      todoItems: TodoStore.getAll()
    };
  }

  componentDidMount() {
    this._removeChangeListener = TodoStore.addChangeListener(
      () => this.setState({ todoItems: TodoStore.getAll() })
    );
  }

  componentWillUnmount() {
    this._removeChangeListener();
  }

  render() {
    return (
      <TodoList
        todoItems={this.state.todoItems}
        onUpdateTodo={TodoAction.updateTodo}
        onToggleTodo={TodoAction.toggleTodo}
        onDeleteTodo={TodoAction.deleteTodo}
      />
    );
  }
}

window.App.TodoListContainer = TodoListContainer;