() => {
  const { TodoApp, TodoHeader, TodoList, InputField } = window.App;
  const all_attrs = {
    title: 'TodoList',
    userName: 'gsx'
  };
  ReactDOM.render(
    <div>
      <TodoApp {...all_attrs} />
    </div>,
    document.getElementById('hello')
  )
}();