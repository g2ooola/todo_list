const {TodoAction, InputField} = window.App

class CreateTodoFieldContainer extends React.Component {
  render() {
    return (
      <InputField
        placeholder="新增待辦清單"
        submitFun={TodoAction.createTodo}
      />
    );
  }
}

window.App.CreateTodoFieldContainer = CreateTodoFieldContainer;