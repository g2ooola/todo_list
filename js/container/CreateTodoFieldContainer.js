const {TodoAction} = window.App

class CreateTodoFieldContainer extends Component {
  render() {
    return (
      <InputField
        placeholder="新增待辦清單"
        onSubmitEditing={TodoAction.createTodo} // 1. 調用 TodoActions
      />
    );
  }
}

window.App.CreateTodoFieldContainer = CreateTodoFieldContainer;