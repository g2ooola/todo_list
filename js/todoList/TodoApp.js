const { TodoHeader, InputField, TodoList } = window.App;

class TodoApp extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      todoItems: []
    };
    this.updateTodoList = this.updateTodoList.bind(this)
  }

  componentDidMount() {
    fetch('./data/todo.json')
      .then((response) => response.json())
      .then((todoItems) => this.setState({ todoItems }));
  }

  updateTodoList(updateFun) {
    return (...args) => {
      const todoItems = updateFun(this.state.todoItems, ...args)
      this.setState({todoItems})
    }
  }

  render() {
    const { title, userName } = this.props
    const { todoItems } = this.state;

    const allTodoItemNum = todoItems.length
    const completeItemNum = todoItems.filter((item)=> {return item.completed}).length
    const todoNum = allTodoItemNum - completeItemNum

    return <div>
      <TodoHeader title={title} todoNum={todoNum} userName={userName} />
      <InputField submitFun={this.updateTodoList(_createTodoItem)}/>
      <TodoList
        todoItems={todoItems}
        deleteItemFun={this.updateTodoList(_removeTodoItem)}
        toggleItemFun={this.updateTodoList(_toggleTodoItem)}
        editItemFun={this.updateTodoList(_editTodoItem)}
      />
    </div>;
  }
  
}

const _toggleTodoItem = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};

const _createTodoItem = (todos, title) => {
  var   completed = false

  // get max id
  const lastItemIndex = todos.length - 1
  const id = lastItemIndex >= 0 ? todos[lastItemIndex].id + 1 : 0

  todos.push({id, title, completed})
  return todos
}

const _editTodoItem = (todos, id, newTitle) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.title = newTitle;
  return todos;
}

const _removeTodoItem = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};

TodoApp.propTypes = {
  todoItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

TodoApp.defaultProps = {
  todoItems: []
};

window.App.TodoApp = TodoApp;

