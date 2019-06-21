const {TodoHeader} = window.App
const {connect} = ReactRedux;

class TodoHeaderContainer extends React.Component {
  render() {
    return (
      <TodoHeader
        title="My Todo List"
        userName="GSX"
        todoNum={this.props.todoItems.filter((todo) => !todo.completed).length}
      />
    );
  }
}

window.App.TodoHeaderContainer = connect(
  (state) => ({todoItems: state.todos}),
  undefined
)(TodoHeaderContainer);