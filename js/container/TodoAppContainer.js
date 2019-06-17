class TodoAppContainer extends React.Component {
  componentDidMount() {
    TodoActions.loadTodos();
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