const {
  TodoHeaderContainer,
  CreateTodoFieldContainer,
  TodoListContainer ,
  TodoAction
} = window.App
const { connect } = ReactRedux;

class TodoAppContainer extends React.Component {
  componentDidMount() {
    this.props.loadTodos();
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

window.App.TodoAppContainer = connect(
  undefined,
  {loadTodos: TodoAction.loadTodos}
)(TodoAppContainer);