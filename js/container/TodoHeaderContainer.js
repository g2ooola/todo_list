const {TodoHeader} = window.App
const {connect} = ReactRedux;

class TodoHeaderContainer extends React.Component {
  render() {
    return (
      <TodoHeader
        title="我的待辦清單"
        userName="Jason"
        todoNum={this.props.todoItems.filter((todo) => !todo.completed).length}
      />
    );
  }
}

window.App.TodoHeaderContainer = connect(
  (state) => ({todoItems: state.todos}),
  undefined
)(TodoHeaderContainer);