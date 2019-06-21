const {TodoHeader} = window.App
const {connect} = ReactRedux;

class TodoHeaderContainer extends React.Component {
  render() {
    return (
      <TodoHeader
        title="This is my todo list."
        userName="GSX"
        todoNum={this.props.todoItems.filter((todo) => !todo.get('completed')).size}
      />
    );
  }
}

window.App.TodoHeaderContainer = connect(
  (state) => ({todoItems: state.todos}),
  undefined
)(TodoHeaderContainer);