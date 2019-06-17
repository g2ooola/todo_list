const {
  TodoHeader,
  InputField,
  TodoList,
  TodoAction,
  TodoStore
} = window.App;

class TodoApp extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      todoItems: TodoStore.getAll()
    };
  }

  render() {
    const { title, userName } = this.props
    const { todoItems } = this.state;

    const allTodoItemNum = todoItems.length
    const completeItemNum = todoItems.filter((item)=> {return item.completed}).length
    const todoNum = allTodoItemNum - completeItemNum

    return <div>
      <TodoHeader title={title} todoNum={todoNum} userName={userName} />
      <InputField submitFun={TodoAction.createTodo}/>
      <TodoList
        todoItems={todoItems}
        deleteItemFun={TodoAction.deleteTodo}
        toggleItemFun={TodoAction.toggleTodo}
        editItemFun={TodoAction.updateTodo}
      />
    </div>;
  }
  
}

TodoApp.propTypes = {
  todoItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

TodoApp.defaultProps = {
  todoItems: []
};

window.App.TodoApp = TodoApp;

