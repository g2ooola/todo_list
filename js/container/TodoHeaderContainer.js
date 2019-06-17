const {TodoStore, TodoHeader} = window.App

class TodoHeaderContainer extends React.Component {
  constructor(props, context) { 
    super(props, context)
    this.state = {
      todoItems: TodoStore.getAll()
    };
  }

  componentDidMount() {
    this._removeChangeListener = TodoStore.addChangeListener(
      () => this.setState({ todoItems: TodoStore.getAll() })
    );
  }

  componentWillUnmount() {
    this._removeChangeListener();
  }

  render() {
    return (
      <TodoHeader
        title="我的待辦清單"
        userName="Jason"
        todoNum={this.state.todoItems.filter((todo) => !todo.completed).length}
      />
    );
  }
}

window.App.TodoHeaderContainer = TodoHeaderContainer;