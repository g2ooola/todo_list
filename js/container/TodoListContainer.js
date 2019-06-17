const {TodoStore, TodoAction, TodoList} = window.App

class TodoListContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
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
        editItemFun={TodoAction.updateTodo}
        toggleItemFun={TodoAction.toggleTodo}
        deleteItemFun={TodoAction.deleteTodo}
      />
    );
  }
}

window.App.TodoListContainer = TodoListContainer;