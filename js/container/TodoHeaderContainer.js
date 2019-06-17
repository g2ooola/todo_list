const {TodoStore, TodoHeader} = window.App

class TodoHeaderContainer extends React.Component {
  static getStores() {
    return [ TodoStore ]; // all stores needs to listen
  }

  static calculateState(prevState) {
    return {
      todoItems: TodoStore.getState(), // 2. sync data from store
    };
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

// 3. create truogh FluxUtils.Container.create
window.App.TodoHeaderContainer = FluxUtils.Container.create(TodoHeaderContainer);