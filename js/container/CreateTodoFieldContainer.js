const {TodoAction, InputField} = window.App
const { connect } = ReactRedux;

class CreateTodoFieldContainer extends React.Component {
  render() {
    return (
      <InputField
        placeholder="新增待辦清單"
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