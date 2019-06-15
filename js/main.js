() => {
  const { TodoApp, TodoHeader, TodoList, InputField } = window.App;
  const all_attrs = {
    title: 'TodoList',
    userName: 'gsx',
    todoItems: [
      {id: "1", title: 'yaya-1', completed: true},
      {id: "2", title: 'yoyo-2', completed: false},
      {id: "3", title: 'yoya-3', completed: false},
      {id: "4", title: 'yayo-4', completed: true},
      {id: "5", title: 'yayo-5', completed: true},
      {id: "6", title: 'yayo-6', completed: true},
      {id: "7", title: 'yayo-7', completed: true},
      {id: "8", title: 'yayo-8', completed: false},
      {id: "9", title: 'yayo-9', completed: true},
    ]
  };
  ReactDOM.render(
    <div>
      <TodoApp {...all_attrs} />
    </div>,
    document.getElementById('hello')
  )
}();