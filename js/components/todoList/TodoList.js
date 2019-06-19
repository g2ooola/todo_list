const { TodoItem } = window.App;

class TodoList extends React.Component {
  render(){
    const {todoItems, deleteItemFun, toggleItemFun, editItemFun} = this.props;
    const all_todos = todoItems.map((todo_item) => 
      <TodoItem
        deleteItemFun={ deleteItemFun }
        toggleItemFun={ toggleItemFun }
        editItemFun = { editItemFun }
        {...todo_item.toJS()}
      />
    );

    return <div>
      <ol>
        {all_todos}
      </ol>
    </div>;
  }
}

window.App.TodoList = TodoList;