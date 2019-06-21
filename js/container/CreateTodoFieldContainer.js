const {TodoAction, InputField} = window.App
const { connect } = ReactRedux;

class CreateTodoFieldContainer extends React.Component {
  render() {
    return (
      <InputField
        placeholder="new todos"
        submitFun={this.props.createTodo}
      />
    );
  }
}

window.App.CreateTodoFieldContainer = connect(
  undefined,
  {
    createTodo: TodoAction.createTodo
  }
)(CreateTodoFieldContainer);