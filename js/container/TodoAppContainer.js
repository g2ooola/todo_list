const {TodoHeaderContainer, CreateTodoFieldContainer, TodoListContainer , TodoAction} = window.App

class TodoAppContainer extends React.Component {
  componentDidMount() {
    TodoAction.loadTodos();
  }

  render() {
    return (
      <div>
        <TodoHeaderContainer />
        <CreateTodoFieldContainer />
        <TodoListContainer />
      </div>
    );
  }
}

window.App.TodoAppContainer = TodoAppContainer;